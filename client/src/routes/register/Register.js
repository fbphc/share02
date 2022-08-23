import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Register() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isOwner: false
  });

  function changeHandler(e){
    const element = e.target.name
    const value = e.target.value
    setRegisterForm((prevState) => {
        return {...prevState, 
            [element]: value 
        }
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <Form onChange={(e) => changeHandler(e)}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="isOwner" type="select">
            <option value={false}>Car Owner</option>
            <option value={true}>Wall-Box Owner</option>
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
            placeholder="password placeholder"
            type="password"
          />
        </FormGroup>
      </Form>

      <Form /* style={{display: 'none'}} */>
        <FormGroup className="d-flex">
          <Input name="address" placeholder="street" />
          <Input name="house number" placeholder="1" className="w-25" />
        </FormGroup>
        <FormGroup className="d-flex">
          <Input name="zip code" placeholder="12345" />
          <Input name="city" placeholder="city" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelectMulti">plugger</Label>
          <Input id="plugger type" name="plugger type" type="select">
            <option>plug 1</option>
            <option>plug 2</option>
            <option>plug 3</option>
            <option>plug 4</option>
            <option>plug 5</option>
            <option>plug 6</option>
          </Input>
        </FormGroup>
        {/* <FormGroup>
    <Label for="exampleDate">
      Date
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleTime">
      Time
    </Label>
    <Input
      id="exampleTime"
      name="time"
      placeholder="time placeholder"
      type="time"
    />
  </FormGroup> */}
      </Form>
      <Button>Submit</Button>
    </div>
  );
}
