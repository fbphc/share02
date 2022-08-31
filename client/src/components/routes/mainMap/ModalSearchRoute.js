import React, {useState} from 'react'

import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

import {typeOfStreet} from "../../../dataset/dataset.js"

function ModalSearchRoute({modal,toggle}) {
  const [routeForm, setRouteForm] = useState({
    city: "",
    street: "",
    houseNr: "",
    state: "Germany",
    statecode: "DE",
    type: 'strasse'
  });
  function submit(e) {
    e.preventDefault();
    const isIncluded = typeOfStreet.filter((item) => routeForm.street.toLowerCase().includes(item));
    if(isIncluded.length > 0){
      alert(`please enter ${isIncluded} in the next field`)
    } else{
      console.log(routeForm);
    }
  }

  function routeChangeHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRouteForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }

  return (
    <Modal isOpen={modal} toggle={toggle} /* external={externalCloseBtn} */>
          <Form onSubmit={(e) => submit(e)}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
              <div onChange={(e) => routeChangeHandler(e)}>
                <FormGroup>
                  <Label>From</Label>
                  <Input
                    required
                    name="street"
                    placeholder="street"
                    type="text"
                  />
                  <Input required name="type" type="select">
                  <option value="strasse">strasse</option>
                <option value="damm">damm</option>
                <option value="alle">alle</option>
                <option value="chaussee">chaussee</option>
                <option value="gasse">gasse</option>
                <option value="landstrasse">landstrasse</option>
                <option value="pfad">pfad</option>
                <option value="platz">platz</option>
                <option value="ring">ring</option>
                <option value="steig">steig</option>
                <option value="ufer">ufer</option>
                <option value="weg">weg</option>
                <option value="zeile">zeile</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    required
                    name="houseNr"
                    placeholder="houseNr"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input required name="city" placeholder="city" type="text" />
                </FormGroup>
                <FormGroup>
                  <Label for="address">to</Label>
                  <Input
                    required
                    name="street"
                    placeholder="street"
                    type="text"
                  />
                  <Input required name="type" type="select">
                    <option>strasse</option>
                    <option>damm</option>
                    <option>alle</option>
                    <option>chaussee</option>
                    <option>gasse</option>
                    <option>landstrasse</option>
                    <option>pfad</option>
                    <option>platz</option>
                    <option>ring</option>
                    <option>steig</option>
                    <option>ufer</option>
                    <option>weg</option>
                    <option>zeile</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    required
                    name="houseNr"
                    placeholder="houseNr"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input required name="city" placeholder="city" type="text" />
                </FormGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" /* onClick={toggle} */ type="submit">
                calculate
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
  )
}

export default ModalSearchRoute