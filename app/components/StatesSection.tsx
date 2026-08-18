"use client";

import React from "react";
import Image from "next/image";

interface State {
  name: string;
  status: "Virtual Appointment" | "Coming Soon";
  image: string;
}

const states: State[] = [
  {
    name: "Arizona",
    status: "Virtual Appointment",
    image:
      "https://images.pexels.com/photos/34873755/pexels-photo-34873755.jpeg",
  },
  {
    name: "Washington",
    status: "Virtual Appointment",
    image:
      "https://images.pexels.com/photos/11757129/pexels-photo-11757129.jpeg",
  },
  {
    name: "Oregon",
    status: "Coming Soon",
    image:
      "https://images.pexels.com/photos/27507149/pexels-photo-27507149.jpeg",
  },
  {
    name: "New Mexico",
    status: "Virtual Appointment",
    image:
      "https://images.pexels.com/photos/27507149/pexels-photo-27507149.jpeg",
  },
  {
    name: "Colorado",
    status: "Virtual Appointment",
    image:
      "https://images.pexels.com/photos/27507149/pexels-photo-27507149.jpeg",
  },
  {
    name: "Kansas",
    status: "Virtual Appointment",
    image:
      "https://images.pexels.com/photos/27507149/pexels-photo-27507149.jpeg",
  },
];

function StateCard({ state }: { state: State }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* State Image */}
      <div className="h-[180px] w-full max-w-[355px] overflow-hidden rounded-t-full sm:h-[190px] lg:h-[178px]">
        <Image
          src={state.image}
          alt={state.name}
          width={800}
          height={500}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>

      {/* State Name */}
      <h3 className="mt-8 font-serif text-3xl text-[#111111] sm:text-[34px]">
        {state.name}
      </h3>

      {/* Appointment Status */}
      <p className="mt-2 text-base text-[#222222]">{state.status}</p>
    </div>
  );
}

export default function StatesSection() {
  return (
    <section className="border-t-2 border-[#C9972E] bg-[#FAF4E7] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[60px]">
      <div className="mx-auto max-w-[1250px]">
        {/* Section Heading */}
        <h2 className="mx-auto max-w-[650px] text-center font-serif text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#1A1A1A] mb-12 sm:mb-16 tracking-tight">
          Now Accepting Patients In
          <br />
          The Following States
        </h2>

        {/* States Grid */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-[82px]">
          {states.map((state) => (
            <StateCard key={state.name} state={state} />
          ))}
        </div>
      </div>
    </section>
  );
}
