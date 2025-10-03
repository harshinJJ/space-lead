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
import {
  LightningIcon,
  RobotIcon,
  RocketIcon,
  LifeSupportIcon,
  EarthIcon,
  GlobeIcon,
  AlertMsgIcon,
  BrainIcon,
  TrophyIcon,
  SpaceStationIcon,
} from "@/data/icons";

// const data = [
//   {
//     label: "Space & Advanced Engineering",
//     rows: [
//       [
//         { icon: <RocketIcon />, label: " Aerospace Engineering " },
//         " Robotics ",
//         " Space Applications ",
//       ],
//       [" Energy & Power Systems ", " Life Support Systems "],
//     ],
//   },
//   {
//     label: "Human Health Off-Planet",
//     rows: [
//       [" Earth Healthcare Transformation ", " Physiological Challenges "],
//       [
//         " Medical Challenges ",
//         " Psychological Challenges ",
//         " Research Breakthroughs ",
//       ],
//     ],
//   },
// ];
const data = [
  {
    label: "Space & Advanced Engineering",
    rows: [
      [
        { icon: <RocketIcon />, label: "Aerospace Engineering" },
        { icon: <RobotIcon />, label: "Robotics" },
        // { icon: <SpaceStationIcon />, label: "Space Applications" },
      ],
      [
        { icon: <LightningIcon />, label: "Power Systems" },
        { icon: <LifeSupportIcon />, label: "Life Support" },
      ],
    ],
  },
  {
    label: "Human Health Off-Planet",
    rows: [
      [
        // { icon: <EarthIcon />, label: "Earth Healthcare Transformation" },
        { icon: <EarthIcon />, label: "Transformation" },
        // { icon: <GlobeIcon />, label: "Physiological Challenges" },
      ],
      [
        { icon: <AlertMsgIcon />, label: "Challenges" },
        // { icon: <BrainIcon />, label: "Psychological Challenges" },
        { icon: <TrophyIcon />, label: "Research" },
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
      <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 lg:px-30 px-5 sm:px-0">
        <div className="relative">
          <div
            data-aos="fade-up"
            className={`flex flex-col items-center sm:justify-between  md:justify-center `}
          >
            {label && <p className="text-secondary xl:text-base text-sm font-azonix">{label}</p>}
            {title && (
              <h2
                className={`xl:text-5xl md:text-4xl text-2xl font-azonix mb-3 ${
                  theme == "dark" ? "text-white" : "text-[#000222]"
                } 2xl:leading-snug  `}
              >
                {title}
              </h2>
            )}
          </div>
          <div data-aos="fade-right" className="mb-16 lg:mb-0">
            <div
              className={`text-white xl:text-3xl text-2xl font-gilroy-bold font-medium mb-5 flex items-center text-center  justify-start`}
            >
              <h5 className="border-b-1  border-primary pb-2.5 leading-[1]">
                Space & Advanced <br /> Engineering
              </h5>
            </div>

            {/* First Content */}
            <div
              className={`relative w-fit  lg:ms-25 ms:10  after:absolute lg:after:h-6/7 after:h-[calc(100%-1.7rem)] after:w-0.25 after:-left-0 after:-top-5 after:bg-primary`}
            >
              {data[0].rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex flex-col lg:flex-row w-full lg:w-fit gap-4 relative before:absolute before:h-0.25 ${
                    rowIndex == 0
                      ? "lg:before:w-112.5 pb-0 lg:pb-5"
                      : "lg:before:w-94"
                  }  before:bg-primary before:-top-0 before:-left-0 p-5 `}
                >
                  {row.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`relative after:absolute ${
                        itemIndex == 0 && rowIndex == data.length - 1
                          ? " after:h-0.25 after:w-3 after:-left-5  after:mx-auto "
                          : " lg:after:h-1/5 lg:after:w-0.25 lg:after:left-0 lg:after:right-0 lg:after:-top-5 after:h-0.25 after:w-3 after:-left-5  after:mx-auto"
                      } after:bg-primary bg-white/10 flex gap-2 items-center rounded-2xl px-5 font-gilroy-bold py-3.5 text-white xl:text-2xl font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 flex-shrink-0`}
                    >
                      <span className="text-primary">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* second section */}

          <div data-aos="fade-left" className="mb-16 lg:-translate-y-10">
            <div
              className={`text-white xl:text-3xl text-2xl font-gilroy-bold font-medium mb-5 flex items-center text-center justify-end`}
            >
              <h5 className="border-b-1  border-secondary pb-2.5 leading-[1]">
                Human Health <br /> Off-Planet
              </h5>
            </div>

            {/* Section Content */}
            <div
              className={` w-fit ms-auto lg:me-20 me:10 relative flex flex-col items-end before:absolute before:h-0.25 before:bg-secondary before:-top-0 before:-right-0 after:absolute lg:after:h-6/7 after:h-[calc(100%-1.7rem)] after:w-0.25 after:-right-0 after:-top-5 after:bg-secondary  max-w-4xl`}
            >
              {data[1].rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`flex flex-col lg:flex-row gap-4 justify-end relative before:absolute before:h-0.25 ${
                    rowIndex == 0
                      ? "lg:before:w-35 pb-0 lg:pb-5"
                      : "lg:before:w-77"
                  } lg:w-fit w-full before:bg-secondary before:-top-0 before:-right-0 p-5`}
                >
                  {row.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`relative after:absolute ${
                        itemIndex == row.length - 1 &&
                        rowIndex == data.length - 1
                          ? " after:h-0.25 after:w-3 after:-right-5  after:mx-auto "
                          : " lg:after:h-1/5 lg:after:w-0.25 lg:after:left-0 lg:after:right-0 lg:after:-top-5 after:h-0.25 after:w-3 after:-right-5  after:mx-auto"
                      } after:bg-secondary bg-white/10 flex gap-2 items-center rounded-2xl px-5 font-gilroy-bold py-3.5 text-white xl:text-2xl font-medium backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 flex-shrink-0`}
                    >
                      <span className="text-secondary">{item.icon}</span>
                      <span>{item.label}</span>
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
