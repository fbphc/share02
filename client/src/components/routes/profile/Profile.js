import { useEffect, useState } from "react";

import useAuth from "../../../context/authContext/useAuth.js";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";
import NotAuthorized from "../error/NotAuthorized.js";
import EditProfile from "../profile/EditProfile.js";
import { Button } from "reactstrap";

function Profile() {
  const { isAuthenticated, getProfileInfo, userInfo } = useAuth();
  const [editToggle, setEditToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      getProfileInfo(user.id);
    }
  }, []);

  return (
    <div className="text-light">
      {isAuthenticated ? (
        userInfo && (
          <>
            <div className="w-50 mx-auto my-5 d-flex">
              {userInfo.imgProfile === "no_photo" ? (
                <div>
                  <img className="w-75 d-block" src={noPhoto} alt="user" />
                </div>
              ) : (
                <div>
                  <Image
                    className="w-75 d-block"
                    cloudName="schoolgroupfinal"
                    publicId={userInfo.imgProfile}
                  />
                </div>
              )}
              <div>
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>User Name</p>
                  <p>{userInfo.username}</p>
                </div>
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>First Name</p>
                  <p>{userInfo.fname}</p>
                </div>
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>Last Name</p>
                  <p>{userInfo.lname}</p>
                </div>
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>Email</p>
                  <p>{userInfo.email}</p>
                </div>
                {userInfo.isOwner && (
                  <div className="d-flex justify-content-between border-bottom border-dark">
                    <p>Address</p>
                    <p>
                      {userInfo.address.street}
                      {userInfo.address.houseNr}, {userInfo.address.postalcode}{" "}
                      {userInfo.address.city}
                    </p>
                  </div>
                )}
              </div>
              {userInfo.telNumber && (
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>Phone Number</p>
                  <p>{userInfo.telNumber}</p>
                </div>
              )}
            </div>
            <Button
              className="mx-auto d-block my-3"
              onClick={() =>
                editToggle ? setEditToggle(false) : setEditToggle(true)
              }
            >
              Edit Profile
            </Button>
          </>
        )
      ) : (
        <NotAuthorized />
      )}
      {editToggle && <EditProfile />}
    </div>
  );
}
export default Profile;
