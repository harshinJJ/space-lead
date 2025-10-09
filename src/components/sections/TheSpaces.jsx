"use client";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import React from "react";

const dataList = [
  {
    title: "Conference Space",
    description:
      "Opening ceremonies, keynotes, sessions/talks, and thought-provoking panel discussions",
  },
  {
    title: "Exposition Space",
    description:
      "A vibrant hub featuring the exhibition hall, innovation art gallery, and the Youth Astronauts Zone",
  },
  // {
  //   title: "Experience Space",
  //   description:
  //     "Immersive showcases offering hands-on encounters with breakthrough technologies",
  // },
  {
    title: "Mastery Space",
    description:
      "An arena for deep-dive learning through workshops and roundtable discussions",
  },
];

const TheSpaces = ({ title, description, className = "" }) => {
  return (
    <section className={` py-20 ${className}`}>
      <div className="container-fluid lg:px-15 mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 sm:px-0">
        <div
          data-aos="fade-up"
          className={`flex flex-col sm:items-center sm:justify-between  md:justify-center `}
        >
          {title && (
            <h2
              className={`xl:text-5xl md:text-4xl text-2xl font-azonix text-center text-white leading-[1] font-medium mb-8.5`}
            >
              {title}
            </h2>
          )}
          {/* {description && <p className="text-secondary font-azonix text-center lg:max-w-[50%]">{description}</p>} */}
          <p className="text-secondary xl:text-base text-sm font-azonix text-center ">
            Discover Space Lead, Explore the Four{" "}
            <br className="hidden md:block" /> immersive spaces designed to
            engage, inspire, and transform.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 2xl:gap-x-16 2xl:gap-y-11.5 gap-5 justify-items-center w-full">
  {dataList.map((item, i) => (
    <div
      key={i}
      data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
      className={`bg-gradient-to-r from-[#D018B8]/0 to-[#D018B8]/6 p-5.5 flex flex-col md:flex-row items-center gap-5 w-full 3xl:px-38 2xl:px-15 ${
        // If it's the last item AND it's in an even index (meaning it starts a new row and is alone)
        i === dataList.length - 1 && i % 2 === 0
          ? 'lg:col-span-2 mx-auto lg:max-w-[calc(50%-2rem)]' // Span full width and center
          : ''
      }`}
    >
      <div className="flex flex-col items-center justify-center uppercase aspect-square font-light text-[#D018B8] rounded-4xl shrink-0">
        <div className="text-[3.125rem] leading-[1] font-extralight">
          {(i + 1).toString().padStart(2, "0")}.
        </div>
      </div>
      <div className="flex flex-col gap-2 xl:gap-4 flex-1">
        <h4 className="2xl:text-2xl text-white">{item.title}</h4>
        <p className="2xl:text-lg leading-[1.2] text-[#9D9D9D]" dangerouslySetInnerHTML={{ __html: item?.description }} />
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default TheSpaces;
