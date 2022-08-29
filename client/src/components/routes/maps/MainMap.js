import { Button, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {FaLocationArrow} from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMap() {
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );
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
          <Link to='/login' >Login</Link>
      </div>

      <FormGroup >
        <Label>type of charger</Label>
        <strong className="d-flex">
        <Input required name="typeOfCharger" type="select">
          <option value="type01">type01</option>
          <option value="type02">type02</option>
          <option value="type03">type03</option>
        </Input>
        <Button>Filter</Button>
        <Button className="size-s" ><FaLocationArrow/></Button>
        </strong>
      </FormGroup>

    <div>
        Are you traveling?
        <Button onClick={toggle} >calculate a Route</Button>
        <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>

    </div>
  );
}
