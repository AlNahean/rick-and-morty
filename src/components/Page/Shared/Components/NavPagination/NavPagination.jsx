import React, { useState, useLayoutEffect } from "react";
import "./NavPagination.scss";

import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
const NavPagination = ({ pageInfo, handleNavClick, pageCount }) => {
  useLayoutEffect(() => {
    return () => {};
  }, []);
  return (
    <div className=" nav-pagination-wrapper">
      <div className=" nav-pagination-container container center">
        <div>Page</div>
        <div
          onClick={() => {
            handleNavClick("prev");
          }}
          className={` prev-btn nav-btn ${
            !pageInfo?.prev && "nav-btn-disabled"
          }  `}
        >
          <HiArrowSmLeft />
        </div>
        <div className=" current-page gradiant-bg-and-rounded-border p-1 ps-4 pe-4">
          {pageCount}
        </div>
        <div
          onClick={() => {
            handleNavClick("next");
          }}
          className={` next-btn nav-btn ${
            !pageInfo?.next && "nav-btn-disabled"
          }`}
        >
          <HiArrowSmRight />
        </div>
        <div className=" page-count">0f {pageInfo?.pages}</div>
      </div>
    </div>
  );
};

export default NavPagination;
