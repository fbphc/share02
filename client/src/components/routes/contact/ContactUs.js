import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import emailjs from "@emailjs/browser";

import { MainButton } from "../../../components.styled/styledComponents";

export default function ContactUs() {
  const [value, setValue] = useState({});

  function contactHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setValue((prevState) => {
      return { ...prevState, [element]: value };
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4dho4yn",
        "template_pcnzc8y",
        e.target,
        "1ZmCKBSxMK_G_FGGc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
    );
    e.target.reset();
  };

  return (
    <div className="text-light p-3 d-flex flex-column gap-5">
      <div className="p-3 ">
        <p className="h1 text-center titles ">Contact US</p>
        <div className="text-wrap text-center">
          <p>
            Please get in touch, and our expert support team will answer all
            your questions.
          </p>
        </div>
        <Form
          className="d-flex flex-column align-items-center w-100"
          onSubmit={sendEmail}
          onChange={contactHandler}
        >
          <FormGroup className="w-75">
            <Input
              type="text"
              placeholder="Full Name"
              autoComplete=""
              name="user_name"
            />
          </FormGroup>
          <FormGroup className="w-75">
            <Input
              type="email"
              placeholder="Email"
              autoComplete=""
              name="email"
            />
          </FormGroup>
          <FormGroup className="w-75">
            <Input
              type="textarea"
              placeholder="Your Message"
              rows="12"
              cols="24"
              name="message"
            />
          </FormGroup>
          <div className="d-flex gap-3">
            <MainButton outline type="submit" value="send">
              send
            </MainButton>
            <MainButton outline type="reset">
              reset
            </MainButton>
          </div>
        </Form>
      </div>
      <div className="d-flex flex-column align-items-center gap-2 p-3">
        <p className="w-75 text-center">
          Meet our brilliant and knowledgeable support team{" "}
        </p>
        <div className=" d-flex justify-content-center flex-wrap">
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-25"
                src="https://media-exp1.licdn.com/dms/image/D4D35AQE1HotOGs040g/profile-framedphoto-shrink_400_400/0/1651757138417?e=1663758000&v=beta&t=xAyleQs-Xc2ZhsMiZZWbPDmpF68tnGRAa_qvJ8jIWjU"
                alt=""
              />
              <p className="pt-3">Fabio Petrella</p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-25"
                src="https://media-exp1.licdn.com/dms/image/D4E35AQF2Xa4r9w-pAQ/profile-framedphoto-shrink_400_400/0/1652795569722?e=1664316000&v=beta&t=PUV2XdBtLctASFI9Xq9ZZzQXh6yRBWN5PM0DqB_VAZk"
                alt=""
              />
              <p className="pt-3">Isra Gonzalez</p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-25"
                src="https://media-exp1.licdn.com/dms/image/D4E35AQGy6gx3t6g67A/profile-framedphoto-shrink_400_400/0/1656620607091?e=1663758000&v=beta&t=NJwnHRVfpEFwTpkB5o09j3u3HDJikuph7fauqzrnnO4"
                alt=""
              />
              <p className="pt-3">William Mallak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
