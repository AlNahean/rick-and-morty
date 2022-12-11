import React from "react";
import GradientBox from "../../../../Shared/Components/GradientBox/GradientBox";
import Characters from "./Characters";
import "./EpisodesDetailsMain.scss";
import { MdLiveTv } from "react-icons/md";
import { GiClapperboard } from "react-icons/gi";
const EpisodesDetailsMain = ({ episodesData }) => {
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
                <div className=" info-icon mb-2">
                  <MdLiveTv />
                </div>
                <p className=" mb-2">Airdate</p>
                <h3>{episodesData.air_date}</h3>
              </div>
            </GradientBox>
          </div>
          <div className=" col-12 col-md-6 mb-3">
            <GradientBox>
              <div className=" card-body">
                <div className=" info-icon mb-2">
                  <GiClapperboard />
                </div>
                <p className=" mb-2">Episode</p>
                <h3>{episodesData.episode}</h3>
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
