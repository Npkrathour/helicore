"use client";

import React from "react";

interface Step {
    number: string;
    title: React.ReactNode;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        number: "01",
        title: <>Schedule an appointment</>,
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="h-[66px] w-[66px]">
                <defs>
                    <linearGradient id="goldIcon1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF1A6" />
                        <stop offset="45%" stopColor="#F3C94F" />
                        <stop offset="100%" stopColor="#A86E13" />
                    </linearGradient>
                </defs>

                <g
                    stroke="url(#goldIcon1)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="12" y="10" width="40" height="45" rx="4" />
                    <path d="M20 6v9M44 6v9" />
                    <path d="M12 20h40" />
                    <circle cx="22" cy="29" r="2" />
                    <circle cx="32" cy="29" r="2" />
                    <circle cx="42" cy="29" r="2" />
                    <circle cx="22" cy="39" r="2" />
                    <circle cx="32" cy="39" r="2" />
                    <circle cx="42" cy="39" r="2" />
                    <path d="M19 47l4 4 8-9" />
                </g>
            </svg>
        ),
    },
    {
        number: "02",
        title: <>Connect with your provider</>,
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="h-[66px] w-[66px]">
                <defs>
                    <linearGradient id="goldIcon2" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF1A6" />
                        <stop offset="45%" stopColor="#F3C94F" />
                        <stop offset="100%" stopColor="#A86E13" />
                    </linearGradient>
                </defs>

                <g
                    stroke="url(#goldIcon2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M32 13l7 7-7 7-7-7 7-7Z" />
                    <path d="M20 26l-7 7 17 17" />
                    <path d="M44 26l7 7-17 17" />
                    <path d="M25 31l14 14" />
                    <path d="M19 20l-6-6" />
                    <path d="M45 20l6-6" />
                </g>
            </svg>
        ),
    },
    {
        number: "03",
        title: (
            <>
                Discuss your comprehensive
                <br />
                assessment
            </>
        ),
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="h-[66px] w-[66px]">
                <defs>
                    <linearGradient id="goldIcon3" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF1A6" />
                        <stop offset="45%" stopColor="#F3C94F" />
                        <stop offset="100%" stopColor="#A86E13" />
                    </linearGradient>
                </defs>

                <g
                    stroke="url(#goldIcon3)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 29c0-5 4-9 9-9h15c5 0 9 4 9 9s-4 9-9 9H30l-7 5v-5h-1c-4 0-7-4-7-9Z" />
                    <path d="M34 38c1 6 5 9 11 9h1v6l7-6h1c5 0 8-4 8-9 0-3-1-5-3-7" />
                    <circle cx="24" cy="51" r="7" />
                    <circle cx="45" cy="51" r="7" />
                </g>
            </svg>
        ),
    },
    {
        number: "04",
        title: (
            <>
                Receive your individualized
                <br />
                treatment plan
            </>
        ),
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="h-[66px] w-[66px]">
                <defs>
                    <linearGradient id="goldIcon4" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF1A6" />
                        <stop offset="45%" stopColor="#F3C94F" />
                        <stop offset="100%" stopColor="#A86E13" />
                    </linearGradient>
                </defs>

                <g
                    stroke="url(#goldIcon4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="16" y="8" width="32" height="48" rx="3" />
                    <path d="M25 8h14v6H25z" />
                    <rect x="22" y="20" width="5" height="5" />
                    <path d="M32 22h11" />
                    <rect x="22" y="31" width="5" height="5" />
                    <path d="M32 33h11" />
                    <rect x="22" y="42" width="5" height="5" />
                    <path d="M32 44h11" />
                </g>
            </svg>
        ),
    },
];

function StepCard({ step }: { step: Step }) {
    return (
        <div className="flex flex-col items-center text-center lg:px-8">
            <div className="flex h-[82px] w-[82px] items-center justify-center">
                {step.icon}
            </div>

            <span className="mt-1 bg-gradient-to-r from-[#B98220] via-[#FFF1A6] to-[#D4A52C] bg-clip-text font-serif text-3xl leading-none text-transparent">
                {step.number}
            </span>

            <p className="mt-4 max-w-[300px] text-[17px] leading-7 text-white/90 lg:text-[18px]">
                {step.title}
            </p>
        </div>
    );
}

export default function GetStartedSection() {
    return (
        <section
            id="get-started"
            className="relative overflow-hidden border-y-[8px] border-[#D4A52C] bg-gradient-to-br from-black via-[#171108] to-[#4A350D] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-[70px]"
        >
            <div className="mx-auto max-w-[1500px]">
                {/* Heading */}
                <h2 className="mx-auto max-w-[700px] bg-gradient-to-r from-[#B98220] via-[#FFF1A6] to-[#D4A52C] bg-clip-text text-center font-serif text-4xl text-transparent sm:text-5xl lg:text-[48px]">
                    Four Simple Steps To Get Started
                </h2>

                {/* Steps */}
                <div className="relative mt-16 lg:mt-[58px]">
                    {/* Connecting Lines */}
                    <div className="pointer-events-none absolute left-[25%] top-[40px] z-0 hidden w-[16%] -translate-x-1/2 border-t border-dotted border-[#E8C75A]/60 lg:block" />

                    <div className="pointer-events-none absolute left-[50%] top-[40px] z-0 hidden w-[16%] -translate-x-1/2 border-t border-dotted border-[#E8C75A]/60 lg:block" />

                    <div className="pointer-events-none absolute left-[75%] top-[40px] z-0 hidden w-[16%] -translate-x-1/2 border-t border-dotted border-[#E8C75A]/60 lg:block" />

                    <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                        {steps.map((step) => (
                            <StepCard key={step.number} step={step} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 flex justify-center lg:mt-[62px]">
                    <a
                        href="#"
                        className="inline-flex min-w-[300px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#A86E13] via-[#F5D45A] to-[#B98220] px-10 py-5 text-lg text-black shadow-[0_8px_35px_rgba(212,165,44,0.25)] transition duration-300 hover:scale-105 hover:shadow-[0_10px_45px_rgba(212,165,44,0.4)]"
                    >
                        Schedule a Call
                        <span className="text-2xl font-normal">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}