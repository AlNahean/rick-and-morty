import React, { useLayoutEffect, useState } from "react";
import SvgBox from "./SvgBox";
import ProxySvgGradiant from "../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";
import "./Test.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import SquareSvgCard from "../Shared/Components/SquareSvgCard/SquareSvgCard";
import RectSvgCard from "../Shared/Components/RectSvgCard/RectSvgCard";
import Header from "../Shared/Components/Header/Header";
import { getSquareColNum } from "../Shared/Functions/ColCount";
// SwiperCore.use([Mousewheel, Navigation]);
// const SwiperNew = new Swiper(".swiper", {
//   // Install modules
//   modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel],
//   speed: 500,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // ...
// });

const Test = () => {
  const [colCount, setColCount] = useState(2);
  useLayoutEffect(() => {
    const getColNum = (size) => {
      if (size < 768) return 2.4;
      if (size < 992) return 3.4;
      if (size < 1200) return 4.4;
      if (size < 1400) return 5.4;
      if (size >= 1400) return 5.4;
    };

    let screenWidth = window.innerWidth;
    let col = getSquareColNum(screenWidth);
    setColCount(col);

    const resizeCalc = () => {
      screenWidth = window.innerWidth;
      col = getSquareColNum(screenWidth);
      setColCount(col);
    };

    window.addEventListener("resize", resizeCalc);
    return () => {};
  }, []);
  return (
    <div className=" test-page bg-dark">
      <Header />
      <div className=" container">
        <div className=" row pt-5">
          <div className=" col-12 d-flex justify-content-center">
            <div
              className=" card w-50 position-relative d-none"
              style={{ minHeight: "10vh" }}
            >
              <SvgBox />
            </div>
          </div>
        </div>

        <div className=" text-white">
          <Swiper
            spaceBetween={40}
            navigation
            slidesPerView={colCount}
            mousewheel
            keyboard
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Mousewheel, Keyboard]}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <SwiperSlide key={item} virtualIndex={index}>
                  <div className="" style={{ minHeight: "10vh" }}>
                    <RectSvgCard>
                      {/* <SquareSvgBox> */}
                      {/* <SvgBox> */}
                      <div className=" card-body">
                        <img
                          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                          className=" w-100 h-auto"
                          alt=""
                        />

                        <h6 className=" mt-3">Rick Sanchez</h6>
                      </div>
                      {/* </SvgBox> */}
                      {/* </SquareSvgBox> */}
                    </RectSvgCard>
                  </div>
                </SwiperSlide>
              );
            })}
            <span slot="container-start">Container Start</span>
            <span slot="container-end">Container End</span>
            <span slot="wrapper-start">Wrapper Start</span>
            <span slot="wrapper-end">Wrapper End</span>
          </Swiper>
        </div>

        {/* must add 1 for gradiant svg path stroke to work */}

        <div className=" w-100  text-white test-card ">a</div>

        <div>
          {/* <svg viewBox="0 0 360 96" fill="none" preserveAspectRatio="none">
            <g>
              <path
                // d="M383.622 22.6425L383.622 249.553C383.622 253.977 381.13 258.023 377.179 260.014L288.087 304.918C286.451 305.742 284.645 306.171 282.814 306.171L44.0934 306.171C37.6231 306.171 32.3779 300.926 32.3779 294.456L32.3779 22.6425C32.3779 16.1722 37.6231 10.9271 44.0933 10.9271L371.907 10.9271C378.377 10.9271 383.622 16.1722 383.622 22.6425Z"
                d="M360 10C360 4.47715 355.523 0 350 0H10C4.47715 0 0 4.47715 0 10V86C0 91.5229 4.47714 96 9.99998 96H310.149C312.368 96 314.523 95.2622 316.277 93.9027L356.128 63.0026C358.57 61.1085 360 58.1911 360 55.0999V10Z"
                // d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41436 284.586 -7.39098e-06 277.907 -7.39098e-06L12.0933 -7.39098e-06C5.41438 -7.39098e-06 8.34465e-06 5.41435 8.34465e-06 12.0933L8.34465e-06 283.907C8.34465e-06 290.586 5.41438 296 12.0933 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z"
                fill="url(#rm-svg-gradient)"
                fillOpacity="0.05"
                stroke="url(#rm-svg-gradient)"
              />
            </g>
          </svg> */}

          <div className="card  gradiant-transparent-border ps-3 pt-2">aaa</div>
        </div>

        {/*  */}
      </div>
      <ProxySvgGradiant />
    </div>
  );
};

export default Test;
