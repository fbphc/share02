import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../../../styles/Contact.Module.css";

export default function ContactUs() {
  return (
    <div className="contactContainer p-3 d-flex flex-column gap-5">
      <div className="p-3">
        <h1 className="text-center titles">Contact US</h1>
        <div className="text-wrap text-center">
          <p className="contactParagraph">
            Please get in touch, and our expert support team will answer all
            your questions.
          </p>
        </div>
        <Form className="d-flex flex-column align-items-center">
          <FormGroup className="w-75">
            <Input type="text" placeholder="Full Name" />
          </FormGroup>
          <FormGroup className="w-75">
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup className="w-75">
            <Input type="textarea" placeholder="Your Message" />
          </FormGroup>
          <div className="d-flex gap-3">
            <Button className="submitButton" type="submit">
              send
            </Button>
            <Button className="resetButton" type="reset">
              reset
            </Button>
          </div>
        </Form>
      </div>
      <div className="d-flex flex-column align-items-center gap-3 p-3">
        <p className="w-75 text-center">
          Meet our brilliant and knowledgeable support team{" "}
        </p>
        <div className="d-flex align-items-center justify-content-around">
          <div>
            <img
              className="teamPicture rounded-circle w-25"
              src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
              alt=""
            />
          </div>
          <p className="pt-3">Fabio Petrella</p>
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <div>
          <img
            className="teamPicture rounded-circle w-25"
            src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
            alt=""
          />
          </div>
          <p className="pt-3">Isra Gonzalez</p>
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <div>
          <img
            className="teamPicture rounded-circle w-25"
            src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
            alt=""
          />
          </div>
          <p className="pt-3">William Mallak</p>
        </div>
      </div>
    </div>
  );
}
