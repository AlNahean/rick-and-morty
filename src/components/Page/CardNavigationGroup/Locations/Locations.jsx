import React, { useLayoutEffect, useState } from "react";
import "./Locations.scss";
import axios from "axios";

import Header from "../../Shared/Components/Header/Header";
import NavigationHeader from "../../Shared/Components/NavigationHeader/NavigationHeader";
import NavPagination from "../../Shared/Components/NavPagination/NavPagination";
import CardsContainer from "./SubComponents/CardsContainer/CardsContainer";
import ProxySvgGradiantPath from "../../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";

import { useNavigate } from "react-router-dom";
import { useSearchParams, useParams } from "react-router-dom";

const Locations = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [locationsData, setLocationsData] = useState([]);
  const [locationsPageInfo, setLocationsPageInfo] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const params = useParams();

  const getPageNum = (num) => {
    if (num <= 0) {
      return 1;
    } else if (num > locationsPageInfo.pages) {
      return locationsPageInfo.pages;
    } else {
      return num;
    }
  };

  const handleNavClick = (state) => {
    if (state === "prev") {
      let cachedCount = pageCount;
      let count = pageCount;
      count--;
      let finalCount = getPageNum(count);
      if (finalCount !== cachedCount) {
        // setPageCount(finalCount);
        // getCastsData(finalCount);
        navigate(`/locations?page=${finalCount}`);
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    } else {
      let cachedCount = pageCount;
      let count = pageCount;
      count++;
      let finalCount = getPageNum(count);
      if (finalCount !== cachedCount) {
        // setPageCount(finalCount);
        // getCastsData(finalCount);
        navigate(`/locations?page=${finalCount}`);
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getLocationsData = async (page = 1) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/location?page=${page}`
    );
    setLocationsData(data.results);
    setLocationsPageInfo(data.info);
  };
  useLayoutEffect(() => {
    let { page } = Object.fromEntries([...searchParams]);
    setPageCount(page);

    getLocationsData(page);
    return () => {};
  }, [searchParams]);

  return (
    <div className=" locations-wrapper">
      <Header />
      <NavigationHeader heading="Locations" />
      <CardsContainer locationsData={locationsData} />
      <NavPagination
        pageInfo={locationsPageInfo}
        handleNavClick={handleNavClick}
        pageCount={pageCount}
      />
      <ProxySvgGradiantPath />
    </div>
  );
};

export default Locations;
