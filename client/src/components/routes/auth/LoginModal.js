import { useState } from "react";
import { /* Link, */ useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import useAuth from "../../../context/authContext/useAuth.js";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//isratest@gmail.com
export default function Login({ modalLogin, toggleLogin, closeMenu }) {
  const navigate = useNavigate();
  const { logIn, isAuthenticated } = useAuth();

  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    logIn(logInForm);
    navigate("/mainmap");
    closeMenu();
    toggleLogin();
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
    <Modal isOpen={modalLogin}>
      <ModalHeader>Login</ModalHeader>
      <ModalBody className="secondary">
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
                  className="position-absolute top-50 end-0 translate-middle"
                  onClick={() => show_hidePassword("password")}
                />
              ) : (
                <AiOutlineEye
                  className="position-absolute top-50 end-0 translate-middle"
                  onClick={() => show_hidePassword("password")}
                />
              )}
            </FormGroup>
          </div>
          <ModalFooter>
            <Button
              color="warning"
              outline
              onClick={() => (logInForm ? toggleLogin : null)}
              type="submit"
            >
              Login
            </Button>
            <Button color="warning" outline onClick={toggleLogin}>
              cancel
            </Button>
          </ModalFooter>
        </Form>
        {isAuthenticated ? (
          <p className="h4">u r logged in</p>
        ) : (
          <p className="h4">suka!</p>
        )}
      </ModalBody>
    </Modal>
  );
}
