import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../../context/authContext/useAuth.js";

export default function Register() {
  const {signUp} = useAuth()

  const initAddress = {
    city: "",
    postalcode: 0,
    street: "",
    houseNr: "",
    state: "Germany",
    statecode: "DE",
    type: 'strasse'
  };

  const typeOfStreet = [
    "strasse",
    "straße",
    "str",
    "damm",
    "alle",
    "chaussee",
    "gasse",
    "landstrasse",
    "landstraße",
    "pfad",
    "platz",
    "ring",
    "steig",
    "ufer",
    "weg",
    "zeile",
  ];
  // show and hide wall-box owner state
  const [registerToggle, setRegisterToggle] = useState(false);

  

  // register information state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isOwner: false,
    availability: "whole_week",
    telNumber: 0,
    typeOfCharger: "type01",
    address: initAddress,
  });

  //check if password and confirm password match state
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  // error message state
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  function submit(e) {
    e.preventDefault();
    const isIncluded = typeOfStreet.filter((item) => registerForm.address.street.toLowerCase().includes(item));
    if(input.password !== input.confirmPassword) return alert("password and confirm password don't match")
    else if(isIncluded.length > 0){
      alert(`please enter ${isIncluded} in the next field`)
    }else {
      signUp(registerForm);
      alert("you are registered")
    }

  }

  // form changes function
  function registerFormHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }


  // show and hide password and confirm password state
  const [passToggle, setPassToggle] = useState({
    showPassword: "",
    showConfirmPassword: ""
  });
  
  // show and hide password function
  function show_hidePassword(e) {
    if(e === "password"){
    setPassToggle({
      ...passToggle,
      showPassword: e === passToggle.showPassword ? "" : e,
    })} else if(e === "confirmPassword"){
      setPassToggle({
        ...passToggle,
        showConfirmPassword: e === passToggle.showConfirmPassword? "" : e,
      })
    }
  }

  // address changes function
  function addressHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevState) => {
      return {
        ...prevState,
        address: { ...prevState.address, [element]: value },
      };
    });
  }

  // password change function 
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    inputValidator(e);
  };

  // checking if password and confirm password match function
  const inputValidator = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password don't match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password don't match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={submit}>
        <div onChange={(e) => registerFormHandler(e)}>
          <FormGroup onChange={() => setRegisterToggle(!registerToggle)}>
            <Input required name="isOwner" type="select">
              <option
                value={false} /* onClick={() => setRegisterToggle(false)} */
              >
                Car Owner
              </option>
              <option
                value={true} /* onClick={() => setRegisterToggle(true)} */
              >
                Wall-Box Owner
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              required
              name="username"
              placeholder="UserName"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input required name="fname" placeholder="First Name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input required name="lname" placeholder="Last Name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input required name="email" placeholder="Email" type="email" />
          </FormGroup>
          <FormGroup style={{ position: "relative" }} >
            <Input
              required
              name="password"
              placeholder="password"
              type={
                passToggle.showPassword === "password" ? "text" : "password"
              }
              minLength={6}
              autoComplete=""
              value={input.username}
              onChange={inputChange}
              onBlur={inputValidator}
            />
            {passToggle.showPassword === "password" ? (
              <AiOutlineEyeInvisible
                onClick={() => show_hidePassword("password")}
                style={{ position: "absolute", right: "3%", top: "25%" }}
              />
            ) : (
              <AiOutlineEye
                onClick={() => show_hidePassword("password")}
                style={{ position: "absolute", right: "3%", top: "25%" }}
              />
            )}
            {error.password && <p>{error.password}</p>}
          </FormGroup>
          <FormGroup style={{ position: "relative" }}>
            <Input
              required
              name="confirmPassword"
              placeholder="confirmPassword"
              type={
                passToggle.showConfirmPassword === "confirmPassword"
                  ? "text"
                  : "password"
              }
              minLength={6}
              autoComplete=""
              value={input.username}
              onChange={inputChange}
              onBlur={inputValidator}
            />
            {passToggle.showConfirmPassword === "confirmPassword" ? (
              <AiOutlineEyeInvisible
                onClick={() => show_hidePassword("confirmPassword")}
                style={{ position: "absolute", right: "3%", top: "25%" }}
              />
            ) : (
              <AiOutlineEye
                onClick={() => show_hidePassword("confirmPassword")}
                style={{ position: "absolute", right: "3%", top: "25%" }}
              />
            )}
            {error.confirmPassword && <p>{error.confirmPassword}</p>}
          </FormGroup>
          <FormGroup>
            <Input type="tel" name="telNumber" placeholder="Phone Number" />
          </FormGroup>
        </div>

        {registerToggle && (
          <>
            <div
              onChange={(e) => registerFormHandler(e)}
            >
              {" "}
              {/* THE STYLE IS TEMP OR I GO CRAZY :D */}
              <FormGroup>
              <Label>type of charger</Label>
                <Input required name="typeOfCharger" type="select">
                  <option value="type01">type01</option>
                  <option value="type02">type02</option>
                  <option value="type03">type03</option>
                </Input>
              </FormGroup>
              <FormGroup>
              <Label>availability</Label>
                <Input required name="availability" type="select">
                  <option value="whole_week">Whole Week</option>
                  <option value="not_weekend">Not on the Weekend</option>
                  <option value="night_avaiable">Night Availability</option>
                </Input>
              </FormGroup>
            </div>

            <div
              onChange={(e) => addressHandler(e)}
            >
              {" "}
              {/* THE STYLE IS TEMP OR I GO CRAZY :D */}
              <FormGroup>
                <Label>Address</Label>
                <Input
                  required
                  name="street"
                  placeholder="street"
                  type="text"
                />
                <Input required name="type" type="select">
                <option value="strasse">strasse</option>
                <option value="damm">damm</option>
                <option value="alle">alle</option>
                <option value="chaussee">chaussee</option>
                <option value="gasse">gasse</option>
                <option value="landstrasse">landstrasse</option>
                <option value="pfad">pfad</option>
                <option value="platz">platz</option>
                <option value="ring">ring</option>
                <option value="steig">steig</option>
                <option value="ufer">ufer</option>
                <option value="weg">weg</option>
                <option value="zeile">zeile</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input
                  required
                  name="houseNr"
                  placeholder="houseNr"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input required name="city" placeholder="city" type="text" />
              </FormGroup>
              <FormGroup>
                <Input
                  required
                  name="postalcode"
                  placeholder="postal Code"
                  type="number"
                />
              </FormGroup>
            </div>
          </>
        )}
        <Button type="submit">sign up</Button>
      </Form>
      <div>
        <p>you have an account?</p>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
}
