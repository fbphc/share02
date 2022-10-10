import React from "react";

import { MapStyled } from "../../../components.styled/styledComponents"

function LandingPage() {
  return (
    <>

      <div className="position-realtive mx-auto">
        <MapStyled/>
      </div>
      <div className="text-center position-absolute top-50 start-50 translate-middle">
        <p className="home text-light"> WELCOME TO <br></br>EV-<span className="text-warning"><b>C</b></span>ONNECTION</p>
      </div>
    </>
  );
}

export default LandingPage;
