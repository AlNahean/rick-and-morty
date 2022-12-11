import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Error from "./Page/Error/Error";
import Test from "./Page/Test/Test";
import TheCast from "./Page/CardNavigationGroup/TheCast/TheCast";
import CastDetails from "./Page/DetailsGroup/CastDetails/CastDetails";
import Locations from "./Page/CardNavigationGroup/Locations/Locations";
import Episodes from "./Page/CardNavigationGroup/Episodes/Episodes";
import LocationsDetails from "./Page/DetailsGroup/LocationsDetails/LocationsDetails";
import EpisodesDetails from "./Page/DetailsGroup/EpisodesDetails/EpisodesDetails";
import useSwiperCss from "./Page/Shared/Hooks/useSwiperCss";

const Routing = () => {
  useSwiperCss();
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route path="/test" caseSensitive={false} element={<Test />} />
        <Route path="/the-cast" caseSensitive={false} element={<TheCast />} />
        <Route
          path="/locations"
          caseSensitive={false}
          element={<Locations />}
        />
        <Route path="/episodes" caseSensitive={false} element={<Episodes />} />
        <Route
          path="/cast-details/:id"
          caseSensitive={false}
          element={<CastDetails />}
        />
        <Route
          path="/location-details/:id"
          caseSensitive={false}
          element={<LocationsDetails />}
        />
        <Route
          path="/episode-details/:id"
          caseSensitive={false}
          element={<EpisodesDetails />}
        />

        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;
