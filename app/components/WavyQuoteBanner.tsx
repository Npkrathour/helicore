"use client";

import React from "react";

interface WavyQuoteBannerProps {
  quote?: string;
  bgColor?: string;
  bannerColor?: string;
  quoteColor?: string;
}

export default function WavyQuoteBanner({
  quote = "“We help people living with and experiencing difficult times”",
  bgColor = "#FAF4E6",
  bannerColor = "#000000",
  quoteColor = "#DEAA3E",
}: WavyQuoteBannerProps) {
  return (
    <section
      className="relative w-full overflow-hidden my-0"
      style={{ backgroundColor: bannerColor }}
    >
      {/* Top Wavy Boundary */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-16"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ color: bgColor }}
        >
          <path
            fill="currentColor"
            d="M 0,0 L 0,30 Q 60,5 120,30 T 240,30 T 360,30 T 480,30 T 600,30 T 720,30 T 840,30 T 960,30 T 1080,30 T 1200,30 T 1320,30 T 1440,30 L 1440,0 Z"
          />
        </svg>
      </div>

      {/* Main Content Area inside Black Banner */}
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 md:py-32 lg:py-20 text-center relative z-20 flex flex-col items-center justify-center">
        <div className="mb-3 sm:mb-5">
          <svg
            className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto"
            style={{ color: quoteColor }}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote Text */}
        <h2 className="font-serif text-xl pb-4 sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-snug sm:leading-relaxed">
          {quote}
        </h2>
      </div>

      {/* Bottom Wavy Boundary */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16 lg:h-20"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ color: bgColor }}
        >
          <path
            fill="currentColor"
            d="M 0,60 L 0,30 Q 60,55 120,30 T 240,30 T 360,30 T 480,30 T 600,30 T 720,30 T 840,30 T 960,30 T 1080,30 T 1200,30 T 1320,30 T 1440,30 L 1440,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
