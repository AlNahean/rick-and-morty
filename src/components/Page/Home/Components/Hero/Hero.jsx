import React from "react";

import "./Hero.scss";
import Cast from "./Cast";

import "swiper/css";

import { GrCirclePlay } from "react-icons/gr";
const Hero = () => {
  return (
    <div className=" hero-section ">
      <div className=" container hero-container">
        <div className=" hero-texts-wrapper center align-items-start align-items-md-center flex-column  position-relative">
          {/*
           **********************************************************************************************************************
           ***************************************** Absolute Positioned Image  **************************************************************
           **********************************************************************************************************************
           */}
          <div className=" gun-png-container">
            <img src="./MediaAsset/HomePage/HeroElements/Gun.png" alt="" />
          </div>

          {/*
           **********************************************************************************************************************
           ***************************************** Top Line Hero Text  **************************************************************
           **********************************************************************************************************************
           */}
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
            <div className=" hero-texts-item hero-and ">
              <img
                src="./MediaAsset/HomePage/HeroElements/pill.png"
                alt=""
                className=" hero-pill-png"
              />
              <h1>&</h1>
            </div>
          </div>

          {/*
           **********************************************************************************************************************
           ***************************************** Bottom Line Hero Text  **************************************************************
           **********************************************************************************************************************
           */}
          <div className=" d-flex hero-texts-container ">
            <div className=" hero-texts-item hero-text-morty">
              <h1>Morty</h1>
            </div>
            <div className=" hero-texts-item">
              <h1>Wiki</h1>
            </div>
          </div>

          {/*
           **********************************************************************************************************************
           ***************************************** Last Button and texts  **************************************************************
           **********************************************************************************************************************
           */}
          <div className=" row hero-bottom-elements">
            <div className=" col-12 col-md-6 mt-3">
              <div className=" d-flex justify-content-start align-content-md-end align-items-center h-100">
                <div className=" watch-now-btn rounded-pill p-2 ps-4 pe-4 rm-gradient-bg d-flex align-items-center">
                  <div className=" ms-2 me-2 watch-now-icon center">
                    <GrCirclePlay />
                  </div>
                  <p className=" mb-0">Watch Now</p>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-6 mt-3 d-flex align-items-center">
              <div className=" d-flex justify-content-start align-items-center ">
                <div
                  className="center"
                  style={{ maxWidth: "364px", fontSize: "0.8rem" }}
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

        {/*
         **********************************************************************************************************************
         ***************************************** Cast Attached to hero  **************************************************************
         **********************************************************************************************************************
         */}
        <Cast />
      </div>
    </div>
  );
};

export default Hero;
