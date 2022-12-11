import React from "react";

import Episodes from "./Episodes";
import Locations from "./Locations";

import "./BottomContainer.scss";

const BottomContainer = () => {
  return (
    <div className=" container-bottom-wrapper position-relative">
      <img
        className="spiral-image"
        src="./MediaAsset/HomePage/BackgroundElements/Spiral.png"
      />
      <img
        src="./MediaAsset/HomePage/BackgroundElements/Star.png"
        alt=""
        className=" star-image"
      />

      <div className=" container-bottom container ">
        <Episodes />
        {/* Locations */}
        <Locations />
      </div>
    </div>
  );
};

export default BottomContainer;
