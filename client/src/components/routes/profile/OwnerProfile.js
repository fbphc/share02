import { useEffect, useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";

import useAuth from "../../../context/authContext/useAuth.js";
import { Link, useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";
import Review from "./Review.js";

function OwnerProfile() {
  const { isAuthenticated, getProfileInfo, state } = useAuth();
  
  const location = useLocation();
  useEffect(() => {
    const { id } = location.state;

    getProfileInfo(id);
  }, []);

  return (
    <div>
      {state.user ? (
        <>
          <div style={{ width: "60%", margin: "10rem auto" }}>
            {state.user.imgProfile && state.user.imgProfile !== "no_photo" ? (
              <div>
                <Image
                  cloudName="schoolgroupfinal"
                  publicId={state.user.imgProfile}
                />
              </div>
            ) : (
              <div>
                <img src={noPhoto} alt="user" />
              </div>
            )}
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
          <Review ownerUser={state.user}/>
        </>
      ) : null}
    </div>
  );
}
export default OwnerProfile;
