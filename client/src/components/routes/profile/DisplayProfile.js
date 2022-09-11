import React, {useState} from 'react'
import OwnerProfile from "./OwnerProfile";
import useAuth from '../../../context/authContext/useAuth';
import NotAuthorized from '../error/NotAuthorized';
function DisplayProfile() {
const {isAuthenticated} = useAuth();
  return (
    <>
    {isAuthenticated ? <OwnerProfile /> : <NotAuthorized /> }</>
  )
}

export default DisplayProfile