import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GermanyDataSet } from "../../dataset/GermanyDataSet.js";

export default function Register() {
  const address = {
    street: "",
    houseNumber: "",
    postalCode: 0,
    city: "",
    province: "initial",
    state: "Germany",
    stateCode: "DE",
  };

  const [registerForm, setRegisterForm] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isOwner: false,
    address,
  });

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
    address[element] = value;
    registerForm.address = address;
    console.log(registerForm);
  }

  console.log(registerForm, "test");

  return (
    <div>
      <h1>Register</h1>
      <Form onChange={(e) => changeHandler(e)}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            id="exampleSelect"
            name="isOwner"
            type="select"
            autoComplete=""
          >
            <option value={false}>Car Owner</option>
            <option value={true}>Wall-Box Owner</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            name="username"
            placeholder="UserName"
            type="text"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="fname"
            placeholder="First Name"
            type="text"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="lname"
            placeholder="Last Name"
            type="text"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="password"
            placeholder="password"
            type="password"
            autoComplete=""
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="confirmPassword"
            placeholder="password placeholder"
            type="password"
            autoComplete=""
          />
        </FormGroup>
        {registerForm.isOwner && (
          <>
            <FormGroup>
              <Label for="exampleSelect">availability</Label>
              <Input
                id="exampleSelect"
                name="isOwner"
                type="select"
                autoComplete=""
              >
                <option>all week</option>
                <option>weekends</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">plug type</Label>
              <Input
                id="exampleSelect"
                name="isOwner"
                type="select"
                autoComplete=""
              >
                <option>CCS</option>
                <option>CHAdeMO</option>
                <option>Tesla</option>
              </Input>
            </FormGroup>
          </>
        )}
      </Form>
      {registerForm.isOwner && (
        <Form>
          <FormGroup onChange={(e) => addressHandler(e)}>
            <Label for="exampleSelect">Select Province</Label>
            <Input
              id="exampleSelect"
              name="province"
              type="select"
              autoComplete=""
            >
              <option value={GermanyDataSet.BadenWürttemberg}>
                Baden-Württemberg
              </option>
              <option value={GermanyDataSet.Bavaria}>Bavaria</option>
              <option value={GermanyDataSet.Berlin}>Berlin</option>
              <option value={GermanyDataSet.Brandenburg}>Brandenburg</option>
              <option value={GermanyDataSet.Bremen}>Bremen</option>
              <option value={GermanyDataSet.Hamburg}>Hamburg</option>
              <option value={GermanyDataSet.Hesse}>Hesse</option>
              <option value={GermanyDataSet.LowerSaxony}>LowerSaxony</option>
              <option value={GermanyDataSet.MecklenburgVorpommern}>
                MecklenburgVorpommern
              </option>
              <option value={GermanyDataSet.NorthRhineWestphalia}>
                NorthRhineWestphalia
              </option>
              <option value={GermanyDataSet.RhinelandPalatinate}>
                RhinelandPalatinate
              </option>
              <option value={GermanyDataSet.Saarland}>Saarland</option>
              <option value={GermanyDataSet.Saxony}>Saxony</option>
              <option value={GermanyDataSet.SaxonyAnhalt}>SaxonyAnhalt</option>
              <option value={GermanyDataSet.SchleswigHolstein}>
                SchleswigHolstein
              </option>
              <option value={GermanyDataSet.Thuringia}>Thuringia</option>
            </Input>
          </FormGroup>
          <FormGroup onChange={(e) => addressHandler(e)}>
            <Input name="street" type="text" placeholder="Street" />
          </FormGroup>
          <FormGroup onChange={(e) => addressHandler(e)}>
            <Input name="houseNumber" type="text" placeholder="0" />
          </FormGroup>
          <FormGroup onChange={(e) => addressHandler(e)}>
            <Input name="postalCode" type="number" placeholder="Postal Code" />
          </FormGroup>
          <FormGroup onChange={(e) => addressHandler(e)}>
            <Input name="city" type="text" placeholder="city" />
          </FormGroup>
        </Form>
      )}
      <Button>sign up</Button>
    </div>
  );
}
