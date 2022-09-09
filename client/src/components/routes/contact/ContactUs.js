import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import emailjs from "@emailjs/browser";

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
          className="d-flex flex-column align-items-center"
          // ref={form}
          onSubmit={sendEmail}
          onChange={contactHandler}
        >
          <FormGroup className="">
            <Input
              type="text"
              placeholder="Full Name"
              autoComplete=""
              name="user_name"
            />
          </FormGroup>
          <FormGroup className="">
            <Input
              type="email"
              placeholder="Email"
              autoComplete=""
              name="email"
            />
          </FormGroup>
          <FormGroup className="">
            <Input
              type="textarea"
              placeholder="Your Message"
              rows="12"
              cols="24"
              name="message"
            />
          </FormGroup>
          <div className="d-flex gap-3">
            <Button color="warning" outline type="submit" value="send">
              send
            </Button>
            <Button color="warning" outline type="reset">
              reset
            </Button>
          </div>
        </Form>
      </div>
      <div className="d-flex flex-column align-items-center gap-3 p-3">
        <p className="w-75 text-center">
          Meet our brilliant and knowledgeable support team{" "}
        </p>
        <div className=" d-flex justify-content-center flex-wrap gap-5 ">
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-50"
                src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
                alt=""
              />
              <p className="pt-3">Fabio Petrella</p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-50"
                src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
                alt=""
              />
              <p className="pt-3">Isra Gonzalez</p>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <img
                className="teamPicture rounded-circle w-50"
                src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
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
