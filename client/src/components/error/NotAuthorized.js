import React from "react";
import lock from "../../img/lock_black_red.png"
function NotAuthorized() {
  return (
    <div>
      <p  className="secondary text-light text-center mt-5 h3">To Access This Area</p>
      <div className="w-25 mx-auto">
        <img src={lock} alt="lock" className="w-75 mx-auto d-block my-3" />
      </div>
      <p  className="secondary text-light text-center mt-3 h3 ">Please <span className="danger">Log-In</span> or  <span className="danger">Sign-Up</span></p>
    
    </div>
  );
}

export default NotAuthorized;
