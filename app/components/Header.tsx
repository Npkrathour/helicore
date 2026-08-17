"use client";

import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative w-full bg-black text-white border-b border-white/10">
      <div className="mx-auto flex h-[94px] max-w-[1710px] items-center justify-between px-6 sm:px-8 lg:px-14">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4 shrink-0">
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#C9A43A] bg-black shadow-[0_0_10px_rgba(212,165,44,0.35)]">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#D9AE3D] bg-gradient-to-br from-[#F8E27B] via-[#D5A936] to-[#8D6418]">
              <span className="font-serif text-xl font-bold text-black">A</span>
            </div>
          </div>

          <span className="hidden font-serif text-[21px] font-semibold tracking-[0.28em] text-white sm:block">
            Ada Psychiatry
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#about"
            className="flex items-center gap-2 text-[16px] font-medium text-white transition-colors hover:text-[#E4C45B]"
          >
            Who we are
            <ChevronDown className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="flex items-center gap-2 text-[16px] font-medium text-white transition-colors hover:text-[#E4C45B]"
          >
            Who we treat
            <ChevronDown className="h-4 w-4" />
          </a>

          <a
            href="#services"
            className="text-[16px] font-medium text-white transition-colors hover:text-[#E4C45B]"
          >
            Services
          </a>

          <a
            href="#resources"
            className="flex items-center gap-2 text-[16px] font-medium text-white transition-colors hover:text-[#E4C45B]"
          >
            Resources
            <ChevronDown className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="ml-1 inline-flex min-w-[248px] items-center justify-center rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#C8952E] px-8 py-4 text-[16px] font-medium text-black shadow-[0_6px_20px_rgba(202,155,43,0.2)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(202,155,43,0.35)]"
          >
            Book an Appointment
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            onClick={closeMenu}
            className="hidden rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#C8952E] px-5 py-3 text-sm font-semibold text-black sm:inline-flex"
          >
            Book Appointment
          </a>

          {/* Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9AE3D]/50 text-white"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-[2px] w-5 bg-white" />
                <span className="block h-[2px] w-5 bg-white" />
                <span className="block h-[2px] w-5 bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-black px-6 py-6 shadow-2xl lg:hidden">
          <nav className="flex flex-col">
            <a
              href="#about"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-medium transition-colors hover:text-[#E4C45B]"
            >
              Who we are
              <ChevronDown className="h-4 w-4" />
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-medium transition-colors hover:text-[#E4C45B]"
            >
              Who we treat
              <ChevronDown className="h-4 w-4" />
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-[16px] font-medium transition-colors hover:text-[#E4C45B]"
            >
              Services
            </a>

            <a
              href="#resources"
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/10 py-4 text-[16px] font-medium transition-colors hover:text-[#E4C45B]"
            >
              Resources
              <ChevronDown className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#C8952E] px-6 py-4 text-[16px] font-semibold text-black"
            >
              Book an Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
