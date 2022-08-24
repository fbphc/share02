import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GermanyDataSet } from "../../../dataset/GermanyDataSet.js";

export default function Register() {
  const [registerToggle, setRegisterToggle] = useState(false);
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
    address: {
      city: "",
      postalcode: 0,
      street: "",
      houseNr: "",
      state: "Germany",
      statecode: "DE",
      province: "",
    },
  });
  function submit(e) {
    e.preventDefault();
    console.log("regForm", registerForm);
  }
  function changeHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }

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
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={submit}>
        <div onChange={(e) => changeHandler(e)}>
          <FormGroup>
            <Input name="isOwner" type="select">
              <option value={false} onClick={() => setRegisterToggle(false)}>
                Car Owner
              </option>
              <option value={true} onClick={() => setRegisterToggle(true)}>
                Wall-Box Owner
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input name="username" placeholder="UserName" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="fname" placeholder="First Name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="lname" placeholder="Last Name" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="email" placeholder="Email" type="email" />
          </FormGroup>
          <FormGroup>
            <Input name="password" placeholder="password" type="password" />
          </FormGroup>
          <FormGroup>
            <Input
              name="confirmPassword"
              placeholder="confirmPassword"
              type="password"
            />
          </FormGroup>
        </div>

        {registerToggle && (
          <>
            <div
              style={{ border: "3px solid red" }}
              onChange={(e) => changeHandler(e)}
            >
              {" "}
              {/* THE STYLE IS TEMP OR I GO CRAZY :D */}
              <FormGroup>
                <Input name="typeOfCharger" type="select">
                  <option value="type01">type01</option>
                  <option value="type02">type02</option>
                  <option value="type03">type03</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input name="availability" type="select">
                  <option value="whole_week">Whole Week</option>
                  <option value="not_weekend">Not on the Weekend</option>
                  <option value="night_avaiable">Night Availability</option>
                </Input>
              </FormGroup>
            </div>

            <div
              style={{ border: "3px solid red" }}
              onChange={(e) => addressHandler(e)}
            >
              {" "}
              {/* THE STYLE IS TEMP OR I GO CRAZY :D */}
              <FormGroup>
                <Input name="street" placeholder="street" type="text" />
              </FormGroup>
              <FormGroup>
                <Input name="houseNr" placeholder="houseNr" type="text" />
              </FormGroup>
              <FormGroup>
                <Input name="city" placeholder="city" type="text" />
              </FormGroup>
              <FormGroup>
                <Input
                  name="postalcode"
                  placeholder="postal Code"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Input name="province" type="select">
                  <option value={GermanyDataSet.BadenWürttemberg}>
                    Baden-Württemberg
                  </option>
                  <option value={GermanyDataSet.Bavaria}>Bavaria</option>
                  <option value={GermanyDataSet.Berlin}>Berlin</option>

                  <option value={GermanyDataSet.Brandenburg}>Brandenburg</option>

                  <option value={GermanyDataSet.Bremen}>Bremen</option>
                  <option value={GermanyDataSet.Hamburg}>Hamburg</option>
                  <option value={GermanyDataSet.Hesse}>Hesse</option>
                  <option value={GermanyDataSet.LowerSaxony}>Lower-Saxony</option>
                  <option value={GermanyDataSet.MecklenburgVorpommern}>
                  Mecklenburg-Vorpommern
                  </option>
                  <option value={GermanyDataSet.NorthRhineWestphalia}>
                  NorthRhine-Westphalia
                  </option>
                  <option value={GermanyDataSet.RhinelandPalatinate}>
                  Rhineland-Palatinate
                  </option>
                  <option value={GermanyDataSet.Saarland}>Saarland</option>
                  <option value={GermanyDataSet.Saxony}>Saxony</option>
                  <option value={GermanyDataSet.SchleswigHolstein}>
                  Schleswig-Holstein
                  </option>
                  <option value={GermanyDataSet.Thuringia}>Thuringia</option>
                </Input>
              </FormGroup>
            </div>
          </>
        )}
        <Button type="submit">sign up</Button>
      </Form>
    </div>
  );
}
