import React, { useLayoutEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Keyboard } from "swiper";
// import "swiper/css";
import axios from "axios";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SquareSvgCard from "../../../Shared/Components/SquareSvgCard/SquareSvgCard";
import { useGlobalContext } from "../../../../Context";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
const Cast = () => {
  const { colCount, setColCount } = useGlobalContext();
  const [castsData, setCastsData] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const getCasts = async () => {
      let { data } = await axios.get(
        "https://rickandmortyapi.com/api/character/?page=1"
      );
      setCastsData(data.results);
    };
    getCasts();

    return () => {};
  }, []);
  return (
    <div className=" hero-cast-wrapper">
      <div className=" w-100 d-flex justify-content-between align-items-center">
        <div>
          <h5>Meet The Cast</h5>
        </div>
        <div>
          <Link
            to="/the-cast?page=1"
            className=" btn gradiant-bg-and-semi-rounded-border link-decoration-none "
          >
            See more
          </Link>
        </div>
      </div>
      <div className=" mt-3">
        <Swiper
          spaceBetween={40}
          navigation
          slidesPerView={colCount.squareColNum}
          keyboard
          modules={[Navigation, Keyboard]}
        >
          {castsData.map((item, index) => {
            let { name, image } = item;
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <Link
                  to={`/cast-details/${item.id}`}
                  className="link-decoration-none"
                >
                  <SquareSvgCard>
                    <div className=" card-body">
                      <img src={image} className=" w-100 h-auto" alt="" />

                      <h6 className=" mt-3 svg-card-text-limit">{name}</h6>
                    </div>
                  </SquareSvgCard>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Cast;
