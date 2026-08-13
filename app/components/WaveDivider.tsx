"use client";

import React from "react";

interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  height?: number;
}

export default function WaveDivider({
  topColor = "#F7EED9",
  bottomColor = "#FAF4E6",
  height = 80,
}: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0]"
      style={{
        height: `${height}px`,
        backgroundColor: topColor,
      }}
      aria-hidden="true"
    >
      <svg
        className="absolute bottom-0 left-0 block h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,55
            C55,55 75,85 145,85
            C215,85 235,55 290,55
            C350,55 370,85 435,85
            C500,85 520,55 575,55
            C635,55 655,85 720,85
            C785,85 805,55 865,55
            C925,55 945,85 1010,85
            C1075,85 1095,55 1155,55
            C1215,55 1235,85 1300,85
            C1365,85 1385,55 1440,55
            L1440,100
            L0,100
            Z
          "
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}