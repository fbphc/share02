import { useEffect, useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";

import useAuth from "../../../context/authContext/useAuth.js";
import { Link, useLocation } from "react-router-dom";

function OwnerProfile() {
  const { isAuthenticated, getProfileInfo, state} =
    useAuth();
  const location = useLocation();
  useEffect(() => {
    const { id } = location.state;

    getProfileInfo(id);
  }, []);


  return (
    <div>
      {isAuthenticated ? (
        state.user ? (
          <div style={{ width: "60%", margin: "10rem auto" }}>
            
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>User Name</p>
              <p>{state.user.username}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>First Name</p>
              <p>{state.user.fname}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>Last Name</p>
              <p>{state.user.lname}</p>
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>Email</p>
              <p>{state.user.email}</p>
            </div>
            {state.user.isOwner && (
              <div className="d-flex justify-content-between border-bottom border-dark">
                <p>Address</p>
                <p>
                  {state.user.address.street}
                  {state.user.address.houseNr}, {state.user.address.postalcode}{" "}
                  {state.user.address.city}
                </p>
              </div>
            )}
            {state.user.telNumber && (
              <div className="d-flex justify-content-between border-bottom border-dark">
                <p>Phone Number</p>
                <p>{state.user.telNumber}</p>
              </div>
            )}
          </div>
        ) : null
      ) : (
        <p>
          please<Link to="/login">login</Link>
        </p>
      )}
    </div>
  );
}
export default OwnerProfile;
