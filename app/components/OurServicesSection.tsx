"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import medical from "@/assets/1.svg"
import brain from "@/assets/2.svg"
import docter from "@/assets/3.svg"
import adhd from "@/assets/4.svg"
import Image from "next/image";


const PsychiatricEvalIcon = () => (
  <Image
    src={medical}
    alt="Psychiatric evaluation"
    width={44}
    height={44}
    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
  />
);

const MedicalCrossCircleIcon = () => (
  <Image
    src={adhd}
    alt="Psychiatric evaluation"
    width={44}
    height={44}
    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
  />
);

const SupportivePsychotherapyIcon = () => (
  <Image
    src={docter}
    alt="Psychiatric evaluation"
    width={44}
    height={44}
    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
  />
);

const AdhdScreeningIcon = () => (
  <Image
    src={brain}
    alt="Psychiatric evaluation"
    width={44}
    height={44}
    className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
  />
);
const services = [
  {
    title: "Psychiatric Evaluation",
    icon: PsychiatricEvalIcon,
  },
  {
    title: "Medication Management",
    icon: MedicalCrossCircleIcon,
  },
  {
    title: "Supportive Psychotherapy",
    icon: SupportivePsychotherapyIcon,
  },
  {
    title: "ADHD Screening",
    icon: AdhdScreeningIcon,
  },
  {
    title: "MAT Treatment",
    icon: PsychiatricEvalIcon,
  },
  {
    title: "Gene Sight Testing",
    icon: MedicalCrossCircleIcon,
  },
];

export default function OurServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-12 sm:mb-16 tracking-tight">
          Our Services
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6 justify-items-center items-start mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >

                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F5ECCB]/90 hover:bg-[#F3E6BA] flex items-center justify-center mb-4 shadow-xs transition-colors duration-300">
                  <IconComponent />
                </div>

                <h3 className="font-serif text-sm sm:text-base font-medium sm:font-semibold text-[#1A1A1A] text-center leading-snug max-w-[130px]">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div>
          <a
            href="#all-services"
            className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#D4A338] via-[#E7BC54] to-[#C99736] text-[#1F190B] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md group"
          >
            <span>View our services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
