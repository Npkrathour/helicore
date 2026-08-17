"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import whyChooseAda from "@/assets/faq.svg";

const reasons = [
  {
    title: "Convenient access",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    title: "Concierge approach",
    description:
      "We provide personalized and convenient psychiatric care designed around your individual needs, preferences, and schedule.",
  },
  {
    title: "High quality service",
    description:
      "Our experienced providers are committed to delivering compassionate, evidence-based psychiatric care with a focus on your overall wellbeing.",
  },
  {
    title: "Trusted and empathic providers",
    description:
      "Our providers take the time to listen, understand your concerns, and create a comfortable and supportive environment for your care.",
  },
];

export default function WhyChooseAda() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="why-us"
      className="bg-[#FAF1DC] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* ================= IMAGE ================= */}
          <div className="relative">
            <div
              className="
                                pointer-events-none
                                absolute
                                -bottom-7
                                -right-7
                                h-full
                                w-full
                                border
                                border-[#D5A52D]
                            "
            />

            <div className="relative z-10 overflow-hidden">
              <Image
                src={whyChooseAda}
                alt="Patient meeting with a psychiatric provider"
                width={900}
                height={700}
                priority
                className="
                                    h-auto
                                    w-full
                                    object-cover
                                    object-center
                                "
              />
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-10">
            <h2
              className="
                                max-w-[700px]
                                font-serif
                                text-4xl
                                font-semibold
                                leading-[1.15]
                                text-[#171717]
                                sm:text-5xl
                                lg:text-[46px]
                                xl:text-[48px]
                            "
            >
              Why Should You Choose Ada Psychiatry?
            </h2>

            <div className="mt-10">
              {reasons.map((reason, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={reason.title} className="border-b border-[#D7A52C]">
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className="
                                                flex
                                                w-full
                                                items-start
                                                gap-5
                                                py-5
                                                text-left
                                                sm:py-6
                                            "
                    >
                      <span
                        className="
                                                    mt-1
                                                    flex
                                                    w-6
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    text-[#171717]
                                                "
                      >
                        {isOpen ? (
                          <Minus strokeWidth={1.5} className="h-6 w-6" />
                        ) : (
                          <Plus strokeWidth={1.5} className="h-6 w-6" />
                        )}
                      </span>

                      <h3
                        className="
                                                    font-serif
                                                    text-xl
                                                    font-semibold
                                                    leading-7
                                                    text-[#171717]
                                                    sm:text-2xl
                                                "
                      >
                        {reason.title}
                      </h3>
                    </button>

                    {/* Description */}
                    <div
                      className={`
                                                grid transition-all duration-300 ease-in-out
                                                ${
                                                  isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                }
                                            `}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-5 pl-11 sm:pb-6">
                          <p
                            className="
                                                            max-w-[700px]
                                                            text-base
                                                            leading-7
                                                            tracking-wide
                                                            text-[#353535]
                                                            sm:text-lg
                                                            sm:leading-8
                                                        "
                          >
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
