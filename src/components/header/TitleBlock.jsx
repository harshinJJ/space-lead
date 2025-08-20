"use client";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const TitleBlock = ({ title }) => {
  const remainingTime = {
    days: 9,
    hours: 3,
    minutes: 6,
    seconds: 9,
  };

  const tags = [
    {
      icon: (
        <svg
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 19.6C10.5 16.9601 10.5 15.6402 11.3136 14.8201C12.1272 14 13.4366 14 16.0556 14H29.9444C32.5633 14 33.8728 14 34.6864 14.8201C35.5 15.6402 35.5 16.9601 35.5 19.6V21H10.5V19.6Z"
            stroke="#5AC0BE"
            strokeOpacity="0.46"
          />
          <path
            d="M32.7222 14H13.2778C11.7437 14 10.5 15.2536 10.5 16.8V32.2C10.5 33.7464 11.7437 35 13.2778 35H32.7222C34.2563 35 35.5 33.7464 35.5 32.2V16.8C35.5 15.2536 34.2563 14 32.7222 14Z"
            stroke="#5AC0BE"
          />
          <path d="M16.5 10V17" stroke="#5AC0BE" strokeLinecap="round" />
          <path d="M29.5 10V17" stroke="#5AC0BE" strokeLinecap="round" />
        </svg>
      ),
      label: "Nov 09, 10, 11 - 2025",
    },
    {
      icon: (
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4998 30.625C22.604 25.375 27.7082 20.6739 27.7082 14.875C27.7082 9.07601 23.1378 4.375 17.4998 4.375C11.8619 4.375 7.2915 9.07601 7.2915 14.875C7.2915 20.6739 12.3957 25.375 17.4998 30.625Z"
            stroke="#5AC0BE"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 18.9584C19.9163 18.9584 21.875 16.9997 21.875 14.5834C21.875 12.1671 19.9163 10.2084 17.5 10.2084C15.0837 10.2084 13.125 12.1671 13.125 14.5834C13.125 16.9997 15.0837 18.9584 17.5 18.9584Z"
            stroke="#5AC0BE"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "Alfaisal University, Riyadh- Kingdom of Saudi Arabia",
    },
  ];
  return (
    <section
      id="home-banner"
      className="relative bg-[url('/images/backgrounds/header_title_bg.png')] bg-[top_center] bg-cover bg-no-repeat py-9 pt-38 text-white"
    >
      <div className="absolute z-1 inset-0 bg-gradient-to-r from-[#00000035] via-[#131f5442] to-[#1a1d2720] opacity-77"></div>
      <div className="container z-10 relative mx-auto px-5 sm:px-0">
        <div className="flex flex-col md:flex-row gap-9 items-end justify-between">
          <div className="w-full flex flex-col gap-5 md:max-w-[45%] font-gilroy-med">
            <PrimaryButton className="gap-1 px-3 pe-4.75 w-fit">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5787 3.66663H6.41206C2.90122 3.66663 1.92039 4.50996 1.83789 7.79163C3.60706 7.79163 5.03706 9.23079 5.03706 11C5.03706 12.7691 3.60706 14.1991 1.83789 14.2083C1.92039 17.49 2.90122 18.3333 6.41206 18.3333H15.5787C19.2454 18.3333 20.1621 17.4166 20.1621 13.75V8.24996C20.1621 4.58329 19.2454 3.66663 15.5787 3.66663Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.24365 3.66663V6.87496"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.24365 15.125V18.3333"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.773 8.55236L14.3413 9.69818C14.3963 9.80818 14.5063 9.89068 14.6255 9.90902L15.8905 10.0923C16.2022 10.1382 16.3305 10.5232 16.1013 10.7432L15.1847 11.6323C15.093 11.7148 15.0563 11.8432 15.0747 11.9715L15.2947 13.2273C15.3497 13.539 15.0197 13.7773 14.7447 13.6307L13.6172 13.0348C13.5072 12.9798 13.3697 12.9798 13.2597 13.0348L12.1322 13.6307C11.848 13.7773 11.5272 13.539 11.5822 13.2273L11.8022 11.9715C11.8205 11.8432 11.7838 11.724 11.6922 11.6323L10.7847 10.7432C10.5555 10.5232 10.6838 10.1382 10.9955 10.0923L12.2605 9.90902C12.3888 9.89068 12.4897 9.81735 12.5447 9.69818L13.1038 8.55236C13.2322 8.26819 13.6355 8.26819 13.773 8.55236Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get Ticket
            </PrimaryButton>
            <h4 className="font-azonix 2xl:text-[2.5rem] xl:text-3xl lg:text-2xl xs:text-2xl sm:text-xl xl:tracking-[-1.6px] 2xl:leading-[2.5rem]">
              {title}
            </h4>
            <div className="flex flex-col lg:flex-row xl:gap-x-10 gap-2 gap-y-4">
              {/* {tags.map(({ icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-1 px-5 rounded-full bg-linear-to-r from-[#90D3D012] to-[#FFFFFF12] w-full lg:w-fit"
                >
                  {icon}
                  <span className="lg:text-nowrap">{label}</span>
                </div>
              ))} */}{" "}
              <div className="flex items-center py-1 xl:px-4.5 px-2 rounded-full bg-linear-to-r from-[#90D3D012] to-[#FFFFFF12] w-full lg:w-fit">
                <div className="flex items-center justify-center">
                  {tags[0].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-lg lg:text-sm text-xs text-[#90D3D0]">
                  {tags[0].label}
                </span>
              </div>
              <div className="flex items-center py-1 xl:ps-2.5 xl:pe-5 px-2 rounded-full bg-linear-to-r from-[#90D3D012] to-[#FFFFFF12] w-full lg:w-fit">
                <div className="flex items-center justify-center">
                  {tags[1].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-base  text-xs text-[#90D3D0]">
                  {tags[1].label}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center sm:justify-end items-end font-gilroy-med">
            <div className="flex w-full md:w-auto flex-col gap-6.5">
              <div className="">
                <div className=" w-full md:w-fit flex items-center gap-2 py-4.5 px-5.5 rounded-full bg-linear-to-r from-[#90D3D012] to-[#FFFFFF12]">
                  Time is running out Book your ticket.
                </div>
              </div>
              <div className="flex lg:flex-row items-stretch gap-3 2xl:gap-10">
                {Object.entries(remainingTime).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex-1 w-full h-full 2xl:min-w-25 flex items-center flex-col justify-center aspect-square w-fill rounded-full bg-[#ffffff08]"
                  >
                    <h5 className=" text-2xl lg:text-3xl 2xl:text-5xl leading-[100%] text-[#90D3D0]">
                      {String(value).padStart(2, "0")}
                    </h5>
                    <p className="text-xs lg:text-sm 2xl:text-lg capitalize">
                      {key}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleBlock;
