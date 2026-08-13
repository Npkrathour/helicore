// components/WhyChooseAda.tsx

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import whyChooseAda from "@/assets/faq.svg";

const reasons = [
    {
        title: "Convenient access",
        description:
            "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
    },
    {
        title: "Concierge approach",
        description: "",
    },
    {
        title: "High quality service",
        description: "",
    },
    {
        title: "Trusted and empathic providers",
        description: "",
    },
];

export default function WhyChooseAda() {
    return (
        <section
            id="why-us"
            className="bg-[#FAF1DC] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[100px]"
        >
            <div className="mx-auto max-w-[1450px]">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">

                    <div className="relative">

                        <div
                            className="
                absolute
                -bottom-7
                -right-7
                h-full
                w-full
                border
                border-[#D5A52D]
                pointer-events-none
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
                            {reasons.map((reason, index) => (
                                <div
                                    key={reason.title}
                                    className={`
                    border-b border-[#D7A52C]
                    ${index === 0 ? "border-t-0" : ""}
                  `}
                                >
                                    <div className="py-5 sm:py-6">
                                        {/* Title */}
                                        <div className="flex items-start gap-5">
                                            <span className="mt-1 flex w-6 shrink-0 items-center justify-center text-[#171717]">
                                                {index === 0 ? (
                                                    <Minus
                                                        strokeWidth={1.5}
                                                        className="h-6 w-6"
                                                    />
                                                ) : (
                                                    <Plus
                                                        strokeWidth={1.5}
                                                        className="h-6 w-6"
                                                    />
                                                )}
                                            </span>

                                            <h3 className=" font-serif text-xl font-semibold leading-7 text-[#171717] sm:text-2xl">
                                                {reason.title}
                                            </h3>
                                        </div>

                                        {/* First item description */}
                                        {reason.description && (
                                            <div className="mt-4 pl-11 sm:mt-5">
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
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}