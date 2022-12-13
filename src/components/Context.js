import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useLayoutEffect,
} from "react";
import {
  getRectColNum,
  getSquareColNum,
} from "./Page/Shared/Functions/ColCount";
// import axios from "axios";

import Reducer from "./Reducer";

const AppContext = React.createContext();
const initialState = {
  loading: true,
  firstName: "Nahean",
  lastName: "Fardous",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [test, setTest] = useState("Context Text");

  const [colCount, setColCount] = useState({
    squareColNum: 2.4,
    rectColNum: 3.4,
  });
  useLayoutEffect(() => {
    const getColNum = (size) => {
      if (size < 768) return 2.4;
      if (size < 992) return 3.4;
      if (size < 1200) return 4.4;
      if (size < 1400) return 5.4;
      if (size >= 1400) return 5.4;
    };

    let screenWidth = window.innerWidth;
    let sq = getSquareColNum(screenWidth);
    let re = getRectColNum(screenWidth);
    setColCount({
      squareColNum: sq,
      rectColNum: re,
    });

    const resizeCalc = () => {
      screenWidth = window.innerWidth;
      sq = getSquareColNum(screenWidth);
      re = getRectColNum(screenWidth);
      setColCount({
        squareColNum: sq,
        rectColNum: re,
      });
    };

    window.addEventListener("resize", resizeCalc);
    return () => {
      window.removeEventListener("resize", resizeCalc);
    };
  }, []);

  const [showBg, setShowBg] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = (e) => {
      let scrollTop = window.scrollY;

      if (scrollTop > 60) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        test,
        colCount,
        setColCount,
        showBg,
        setShowBg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider }; //so i would normally use this line in the future child but becouse i am returning right now i would use ---useglobalContext-- hook ine next pages.
