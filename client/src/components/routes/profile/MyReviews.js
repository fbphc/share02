import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import useComments from "../../../context/commentsContext/useComments";
import useAuth from "../../../context/authContext/useAuth";

import noPhoto from "../../../img/noPhoto.png";

function MyReviews({userInfo}) {
  
    const { getReviews, allReviews} = useComments();
    const { getProfileInfo } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      getReviews(userInfo.id);
    }
  }, []);
  

  return (
    <>
      {allReviews.map((item, idx) => {
        return (
          <div key={idx + "comment"}>
            {item.fromImgProfile === "no_photo" ? (
              <div>
                <img src={noPhoto} alt="user" className="w-25" />
              </div>
            ) : (
              <div>
                <Image
                  className="w-25"
                  cloudName="schoolgroupfinal"
                  publicId={item.fromImgProfile}
                />
              </div>
            )}
<Link
                to={`/userProfile/${item.fromUserId}`}
                state={{ id: item.fromUserId }}
                onClick={() => getProfileInfo(item.fromUserId)}
              >
                {item.fromUsername}
              </Link>
            <p>{item.review}</p>
            <p>{item.dateNow[0]}</p>
            <p>{item.dateNow[1]}</p>
          </div>
        );
      })}
    </>
  );
}

export default MyReviews;
