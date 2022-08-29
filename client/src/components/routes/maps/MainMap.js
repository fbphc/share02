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
import {BiCurrentLocation} from 'react-icons/bi'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMap() {
  const [modal, setModal] = useState(false);
  const [routeForm, setRouteForm] = useState({
    firstAddress: "",
    secondAddress: "",
  });

  const toggle = () => setModal(!modal);

  function submit(e) {
    e.preventDefault();
    console.log(routeForm);
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
        <Button color="primary" onClick={toggle}>calculate a Route</Button>
        <Modal isOpen={modal} toggle={toggle} /* external={externalCloseBtn} */>
            <Form onSubmit={(e) => submit(e)}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
              <div onChange={(e) => routeChangeHandler(e)}>
                <FormGroup style={{position: "relative"}}>
                  <Label for="address">From</Label>
                  <Input
                    required
                    name="firstAddress"
                    placeholder="street, House Number, PLZ, City"
                    type="text"
                  />
                  <BiCurrentLocation style={{position: "absolute", top: "60%", right: "3%"}}/>
                </FormGroup>
                <FormGroup>
                  <Label for="address">to</Label>
                  <Input
                    required
                    name="secondAddress"
                    placeholder="street, House Number, PLZ, City"
                    type="text"
                  />
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
