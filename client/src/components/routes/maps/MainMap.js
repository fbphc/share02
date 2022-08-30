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
// import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMap() {
  const typeOfStreet = [
    "strasse",
    "straße",
    "str",
    "damm",
    "alle",
    "chaussee",
    "gasse",
    "landstrasse",
    "landstraße",
    "pfad",
    "platz",
    "ring",
    "steig",
    "ufer",
    "weg",
    "zeile",
  ];
  const [modal, setModal] = useState(false);

  const [routeForm, setRouteForm] = useState({
    city: "",
    street: "",
    houseNr: "",
    state: "Germany",
    statecode: "DE",
    type: 'strasse'
  });

  const toggle = () => setModal(!modal);

  function submit(e) {
    e.preventDefault();
    const isIncluded = typeOfStreet.filter((item) => routeForm.street.includes(item));
    if(isIncluded.length > 0){
      alert('please enter the type of street in the next field')
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

  // const externalCloseBtn = (
  //   <button
  //     type="button"
  //     className="close"
  //     style={{ position: "absolute", top: "15px", right: "15px" }}
  //     onClick={toggle}
  //   >
  //     &times;
  //   </button>
  // );
  return (
    <div>
      <div style={{ width: "100%", height: "50%" }}>
        <img
          style={{ width: "100%" }}
          src="https://deih43ym53wif.cloudfront.net/area-map-of-germany_0b4a243cf6.png"
          alt=""
        />
      </div>

      <div>
        To see wall-boxes addresses please login
        <Link to="/login">Login</Link>
      </div>

      <FormGroup>
        <Label>type of charger</Label>
        <strong className="d-flex">
          <Input required name="typeOfCharger" type="select">
            <option value="type01">type01</option>
            <option value="type02">type02</option>
            <option value="type03">type03</option>
          </Input>
          <Button color="primary">Filter</Button>
          {/* <Button className="size-s">
            <FaLocationArrow />
          </Button> */}
        </strong>
      </FormGroup>

      <div>
        Are you traveling?
        <Button color="primary" onClick={toggle}>
          calculate a Route
        </Button>
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
      </div>
    </div>
  );
}
