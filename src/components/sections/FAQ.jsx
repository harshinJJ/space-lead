import React, { useState } from "react";

const faqs = [
  {
    question: "Can I use Spline for free?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "Why should I upgrade to Super or Super Team?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "What payment methods can I use?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "How does team billing work?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "Can I change from monthly to yearly?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "How can I ask other questions about pricing?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
  {
    question: "Interested in Spline for Education?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team files and 2 editors. You also have access to the Spline Library and can publish your scenes with a Spline logo.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#18182F] px-5 lg:py-22 py-10">
      <div className="max-w-3xl w-full">
        <p className="text-secondary font-open-sans text-center text-sm mb-5 ">
          Can't find the answer here?
        </p>
        <h2 className="text-white font-raleway text-center text-2xl md:text-3xl lg:text-[2.875rem] font-bold lg:mb-20 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`bg-white/3 rounded-2xl`}>
              <button
                className={`w-full font-inter flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors text-white/80`}
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-4 text-2xl">
                  {openIndex === idx ? (
                    <span className="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.8"
                          d="M2.5 7.5H13.5"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.8"
                          d="M8 3V13M3 8H13"
                          stroke="white"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              </button>
              {openIndex === idx && faq.answer && (
                <div className="px-6 pb-5 text-white/40 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
