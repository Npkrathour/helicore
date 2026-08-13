"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is Ada psychiatry confidential?",
    answer:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    question: "What is the best way to schedule a appointment?",
    answer:
      "You can schedule an appointment by contacting our office or using our online scheduling option. Our team will help you find a convenient appointment time.",
  },
  {
    question: "Do you prescribe controlled substance medication?",
    answer:
      "Medication decisions are made on an individual basis following a comprehensive evaluation with your provider.",
  },
  {
    question: "How long does the initial appointment take?",
    answer:
      "The initial appointment typically provides enough time for your provider to understand your concerns, discuss your history, and create an individualized treatment plan.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section
      id="faq"
      className="bg-[#FAF4E7] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-[70px]"
    >
      <div className="mx-auto max-w-[970px]">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl text-[#111111] sm:text-4xl lg:text-5xl font-semibold">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E9DCC3]"
              >
                {/* FAQ Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="faq-button flex w-full items-start gap-5 py-5 text-left"
                >
                  {/* Plus / Minus */}
                  <span className="flex w-5 shrink-0 justify-center text-2xl font-light leading-none">
                    {isOpen ? "−" : "+"}
                  </span>

                  {/* Question */}
                  <span className="font-serif text-[17px] leading-6 text-[#222222] sm:text-[18px] lg:text-lg font-semibold">
                    {faq.question}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="overflow-hidden pb-6 pl-10">
                    <p className="max-w-[900px] text-base leading-7 tracking-wide text-[#171717]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-flex min-w-[300px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#C8952E] via-[#F3D75C] to-[#F8E16F] px-10 py-4 text-base text-black shadow-[0_6px_20px_rgba(202,155,43,0.15)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(202,155,43,0.3)]"
          >
            See all FAQ

            <span className="text-xl font-normal">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}