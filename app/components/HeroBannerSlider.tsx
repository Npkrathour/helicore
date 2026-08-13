"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface Slide {
  id: number;
  image: string;
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920",
    titleTop: "NEED A MENTAL",
    titleBottom: "HEALTH PROVIDER?",
    subtitle: "No Look Further",
    description:
      "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
    buttonText: "Learn More",
    buttonLink: "#about",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=1920",
    titleTop: "COMPASSIONATE &",
    titleBottom: "EMPTHETIC CARE",
    subtitle: "Evidence-Based Treatment",
    description:
      "Specialized psychiatric evaluations and ongoing treatment plans tailored specifically to your personal life journey.",
    buttonText: "Our Services",
    buttonLink: "#services",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920",
    titleTop: "YOUR JOURNEY TO",
    titleBottom: "WELLNESS BEGINS HERE",
    subtitle: "Comfortable Environment",
    description:
      "We provide supportive care, medication management, and compassionate therapy for anxiety, depression, and mood health.",
    buttonText: "Schedule Today",
    buttonLink: "#faq",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
    titleTop: "EXPERT ADDICTION &",
    titleBottom: "RECOVERY SUPPORT",
    subtitle: "Non-Judgmental Guidance",
    description:
      "Comprehensive recovery programs designed to support you with warmth, respect, and evidence-based medicine.",
    buttonText: "Learn More",
    buttonLink: "#services",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920",
    titleTop: "CONVENIENT VIRTUAL",
    titleBottom: "IN-PERSON VISITS",
    subtitle: "Accessible Healthcare",
    description:
      "Connect with certified mental health providers from the comfort of your home or in our peaceful clinic setting.",
    buttonText: "Get Started",
    buttonLink: "#why-us",
  },
];

export default function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <section
      className="relative w-full min-h-[560px] h-[78vh] max-h-[750px] bg-neutral-900 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Banner Slider"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <Image
            src={slide.image}
            alt={`${slide.titleTop} ${slide.titleBottom}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center transform scale-105 transition-transform duration-10000 ease-linear"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 bg-linear-to-r from-black/90 via-black/65 sm:via-black/50 to-black/20" />
      <div className="absolute inset-0 z-20 bg-linear-to-t from-black/80 via-transparent to-black/30" />

      <div className="relative z-30 max-w-7xl mx-auto h-full px-6 sm:px-10 lg:px-16 flex flex-col justify-between py-12 md:py-16">

        <div className="my-auto max-w-xl space-y-4 md:space-y-6 pt-4 sm:pt-0">

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white drop-shadow-md">
            {slides[currentSlide].titleTop} <br />
            {slides[currentSlide].titleBottom}
          </h1>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg font-light tracking-wide">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-lg font-normal drop-shadow-sm opacity-95">
            {slides[currentSlide].description}
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href={slides[currentSlide].buttonLink}
              className="inline-flex items-center gap-3 bg-linear-to-r from-[#E7BC54] via-[#DEAA3E] to-[#C99736] text-[#1F190B] font-semibold text-sm sm:text-base px-7 py-3 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-950/30 group"
            >
              <span>{slides[currentSlide].buttonText}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between w-full pt-4">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 cursor-pointer ${isActive
                      ? "scale-110 drop-shadow-[0_0_8px_rgba(214,163,56,0.8)]"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                      }`}
                  >
                    <polygon
                      points="12 2, 21 7, 21 17, 12 22, 3 17, 3 7"
                      fill={isActive ? "#D4A338" : "none"}
                      stroke="#D4A338"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all backdrop-blur-sm focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all backdrop-blur-sm focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
