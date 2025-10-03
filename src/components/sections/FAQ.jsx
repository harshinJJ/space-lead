"use client";
import React, { useState } from "react";
import DotPattern from "../patterns/DotPattern";
import faqs from "@/../public/assets/json/faq.json";



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className=" min-h-screen mx-auto bg-white">
      <div className="container-fluid mx-auto flex flex-col items-center justify-center  px-5 lg:py-22 py-10 relative ">
        <DotPattern className="absolute top-13.5 right-0" />
        <div className="relative max-w-3xl w-full">
          <p className="text-secondary  text-centerxl:text-lg text-sm font-azonix mb-5 ">
            Can't find the answer here?
          </p>
          <h2 className="text-black xl:text-5xl md:text-4xl text-2xl font-azonix text-center font-bold lg:mb-20 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div data-aos="fade-up" data-aos-once="true" key={idx} className={`bg-black/3 rounded-2xl`}>
                <button
                  className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors text-Black/80`}
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
                            stroke="currentColor"
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
                            stroke="currentColor"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </button>
                {openIndex === idx && faq.answer && (
                  <div className="px-6 pb-5 text-black/40 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
