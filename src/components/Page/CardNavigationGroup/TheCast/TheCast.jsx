import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import Header from "../../Shared/Components/Header/Header";
import NavigationHeader from "../../Shared/Components/NavigationHeader/NavigationHeader";
import NavPagination from "../../Shared/Components/NavPagination/NavPagination";
import ProxySvgGradiantPath from "../../Shared/Components/ProxySvgGradiant/ProxySvgGradiant";
import CardsContainer from "./SubComponents/CardsContainer/CardsContainer";
import "./TheCast.scss";

import { useNavigate } from "react-router-dom";
import { useSearchParams, useParams } from "react-router-dom";

const TheCast = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [castsData, setCastsData] = useState([]);
  const [castsPageInfo, setCastsPageInfo] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const params = useParams();

  const getPageNum = (num) => {
    if (num <= 0) {
      return 1;
    } else if (num > castsPageInfo.pages) {
      return castsPageInfo.pages;
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
        navigate(`/the-cast?page=${finalCount}`);
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
        navigate(`/the-cast?page=${finalCount}`);
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getCastsData = async (page = 1) => {
    let { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    setCastsData(data.results);
    setCastsPageInfo(data.info);
  };
  useLayoutEffect(() => {
    let { page } = Object.fromEntries([...searchParams]);
    setPageCount(page);

    getCastsData(page);
    return () => {};
  }, [searchParams]);
  return (
    <div className=" the-cast-wrapper text-white">
      <Header />
      <NavigationHeader heading="The Cast" />
      <CardsContainer castsData={castsData} />
      <NavPagination
        pageInfo={castsPageInfo}
        handleNavClick={handleNavClick}
        pageCount={pageCount}
      />
      <ProxySvgGradiantPath />
    </div>
  );
};

export default TheCast;
