import React, { useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import "./Locations.scss";
import RectSvgBox from "../../../Shared/Components/RectSvgCard/RectSvgCard";
import { useGlobalContext } from "../../../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

const Locations = () => {
  const { colCount, setColCount } = useGlobalContext();
  const [locationsData, setLocationsData] = useState([]);

  useLayoutEffect(() => {
    const getLocations = async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/location?page=1"
      );
      setLocationsData(data.results);
    };
    getLocations();
    return () => {};
  }, []);
  return (
    <div className=" locations-slide-wrapper mt-3">
      <div className=" slide-header w-100 d-flex justify-content-between align-items-center">
        <div>
          <h5>Location</h5>
        </div>
        <div>
          <Link
            to={`/locations?page=1`}
            className=" btn gradiant-bg-and-semi-rounded-border link-decoration-none"
          >
            See more
          </Link>
        </div>
      </div>
      <div className=" w-100 ">
        <Swiper
          spaceBetween={50}
          slidesPerView={colCount.rectColNum}
          navigation
          modules={[Navigation]}
        >
          {locationsData.map((item, index) => {
            let { id, name } = item;
            return (
              <SwiperSlide key={index}>
                <Link
                  to={`/location-details/${id}`}
                  className=" link-decoration-none"
                >
                  <RectSvgBox>
                    {/* <div className=" item"> </div> */}
                    <div className=" p-3">
                      <h6 className=" ">#{id}</h6>
                      <h4 className="svg-card-text-limit mb-0">{name}</h4>
                    </div>
                  </RectSvgBox>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Locations;
