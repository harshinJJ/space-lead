"use client";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { CircularLink } from "../buttons/CircularButton";
import SpeakerCard from "../cards/SpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import dynamic from "next/dynamic";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";

const data = [
  {
    label: "Space & Advanced Engineering",
    rows: [
      ["Aerospace Engineering", "Robotics", "Space Applications"],
      ["Energy & Power Systems", "Life Support Systems"],
    ],
  },
  {
    label: "Human Health Off-Planet",
    rows: [
      ["Earth Healthcare Transformation", "Physiological Challenges"],
      [
        "Medical Challenges",
        "Psychological Challenges",
        "Research Breakthroughs",
      ],
    ],
  },
];

const FocusAreas = ({
  //   data = [],
  title,
  label,
  theme = "light",
  selectAction,
  className = "",
  cardSize = "lg",
  showNavButton,
  navLabel = "View Full Line-Up",
  navLink = "/speakers",
  linkType = "internal",
}) => {
  return (
    <section className={`bg-[#EDF0FE] py-20 ${className}`}>
      <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 sm:px-0">
        <div
          className={`flex flex-col sm:items-center sm:justify-between  md:justify-center `}
        >
          {label && <p className="text-secondary font-azonix">{label}</p>}
          {title && (
            <h2
              className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-orbitron ${
                theme == "dark" ? "text-white" : "text-[#000222]"
              } 2xl:leading-snug  `}
            >
              {title}
            </h2>
          )}
        </div>

        <div className="relative">
          <div className="mb-16">
            <div
              className={`text-white text-2xl font-gilroy-bold font-medium mb-5 flex items-center text-center  justify-start`}
            >
              <h5 className="border-b-1  border-primary pb-2.5 leading-[1]">
                Space & Advanced <br /> Engineering
              </h5>
            </div>

            {/* First Content */}
            <div className={`relative space-y-6 p-5 ms-25 before:absolute before:h-0.25 before:w-1/2 before:bg-primary before:-top-0 before:-left-0 after:absolute after:h-4/5 after:w-0.25 after:-left-0 after:-top-5 after:bg-primary`}>
              {data[0].rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`flex gap-4 `}>
                  {row.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/10 rounded-2xl px-5 font-gilroy-bold py-3.5 text-white text-lg font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>


          {/* second section */}

          <div className="mb-16">
            <div
              className={`text-white text-2xl font-gilroy-bold font-medium mb-5 flex items-center text-center justify-end`}
            >
              <h5 className="border-b-1  border-secondary pb-2.5 leading-[1]">
                Human Health <br /> Off-Planet
              </h5>
            </div>

            {/* Section Content */}
            <div
              className={`space-y-6 p-5 ms-auto me-20 relative before:absolute before:h-0.25 before:w-1/2 before:bg-secondary before:-top-0 before:-right-0 after:absolute after:h-4/5 after:w-0.25 after:-right-0 after:-top-5 after:bg-secondary  max-w-4xl`}
            >
              {data[1].rows.map((row, rowIndex) => (
                <div key={rowIndex} className={`flex gap-4 justify-end`}>
                  {row.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/10 rounded-2xl px-5 font-gilroy-bold py-3.5 text-white text-lg font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {showNavButton && (
          <div className=" pt-5 flex items-center justify-center gap-3 px-5 sm:px-0">
            <PrimaryLink
              href={navLink}
              target={linkType == "external" ? "_blank" : "_self"}
              className="px-5 py-3.5 text-sm lg:text-lg sm:whitespace-nowrap md:whitespace-normal w-fit"
            >
              {navLabel}
            </PrimaryLink>
          </div>
        )}
      </div>
      {/* Speaker Cards as Swiper FreeMode */}
    </section>
  );
};

export default FocusAreas;
