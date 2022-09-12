import React from "react";
import mapImg from "../../../img/mapImg.png";

function LandingPage() {
  return (
    <>
      
      <div className="position-realtive w-75 mx-auto mt-5 imageCSS">
        <img src={mapImg} alt="landing-map" className="opacity-75 w-100" />
      </div>
      <div className="text-center mt-5">
        <p className="my-3 h1 text-light"> WELCOME TO <br></br>EV-<span className="text-warning"><b>C</b></span>ONNECTION</p>
      </div>
    </>
  );
}

export default LandingPage;
