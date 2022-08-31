import { useState } from "react";
import { Link } from "react-router-dom";
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

import MainMapComp from "../mainMap/MainMapComp.js";
import ModalSearchRoute from "./ModalSearchRoute.js";


function MainMap() {
const [chargerFilter, setChargerFilter] = useState({typeOfCharger: "type01", filter: false})
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);


  return (
    <div>
      <MainMapComp chargerFilter={chargerFilter} setChargerFilter={setChargerFilter} />

      <div>
        To see wall-boxes addresses please login
        <Link to="/login">Login</Link>
      </div>
      <FormGroup>
        <Label>type of charger</Label>
        <strong className="d-flex">
          <Input required name="typeOfCharger" type="select" onChange={(e)=> setChargerFilter({...chargerFilter, typeOfCharger: e.target.value})}>
            <option value="type01">type01</option>
            <option value="type02">type02</option>
            <option value="type03">type03</option>
          </Input>
        </strong>
          <Button onClick={()=> setChargerFilter({...chargerFilter, filter: true})}>Filter</Button>
      </FormGroup>

      <div>
        Are you traveling?
        <Button onClick={toggle}>
          calculate a Route
        </Button>
        <ModalSearchRoute modal={modal} toggle={toggle} />
      </div>
    </div>
  );
}
export default MainMap;
