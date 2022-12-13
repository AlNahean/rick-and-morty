import React, { useState, useLayoutEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../Context";
const Header = () => {
  const { showBg } = useGlobalContext();
  return (
    <div>
      <div className=" proxy-header"></div>
      <div
        className={`fixed-top ${showBg && "header-gradient-transparent-bg"}`}
      >
        <div className=" container d-flex justify-content-center align-items-center header">
          <Link to="/" className=" h-100 center">
            <img src="/MediaAsset/Logo.png" alt="" className=" h-75 w-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
