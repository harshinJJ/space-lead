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
const stats = [
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

const StatsCard = () => (
  <div className="grid grid-cols-1 lg:grid-cols-6 rounded-[1.25rem] bg-gradient-to-r from-secondary to-primary px-12.5 py-2 md:py-2 lg:py-3 w-full justify-between items-stretch">
    {stats.map((item, idx) => (
      <div
        key={item.label}
        className={`flex-1 flex flex-col items-center justify-center  px-0 md:px-1 py-2 xl:py-5.75  ${
          idx !== stats.length - 1 ? "lg:border-r border-white/15" : ""
        }`}
      >
        <Counter end={parseInt(item.value)} suffix="+" />
        {/* <span className="text-white font-extralight text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] leading-none mb-2">
          {item.value}
        </span> */}
        <span className="text-white/70 text-sm text-center md:text-base xl:text-lg font-normal tracking-wide">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

const StatsCardOld = () => {
  return (
    <div className="rounded-[1.25rem] bg-gradient-to-r px-2.5 py-6.25 from-secondary to-primary xl:mt-25 md:mt-10 mt-5 flex flex-col lg:flex-row justify-around text-center">
      {stats.map((item) => (
        <div className="" key={item.label}>
          <p className="text-4xl lg:text-6xl xl:text-[6.25rem] align-bottom text-center font-azonix text-tertiary">
            {item.value}
          </p>
          <p className="text-lg lg:text-2xl xl:text-[2rem]">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
