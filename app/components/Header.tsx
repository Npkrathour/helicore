"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full bg-black text-white border-b border-white/10">
            <div className="mx-auto flex h-[94px] max-w-[1710px] items-center justify-between px-6 sm:px-8 lg:px-14">

                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center gap-4 shrink-0"
                >
                    {/* Logo Circle */}
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-2 border-[#C9A43A] bg-black shadow-[0_0_10px_rgba(212,165,44,0.35)]">
                        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-[#D9AE3D] bg-gradient-to-br from-[#F8E27B] via-[#D5A936] to-[#8D6418]">
                            <span className="font-serif text-xl font-bold text-black">
                                A
                            </span>
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

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="ml-1 inline-flex min-w-[248px] items-center justify-center rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#C8952E] px-8 py-4 text-[16px] font-medium text-black shadow-[0_6px_20px_rgba(202,155,43,0.2)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(202,155,43,0.35)]"
                    >
                        Book an Appointment
                    </a>
                </nav>

                {/* Mobile CTA */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#C8952E] px-5 py-3 text-sm font-semibold text-black sm:inline-flex lg:hidden"
                >
                    Book Appointment
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9AE3D]/50 text-white lg:hidden"
                >
                    <span className="flex flex-col gap-1.5">
                        <span className="block h-[2px] w-5 bg-white" />
                        <span className="block h-[2px] w-5 bg-white" />
                        <span className="block h-[2px] w-5 bg-white" />
                    </span>
                </button>
            </div>
        </header>
    );
}