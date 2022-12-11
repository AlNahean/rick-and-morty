import React from "react";
import "./GradientBox.scss";

const GradientBox = ({ children }) => {
  return (
    <div className=" gradient-box-wrapper card gradiant-box-transparent-rounded h-100 w-100">
      <div style={{ zIndex: 10 }} className=" position-relative">
        {children}
      </div>
    </div>
  );
};

export default GradientBox;
