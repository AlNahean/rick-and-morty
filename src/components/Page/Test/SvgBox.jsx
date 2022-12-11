import React from "react";

const SvgBox = ({ children }) => {
  return (
    <div className=" card position-relative">
      {children}
      {/* <svg
      viewBox="0 0 271 186"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }}
          >
            <stop
              offset="100%"
              style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }}
            ></stop>
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M15 0.5H256C264.008 0.5 270.5 6.99187 270.5 15V123.094C270.5 127.331 268.647 131.356 265.427 134.11L209.444 182.017C206.817 184.265 203.473 185.5 200.016 185.5H15C6.99187 185.5 0.5 179.008 0.5 171V15C0.5 6.99187 6.99187 0.5 15 0.5Z"
        // stroke="#FF0000"
      />
    </svg> */}

      {/* <svg
        viewBox="0 0 290 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_b_879_26)">
          <path
            d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41437 284.586 0 277.907 0L12.0934 0C5.41437 0 0 5.41437 0 12.0933L0 283.907C0 290.586 5.41437 296 12.0934 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M289.622 239.672C289.622 243.752 287.5 247.537 284.02 249.666L211.713 293.9C209.873 295.026 207.757 295.622 205.6 295.622L12.0934 295.622C5.62308 295.622 0.37793 290.377 0.37793 283.907L0.37793 12.0933C0.37793 5.62308 5.62308 0.37793 12.0934 0.37793L277.907 0.37793C284.377 0.37793 289.622 5.62308 289.622 12.0933L289.622 239.672Z"
            stroke="url(#paint0_linear_879_26)"
            strokeOpacity="0.7"
            strokeWidth="0.755833"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_879_26"
            x="-7.55833"
            y="-7.55833"
            width="305.117"
            height="311.117"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.77917" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_879_26"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_879_26"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_879_26"
            x1="-25.4789"
            y1="-10.2162"
            x2="159.097"
            y2="327.342"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#84F729" />
            <stop offset={1} stopColor="#15BFFD" />
          </linearGradient>
        </defs>
      </svg> */}

      <svg viewBox="0 0 290 296" fill="none" preserveAspectRatio="none">
        <g>
          <path
            d="M360 10C360 4.47715 355.523 0 350 0H10C4.47715 0 0 4.47715 0 10V86C0 91.5229 4.47714 96 9.99998 96H310.149C312.368 96 314.523 95.2622 316.277 93.9027L356.128 63.0026C358.57 61.1085 360 58.1911 360 55.0999V10Z"
            // d="M284.218 249.988C287.81 247.791 290 243.883 290 239.672L290 12.0933C290 5.41436 284.586 -7.39098e-06 277.907 -7.39098e-06L12.0933 -7.39098e-06C5.41438 -7.39098e-06 8.34465e-06 5.41435 8.34465e-06 12.0933L8.34465e-06 283.907C8.34465e-06 290.586 5.41438 296 12.0933 296L205.6 296C207.827 296 210.011 295.385 211.91 294.223L284.218 249.988Z"
            fill="url(#rm-svg-gradient)"
            fillOpacity="0.05"
            stroke="url(#rm-svg-gradient)"
          />
        </g>
        {/* <defs>
          <linearGradient
            gradientTransform="rotate(150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ffflux-gradienta"
            // there can be only one with this name
          >
            <stop stopColor="#84F729" stopOpacity={1} offset="0%" />
            <stop stopColor="#15BFFD" stopOpacity={1} offset="100%" />
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
        </defs> */}
      </svg>
    </div>
  );
};

export default SvgBox;
