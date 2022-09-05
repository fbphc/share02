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
  const [chargerFilter, setChargerFilter] = useState({
    typeOfCharger: "all",
  });

  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  return (
    <div>
      <MainMapComp chargerFilter={chargerFilter} />

      <div>
        To see wall-boxes addresses please
        <Link to="/login"> Log-In</Link>
      </div>
      <FormGroup>
        <Label>Filter By Charger</Label>
        <strong className="d-flex">
          <Input
            required
            name="typeOfCharger"
            type="select"
            onChange={(e) =>
              setChargerFilter({
                ...chargerFilter,
                typeOfCharger: e.target.value,
              })
            }
          >
            <option value="all">All</option>
            <option value="type01">type01</option>
            <option value="type02">type02</option>
            <option value="type03">type03</option>
          </Input>
        </strong>
      </FormGroup>

      <div>
        Are you traveling?
        <Button onClick={toggle}>calculate a Route</Button>
        <ModalSearchRoute modal={modal} toggle={toggle} />
      </div>
    </div>
  );
}
export default MainMap;
