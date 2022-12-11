import React, { useState, useLayoutEffect } from "react";
import "./EpisodesDetails.scss";
import Header from "../../Shared/Components/Header/Header";
import ProxySvgGradiantPath from "../../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";
import EpisodesDetailsMain from "./SubComponents/EpisodesDetailsMain/EpisodesDetailsMain";

import axios from "axios";
import { useParams } from "react-router-dom";

const EpisodesDetails = () => {
  const params = useParams();
  const [episodesData, setepisodesData] = useState({});
  const fetchepisodesData = async (id) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    setepisodesData(data);

    let fetchedCharacters = await Promise.all(
      data.characters.map(async (item) => {
        let fetched = await axios.get(item);
        return fetched.data;
      })
    );

    await setepisodesData({ ...data, fetchedCharacters });
  };

  useLayoutEffect(() => {
    fetchepisodesData(params.id);
    return () => {};
  }, []);
  return (
    <div className=" episodes-details-wrapper">
      <Header />
      <EpisodesDetailsMain episodesData={episodesData} />
      <ProxySvgGradiantPath />
    </div>
  );
};

export default EpisodesDetails;
