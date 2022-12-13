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
  const [episodesData, setEpisodesData] = useState([]);
  const [episodesPageInfo, setEpisodesPageInfo] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchInput, setSearchInput] = useState({ value: "" });
  const [loading, setIsLoading] = useState(false);

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

  const handleSearchInputChange = async (e) => {
    setSearchInput({ ...searchInput, value: e.target.value });
    navigate(`/episodes?name=${e.target.value}&page=1`);
  };

  const handleNavClick = (state) => {
    if (state === "prev") {
      let cachedCount = pageCount;
      let count = pageCount;
      count--;
      let finalCount = getPageNum(count);
      if (finalCount !== cachedCount) {
        navigate(
          `/episodes?name=${
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
        navigate(
          `/episodes?name=${
            searchInput.value ? searchInput.value : ""
          }&page=${finalCount}`
        );
        window.scrollTo(0, 0);
      } else {
        console.log("do nothing");
      }
    }
  };
  const getEpisodesData = async () => {
    try {
      setIsLoading(true);

      let { page, name } = Object.fromEntries([...searchParams]);

      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/episode?${
          name && `name=${name}&`
        }page=${page}`
      );
      if (data?.error) {
        setEpisodesData([]);
        setEpisodesPageInfo({
          count: 0,
          pages: 1,
          next: null,
          prev: null,
        });
        setIsLoading(false);

        return;
      }
      setEpisodesData(data.results);
      setEpisodesPageInfo(data.info);
      setIsLoading(false);
    } catch (error) {
      setEpisodesData([]);
      setEpisodesPageInfo({
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
    getEpisodesData();
    return () => {};
  }, [searchParams]);
  return (
    <div className=" episodes-wrapper">
      <Header />
      <NavigationHeader
        heading="Episodes"
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      <CardsContainer
        episodesData={episodesData}
        searchInput={searchInput}
        loading={loading}
      />
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
