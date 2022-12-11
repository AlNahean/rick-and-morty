import React, { useLayoutEffect, useState } from "react";
import Header from "../../Shared/Components/Header/Header";
import CastDetailsMain from "./Components/CastDetailsMain/CastDetailsMain";
import "./castDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const CastDetails = () => {
  const [castDetails, setCastDetails] = useState({});
  const params = useParams();
  const axiosGet = async (url) => {
    let { data } = await axios.get(url);
    return data;
  };
  const getCastDetails = async (id) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    let originId = Number(data.origin.url.split("/").pop());
    let locationId = Number(data.location.url.split("/").pop());

    data.origin.id = originId;
    data.location.id = locationId;

    setCastDetails(data);

    let episodes = data.episode;

    let fetchedLocation = await Promise.all(
      episodes.map(async (item) => {
        let fetched = await axiosGet(item);
        return fetched;
      })
    );
    await setCastDetails({ ...data, fetchedLocation });
  };
  useLayoutEffect(() => {
    const { id } = params;
    getCastDetails(id);

    return () => {};
  }, []);
  return (
    <div className=" cast-details-wrapper ">
      <Header />
      <CastDetailsMain castDetails={castDetails} />
    </div>
  );
};

export default CastDetails;
