import React, { useState, useEffect } from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";
import useComments from "../../../context/commentsContext/useComments";
import useAuth from "../../../context/authContext/useAuth";

import noPhoto from "../../../img/noPhoto.png";

import { MainButton, ImageStyled } from "../../../components.styled/styledComponents"

function Review() {
  const location = useLocation();
  const pathUrl = location.pathname;

  const { addAReview, getReviews, allReviews, state } = useComments();
  const { getProfileInfo } = useAuth();


  const initState = {
    fromUsername: "",
    fromUserId: null,
    review: "",
    toUserId: null,
  };


  const [review, setReview] = useState(initState);

  useEffect(() => {
    const pathEnd = +location.pathname.split("/userProfile/")[1]
    getReviews(pathEnd);
  }, [state.review]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const pathEnd = +location.pathname.split("/userProfile/")[1]
      setReview({
        ...review,
        fromUserId: user.id,
        fromUsername: user.username,
        fromImgProfile: user.imgProfile,
        toUserId: pathEnd,
      });
    }
  }, []);

  function changeHandler(e) {
    setReview((prevState) => {
      return { ...prevState, review: e.target.value };
    });
  }
  function submit(e) {
    e.preventDefault();
    addAReview(review);
  }
  return (
    <div className="w-75 mx-auto">
      {JSON.parse(localStorage.getItem("user")).id !==
        +pathUrl.split("/userProfile/")[1] && (
          <Form onSubmit={submit}>
            <div onChange={changeHandler}>
              <FormGroup>
                <Input
                  className="mt-2"
                  id="exampleText"
                  name="text"
                  type="textarea"
                  placeholder="Add a Review"
                  required
                />
              </FormGroup>
            </div>
            <MainButton type="submit">Send</MainButton>
          </Form>
        )}
      {allReviews.map((item, idx) => {
        return (
          <div key={idx + "comment"}>

            {item.fromImgProfile === "no_photo" ? (
              <div>
                <img src={noPhoto} alt="user" className="w-25" />
              </div>
            ) : (
              <div>
                <ImageStyled
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
    </div>
  );
}

export default Review;
