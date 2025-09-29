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
  className = "",
}) => {
  return (
    <section className={` py-20 ${className}`}>
      <div className="container-fluid  mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 sm:px-0">
        <div data-aos="fade-up"
          className={`flex flex-col sm:items-center sm:justify-between  md:justify-center `}
        >
          {title && (
            <h2
              className={`text-lg xs:text-2xl lg:text-5xl 2xl:text-[4rem] font-orbitron text-white leading-[1] font-medium mb-8.5`}
            >
              {title}
            </h2>
          )}
          {/* {description && <p className="text-secondary font-azonix text-center lg:max-w-[50%]">{description}</p>} */}
          <p className="text-secondary font-azonix text-center ">
            Discover Space Lead, Explore the Four <br /> immersive spaces designed to
            engage, inspire, and transform.
          </p>
        </div>
        <HorizontalCardStagger className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 2xl:gap-x-16 2xl:gap-y-11.5 gap-5 justify-items-center w-full">
          {dataList.map((item, i) => (
            <div
              key={i}
              data-aos={i%2==0?"fade-right":"fade-left"}
              className=" bg-gradient-to-r from-[#D018B8]/0 to-[#D018B8]/6 p-5.5 flex items-center gap-5 w-full"
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
