import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import useAuth from "../../../context/authContext/useAuth";
//isratest@gmail.com
export default function Login() {
  const { logIn, isAuthenticated } = useAuth();
  
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

 function submit(e) {
    e.preventDefault();
    logIn(logInForm);
  }

  function changeHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setLogInForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={(e)=>submit(e)}>
        <div onChange={(e) => changeHandler(e)}>
          <FormGroup>
            <Input name="email" placeholder="email" type="email" required />
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              placeholder="password placeholder"
              type="password"
              required
              minLength={6}
            />
          </FormGroup>
        </div>
        <Button type="submit">Login</Button>
      </Form>
{isAuthenticated ? <p className="h4">u r logged in</p> : <p className="h4">suka!</p>}

      <Link to="/register">Register</Link>
    </div>
  );
}
