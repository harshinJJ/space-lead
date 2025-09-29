"use client";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";

const JoinUs = ({
  title = "Be a part of the future",
  description,
  theme = "light",
  selectAction,
  className = "",
  videoURL = "/images/backgrounds/why_attend_bg.webm",
  navLinks = [],
  overlay = "primary",
}) => {
  return (
    <section className={`bg-indigo py-20 px-5 ${className}`}>
      <div className="container-fluid  mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 py-10 lg:py-30 lg:pb-20 lg:px-29.5 rounded-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src={videoURL}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-50 w-full h-full"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            overlay == "indigo" ? "from-indigo" : "from-primary  opacity-80"
          } to-indigo/0 to-[70%] w-full h-full`}
        ></div>

        <div
          data-aos="fade-up"
          className={`relative flex flex-col sm:items-center sm:justify-between  md:justify-center `}
        >
          {title && (
            <h2
              className={`text-lg xs:text-2xl lg:text-5xl 2xl:text-[4rem] font-orbitron text-white leading-[1] text-center font-medium max-w-[80%]`}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className="text-[#BAFFFE] font-azonix text-center lg:max-w-4/5 2xl:text-[1.375rem] lg:text-lg text-sm  lg:mt-15 mt-8">
              {description}
              {/* Join global pioneers, innovators, and leaders in shaping tomorrow’s
            health and engineering advancements beyond Earth. */}
            </p>
          )}
          {/* {showViewAll && ( */}
          <div className="mt-15 flex flex-col sm:flex-row items-center justify-center lg:gap-10 gap-5">
            {navLinks?.map((link, i) => (
              <PrimaryLink
                key={i}
                data-aos="fade-right"
                data-aos-delay={`${i * 50}`}
                href={link.url || "#"}
                className="w-fit group px-7.5 py-[1.0625rem] items-center gap-2 btn-gradient transition-all duration-300"
              >
                <span className="leading-[100%] text-lg ">{link.label}</span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  className={getArrowDirection(link.arrowDirection)}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7598 9.46875L11.6807 15.5479C11.5732 15.6553 11.4463 15.7383 11.2998 15.7969C11.1533 15.8555 11.002 15.8848 10.8457 15.8848C10.6797 15.8848 10.521 15.8555 10.3696 15.7969C10.2183 15.7383 10.0889 15.6553 9.98145 15.5479C9.72754 15.3135 9.60059 15.0254 9.60059 14.6836C9.60059 14.3418 9.72754 14.0586 9.98145 13.834L13.9658 9.82031H2.34961C2.00781 9.82031 1.71973 9.70312 1.48535 9.46875C1.25098 9.23438 1.13379 8.94629 1.13379 8.60449C1.13379 8.28223 1.25098 7.99902 1.48535 7.75488C1.71973 7.51074 2.00781 7.38867 2.34961 7.38867H13.9658L9.98145 3.4043C9.72754 3.16992 9.60059 2.88184 9.60059 2.54004C9.60059 2.19824 9.72754 1.91504 9.98145 1.69043C10.2061 1.44629 10.4893 1.32422 10.8311 1.32422C11.1729 1.32422 11.4561 1.44629 11.6807 1.69043L17.7598 7.76953C18.0039 7.99414 18.126 8.27734 18.126 8.61914C18.126 8.96094 18.0039 9.24414 17.7598 9.46875Z"
                    fill="white"
                  />
                </svg>
              </PrimaryLink>
            ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

const getArrowDirection = (dir) => {
  switch (dir) {
    case "left":
      return "rotate-y-[180deg]";
    case "right":
      return "";
    case "top":
      return "rotate-[270deg]";
    case "bottom":
      return "rotate-[90deg]";
    default:
      return "";
  }
};

export default JoinUs;
