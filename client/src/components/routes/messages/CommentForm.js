import React, { useEffect, useState } from "react";
import { FormGroup, Input, Form } from "reactstrap";
import useComments from "../../../context/commentsContext/useComments.js";

import { MainButton } from "../../../components.styled/styledComponents";


function CommentForm() {
  const initState = {
    username: "",
    imgProfile: "",
    userId: null,
    comment: "",
  }
  const { addAComment } = useComments()
  const [comment, setComment] = useState(initState);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      let userImg = ""
      if (user.imgProfile) {
        userImg = user.imgProfile
      } else {
        userImg = "no_photo"
      }
      setComment({
        ...comment,
        username: user.username,
        imgProfile: userImg,
        userId: user.id,
      });
    }
  }, []);

  function changeHandler(e) {
    setComment((prevState) => {
      return { ...prevState, comment: e.target.value };
    });
  }
  function submit(e) {
    e.preventDefault();

    addAComment(comment)
  }

  return (
    <Form onSubmit={submit}>
      <div onChange={changeHandler}>
        <FormGroup className="d-flex align-items-center justify-content-center">
          <Input
            className="mt-2 w-75"
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Leave a Message"
            rows="8"
            cols="20"
            required
          />
        </FormGroup>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <MainButton type="submit">Send</MainButton>
      </div>
    </Form>
  );
}

export default CommentForm;
