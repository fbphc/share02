import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/authContext/useAuth";
import { typeOfStreetDataset } from "../../../dataset/dataset.js";
import axios from "axios";

function EditProfile() {
  const { userInfo, editUserProfile } = useAuth();
  const navigate = useNavigate();

  // show and hide wall-box owner state
  const [registerToggle, setRegisterToggle] = useState(false);
 
  // register information state
  const [registerForm, setRegisterForm] = useState({});

  useEffect(() => {
    if (userInfo.isOwner) {
      setRegisterForm({...userInfo, _id:""});
      setRegisterToggle(true);
    }
  }, []);

  function registerFormHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevState) => {
      return { ...prevState, [element]: value };
    });
  }
/* console.log(registerForm) */



  // address changes function
  function addressHandler(e) {
    const element = e.target.name;
    const value = e.target.value;
    setRegisterForm((prevState) => {
      return {
        ...prevState,
        address: { ...prevState.address, [element]: value },
      };
    });
  }
  /****** IMAGES ***** */
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "schoolGroup");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/schoolgroupfinal/image/upload",
        formData
      )
      .then((response) =>
        setRegisterForm({ ...registerForm, imgProfile: response.data.url })
      )
      .catch((err) => {
        setRegisterForm({ ...registerForm, imgProfile: "no_photo" });
        return console.log(err);
      });
  };
  /********************* */

  function submit(e) {
    e.preventDefault()
    
    editUserProfile(registerForm)
  }


  return (
    <Form>
      <p className="h1 text-light text-center">Edit Profile</p>
      <div onChange={(e) => registerFormHandler(e)}>
        <FormGroup>
          <div className="d-flex align-items-center gap-1">
            <Input
              className="h1 mr-1"
              type="file"
              onChange={(e) => setImageSelected(e.target.files[0])}
            />

            {registerForm.imgProfile !== "no_photo" ? (
              <AiFillCheckCircle className="h1 text-warning" />
            ) : (
              <AiFillCheckCircle className="h1 text-light" />
            )}
          </div>
          <Button color="warning" outline onClick={uploadImage}>
            Upload Image
          </Button>
        </FormGroup>
        {userInfo.isOwner ? (
          <FormGroup onChange={() => setRegisterToggle(!registerToggle)}>
            <Input name="isOwner" type="select">
              <option value={true}>Wall-Box Owner</option>
              <option value={false}>Car Owner</option>
            </Input>
          </FormGroup>
        ) : (
          <FormGroup onChange={() => setRegisterToggle(!registerToggle)}>
            <Input required name="isOwner" type="select">
              <option value={true}>Wall-Box Owner</option>
              <option value={false}>Car Owner</option>
            </Input>
          </FormGroup>
        )}
        <FormGroup>
          <Input
          
            name="username"
            placeholder={userInfo.username}
            type="text"
            maxLength={16}
          />
        </FormGroup>
        <div className="d-flex gap-2">
          <FormGroup>
            <Input
            
              name="fname"
              placeholder={userInfo.fname}
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
            
              name="lname"
              placeholder={userInfo.lname}
              type="text"
            />
          </FormGroup>
        </div>

        {registerToggle && (
          <>
            <div onChange={(e) => registerFormHandler(e)}>
              <FormGroup>
                <Label>type of charger</Label>
                <Input name="typeOfCharger" type="select">
                  <option value="type01">type01</option>
                  <option value="type02">type02</option>
                  <option value="type03">type03</option>
                  <option value="type04">type04</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>availability</Label>
                <Input name="availability" type="select">
                  <option value="whole_week">Whole Week</option>
                  <option value="not_weekend">Not on the Weekend</option>
                  <option value="night_avaiable">Night Availability</option>
                </Input>
              </FormGroup>
            </div>

            <div onChange={(e) => addressHandler(e)}>
              <Label className="">
                {" "}
                <b>Address</b>
              </Label>

              <FormGroup>
                <Input
                
                  name="city"
                  placeholder={userInfo.address.city}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="">
                <Input
                
                  name="street"
                  placeholder={userInfo.address.street}
                  type="text"
                />
              </FormGroup>
              <FormGroup className="">
                <Input name="type" type="select">
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

              <div className="d-flex gap-2">
                <FormGroup className="w-25">
                  <Input
                  
                    name="houseNr"
                    placeholder={userInfo.address.houseNr}
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="w-75">
                  <Input
                  
                    name="postalcode"
                    placeholder={userInfo.address.postalcode}
                    type="text"
                  />
                </FormGroup>
              </div>
            </div>
          </>
        )}
        <Button color="warning" outline onClick={submit}>
          Edit
        </Button>
      </div>
    </Form>
  );
}

export default EditProfile;
