import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import useAuth from "../../../context/authContext/useAuth";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

  // show and hide password and confirm password state
  const [passToggle, setPassToggle] = useState({
    showPassword: "",
  });

  // show and hide password function
  function show_hidePassword(e) {
      setPassToggle({
        ...passToggle,
        showPassword: e === passToggle.showPassword ? "" : e,
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={(e) => submit(e)}>
        <div onChange={(e) => changeHandler(e)}>
          <FormGroup>
            <Input name="email" placeholder="email" type="email" required />
          </FormGroup>
          <FormGroup className="position-relative">
            <Input
              name="password"
              placeholder="password"
              type={
                passToggle.showPassword === "password" ? "text" : "password"
              }
              required
              minLength={6}
              autoComplete=""
            />
            {passToggle.showPassword === "password" ? (
              <AiOutlineEyeInvisible
                className="position-absolute bottom-0 end-0 mb-2 me-1"
                onClick={() => show_hidePassword("password")}
              />
            ) : (
              <AiOutlineEye
                className="position-absolute bottom-0 end-0 mb-2 me-1"
                onClick={() => show_hidePassword("password")}
              />
            )}
          </FormGroup>
        </div>
        <Button type="submit">Login</Button>
      </Form>
      {isAuthenticated ? (
        <p className="h4">u r logged in</p>
      ) : (
        <p className="h4">suka!</p>
      )}

      <Link to="/register">Register</Link>
    </div>
  );
}
