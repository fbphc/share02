import { useEffect, useState } from "react";

import useAuth from "../../../context/authContext/useAuth.js";
import noPhoto from "../../../img/noPhoto.png";
import NotAuthorized from "../../error/NotAuthorized.js";
import EditProfile from "../profile/EditProfile.js";
import MyReviews from "./MyReviews.js";
import DirectMessages from "../../directMessages/DirectMessages.js";

import { MainButton, ImageStyled, ProfileImgDivStyled } from "../../../components.styled/styledComponents.js";

function Profile() {
  const { isAuthenticated, getProfileInfo, userInfo } = useAuth();
  const [editToggle, setEditToggle] = useState(false);
  const [reviewToggle, setReviewToggle] = useState(false);
  const [msgToggle, setMsgToggle] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      getProfileInfo(user.id);
    }
  }, [editToggle]);

  function mainToggle(e) {
    e.preventDefault();
    const value = e.target.value;

    if (value === "messages") {
      setReviewToggle(false);
      setMsgToggle(true);
    }
    if (value === "reviews") {
      setReviewToggle(true);
      setMsgToggle(false);
    }
  }
  return (
    <div className="darkText">
      {isAuthenticated ? (
        userInfo && (
          <>
            <div className="w-50 mx-auto my-5">
              {userInfo.imgProfile === "no_photo" ? (
                <div>
                  <img className="w-25 d-block" src={noPhoto} alt="user" />
                </div>
              ) : (
                <ProfileImgDivStyled className="mx-auto mb-3">
                  <ImageStyled
                    cloudName="schoolgroupfinal"
                    publicId={userInfo.imgProfile}
                  />
                </ProfileImgDivStyled>
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
            <div className="mx-auto w-50 d-flex justify-content-around gap-1 px-5 pt-2">
              <MainButton
                onClick={() =>
                  editToggle ? setEditToggle(false) : setEditToggle(true)
                }
              >
                Edit Profile
              </MainButton>
              {reviewToggle ? <MainButton onClick={() => setReviewToggle(false)} value="reviews">
                Hide Reviews
              </MainButton> : <MainButton onClick={mainToggle} value="reviews">
                Show Reviews
              </MainButton>}
              {msgToggle ? <MainButton onClick={() => setMsgToggle(false)} value="messages">
                Hide Messages
              </ MainButton> : <MainButton onClick={mainToggle} value="messages">
                Show Messages
              </MainButton>}

            </div>
          </>
        )
      ) : (
        <NotAuthorized />
      )}
      {editToggle && (
        <EditProfile editToggle={editToggle} setEditToggle={setEditToggle} />
      )}
      {reviewToggle && <MyReviews userInfo={userInfo} />}
      {msgToggle && <DirectMessages />}
    </div>
  );
}
export default Profile;
