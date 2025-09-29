"use client";
import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const stats = [
//   { label: "Exhibitors", value: "30+" },
//   { label: "Sessions", value: "18+" },
//   { label: "Speakers", value: "20+" },
//   { label: "Workshops", value: "4+" },
// ];
const staticStats = [
  { label: "Entities coming together", value: "100+" },
  { label: "Companies Sponsors", value: "70+" },
  { label: "Medial Outlets", value: "300+" },
  { label: "Reach", value: "250+" },
  { label: "Speakers", value: "20+" },
  { label: "Nationalities ", value: "50+" },
];

const Counter = ({ end, suffix = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    gsap.to(obj, {
      val: end,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.floor(obj.val) + suffix;
        }
      },
    });
  }, [end, suffix]);

  return (
    <div
      ref={ref}
      className="text-white font-extralight text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] leading-none mb-2"
    ></div>
  );
};

const StatsCard = ({stats=staticStats,className=""}) => (
  <div data-aos="zoom-in" className={`grid  ${getGridCols(stats.length)} rounded-[1.25rem] bg-gradient-to-r from-secondary to-primary px-5 xl:px-12.5 py-2 md:py-2 lg:py-3 justify-between items-stretch w-full ${className}`}>
    {stats.map((item, idx) => (
      <div
        key={item.label}
        className={`flex-1 flex flex-col items-center justify-center  px-0 md:px-0.5 py-2 xl:py-5.75  ${
          idx !== stats.length - 1 ? "lg:border-r border-white/15" : ""
        }`}
      >
        <Counter end={parseInt(item.value)} suffix="+" />
        {/* <span className="text-white font-extralight text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] leading-none mb-2">
          {item.value}
        </span> */}
        <span className={`text-white/70 text-sm text-center md:text-base xl:text-lg font-normal tracking-wide ${(item?.length>5&&item.label?.length>10)?" lg:text-xs xl:text-sm":""}`}>
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

const getGridCols = (len) => {
  switch (true) {
    case len > 6:
      return "grid-cols-1 lg:grid-cols-1";
    case len === 6:
      return "grid-cols-1 lg:grid-cols-6";
    case len === 5:
      return "grid-cols-1 lg:grid-cols-5";
    case len === 4:
      return "grid-cols-1 lg:grid-cols-4";
    case len === 3:
      return "grid-cols-3 lg:grid-cols-3";
    case len === 2:
      return "grid-cols-2 lg:grid-cols-2";
    default:
      return "grid-cols-1 lg:grid-cols-6";
  }
};


export default StatsCard;
