"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import mentalHealth from "@/assets/mental-health.svg";
import addiction from "@/assets/adiction-recovery.svg";
import supervisedMedical from "@/assets/supervised-medical.svg";

interface Treatment {
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const treatments: Treatment[] = [
  {
    title: "Mental health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    image: mentalHealth,
    imageAlt: "Mental health treatment",
  },
  {
    title: "Addiction and recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    image: addiction,
    imageAlt: "Addiction and recovery treatment",
  },
  {
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person’s body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.",
    image: supervisedMedical,
    imageAlt: "Supervised medical weight loss",
  },
];

function LearnMoreButton() {
  return (
    <div className="pt-2">
      <a
        href="#faq"
        className="inline-flex items-center gap-2 bg-linear-to-r from-[#E7BC54] via-[#DEAA3E] to-[#C99736] text-[#1F190B] font-semibold text-sm sm:text-base px-8 py-3 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-md group"
        aria-label="Learn more about this treatment"
      >
        <span>Learn More</span>
      </a>
    </div>
  );
}

function TreatmentContent({
  title,
  description,
}: Pick<Treatment, "title" | "description">) {
  return (
    <div className="space-y-5 sm:space-y-6 text-left">
      <h3 className="font-serif text-2xl sm:text-3xl lg:text-3xl text-[#1A1A1A] font-extrabold tracking-tight">
        {title}
      </h3>

      <p className="text-black text-sm sm:text-base md:text-[18.75px] leading-8 tracking-wide font-normal max-w-2xl">
        {description}
      </p>

      <LearnMoreButton />
    </div>
  );
}

function TreatmentImage({
  image,
  imageAlt,
}: Pick<Treatment, "image" | "imageAlt">) {
  return (
    <div className="flex justify-center">
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={800}
        className="object-cover object-center"
        priority
      />
    </div>
  );
}

export default function TreatmentFocusSection() {
  return (
    <section
      id="services"
      className="bg-[#FAF4E6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-[#1A1A1A] font-extrabold text-center pb-6 sm:mb-16 tracking-tight">
          Our Treatment Focus
        </h2>

        {/* Treatment Sections */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {treatments.map((treatment, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={treatment.title}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12"
              >
                {/* Image */}
                <div className={isReversed ? "lg:order-2" : "lg:order-1"}>
                  <TreatmentImage
                    image={treatment.image}
                    imageAlt={treatment.imageAlt}
                  />
                </div>

                {/* Content */}
                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <TreatmentContent
                    title={treatment.title}
                    description={treatment.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}