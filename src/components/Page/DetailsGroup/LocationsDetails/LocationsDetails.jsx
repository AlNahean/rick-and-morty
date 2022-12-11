import React, { useState, useLayoutEffect } from "react";
import Header from "../../Shared/Components/Header/Header";
import ProxySvgGradiantPath from "../../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";
import "./LocationsDetails.scss";
import LocationDetailsMain from "./SubComponents/LocationDetailsMain/LocationDetailsMain";
import axios from "axios";
import { useParams } from "react-router-dom";
const LocationsDetails = () => {
  const params = useParams();
  const [locationData, setLocationData] = useState({});
  const fetchLocationData = async (id) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    setLocationData(data);

    let fetchedResidents = await Promise.all(
      data.residents.map(async (item) => {
        let fetched = await axios.get(item);
        return fetched.data;
      })
    );

    await setLocationData({ ...data, fetchedResidents });
  };

  useLayoutEffect(() => {
    fetchLocationData(params.id);
    return () => {};
  }, []);
  return (
    <div className=" location-details-wrapper">
      <Header />
      <LocationDetailsMain locationData={locationData} />
      <ProxySvgGradiantPath />
    </div>
  );
};

export default LocationsDetails;
