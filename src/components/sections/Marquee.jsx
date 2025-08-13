"use client";
import React, { useEffect, useRef, useState } from "react";

const Marquee = () => {
  const items = ["INNOVATIVE", "BUSINESS CONFERENCE", "GROW YOUR NET"];

  const marqueeRef = useRef(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2); // half because we duplicated
    }
  }, []);

  return (
    <section className="w-full font-open-sans overflow-hidden bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 py-3">
      <div
        ref={marqueeRef}
        style={{
          animation: `marquee ${marqueeWidth / 50}s linear infinite`, // speed auto based on width
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, i) => (
              <div key={i} className="flex items-center">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4702 33.5C26.5829 33.5 33.9702 26.1127 33.9702 17C33.9702 7.8873 26.5829 0.500001 17.4702 0.500001C8.35752 0.5 0.970215 7.8873 0.970214 17C0.970214 26.1127 8.35751 33.5 17.4702 33.5ZM17.4702 5.31124C23.9257 5.31124 29.159 10.5445 29.159 17C29.159 23.4555 23.9257 28.6888 17.4702 28.6888C11.0147 28.6888 5.78145 23.4555 5.78145 17C5.78145 10.5445 11.0147 5.31124 17.4702 5.31124Z"
                    fill="url(#paint0_linear_64_2581)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_64_2581"
                      x1="0.0912795"
                      y1="17.04"
                      x2="33.9702"
                      y2="17"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5AC0BE" />
                      <stop stopOpacity="0.41" />
                      <stop offset="1" stopColor="#5AC0BE" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white text-6xl leading-[6.625rem] uppercase font-semibold mx-4">
                  {text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
