import React from "react";
import GradientBox from "../../../../Shared/Components/GradientBox/GradientBox";
import Characters from "./Characters";
import "./EpisodesDetailsMain.scss";
const EpisodesDetailsMain = ({ episodesData }) => {
  console.log(episodesData);
  return (
    <div className=" episodes-details-main-wrapper">
      <div className=" container">
        <div className=" row">
          <div className=" col-12 mb-3">
            <GradientBox>
              <div className=" card-body d-flex justify-content-center align-items-center">
                <h2>{episodesData.name}</h2>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-3">
            <GradientBox>
              <div className=" card-body">
                <p>Airdate</p>
                <h2>{episodesData.air_date}</h2>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-3">
            <GradientBox>
              <div className=" card-body">
                <p>Episode</p>
                <h2>{episodesData.episode}</h2>
              </div>
            </GradientBox>
          </div>
          <Characters characters={episodesData.fetchedCharacters} />
          <div className=" col-12"> </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodesDetailsMain;
