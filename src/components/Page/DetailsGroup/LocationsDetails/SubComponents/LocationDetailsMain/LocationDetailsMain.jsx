import React from "react";
import GradientBox from "../../../../Shared/Components/GradientBox/GradientBox";
import "./LocationDetailsMain.scss";
import Residents from "./Residents";
const LocationDetailsMain = ({ locationData }) => {
  return (
    <div className=" location-details-main-wrapper">
      <div className=" container">
        <div className=" row mt-5">
          <div className=" col-12 mb-4">
            <GradientBox>
              <div className=" card-body d-flex justify-content-center align-items-center flex-column">
                <h1>{locationData.name}</h1>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-4">
            <GradientBox>
              <div className=" card-body">
                <p>Dimension</p>
                <h2>{locationData?.dimension}</h2>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-4">
            <GradientBox>
              <div className=" card-body">
                <p>Type</p>
                <h2>{locationData?.type}</h2>
              </div>
            </GradientBox>
          </div>

          <Residents residents={locationData.fetchedResidents} />
        </div>
      </div>
    </div>
  );
};

export default LocationDetailsMain;
