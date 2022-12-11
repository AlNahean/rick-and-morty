import React from "react";
import RectSvgBox from "../../../Shared/Components/RectSvgCard/RectSvgCard";
import "./CardsContainer.scss";
import { Link } from "react-router-dom";
const CardsContainer = ({ episodesData }) => {
  return (
    <div className=" locations-cards-wrapper">
      <div className=" container">
        <div className=" row">
          {episodesData.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/episode-details/${item.id}`}
                className=" col-12 col-md-6 col-xxl-4 mb-3 link-decoration-none"
              >
                <RectSvgBox>
                  <div className=" card-body">
                    <h6 className=" mb-0">#{item.episode}</h6>
                    <h4 className=" svg-card-text-limit ">{item.name}</h4>
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
