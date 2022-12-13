import React, { useState } from "react";
import "./NavigationHeader.scss";
import { BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const pageArray = [
  { id: 1, name: "The Cast", link: "the-cast" },
  { id: 2, name: "Locations", link: "locations" },
  { id: 3, name: "Episodes", link: "episodes" },
];
const NavigationHeader = ({
  heading,
  handleSearchInputChange,
  searchInput,
}) => {
  const navigate = useNavigate();
  const [showOptins, setShowOptions] = useState(false);

  return (
    <div className=" navigation-header-wrapper ">
      <div className="navigation-header-container container d-flex justify-content-between align-items-center text-white">
        <div>
          <h4 className=" mb-0">{heading}</h4>
        </div>
        <div className=" joint-box-wrapper gradiant-transparent-rounded-border">
          {showOptins && (
            <div className=" main-nav-options-wrapper">
              <div className=" main-nav-options  d-flex flex-column align-items-center justify-content-center pt-3">
                {pageArray.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" cursor-pointer"
                      onClick={() => {
                        navigate(`/${item.link}?page=1`);
                        setShowOptions(false);
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="joint-box ">
            <div
              className=" main-nav position-relative cursor-pointer"
              onClick={(e) => {
                setShowOptions(!showOptins);
              }}
            >
              <div>{heading}</div>
              <div>
                <BsChevronDown />
              </div>
            </div>
            <div className=" search-box">
              <div className=" icon-container">
                <BiSearchAlt />
              </div>
              <input
                type="text"
                className=" search-input form-control"
                placeholder=" Search "
                value={searchInput.value}
                onChange={(e) => {
                  handleSearchInputChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
