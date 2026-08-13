"use client";

import React from "react";

const quickLinks = [
    { label: "Who We Are", href: "#about" },
    { label: "What We Treat", href: "#treatments" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
];

const resources = [
    { label: "FAQs", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "Fees and Insurance", href: "#fees" },
];

const legalLinks = [
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
    { label: "Return Policy", href: "#return-policy" },
    { label: "Cookie Settings", href: "#cookie-settings" },
];

const socialLinks = [
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
            >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.7v3h2.7v8h3.1Z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.8-6.3L6.7 22H3.6l7.3-8.4L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.5 4H6.7l11.1 15.9Z" />
            </svg>
        ),
    },
    {
        name: "TikTok",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M16.5 3c.4 2.1 1.6 3.4 3.5 3.5v3.1c-1.4 0-2.6-.4-3.5-1v6.2c0 4-2.7 6.2-6.3 6.2-3.4 0-5.7-2.2-5.7-5.3 0-3.4 2.6-5.7 6.3-5.7.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.7 0-2.8 1-2.8 2.4 0 1.2.9 2.3 2.3 2.3 1.5 0 2.5-1 2.5-3V3h3.7Z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M5.2 8.1H2V22h3.2V8.1ZM3.6 2C2.6 2 2 2.7 2 3.6c0 .9.6 1.6 1.6 1.6s1.6-.7 1.6-1.6C5.2 2.7 4.6 2 3.6 2ZM22 13.9c0-4.2-2.2-6.2-5.2-6.2-2.4 0-3.5 1.3-4.1 2.2V8.1H9.5V22h3.2v-7.7c0-2 .4-3.9 2.8-3.9 2.3 0 2.3 2.1 2.3 4V22H21v-8.1h1Z" />
            </svg>
        ),
    },
];

interface LinkGroupProps {
    title: string;
    links: {
        label: string;
        href: string;
    }[];
}

function LinkGroup({ title, links }: LinkGroupProps) {
    return (
        <div>
            <h3 className="font-serif text-sm font-medium text-[#D9AE3D]">
                {title}
            </h3>

            <div className="mt-5 space-y-3">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="block text-sm text-white/90 transition hover:text-[#E4C45B]"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

function BrandLogo() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#C9A43A] bg-black shadow-[0_0_10px_rgba(212,165,44,0.3)]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9AE3D] font-serif text-sm font-bold text-[#D9AE3D]">
                    A
                </div>
            </div>

            <h2 className="text-lg font-semibold tracking-[0.2em] text-white">
                ADA PSYCHIATRY
            </h2>
        </div>
    );
}

function SocialLinks() {
    return (
        <div className="mt-4 flex items-center gap-5">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-white transition hover:text-[#D9AE3D]"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="border-t-2 border-[#F5EEDB] bg-black text-white">
            <div className="mx-auto max-w-[1140px] px-6 py-12 sm:px-8 lg:px-0 lg:py-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr_1.8fr] lg:gap-8">
                    {/* Quick Links */}
                    <LinkGroup title="Quick Links" links={quickLinks} />

                    {/* Resources */}
                    <LinkGroup title="Resources" links={resources} />

                    {/* Legal */}
                    <LinkGroup title="Legal" links={legalLinks} />

                    {/* Business Hours */}
                    <div>
                        <h3 className="font-serif text-sm font-medium text-[#D9AE3D]">
                            Business Hours
                        </h3>

                        <div className="mt-5 space-y-3">
                            <p className="text-sm text-white/90">
                                Monday - Thursday
                            </p>

                            <p className="text-sm text-white/90">
                                09:00 am - 4:00 pm
                            </p>
                        </div>

                        {/* Careers */}
                        <h3 className="mt-8 font-serif text-sm font-medium text-[#D9AE3D]">
                            For Careers
                        </h3>

                        <div className="mt-5 space-y-3">
                            <p className="text-sm text-white/90">
                                Interested in joining the ADA Team?
                            </p>

                            <a
                                href="mailto:Career@adapsychiatry.com"
                                className="block text-sm text-white/90 transition hover:text-[#E4C45B]"
                            >
                                Career@adapsychiatry.com
                            </a>
                        </div>
                    </div>

                    {/* Company / Contact */}
                    <div>
                        <BrandLogo />

                        {/* Location */}
                        <div className="mt-6">
                            <h3 className="font-serif text-sm font-medium text-[#D9AE3D]">
                                Locate us
                            </h3>

                            <div className="mt-4 space-y-1 text-sm leading-5 text-white/90">
                                <p>
                                    1820 E Ray Road, STE A107, Chandler, Arizona 85225
                                </p>

                                <p>
                                    Phone:{" "}
                                    <a
                                        href="tel:4805269292"
                                        className="transition hover:text-[#D9AE3D]"
                                    >
                                        480-526-9292
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h3 className="font-serif text-sm font-medium text-[#D9AE3D]">
                                Follow us
                            </h3>

                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-[1140px] px-6 py-5 text-center">
                    <p className="text-xs tracking-wide text-white/90">
                        © Ada Psychiatry. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}