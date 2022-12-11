import React, { useState, useLayoutEffect } from "react";

import axios from "axios";

import Header from "../../Shared/Components/Header/Header";
import NavigationHeader from "../../Shared/Components/NavigationHeader/NavigationHeader";
import NavPagination from "../../Shared/Components/NavPagination/NavPagination";
import ProxySvgGradiantPath from "../../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";
import "./Episodes.scss";
import CardsContainer from "./SubComponents/CardsContainer";

import { useNavigate } from "react-router-dom";
import { useSearchParams, useParams } from "react-router-dom";

const Episodes = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [episodesData, setLocationsData] = useState([]);
  const [episodesPageInfo, setLocationsPageInfo] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const params = useParams();

  const getPageNum = (num) => {
    if (num <= 0) {
      return 1;
    } else if (num > episodesPageInfo.pages) {
      return episodesPageInfo.pages;
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
        navigate(`/episodes?page=${finalCount}`);
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
        navigate(`/episodes?page=${finalCount}`);
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getepisodesData = async (page = 1) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode?page=${page}`
    );
    setLocationsData(data.results);
    setLocationsPageInfo(data.info);
  };
  useLayoutEffect(() => {
    let { page } = Object.fromEntries([...searchParams]);
    setPageCount(page);

    getepisodesData(page);
    return () => {};
  }, [searchParams]);
  return (
    <div className=" episodes-wrapper">
      <Header />
      <NavigationHeader heading="Episodes" />
      <CardsContainer episodesData={episodesData} />
      <NavPagination
        pageInfo={episodesPageInfo}
        handleNavClick={handleNavClick}
        pageCount={pageCount}
      />
      <ProxySvgGradiantPath />
    </div>
  );
};

export default Episodes;
