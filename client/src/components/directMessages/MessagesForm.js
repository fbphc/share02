import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from "reactstrap";
import { MainButton } from "../../components.styled/styledComponents";
import { useLocation } from "react-router-dom";

function MessagesForm() {
  const initState = {message:"", fromUser: "", toUser:""}
  const location = useLocation();
  const pathUrl = location.pathname;
  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  const [message, setMessage] = useState(initState)

  function inputHandler (e){
    
    setMessage((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  }
  
  function submit(e){
    console.log(message);
    
  }
  return (
    <div>
      {JSON.parse(localStorage.getItem("user")).id !==
        +pathUrl.split("/userProfile/")[1] && (
        <MainButton color="danger" className="mt-3" onClick={toggle}>
          Contact User
        </MainButton>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Your Message</ModalHeader>
        <ModalBody className="secondary darkText">
        <Form>
  <FormGroup>
  <Input
  onChange={inputHandler}
      rows="6"
      name="text"
      type="textarea"
    />
  </FormGroup>
  </Form>
        </ModalBody>
        <ModalFooter  className="secondary darkText">
          <MainButton  onClick={submit} type="submit">
            Send
          </MainButton>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MessagesForm;
