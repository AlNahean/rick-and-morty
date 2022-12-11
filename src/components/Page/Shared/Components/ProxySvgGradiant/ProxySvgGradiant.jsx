import React, { useState, useLayoutEffect } from "react";

const ProxySvgGradiantPath = () => {
  const [color, serColor] = useState({
    rm_color_skyblue: "#14d9e5",
    rm_color_yellowgreen: "#9dfe00",
    rm_color_dark: "#191d29",
  });
  useLayoutEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const bgColor = styles.getPropertyValue("--color-background");

    let rm_color_skyblue = styles.getPropertyValue("--rm-color-skyblue");
    let rm_color_yellowgreen = styles.getPropertyValue(
      "--rm-color-yellowgreen"
    );
    let rm_color_dark = styles.getPropertyValue("--rm-color-dark");

    serColor({
      ...color,
      rm_color_yellowgreen,
      rm_color_skyblue,
      rm_color_dark,
    });

    //   --rm-color-skyblue: #14d9e5;
    // --rm-color-yellowgreen: #9dfe00;
    // --rm-color-dark: #191d29;
    return () => {};
  }, []);
  return (
    <svg
      viewBox="0 0 290 296"
      fill="none"
      preserveAspectRatio="none"
      className=" "
      style={{ height: "0px" }}
    >
      <g>
        <path
          d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41436 284.586 -7.39098e-06 277.907 -7.39098e-06L12.0933 -7.39098e-06C5.41438 -7.39098e-06 8.34465e-06 5.41435 8.34465e-06 12.0933L8.34465e-06 283.907C8.34465e-06 290.586 5.41438 296 12.0933 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z"
          fill="url(#ffflux-gradient)"
          fillOpacity="0.05"
          stroke="url(#ffflux-gradient)"
        />
      </g>
      <defs>
        <linearGradient
          gradientTransform="rotate(150, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="rm-svg-gradient"
        >
          <stop
            stopColor={color.rm_color_skyblue}
            stopOpacity={1}
            offset="0%"
          />
          <stop
            stopColor={color.rm_color_yellowgreen}
            stopOpacity={1}
            offset="100%"
          />
        </linearGradient>
        <filter
          id="ffflux-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005 0.003"
            numOctaves={2}
            seed={2}
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feGaussianBlur
            stdDeviation="20 0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            edgeMode="duplicate"
            result="blur"
          />
          <feBlend
            mode="color-dodge"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            in2="blur"
            result="blend"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ProxySvgGradiantPath;
