import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
import { useGlobalContext } from "../../../../../Context";

import SquareSvgCard from "../../../../Shared/Components/SquareSvgCard/SquareSvgCard";
import { Link } from "react-router-dom";
const Characters = ({ characters }) => {
  const { colCount } = useGlobalContext();

  return (
    <div className=" col-12">
      <div className=" d-flex justify-content-between align-items-center">
        <div className=" h1">Characters ({characters?.length})</div>
      </div>
      <Swiper
        spaceBetween={40}
        navigation
        slidesPerView={colCount.squareColNum}
        keyboard
        modules={[Navigation, Keyboard]}
      >
        {characters &&
          characters.map((item, index) => {
            let { name, image } = item;
            return (
              <SwiperSlide key={item.id} virtualIndex={index}>
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
  );
};

export default Characters;
