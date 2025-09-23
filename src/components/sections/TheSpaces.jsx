"use client";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import React from "react";

const dataList = [
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
];

const TheSpaces = ({
  title,
  description,
  theme = "light",
  selectAction,
  className = "",
}) => {
  return (
    <section className={` py-20 ${className}`}>
      <div className="container-fluid  mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 sm:px-0">
        <div
          className={`flex flex-col sm:items-center sm:justify-between  md:justify-center `}
        >
          {title && (
            <h2
              className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-orbitron text-white 2xl:leading-snug  `}
            >
              {title}
            </h2>
          )}
          {description && <p className="text-secondary font-azonix text-center lg:max-w-[80%]">{description}</p>}
        </div>
        <HorizontalCardStagger className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7.5 gap-5 justify-items-center w-full">
          {dataList.map((item, i) => (
            <div
              key={i}
              className=" rounded-2xl p-5.5 flex items-center gap-5 w-full"
            >
              <div className="flex flex-col items-center justify-center uppercase aspect-square  font-light text-[#D018B8] rounded-4xl p-5 2xl:p-7.5 shrink-0">
                <div className="text-[4rem] leading-[1]">
                  {(i + 1).toString().padStart(2, "0")}.
                </div>
              </div>
              <div className="flex flex-col gap-2 xl:gap-4 flex-1">
                <h4 className="2xl:text-2xl text-white">{item.title}</h4>
                <p className="2xl:text-xl text-[#6C757D]">{item.description}</p>
              </div>
            </div>
          ))}
        </HorizontalCardStagger>
      </div>
    </section>
  );
};

export default TheSpaces;
