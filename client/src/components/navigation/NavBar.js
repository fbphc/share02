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

import { Link, useLocation } from "react-router-dom";
import useAuth from "../../context/authContext/useAuth.js";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [show, setShow] = useState(false);
  function closeMenu() {
    setShow(false);
  }

  /* --- check the validation --- */
  const { tokenValidator, signOut } = useAuth();
  const location = useLocation();
  // added
  const isLoggedIn = localStorage.getItem("user");
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
    <div className="d-flex align-items-center justify-content-between navbarContainer">
      <div>
        <img src={""} alt="" />
      </div>
      <div>
        <button
          className="burgerMenuBtn bg-transparent border-0"
          onClick={function noRefCheck() {
            setShow(true);
          }}
        >
          <FaBars className="burgerMenuIcon" />
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
            {/* <Button onClick={loggingOut}>sign out</Button> */}
          </OffcanvasHeader>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret className="w-50">
              {/* added */}
              <CardImg
              className="rounded-circle w-25"
                src={"https://github.com/mshaaban0.png"}
                alt="UserName profile image"
              />
              {/* <FaUserCircle/> */}
            </DropdownToggle>
            <DropdownMenu>
              {isLoggedIn ? (
                <DropdownItem>
                  <Link
                    onClick={closeMenu}
                    to="profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    profile preferences
                  </Link>
                </DropdownItem>
              ) : (
                <Link onClick={closeMenu} to="login">
                  Login
                </Link>
              )}
              {/* if the user is logged in show sign out */}
              {isLoggedIn && (
                <DropdownItem onClick={loggingOut}>sign out</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <OffcanvasBody>
            <strong className="d-flex flex-column">
              {/* link imported from react dom class name to  */}
              <Link className="navLinkMenu text-decoration-none" onClick={closeMenu} to="/">
                Home
              </Link>
              <Link className="navLinkMenu text-decoration-none" onClick={closeMenu} to="aboutus">
                About us
              </Link>
              <Link className="navLinkMenu text-decoration-none" onClick={closeMenu} to="login">
                Login
              </Link>
              <Link className="navLinkMenu text-decoration-none" onClick={closeMenu} to="contact">
                Contact us
              </Link>
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}
