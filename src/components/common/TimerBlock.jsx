"use client"
import React, { useEffect, useState } from "react";

const TimerBlock = ({ eventDate = "2025-11-09" }) => {
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

  return (
    <div className="w-full flex justify-center sm:justify-end items-end font-gilroy-med">
      <div className="flex w-full md:w-auto flex-col gap-6.5">
        <div className="">
          <div className=" w-full text-[#90D3D0] md:w-fit flex items-center gap-2 py-4.5 px-5.5 rounded-full bg-linear-to-r from-[#90D3D012] to-white/7">
            Time is running out register now.
          </div>
        </div>
        <div className="flex lg:flex-row items-stretch gap-3 2xl:gap-10">
          {Object.entries(remainingTime).map(([key, value]) => (
            <div
              key={key}
              className="flex-1 w-full h-full 2xl:min-w-25 flex items-center flex-col justify-center aspect-square w-fill rounded-full bg-white/3"
            >
              <p className=" text-2xl lg:text-3xl 2xl:text-5xl leading-[100%] text-[#90D3D0]">
                {String(value).padStart(2, "0")}
              </p>
              <p className="text-xs lg:text-sm 2xl:text-lg capitalize">{key}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimerBlock;
