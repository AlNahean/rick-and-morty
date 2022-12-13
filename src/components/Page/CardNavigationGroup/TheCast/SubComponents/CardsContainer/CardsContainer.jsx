import React, { useLayoutEffect, useState } from "react";
import SquareSvgBox from "../../../../Shared/Components/SquareSvgCard/SquareSvgCard";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CardsContainer.scss";
const CardsContainer = ({ castsData, searchInput, loading }) => {
  if (loading) {
    return (
      <div className=" cards-container-wrapper center">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (castsData.length < 1) {
    return (
      <div className=" cards-container-wrapper center">
        <h2>No Character Found with the name "{searchInput?.value}"</h2>
      </div>
    );
  }
  return (
    <div className=" cards-container-wrapper">
      <div className=" container">
        <div className=" row">
          {castsData.map((item) => {
            let { image, name, id } = item;
            return (
              <Link
                key={id}
                to={`/cast-details/${id}`}
                className=" col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 position-relative mb-4 link-decoration-none"
              >
                <SquareSvgBox>
                  <div className=" card-body">
                    <img src={image} className=" w-100 h-auto" />
                    <h6 className=" mb-0 mt-3 svg-card-text-limit">{name}</h6>
                  </div>
                </SquareSvgBox>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
