// import { useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import { AiOutlineEdit } from "react-icons/ai";
import useAuth from "../context/authContext/useAuth";
import { Link } from "react-router-dom";

export default function Profile() {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);
  const {userInfo, isAuthenticated} = useAuth();
  return (
    <div>
      {/* <Button onClick={toggle}>
        Edit Profile
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
          <div className="d-flex justify-content-between">
            <p>User Name</p>
            <p>{userInfo.username}</p>
            <AiOutlineEdit />
          </div>
          <div className="d-flex justify-content-between">
            <p>First Name</p>
            <p>{userInfo.fname}</p>
            <AiOutlineEdit />
          </div>
          <div className="d-flex justify-content-between">
            <p>Last Name</p>
            <p>{userInfo.lname}</p>
            <AiOutlineEdit />
          </div>
          <div className="d-flex justify-content-between">
            <p>Email</p>
            <p>{userInfo.email}</p>
            <AiOutlineEdit />
          </div>
          {userInfo.isOwner && 
          <div className="d-flex justify-content-between">
          <p>Address</p>
          <p>{userInfo.address.street}{userInfo.address.houseNr}, {userInfo.address.postalcode} {userInfo.address.city}</p>
          <AiOutlineEdit />
        </div>
          }
          </ModalBody>
        
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
      {isAuthenticated? <div style={{width: "60%", margin: '10rem auto'}}>
      <div className="d-flex justify-content-between border-bottom border-dark">
            <p>User Name</p>
            <p>{userInfo.username}</p>
            <AiOutlineEdit />
          </div>
      <div className="d-flex justify-content-between border-bottom border-dark">
            <p>First Name</p>
            <p>{userInfo.fname}</p>
            <AiOutlineEdit />
          </div>
      <div className="d-flex justify-content-between border-bottom border-dark">
            <p>Last Name</p>
            <p>{userInfo.lname}</p>
            <AiOutlineEdit />
          </div>
      <div className="d-flex justify-content-between border-bottom border-dark">
            <p>Email</p>
            <p>{userInfo.email}</p>
            <AiOutlineEdit />
          </div>
          {userInfo.isOwner && 
          <div className="d-flex justify-content-between border-bottom border-dark">
          <p>Address</p>
          <p>{userInfo.address.street}{userInfo.address.houseNr}, {userInfo.address.postalcode} {userInfo.address.city}</p>
          <AiOutlineEdit />
        </div>
          }
          {userInfo.telNumber && 
          <div className="d-flex justify-content-between border-bottom border-dark">
          <p>Phone Number</p>
          <p>{userInfo.telNumber}</p>
          <AiOutlineEdit />
        </div>
          }
          </div> : <p>please login to see the content of this page</p>}
    </div>
  );
}
