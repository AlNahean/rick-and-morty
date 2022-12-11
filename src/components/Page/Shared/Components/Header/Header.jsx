import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className=" proxy-header"></div>
      <Link
        to="/"
        className=" container d-flex justify-content-center align-items-center header fixed-top"
      >
        <img
          src="/MediaAsset/Logo.png"
          alt=""
          srcset=""
          className=" h-75 w-auto"
        />
      </Link>
    </div>
  );
};

export default Header;
