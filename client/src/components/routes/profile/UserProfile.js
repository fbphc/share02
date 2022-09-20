import { useEffect, useState } from "react";

import useAuth from "../../../context/authContext/useAuth.js";
import { useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";
import noPhoto from "../../../img/noPhoto.png";
import Review from "./Review.js";
import NotAuthorized from "../error/NotAuthorized.js";

import { ImageStyled, ImgStyled, ProfileContainerStyled, ProfileImgDivStyled } from "../../../components.styled/styledComponents"

function OwnerProfile() {
  const { getProfileInfo, userInfo } = useAuth();

  const location = useLocation();


  useEffect(() => {
    if (localStorage.getItem("user")) {

      const { id } = location.state;
      const pathEnd = location.pathname.split("/userProfile/")[1];
      id !== null ? getProfileInfo(pathEnd) : getProfileInfo(id);
    }
  }, [location.state.id]);

  return (
    <div>
      {userInfo ? (
        <>
          <ProfileContainerStyled>
            {userInfo.imgProfile && userInfo.imgProfile !== "no_photo" ? (
              <div className="">
                <ProfileImgDivStyled>
                  <ImageStyled
                    cloudName="schoolgroupfinal"
                    publicId={userInfo.imgProfile}
                  />
                </ProfileImgDivStyled>
              </div>
            ) : (
              <div>
                <ProfileImgDivStyled>
                  <ImgStyled src={noPhoto} alt="user" />
                </ProfileImgDivStyled>
              </div>
            )}
            <div className="ms-5 w-100" style={{border: "2px solid red"}}>
              <div className="d-flex justify-content-between border-bottom border-light darkText ms-5">
                <p>User Name:</p>
                <p>{userInfo.username}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-light darkText ms-5">
                <p>First Name:</p>
                <p>{userInfo.fname}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-light darkText ms-5">
                <p>Last Name:</p>
                <p>{userInfo.lname}</p>
              </div>
              <div className="d-flex justify-content-between border-bottom border-light darkText ms-5">
                <p>Email:</p>
                <p>{userInfo.email}</p>
              </div>
              {userInfo.isOwner && (
                <div className="d-flex justify-content-between border-bottom border-light darkText ms-5">
                  <p>Address:</p>
                  <p>
                    {userInfo.address.street}
                    {userInfo.address.houseNr}, {userInfo.address.postalcode}{" "}
                    <br></br>{userInfo.address.city}
                  </p>
                </div>
              )}
              {userInfo.telNumber && (
                <div className="d-flex justify-content-between border-bottom border-dark">
                  <p>Phone Number</p>
                  <p>{userInfo.telNumber}</p>
                </div>
              )}
            </div>
          </ProfileContainerStyled>

          <Review />
        </>
      ) : (
        <NotAuthorized />
      )}
    </div>
  );
}
export default OwnerProfile;
