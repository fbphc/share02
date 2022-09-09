import { useEffect, useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import { AiOutlineEdit } from "react-icons/ai";
import useAuth from "../../../context/authContext/useAuth.js";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";

function Profile() {
  const { isAuthenticated, getProfileInfo, state } = useAuth();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getProfileInfo(user.id);
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        state.user ? (
          <div style={{ width: "60%", margin: "10rem auto" }}>
            {state.user.imgProfile === "no_photo" ? (
              <div>
                <img src={noPhoto} alt="user" />
              </div>
            ) : (
              <div>
                <Image
                  cloudName="schoolgroupfinal"
                  publicId={state.user.imgProfile}
                />
              </div>
            )}

            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>User Name</p>
              <p>{state.user.username}</p>
              <AiOutlineEdit />
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>First Name</p>
              <p>{state.user.fname}</p>
              <AiOutlineEdit />
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>Last Name</p>
              <p>{state.user.lname}</p>
              <AiOutlineEdit />
            </div>
            <div className="d-flex justify-content-between border-bottom border-dark">
              <p>Email</p>
              <p>{state.user.email}</p>
              <AiOutlineEdit />
            </div>
            {state.user.isOwner && (
              <div className="d-flex justify-content-between border-bottom border-dark">
                <p>Address</p>
                <p>
                  {state.user.address.street}
                  {state.user.address.houseNr}, {state.user.address.postalcode}{" "}
                  {state.user.address.city}
                </p>
                <AiOutlineEdit />
              </div>
            )}
            {state.user.telNumber && (
              <div className="d-flex justify-content-between border-bottom border-dark">
                <p>Phone Number</p>
                <p>{state.user.telNumber}</p>
                <AiOutlineEdit />
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
export default Profile;
