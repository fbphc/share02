import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../../../styles/Contact.Module.css";

export default function ContactUs() {
  return (
    <div>
      <h1 className="text-center">Contact US</h1>
      <div className="text-wrap text-center">
        <p>Please get in touch, and our expert support team will answer all your questions.</p>
      </div>
      <Form>
        <FormGroup>
          <Input type="text" placeholder="Full Name" />
        </FormGroup>
        <FormGroup>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" placeholder="Your Message" />
        </FormGroup>
        <Button type="submit">send</Button>
        <Button type="reset">reset</Button>
      </Form>
      <div className="d-flex flex-column align-items-center gap-3">
        <p className="w-75 text-center">Meet our brilliant and knowledgeable support team </p>
        <div className="w-75 d-flex align-items-center justify-content-around">
          <img
            className="w-25 rounded-circle"
            src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
            alt=""
          />
          <p className="pt-3">Fabio Petrella</p>
        </div>
        <div className="w-75 d-flex align-items-center justify-content-around">
          <img
            className="w-25 rounded-circle"
            src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
            alt=""
          />
          <p className="pt-3">Isra Gonzalez</p>
        </div>
        <div className="w-75 d-flex align-items-center justify-content-around">
          <img
            className="w-25 rounded-circle"
            src="https://hackster.imgix.net/uploads/attachments/343030/koala_G4GPA7y9TY.jpg?auto=compress%2Cformat&w=200&h=200&fit=min"
            alt=""
          />
          <p className="pt-3">William Mallak</p>
        </div>
      </div>
    </div>
  );
}
