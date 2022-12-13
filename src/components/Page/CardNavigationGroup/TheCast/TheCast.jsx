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
  const [searchInput, setSearchInput] = useState({ value: "" });
  const [loading, setIsLoading] = useState(false);
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
        navigate(
          `/the-cast?name=${
            searchInput.value ? searchInput.value : ""
          }&page=${finalCount}`
        );
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
        navigate(
          `/the-cast?name=${
            searchInput.value ? searchInput.value : ""
          }&page=${finalCount}`
        );
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getCastsData = async () => {
    try {
      setIsLoading(true);
      let { page, name = "" } = Object.fromEntries([...searchParams]);
      if (name === undefined) {
        name = "";
      }
      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?${
          name && `name=${name}`
        }&page=${page}`
      );

      if (data?.error) {
        setCastsData([]);
        setCastsPageInfo({
          count: 0,
          pages: 1,
          next: null,
          prev: null,
        });
        setIsLoading(false);

        return;
      }

      // console.log(data, "data");
      let a = [...data.results];
      setCastsData(a);
      setCastsPageInfo(data.info);
      setIsLoading(false);
    } catch (error) {
      setCastsData([]);
      setCastsPageInfo({
        count: 0,
        pages: 1,
        next: null,
        prev: null,
      });

      console.log(error);
      setIsLoading(false);
    }
  };
  const handleSearchInputChange = async (e) => {
    setSearchInput({ ...searchInput, value: e.target.value });
    navigate(`/the-cast?name=${e.target.value}&page=1`);
  };
  useLayoutEffect(() => {
    let { page, name } = Object.fromEntries([...searchParams]);
    if (name === undefined) {
      name = "";
    }
    setPageCount(page);
    setSearchInput({ ...searchInput, value: name });

    getCastsData();
    return () => {};
  }, [searchParams]);
  return (
    <div className=" the-cast-wrapper text-white">
      <Header />
      <NavigationHeader
        heading="The Cast"
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      <CardsContainer
        castsData={castsData}
        searchInput={searchInput}
        loading={loading}
      />
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
