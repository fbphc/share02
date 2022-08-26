import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function loginFormHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setLoginForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }

  function submit(e) {
    e.preventDefault();

    console.log("regForm", loginForm);
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={submit}>
        <div onChange={(e) => loginFormHandler(e)}>
          <FormGroup>
            <Input required name="email" placeholder="Email" type="email" />
          </FormGroup>
          <FormGroup>
            <Input
              required
              name="password"
              placeholder="password"
              type="password"
            />
          </FormGroup>
        </div>
        <Button type="submit">Login</Button>
      </Form>
      <div>
        <p>don't have an account? please register</p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
