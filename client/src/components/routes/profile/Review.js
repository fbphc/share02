import React, { useState, useEffect } from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";
import useComments from "../../../context/commentsContext/useComments";
import useAuth from "../../../context/authContext/useAuth";

import noPhoto from "../../../img/noPhoto.png"

function Review({ ownerUser }) {
  const location = useLocation()
  const pathUrl = location.pathname

  const { addAReview, getReviews, allReviews, state } = useComments();
  const {getProfileInfo} = useAuth() 
  const initState = {
    fromUsername: "",
    fromUserId: null,
    review: "",
    toUsername: "",
    toUserId: null,
  };
  const [review, setReview] = useState(initState);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setReview({
        ...review,
        fromUserId: user.id,
        fromUsername: user.username,
        fromImgProfile: user.imgProfile,
        toUserId: ownerUser.id,
        toUsername: ownerUser.username,
      });
    }
  }, []);
useEffect(()=>{
  getReviews(ownerUser.id)

},[state.review])
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
    <>
    { JSON.parse(localStorage.getItem("user")).id !== +pathUrl.split("/userProfile/")[1] &&
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
        <Button type="submit">Send</Button>
      </Form>
      }
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
            <Link to={`/userProfile/${item.fromUserId}`} state={{id:item.fromUserId}} onClick={()=>getProfileInfo(item.fromUserId)}>
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

export default Review;
