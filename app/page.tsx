"use client";

import React, { useState } from "react";
import HeroBannerSlider from "./components/HeroBannerSlider";
import FounderSection from "./components/FounderSection";
import OurServicesSection from "./components/OurServicesSection";
import TreatmentFocusSection from "./components/TreatmentFocusSection";
import WavyQuoteBanner from "./components/WavyQuoteBanner";
import GetStartedSection from "./components/GetStartedSection";
import StatesSection from "./components/StatesSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import WhyChooseAda from "./components/WhyChooseAda";


export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D3748] font-sans antialiased">
      {/* ---- HEADER & NAV ------- */}
      <Header />
      {/* -------- HERO BANNER SLIDER -------- */}
      <HeroBannerSlider />
      {/* -------- FOUNDER SECTION -------- */}
      <FounderSection />
      {/* -------- TREATMENT FOCUS -------- */}
      <TreatmentFocusSection />
      {/* -------- WHY CHOOSE US -------- */}
      <WavyQuoteBanner />
      {/* -------- OUR SERVICES SECTION -------- */}
      <OurServicesSection />
      {/* -------- WHY CHOOSE US -------- */}
      <WhyChooseAda />
      {/* -------- TESTIMONIALS -------- */}
      <Testimonials />
      {/* -------- GET STARTED SECTION -------- */}
      <GetStartedSection />
      {/* -------- STATES ACCEPTING PATIENTS -------- */}
      <StatesSection />
      {/* -------- FAQ SECTION -------- */}
      <FaqSection />
      {/* -------- FOOTER -------- */}
      <Footer />

    </div>
  );
}

