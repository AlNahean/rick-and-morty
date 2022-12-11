import React from "react";
import RectSvgBox from "../../../Shared/Components/RectSvgCard/RectSvgCard";
import "./CardsContainer.scss";
import { Link } from "react-router-dom";
const CardsContainer = ({ episodesData }) => {
  return (
    <div className=" locations-cards-wrapper">
      <div className=" container">
        <div className=" row">
          {episodesData.map((item) => {
            console.log(item);
            return (
              <Link
                to={`/episode-details/${item.id}`}
                className=" col-12 col-md-6 col-xxl-4 mb-3 link-decoration-none"
              >
                <RectSvgBox>
                  <div className=" card-body">
                    <p className=" mb-0">#{item.episode}</p>
                    <h3 className=" mb-0 svg-card-text-limit ">{item.name}</h3>
                  </div>
                </RectSvgBox>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
