
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader,  } from 'reactstrap';
import {BiMenu} from 'react-icons/bi';
import {Link, useLocation} from 'react-router-dom'
import useAuth from "../../context/authContext/useAuth.js"

export default function NavBar() {

  
    const [show, setShow] = useState(false)
    function closeMenu () {
      setShow(false)
    }

    /* --- check the validation --- */
  const { tokenValidator, signOut } = useAuth();
  const location = useLocation();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      tokenValidator();
    }
  }, [location.pathname]);
  /* ------------- */

function loggingOut(){
  signOut()
  setShow(false)
}
  return (
    <div>
        <div>
            <img src={''} alt=''/>
        </div>
        <div>
        <Button
    color="primary"
    onClick={function noRefCheck(){setShow(true)}}
  >
    <BiMenu/>
  </Button>
  <Offcanvas
    isOpen={show}
    direction="end"
    toggle={function noRefCheck(){setShow(false)}}
  >
    <OffcanvasHeader toggle={function noRefCheck(){setShow(false)}}>
      <Button onClick={loggingOut}>sign out</Button>
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong className='linksContainer' >
        {/* link imported from react dom class name to  */}
        <Link className='navlinkMenu' onClick={closeMenu} to='/' >Home</Link>
        <Link className='navlinkMenu' onClick={closeMenu} to='aboutus' >About us</Link>
        <Link className='navlinkMenu' onClick={closeMenu} to='login' >Login</Link>
        <Link className='navlinkMenu' onClick={closeMenu} to='contact' >Contact us</Link>
      </strong>
    </OffcanvasBody>
  </Offcanvas>
        </div>
    </div>
  )
}
