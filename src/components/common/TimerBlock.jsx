"use client";
import EVENT_INFO from "@/data/eventInfo";
import React, { useEffect, useState } from "react";

const isEventActive = (date) => {
  const currentDate = new Date();
  // const eventDate = new Date("2025-11-11T15:59:59");
  const eventDate = new Date(date);
  return currentDate < eventDate;
};

export const HomeTimer = ({ eventDate = EVENT_INFO.startDateTime }) => {
  const calculateRemainingTime = () => {
    const now = new Date();
    const event = new Date(eventDate);
    const diff = event - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const isActive = isEventActive(eventDate)

  return (
    isActive?<div className="w-full flex flex-col gap-7.5 justify-center items-center font-gilroy-med">
      <div className="grid grid-cols-4 justify-items-center xs:gap-3 gap-2 2xl:gap-10">
        {Object.entries(remainingTime).map(([key, value]) => (
          <div
            key={key}
            className="flex-1 w-full h-auto 2xl:min-w-25 flex items-center flex-col justify-center aspect-square p-2 xs:p-3.75 w-fill rounded-full bg-linear-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F]"
          >
            <p className=" text-2xl lg:text-3xl 2xl:text-5xl leading-[100%] text-[#90D3D0]">
              {String(value).padStart(2, "0")}
            </p>
            <p className="text-xs lg:text-sm 2xl:text-lg capitalize">{key}</p>
          </div>
        ))}
      </div>
      <div className=" w-full text-sm xs:text-base text-[#90D3D0] md:w-fit flex items-center gap-2 py-4.5 px-5.5 rounded-full bg-linear-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F]">
        Time is running out register now.
      </div>
    </div>:null
  );
};
const TimerBlock = ({ eventDate = EVENT_INFO.startDateTime, theme = "default" }) => {
  const calculateRemainingTime = () => {
    const now = new Date();
    const event = new Date(eventDate);
    const diff = event - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  const isActive = isEventActive(eventDate)
  return (isActive?
    <div className="w-full flex justify-center sm:justify-end items-end font-gilroy-med">
      <div className="flex w-full md:w-auto flex-col gap-6.5">
        <div className="">
          <div
            className={` w-full  md:w-fit flex items-center gap-2 py-4.5 px-5.5 rounded-full bg-linear-to-r ${
              theme == "register"
                ? "from-secondary to-primary text-white"
                : "from-[#1F273F] via-[#3D4762] to-[#432F5F] text-[#90D3D0]"
            }`}
          >
            Time is running out register now.
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center items-stretch gap-3 2xl:gap-10">
          {Object.entries(remainingTime).map(([key, value]) => (
            <div
              key={key}
              className="flex-1 w-full h-auto max-w-30 2xl:min-w-25 lg:min-w-20 flex items-center flex-col justify-center aspect-square w-fill rounded-full bg-linear-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F]"
            >
              <p className=" text-2xl lg:text-3xl 2xl:text-5xl leading-[100%] text-[#90D3D0]">
                {String(value).padStart(2, "0")}
              </p>
              <p className="text-xs lg:text-sm 2xl:text-lg capitalize">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>:null
  );
};

export default TimerBlock;
