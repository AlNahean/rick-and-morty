import React from "react";
import "./RectSvgCard.scss";
const RectSvgBox = ({ children }) => {
  return (
    <div className=" card position-relative svg-card">
      {children}
      <svg viewBox="0 0 360 96" fill="none" preserveAspectRatio="none">
        <g>
          <path
            d="M350 0.5C355.247 0.5 359.5 4.75329 359.5 10V55.0999C359.5 58.0365 358.142 60.808 355.821 62.6075L315.97 93.5075C314.305 94.7991 312.257 95.5 310.149 95.5H9.99998C4.75328 95.5 0.5 91.2467 0.5 86V10C0.5 4.7533 4.7533 0.5 10 0.5H350Z"
            fill="url(#rm-svg-gradient)"
            fillOpacity="0.05"
            stroke="url(#rm-svg-gradient)"
          />
        </g>
      </svg>
    </div>
  );
};

export default RectSvgBox;
