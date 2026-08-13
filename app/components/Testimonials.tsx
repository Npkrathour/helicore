"use client";

import { useEffect, useState } from "react";
import saraImg from "@/assets/sara.svg";
import Image from "next/image";

interface Testimonial {
    quote: string;
    name: string;
    company: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach",
        name: "Carl Rowan",
        company: "Aglets Inc",
        image: saraImg,
    },
    {
        quote:
            "Finding the right provider was much easier than I expected. ADA made the entire process simple, clear, and comfortable from the beginning.",
        name: "Sarah Mitchell",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "The experience was excellent. I felt comfortable throughout the process and appreciated how easy it was to connect with the right provider.",
        name: "James Anderson",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "The provider directory gave me everything I needed to make a confident decision. The process felt personal and very easy to navigate.",
        name: "Emily Carter",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "ADA helped remove a lot of the stress from finding mental health care. The profiles were detailed and made choosing a provider much easier.",
        name: "Michael Brown",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "I really appreciated how straightforward the process was. I was able to find a provider who felt like a great fit for me.",
        name: "Jessica Wilson",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "The whole experience was professional and easy. I would definitely recommend ADA to anyone looking for the right provider.",
        name: "David Miller",
        company: "Patient",
        image: saraImg,
    },
    {
        quote:
            "ADA made finding and connecting with a provider feel much less overwhelming. Everything was simple and well organized.",
        name: "Olivia Davis",
        company: "Patient",
        image: saraImg,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const totalSlides = testimonials.length;

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % totalSlides);
    };

    const previousSlide = () => {
        setActiveIndex(
            (current) => (current - 1 + totalSlides) % totalSlides
        );
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    // Auto slide
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            className="overflow-hidden bg-[#FAF4E7] py-16 sm:py-20 lg:py-17.5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Heading */}
            <div className="px-5 sm:px-8 lg:px-16">
                <h2 className="text-center font-serif text-3xl font-semibold text-[#171717] sm:text-4xl lg:text-[40px]">
                    What Our Patients Are saying
                </h2>
            </div>

            {/* Slider */}
            <div className="relative mt-14">
                <div className="mx-auto overflow-hidden">
                    <div
                        className="flex items-stretch gap-5 transition-transform duration-700 ease-in-out sm:gap-8"
                        style={{
                            transform: `translateX(calc(50% - ${activeIndex * 25
                                }% - 12.5%))`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <article
                                    key={`${testimonial.name}-${index}`}
                                    className={`
                    flex
                    min-w-[82%]
                    flex-col
                    overflow-hidden
                    rounded-r-[30px]
                    rounded-bl-[30px]
                    rounded-tl-[30px]
                    bg-[#F8EED7]
                    transition-all
                    duration-500
                    sm:min-w-[55%]
                    lg:min-w-[50%]
                    ${isActive
                                            ? "scale-100 opacity-100"
                                            : "scale-[0.98] opacity-100"
                                        }
                  `}
                                >
                                    {/* Quote Content */}
                                    <div className="flex min-h-96.25 flex-1 flex-col px-8 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                                        {/* Quote Icon */}
                                        <div className="font-serif text-[72px] leading-[0.6] text-[#171717] sm:text-[78px]">
                                            “
                                        </div>

                                        {/* Quote */}
                                        <p className="mt-10 max-w-175 text-[18px] leading-[1.75] tracking-wide text-[#202020] sm:text-[20px] lg:text-[21px]">
                                            “{testimonial.quote}”
                                        </p>
                                    </div>

                                    {/* Patient Information */}
                                    <div className="flex min-h-35 items-center justify-center bg-[#C9972E] px-6 py-7">
                                        <div className="flex items-center gap-4">
                                            {/* Avatar */}
                                            <div className="h-17.5 w-17.5 shrink-0 overflow-hidden rounded-full border-2 border-white">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="h-full w-full object-cover"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <h3 className="text-[21px] font-semibold text-white">
                                                    {testimonial.name}
                                                </h3>

                                                <p className="mt-1 text-base text-white/80">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-1.75">
                {testimonials.map((_, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to testimonial ${index + 1}`}
                            aria-current={isActive ? "true" : undefined}
                            onClick={() => goToSlide(index)}
                            className={`
                relative
                h-4.25
                w-4.25
                rotate-30
                border
                border-[#C9972E]
                transition-all
                duration-300
                ${isActive
                                    ? "scale-110 bg-[#C9972E]"
                                    : "bg-transparent hover:bg-[#C9972E]/30"
                                }
              `}
                        />
                    );
                })}
            </div>

            {/* Optional navigation buttons */}
            <div className="mt-6 flex justify-center gap-4">
                <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous testimonial"
                    className="hidden"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="hidden"
                >
                    →
                </button>
            </div>
        </section>
    );
}