import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { BiMenu } from "react-icons/bi";
// added
import {FaUserCircle} from 'react-icons/fa'
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
  const isLoggedIn = localStorage.getItem("user")
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
    <div className="bg-secondary">
      <div>
        <img src={""} alt="" />
      </div>
      <div>
        <Button
          color="primary"
          onClick={function noRefCheck() {
            setShow(true);
          }}
        >
          <BiMenu />
        </Button>
        <Offcanvas
          isOpen={show}
          direction="end"
          toggle={function noRefCheck() {
            setShow(false);
          }}
        >
          <OffcanvasHeader toggle={function noRefCheck(){setShow(false)}}>
      {/* <Button onClick={loggingOut}>sign out</Button> */}
    </OffcanvasHeader>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              {/* added */}
              <CardImg
                src={"https://github.com/mshaaban0.png"}
                alt="UserName profile image"
                style={{ width: "40px", borderRadius: "50%" }}
              />
              {/* <FaUserCircle/> */}
            </DropdownToggle>
            <DropdownMenu>
              {isLoggedIn? <DropdownItem>
                <Link onClick={closeMenu} to="profile" style={{textDecoration: "none", color: "black"}}>
                  profile preferences
                </Link>
              </DropdownItem> : <Link onClick={closeMenu} to='login'>Login</Link>}
              {/* if the user is logged in show sign out */}
              {isLoggedIn &&
                <DropdownItem onClick={loggingOut}>sign out</DropdownItem>
              }
            </DropdownMenu>
          </Dropdown>
          <OffcanvasBody>
            <strong className="linksContainer">
              {/* link imported from react dom class name to  */}
              <Link className="navlinkMenu" onClick={closeMenu} to="/">
                Home
              </Link>
              <Link className="navlinkMenu" onClick={closeMenu} to="aboutus">
                About us
              </Link>
              <Link className="navlinkMenu" onClick={closeMenu} to="login">
                Login
              </Link>
              <Link className="navlinkMenu" onClick={closeMenu} to="contact">
                Contact us
              </Link>
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}