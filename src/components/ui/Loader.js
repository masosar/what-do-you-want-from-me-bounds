import React from "react";
import "../../css/Ui_Loader.css";
import spotlogo from "../../assets/spot_logo.png";

const Loader = () => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="spot-logo">
        <img src={spotlogo} alt="spot logo" width="100px" />
      </div>
    </>
  );
};

export default Loader;
