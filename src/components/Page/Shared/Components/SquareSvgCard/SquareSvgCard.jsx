import React from "react";
import "./SquareSvgCard.scss";
const SquareSvgBox = ({ children }) => {
  return (
    <>
      <div className=" card position-relative svg-card ">
        {children}
        <svg
          viewBox="0 0 290 296"
          fill="none"
          preserveAspectRatio="none"
          className=""
        >
          <g>
            <path
              d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41436 284.586 -7.39098e-06 277.907 -7.39098e-06L12.0933 -7.39098e-06C5.41438 -7.39098e-06 8.34465e-06 5.41435 8.34465e-06 12.0933L8.34465e-06 283.907C8.34465e-06 290.586 5.41438 296 12.0933 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z"
              fill="url(#rm-svg-gradient)"
              fillOpacity="0.05"
              stroke="url(#rm-svg-gradient)"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default SquareSvgBox;
