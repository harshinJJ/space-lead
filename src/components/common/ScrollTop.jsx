"use client";
import React from "react";

const ScrollTop = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`cursor-pointer w-fit aspect-square z-50 bg-[#5AC0BE] p-0.5 bg-gradient-to-r overflow-hidden from-[#5AC0BE] to-[#7F529F] rounded-full transition-colors duration-300 ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center bg-[#302e40] xl:p-6 p-4 aspect-square overflow-hidden rounded-full">
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4286 10L9 3.75L2.57143 10L0 8.75L9 0L18 8.75L15.4286 10Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
};

export default ScrollTop;
