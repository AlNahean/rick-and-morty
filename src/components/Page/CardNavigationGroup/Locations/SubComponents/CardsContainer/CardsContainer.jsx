import React from "react";
import RectSvgBox from "../../../../Shared/Components/RectSvgCard/RectSvgCard";
import { Link } from "react-router-dom";
const CardsContainer = ({ locationsData, searchInput, loading }) => {
  if (loading) {
    return (
      <div className=" cards-container-wrapper center">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (locationsData.length < 1) {
    return (
      <div className=" cards-container-wrapper center">
        <h2>No Location Found with the name "{searchInput?.value}"</h2>
      </div>
    );
  }
  return (
    <div className=" locations-cards-wrapper">
      <div className=" container">
        <div className=" row">
          {locationsData.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/location-details/${item.id}`}
                className=" col-12 col-md-6 col-xxl-4 mb-3 link-decoration-none"
              >
                <RectSvgBox>
                  <div className=" card-body">
                    <h6 className=" mb-0">#{item.id}</h6>
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
