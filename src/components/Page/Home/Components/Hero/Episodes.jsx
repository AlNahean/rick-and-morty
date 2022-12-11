import React, { useState, useLayoutEffect } from "react";
import "./Episodes.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import RectSvgBox from "../../../Shared/Components/RectSvgCard/RectSvgCard";
// import "swiper/css";
import { useGlobalContext } from "../../../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
const Episodes = () => {
  const { colCount, setColCount } = useGlobalContext();
  const [episodesData, setEpisodesData] = useState([]);

  useLayoutEffect(() => {
    const getEpisodes = async () => {
      let { data } = await axios.get(
        "https://rickandmortyapi.com/api/episode?page=1"
      );
      setEpisodesData(data.results);
      console.log(data);
    };

    getEpisodes();
    return () => {};
  }, []);
  return (
    <div className=" episodes-slide-wrapper mt-3">
      <div className=" slide-header w-100 d-flex justify-content-between align-items-center">
        <div>
          <h5>Episodes</h5>
        </div>
        <div>
          <Link
            to={`/episodes?page=1`}
            className=" btn gradiant-bg-and-semi-rounded-border link-decoration-none"
          >
            See more
          </Link>
        </div>
      </div>
      <div className=" h-100 w-100 center">
        <Swiper
          spaceBetween={50}
          slidesPerView={colCount.rectColNum}
          navigation
          modules={[Navigation]}
        >
          {episodesData.map((item) => {
            let { episode, name, id } = item;
            return (
              <SwiperSlide>
                <Link
                  to={`/episode-details/${id}`}
                  className="link-decoration-none"
                >
                  <RectSvgBox>
                    <div className=" p-3">
                      <p className=" mb-0">{episode}</p>
                      <h3 className="svg-card-text-limit">{name}</h3>
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

export default Episodes;
