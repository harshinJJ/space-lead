"use client";
import React from "react";
import PrimaryButton, { PrimaryLink } from "../buttons/PrimaryButton";
import dynamic from "next/dynamic";
import Image from "next/image";
import EVENT_INFO from "@/data/eventInfo";
const TimerBlock = dynamic(() => import("@/components/common/TimerBlock"), {
  ssr: false,
});
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
      label: EVENT_INFO.dateLabel,
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
      label: EVENT_INFO.fullAddress,
    },
  ];
  return (
    <section
      id="home-banner"
      className="relative bg-indigo bg-[top_center] bg-cover bg-no-repeat py-9 pt-38 text-white"
    >
      <Image fill src={"/images/backgrounds/header_title_bg.jpg"} alt="title-bg" className="absolute absolute-center w-full h-full"/>
      <div className="absolute z-1 inset-0 [background:linear-gradient(216.76deg,rgba(0,0,0,0.35)_22%,rgba(19,31,84,0.42)_97%),rgba(26,29,39,0.2)] "></div>
      <div className="container-fluid z-10 relative mx-auto px-5 sm:px-0">
        <div className="flex flex-col md:flex-row gap-9 items-end justify-between">
          <div className="w-full flex flex-col gap-5 md:max-w-[50%] font-gilroy-med">
            {/* <PrimaryLink href="/registration" className="gap-1 px-5 py-3.5 w-fit text-[1.375rem] !rounded-3xl leading-[100%] btn-gradient-secondary ">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8272 4.66663H8.16053C3.6922 4.66663 2.44387 5.73996 2.33887 9.91663C4.59053 9.91663 6.41053 11.7483 6.41053 14C6.41053 16.2516 4.59053 18.0716 2.33887 18.0833C2.44387 22.26 3.6922 23.3333 8.16053 23.3333H19.8272C24.4939 23.3333 25.6606 22.1666 25.6606 17.5V10.5C25.6606 5.83329 24.4939 4.66663 19.8272 4.66663Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4922 4.66663V8.74996"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4922 19.25V23.3333"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.529 10.8849L18.2524 12.3432C18.3224 12.4832 18.4624 12.5882 18.614 12.6116L20.224 12.8449C20.6207 12.9032 20.784 13.3932 20.4924 13.6732L19.3257 14.8049C19.209 14.9099 19.1624 15.0732 19.1857 15.2366L19.4657 16.8349C19.5357 17.2316 19.1157 17.5349 18.7657 17.3482L17.3307 16.5899C17.1907 16.5199 17.0157 16.5199 16.8757 16.5899L15.4407 17.3482C15.079 17.5349 14.6707 17.2316 14.7407 16.8349L15.0207 15.2366C15.044 15.0732 14.9974 14.9216 14.8807 14.8049L13.7257 13.6732C13.434 13.3932 13.5974 12.9032 13.994 12.8449L15.604 12.6116C15.7674 12.5882 15.8957 12.4949 15.9657 12.3432L16.6774 10.8849C16.8407 10.5232 17.354 10.5232 17.529 10.8849Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Register Now
            </PrimaryLink> */}
            <h4 className="font-azonix 2xl:text-[2.5rem] xl:text-3xl lg:text-2xl xs:text-2xl sm:text-xl xl:tracking-[-1.6px] 2xl:leading-[2.5rem]">
              {title}
            </h4>
            <div className="flex flex-col lg:flex-row xl:gap-x-10 gap-2 gap-y-4">
              <div className="flex items-center py-1 xl:px-4.5 px-2 rounded-full bg-linear-to-r from-[#90D3D012] to-white/7 w-full lg:w-fit">
                <div className="flex items-center justify-center">
                  {tags[0].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-lg lg:text-sm text-xs text-[#90D3D0]">
                  {tags[0].label}
                </span>
              </div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/UmrCYw9Got63qjtN7"
                className="flex items-center py-1 xl:ps-2.5 xl:pe-5 px-2 rounded-full bg-linear-to-r from-[#90D3D012] to-white/7 w-full lg:w-fit"
              >
                <div className="flex items-center justify-center">
                  {tags[1].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-base  text-xs text-[#90D3D0]">
                  {tags[1].label}
                </span>
              </a>
            </div>
          </div>
          <TimerBlock eventDate={EVENT_INFO.startDate} />
          {/* <div className="w-full flex justify-center sm:justify-end items-end font-gilroy-med">
            <div className="flex w-full md:w-auto flex-col gap-6.5">
              <div className="">
                <div className=" w-full md:w-fit flex items-center gap-2 py-4.5 px-5.5 rounded-full bg-linear-to-r from-[#90D3D012] to-white/7">
                  Time is running out Book your ticket.
                </div>
              </div>
              <div className="flex lg:flex-row items-stretch gap-3 2xl:gap-10">
                {Object.entries(remainingTime).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex-1 w-full h-full 2xl:min-w-25 flex items-center flex-col justify-center aspect-square w-fill rounded-full bg-white/3"
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TitleBlock;
