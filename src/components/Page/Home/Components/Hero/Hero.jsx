import React from "react";
import Episodes from "./Episodes";
import Locations from "./Locations";
import "./Hero.scss";
import Cast from "./Cast";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Hero = () => {
  return (
    <div className=" hero-section ">
      <div className=" container h-100 hero-container">
        <div className=" hero-texts-wrapper center align-items-start align-items-md-center flex-column  position-relative">
          <div className=" gun-png-container">
            <img src="./MediaAsset/HomePage/HeroElements/Gun.png" alt="" />
          </div>
          <div className=" d-flex hero-texts-container">
            <div className=" hero-texts-item hero-the">
              <h1>The</h1>
              <img
                src="./MediaAsset/HomePage/HeroElements/bubble.png"
                alt=""
                className=" hero-the-bubble"
              />
            </div>
            <div className=" hero-texts-item hero-morty-png-container">
              <img
                src="./MediaAsset/HomePage/HeroElements/portal.png"
                className=" hero-morty-png"
                alt=""
              />
            </div>
            <div className=" hero-texts-item ">
              <h1 className=" gradiant-bg-clip hero-rick-text">Rick</h1>
            </div>
            <div className=" hero-texts-item hero-and">
              <h1>&</h1>
            </div>
          </div>
          <div className=" d-flex hero-texts-container ">
            <div className=" hero-texts-item hero-text-morty">
              <h1>Morty</h1>
            </div>
            <div className=" hero-texts-item">
              <h1>Wiki</h1>
            </div>
          </div>
          <div className=" row">
            <div className=" col-12 col-md-6 mt-3">
              <div className=" d-flex justify-content-start align-content-md-end align-items-center h-100">
                <div className=" rounded-pill p-2 ps-4 pe-4 rm-gradient-bg">
                  Watch Now
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 mt-3">
              <div className=" d-flex justify-content-start align-items-center ">
                <div
                  className=" text-md-center"
                  style={{ maxWidth: "364px", fontSize: "0.7rem" }}
                >
                  <p className=" mb-0 text-skyblue">
                    Brilliant but boozy scientist Rick hijacks his fretful
                    teenage grandson, Morty, for wild escapades in other worlds
                    and alternate dimensions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cast />
      </div>
    </div>
  );
};

export default Hero;