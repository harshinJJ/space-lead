"use client";
import React from "react";
import PrimaryButton, { PrimaryLink } from "../buttons/PrimaryButton";
import dynamic from "next/dynamic";
import Image from "next/image";
import EVENT_INFO from "@/data/eventInfo";
const TimerBlock = dynamic(() => import("@/components/common/TimerBlock"), {
  ssr: false,
});
const TitleBlock = ({ title,pathname }) => {
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
      className="relative bg-indigo bg-[top_center] bg-cover bg-no-repeat py-9 xl:pt-38 pt-30 text-white"
    >
      <Image quality={80} fill src={"/images/backgrounds/title_block_bg.jpg"} alt="title-bg" className="absolute absolute-center object-cover object-center w-full h-full"/>
      <div className="absolute z-1 inset-0 [background:linear-gradient(216.76deg,rgba(0,0,0,0.35)_22%,rgba(19,31,84,0.42)_97%),rgba(26,29,39,0.2)] "></div>
      <div className="container-fluid z-10 relative mx-auto px-5 sm:px-0">
        <div className="flex flex-col md:flex-row gap-9 items-end justify-between">
          <div className={`w-full flex flex-col gap-5 md:max-w-[50%] font-gilroy-med ${pathname!="/media"?"xl:mt-5 ":""}`}>

            {pathname=="/media"&&<PrimaryLink href="#" className="gap-1 px-5 py-3.5 w-fit text-[1.375rem] !rounded-3xl leading-[100%] btn-gradient-secondary ">

              Download Media Kit
            </PrimaryLink>}
            <h4 className="font-azonix 2xl:text-[2.5rem] xl:text-3xl lg:text-2xl xs:text-2xl sm:text-xl xl:tracking-[-1.6px] 2xl:leading-[2.5rem]">
              {title}
            </h4>
            <div className="flex flex-col lg:flex-row xl:gap-x-10 gap-2 gap-y-4">
              <div className="flex items-center py-1 xl:ps-2.5 xl:pe-5 px-2 rounded-full bg-linear-to-r from-[#90D3D012] to-white/7 w-full lg:w-fit">
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
          <TimerBlock eventDate={EVENT_INFO.startDateTime} />
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
