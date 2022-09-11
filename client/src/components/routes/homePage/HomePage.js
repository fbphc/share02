import React from "react";
import mapImg from "../../../img/mapImg.png";

function LandingPage() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <p className="my-3 h1 text-light">WELCOME TO</p>
        <p className="my-3 h1 text-light">EV-<span className="text-warning"><b>C</b></span>ONNECTION</p>
      </div>
      <div className="position-realtive w-75 mx-auto">
        <img src={mapImg} alt="landing-map" className="opacity-50 w-100" />
      </div>
    </>
  );
}

export default LandingPage;
