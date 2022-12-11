import React from "react";
import GradientBox from "../../../../Shared/Components/GradientBox/GradientBox";
import "./LocationDetailsMain.scss";
import Residents from "./Residents";

import { GiBlackHoleBolas } from "react-icons/gi";
import { GiRingedPlanet } from "react-icons/gi";

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
                <div className=" info-icon mb-2">
                  <GiBlackHoleBolas />
                </div>
                <p className=" mb-2">Dimension</p>
                <h3>{locationData?.dimension}</h3>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-4">
            <GradientBox>
              <div className=" card-body">
                <div className=" info-icon mb-2 ">
                  <GiRingedPlanet />
                </div>
                <p className=" mb-2">Type</p>
                <h3>{locationData?.type}</h3>
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
