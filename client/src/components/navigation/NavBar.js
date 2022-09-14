import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,

  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import LoginModal from "../routes/auth/Login.js";
import RegisterModal from "../routes/auth/Register.js";

import { Link, useLocation } from "react-router-dom";
import useAuth from "../../context/authContext/useAuth.js";
import { Image } from "cloudinary-react";
import noPhoto from "../../img/noPhoto.png";
import logosmall from "../../img/logosmall.png";


export default function NavBar() {
  
  const [user, setUser] = useState({});

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [modalLogin, setModalLogin] = useState(false);
  const toggleLogin = () => setModalLogin(!modalLogin);

  const [modalRegister, setModalRegister] = useState(false);
  const toggleRegister = () => setModalRegister(!modalRegister);

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
      setUser(JSON.parse(user));
      tokenValidator();

    } else {
      setUser({})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isAuthenticated]);
  /* ------------- */

  function loggingOut() {
    signOut();
    setShow(false);
  }

  return (
    <div className="d-flex align-items-center justify-content-between dark position-sticky fixed-top">
      <div className="w-25 px-2">
        <img src={logosmall} className="w-25" alt="logo" />
      </div>
      <div className="d-flex align-items-center">
        {user.username && user.username !== {} ? <p className="d-inline h5 mx-3">{user.username.toUpperCase()}</p> : null}
        <button
          className="bg-transparent border-0"
          onClick={function noRefCheck() {
            setShow(true);
          }}
        >
          <FaBars className="secondaryText h1" />
        </button>
        <Offcanvas
        className="dark"
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
            {isAuthenticated ? (
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret className="w-50">
                  {user.imgProfile && user.imgProfile !== "no_photo" ? (
                    <Image
                      className="w-25 rounded-circle"
                      cloudName="schoolgroupfinal"
                      publicId={user.imgProfile}
                    />
                  ) : (
                    <img
                      src={noPhoto}
                      alt="user"
                      className="rounded-circle w-25"
                    />
                  )}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link
                      className=" text-decoration-none"
                      onClick={closeMenu}
                      to="/account"
                    >
                      Profile Settings
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button
                className="text-dark danger"
                onClick={toggleRegister}
              >
                Join the community
              </Button>
            )}
            <RegisterModal
              modalRegister={modalRegister}
              toggleRegister={toggleRegister}
              closeMenu={closeMenu}
            />
          </OffcanvasHeader>

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
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="germany"
              >
                Map
              </Link>

              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="contact"
              >
                Contact us
              </Link>
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="board"
              >
                MessageBoard
              </Link>
              {!isAuthenticated && (
                <div className="" onClick={toggleLogin} role="button">
                  Login
                </div>
              )}
              <LoginModal
                modalLogin={modalLogin}
                toggleLogin={toggleLogin}
                closeMenu={closeMenu}
              />

              {isAuthenticated && (
                <div role="button" className="text-dark" onClick={loggingOut}>
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
