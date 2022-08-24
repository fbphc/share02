import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { GermanyDataSet } from "../../dataset/GermanyDataSet.js";




export default function Register() {
  const [address, setAddress] = useState({
    city: '',
    postalCode: 0,
    street: '',
    houseNumber: '',
    state: 'Germany',
    stateCode: 'DE',
    province: 'initial',
})
  const [registerForm, setRegisterForm] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isOwner: false,
    address: address.province
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

  function addressHandler(e) {
    const element = e.target.name
    const value = e.target.value
    setAddress((prevState) => {
      return {...prevState, 
        [element]: value
      }
  })
  }
  console.log(registerForm.address.province);

  console.log(address.province);
  

  return (
    <div>
      <h1>Register</h1>
      <Form onChange={(e) => changeHandler(e)}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="isOwner" type="select" autoComplete="">
            <option value={false}>Car Owner</option>
            <option value={true}>Wall-Box Owner</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input name="username" placeholder="UserName" type="text" autoComplete=""/>
        </FormGroup>
        <FormGroup>
          <Input name="fname" placeholder="First Name" type="text" autoComplete=""/>
        </FormGroup>
        <FormGroup>
          <Input name="lname" placeholder="Last Name" type="text" autoComplete=""/>
        </FormGroup>
        <FormGroup>
          <Input name="email" placeholder="Email" type="email" autoComplete=""/>
        </FormGroup>
        <FormGroup>
          <Input name="password" placeholder="password" type="password" autoComplete=""/>
        </FormGroup>
        <FormGroup>
          <Input
            name="confirmPassword"
            placeholder="password placeholder"
            type="password"
            autoComplete=""
          />
        </FormGroup>
      {registerForm.isOwner && 
      
      <>
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="isOwner" type="select" autoComplete="">
            <option value={false}>Car Owner</option>
            <option value={true}>Wall-Box Owner</option>
          </Input>
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="isOwner" type="select" autoComplete="">
            <option value={false}>Car Owner</option>
            <option value={true}>Wall-Box Owner</option>
          </Input>
        </FormGroup>
      </>
      }
      </Form>
      <Form>
        {registerForm.isOwner && 
        <FormGroup onChange={(e) => addressHandler(e)}>
        <Label for="exampleSelect">Select</Label>
        <Input id="exampleSelect" name="province" type="select" autoComplete="">
          <option value={GermanyDataSet.BadenWürttemberg} >Baden-Württemberg</option>
          <option value={GermanyDataSet.Bavaria} >Bavaria</option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          {/* <option value={true}>Wall-Box Owner</option> */}
        </Input>
      </FormGroup>}
      </Form>
      <Button>sign up</Button>
    </div>
  );
}
