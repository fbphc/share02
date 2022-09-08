import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/NavBar.Module.css";
import {
  Button,
  CardImg,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import LoginModal from "../routes/auth/LoginModal.js";
import RegisterModal from "../routes/auth/RegisterModal.js";

import { Link, useLocation } from "react-router-dom";
import useAuth from "../../context/authContext/useAuth.js";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [modalLogin, setModalLogin] = useState(false);
  const toggleLogin = () => setModalLogin(!modalLogin);

  const [modalRegister, setModalRegister] = useState(false);
  const toggleRegister = () => setModalRegister(!modalRegister);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [show, setShow] = useState(false);
  function closeMenu() {
    setShow(false);
  }

  /* --- check the validation --- */
  const { tokenValidator, signOut, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      tokenValidator();
    }
  }, [location.pathname]);
  /* ------------- */

  function loggingOut() {
    signOut();
    setShow(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-between dark">
      <div>
        <img src={""} alt="" />
      </div>
      <div>
        <button
          className="bg-transparent border-0"
          onClick={function noRefCheck() {
            setShow(true);
          }}
        >
          <FaBars style={{fontSize: '3rem'}} />
        </button>
        <Offcanvas
          isOpen={show}
          direction="end"
          toggle={function noRefCheck() {
            setShow(false);
          }}
        >
          <OffcanvasHeader
            toggle={function noRefCheck() {
              setShow(false);
            }}
          >
            {isAuthenticated? <div>logo</div> :
              <Button
                className="bg-light text-dark"
                onClick={toggleRegister}
                role='button'
              >
                Join our community 
              </Button>
              }
              <RegisterModal
                modalRegister={modalRegister}
                toggleRegister={toggleRegister}
                closeMenu={closeMenu}
              />
            {/* <Button onClick={loggingOut}>sign out</Button> */}
          </OffcanvasHeader>
          {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className="w-50"> */}
              {/* added */}
              {/* <CardImg
                className="rounded-circle w-25"
                src={"https://github.com/mshaaban0.png"}
                alt="UserName profile image"
              /> */}
              {/* <FaUserCircle/> */}
            {/* </DropdownToggle>
            <DropdownMenu>
              {isAuthenticated ? (
                <DropdownItem>
                  <Link
                    className=" text-decoration-none"
                    onClick={closeMenu}
                    to="profile"
                  >
                    profile preferences
                  </Link>
                </DropdownItem>
              ) : (
                <div
                  className=""
                  role="button"
                  onClick={toggleLogin}
                >
                  Login
                </div>
              )} */}
              {/* if the user is logged in show sign out */}
              
            {/* </DropdownMenu>
          </Dropdown> */}
          <OffcanvasBody>
            <strong className="d-flex flex-column gap-3">
              {/* link imported from react dom class name to  */}
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="aboutus"
              >
                About us
              </Link>
              {/* <Link className=" text-decoration-none" onClick={closeMenu} to="login">
                Login
              </Link> */}
             
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="contact"
              >
                Contact us
              </Link>
              {isAuthenticated? null :
                <div
                  className=""
                  onClick={toggleLogin}
                  role='button'
                >
                  Login
                </div>
              }
              <LoginModal
                modalLogin={modalLogin}
                toggleLogin={toggleLogin}
                closeMenu={closeMenu}
              />
              {/* {isAuthenticated? null :
              <div
                className=""
                onClick={toggleRegister}
                role='button'
              >
                Join our community 
              </div>
              }
              <RegisterModal
                modalRegister={modalRegister}
                toggleRegister={toggleRegister}
                closeMenu={closeMenu}
              /> */}
              {isAuthenticated && (
                <div
                  role="button"
                  className="text-dark"
                  onClick={loggingOut}
                >
                  sign out
                </div>
              )}
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}
