import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function Register() {
  return (
    <div>
        <h1>Register</h1>
        <Form>
  <FormGroup>
    <Label for="username">
      Username
    </Label>
    <Input
      id="username"
      name="email"
      placeholder="UserName"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="firstname">
      First Name
    </Label>
    <Input
      id="firstname"
      name="email"
      placeholder="First Name"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="lastname">
      Last Name
    </Label>
    <Input
      id="lastname"
      name="email"
      placeholder="Last Name"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Confirm Password">
    Confirm Password
    </Label>
    <Input
      id="Confirm Password"
      name="Confirm Password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  
  <Button>
    Submit
  </Button>
</Form>
    </div>
  )
}
