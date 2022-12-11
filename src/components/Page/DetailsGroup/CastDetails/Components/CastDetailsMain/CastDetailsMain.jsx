import React from "react";
import { Link } from "react-router-dom";
import GradientBox from "../../../../Shared/Components/GradientBox/GradientBox";
import "./CastDetailsMain.scss";

const CastDetailsMain = ({ castDetails }) => {
  let {
    name,
    image,
    status,
    species,
    gender,
    origin,
    location,
    fetchedLocation,
  } = castDetails;
  // console.log("aa", castDetails);
  return (
    <div className=" cast-details-main-wrapper">
      <div className=" cast-details-container container">
        <div className=" row">
          <div className=" col-12 col-md-6 center ">
            <div className=" d-flex flex-column justify-content-center align-items-center ">
              <h1 className=" mb-4">{name}</h1>
              <div className=" w-75">
                <GradientBox>
                  <div className=" card-body p-5">
                    <img
                      src={image}
                      className=" w-100 h-auto"
                      alt=""
                      srcset=""
                    />
                  </div>
                </GradientBox>
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 center cast-info">
            <div className="bg-info-item status">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <img
                    src="/MediaAsset/CastDetails/Icons/PNG/Status.png"
                    alt=""
                    className="image-icon"
                  />

                  <p className=" mb-0">status</p>
                  <h3 className=" mb-0">{status}</h3>
                </div>
              </GradientBox>
            </div>
            <div className="bg-info-item species">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <img
                    src="/MediaAsset/CastDetails/Icons/PNG/Species.png"
                    alt=""
                    className="image-icon"
                  />

                  <p className=" mb-0">Species</p>
                  <h3 className=" mb-0">{species}</h3>
                </div>
              </GradientBox>
            </div>
            <div className="bg-info-item gender">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <img
                    src="/MediaAsset/CastDetails/Icons/PNG/Gender.png"
                    alt=""
                    className="image-icon"
                  />

                  <p className=" mb-0">Gender</p>
                  <h3 className=" mb-0">{gender}</h3>
                </div>
              </GradientBox>
            </div>
            <div className="bg-info-item origin">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <img
                    src="/MediaAsset/CastDetails/Icons/PNG/Origin.png"
                    alt=""
                    className="image-icon"
                  />

                  <p className=" mb-0">Origin</p>
                  <Link
                    to={`/location-details/${origin?.id}`}
                    className=" d-flex justify-content-between align-items-center link-decoration-none"
                  >
                    <h3 className=" mb-0">{origin?.name}</h3>
                    <img
                      src="/MediaAsset/CastDetails/Icons/PNG/Redirect.png"
                      alt=""
                      className="image-icon"
                    />
                  </Link>
                </div>
              </GradientBox>
            </div>
            <div className="bg-info-item last-location">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <img
                    src="/MediaAsset/CastDetails/Icons/PNG/Location.png"
                    alt=""
                    className="image-icon"
                  />

                  <p className=" mb-0">Last known Location</p>
                  <Link
                    to={`/location-details/${location?.id}`}
                    className=" w-100 d-flex justify-content-between align-items-center link-decoration-none"
                  >
                    <h3 className=" mb-0">{location?.name}</h3>
                    <img
                      src="/MediaAsset/CastDetails/Icons/PNG/Redirect.png"
                      alt=""
                      className="image-icon"
                    />
                  </Link>
                </div>
              </GradientBox>
            </div>
            <div className="bg-info-item episodes">
              <GradientBox>
                <div className=" card-body d-flex flex-column ">
                  <svg
                    viewBox="0 0 40 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" image-icon"
                  >
                    <path
                      d="M40 29V33H0V29H40ZM0 0L16 10L0 20V0ZM40 15V19H20V15H40ZM40 1V5H20V1H40Z"
                      fill="url(#paint0_linear_15_14)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_15_14"
                        x1="-3.7647"
                        y1="-6.54311"
                        x2="44.6761"
                        y2="3.24157"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9DFE00" />
                        <stop offset={1} stopColor="#14D9E6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p className=" mb-0">Episodes</p>

                  <div className=" episodes-list d-flex flex-column">
                    {fetchedLocation &&
                      fetchedLocation?.map((item) => {
                        return (
                          <Link
                            to={`/episode-details/${item.id}`}
                            className=" mb-0 link-decoration-none h4"
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </GradientBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailsMain;
