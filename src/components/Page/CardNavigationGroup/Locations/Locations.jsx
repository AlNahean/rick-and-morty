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
  const [searchInput, setSearchInput] = useState({ value: "" });
  const [loading, setIsLoading] = useState(false);
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

  const handleSearchInputChange = async (e) => {
    setSearchInput({ ...searchInput, value: e.target.value });
    navigate(`/locations?name=${e.target.value}&page=1`);
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
          `/locations?name=${
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
          `/locations?name=${
            searchInput.value ? searchInput.value : ""
          }&page=${finalCount}`
        );
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getLocationsData = async () => {
    try {
      setIsLoading(true);
      let { page, name } = Object.fromEntries([...searchParams]);

      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/location?${
          name && `name=${name}&`
        }page=${page}`
      );
      if (data?.error) {
        setLocationsData([]);
        setLocationsPageInfo({
          count: 0,
          pages: 1,
          next: null,
          prev: null,
        });
        setIsLoading(false);

        return;
      }
      setLocationsData(data.results);
      setLocationsPageInfo(data.info);
      setIsLoading(false);
    } catch (error) {
      setLocationsData([]);
      setLocationsPageInfo({
        count: 0,
        pages: 1,
        next: null,
        prev: null,
      });

      setIsLoading(false);
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    let { page, name } = Object.fromEntries([...searchParams]);
    if (name === undefined) {
      name = "";
    }
    setPageCount(page);
    setSearchInput({ ...searchInput, value: name });
    getLocationsData();

    return () => {};
  }, [searchParams]);

  return (
    <div className=" locations-wrapper">
      <Header />
      <NavigationHeader
        heading="Locations"
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />
      <CardsContainer
        locationsData={locationsData}
        searchInput={searchInput}
        loading={loading}
      />
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
