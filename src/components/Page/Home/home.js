import React, { useState } from "react";
import { useGlobalContext } from "../../Context";
import Header from "../Shared/Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ProxySvgGradient from "../Shared/Components/ProxySvgGradiant/ProxySvgGradiant.jsx";

import "./Home.scss";
import BottomContainer from "./Components/Hero/BottomContainer";

const Home = () => {
  const { test } = useGlobalContext();

  return (
    <div className=" homepage-wrapper">
      <Header />
      <Hero />
      <BottomContainer />
      <ProxySvgGradient />
    </div>
  );
};

export default Home;
