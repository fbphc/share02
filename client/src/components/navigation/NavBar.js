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
import { GoPlug } from "react-icons/go";

import LoginModal from "../routes/auth/Login.js";
import Register from "../routes/auth/Register.js";

import { Link, useLocation } from "react-router-dom";
import { BurgerLinkStyled } from "../../components.styled/styledComponents.js";
import useAuth from "../../context/authContext/useAuth.js";
import { Image } from "cloudinary-react";
import noPhoto from "../../img/noPhoto.png";
import logosmall from "../../img/logosmall.png";
import { MainButton } from "../../components.styled/styledComponents.js";

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
      setUser({});
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
        {user.username && user.username !== {} ? (
          <p className="d-inline h5 mx-3">{user.username.toUpperCase()}</p>
        ) : null}
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
            className="secondary"
          >
            {isAuthenticated ? (
              <>
                <Link to="/account">
                  {user.imgProfile && user.imgProfile !== "no_photo" ? (
                   
                      <Image
                        className="rounded-circle me-2"
                        cloudName="schoolgroupfinal"
                        publicId={user.imgProfile}
                        style={{width: "50px"}}
                      />
                  
                  ) : (
                    <img
                      src={noPhoto}
                      alt="user"
                      className="rounded-circle w-25"
                    />
                  )}
                  My Profile
                </Link>
              </>
            ) : (
              <Button className="text-dark danger" onClick={toggleRegister}>
                Join the community
              </Button>
            )}

            <Register
              modalRegister={modalRegister}
              toggleRegister={toggleRegister}
              closeMenu={closeMenu}
            />
          </OffcanvasHeader>

          <OffcanvasBody>
            <strong className="d-flex flex-column gap-3 mt-3">
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="/"
              >
                <BurgerLinkStyled>
                  <GoPlug className="me-2" />
                  Home
                </BurgerLinkStyled>
              </Link>
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="aboutus"
              >
                <BurgerLinkStyled>
                  <GoPlug className="me-2" />
                  About us
                </BurgerLinkStyled>
              </Link>

              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="germany"
              >
                <BurgerLinkStyled>
                  <GoPlug className="me-2" />
                  Map
                </BurgerLinkStyled>
              </Link>

              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="board"
              >
                <BurgerLinkStyled>
                  <GoPlug className="me-2" />
                  Messages
                </BurgerLinkStyled>
              </Link>
              <Link
                className="text-dark text-decoration-none"
                onClick={closeMenu}
                to="contact"
              >
                <BurgerLinkStyled>
                  <GoPlug className="me-2" />
                  Contact us
                </BurgerLinkStyled>
              </Link>
              {/* <Link
                className=" text-decoration-none"
                onClick={closeMenu}
                to="/account"
              >
                My Profile
              </Link> */}
              {!isAuthenticated ? (
                <BurgerLinkStyled
                  className="h5"
                  onClick={toggleLogin}
                  role="button"
                >
                  Login
                </BurgerLinkStyled>
              ) : (
                <BurgerLinkStyled
                  role="button"
                  className="h5"
                  onClick={loggingOut}
                >
                  Sign Out
                </BurgerLinkStyled>
              )}
              <LoginModal
                modalLogin={modalLogin}
                toggleLogin={toggleLogin}
                closeMenu={closeMenu}
              />
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}
