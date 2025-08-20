"use client";
import React from "react";

const ScrollBottom = ({ className = "" }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToBottom}
      className={`cursor-pointer w-fit flex items-center justify-center aspect-square z-50 bg-[#0000000D] p-2.5 border-2 border-[#FFFFFF] overflow-hidden rounded-full transition-colors duration-300 ${className}`}
    >
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.45337C12.2778 2.45337 12.0972 2.52281 11.9583 2.6617C11.8194 2.80059 11.75 2.98115 11.75 3.20337L11.75 21.62L6.83333 16.7034C6.66666 16.5367 6.47222 16.4534 6.25 16.4534C6.02778 16.4534 5.84722 16.5367 5.70833 16.7034C5.56944 16.87 5.5 17.0645 5.5 17.2867C5.5 17.5089 5.55555 17.7034 5.66666 17.87L11.9167 24.12C12.0833 24.2311 12.2778 24.2867 12.5 24.2867C12.7222 24.2867 12.9167 24.2311 13.0833 24.12L19.3333 17.87C19.4444 17.7034 19.5 17.5089 19.5 17.2867C19.5 17.0645 19.4306 16.87 19.2917 16.7034C19.1528 16.5367 18.9722 16.4534 18.75 16.4534C18.5278 16.4534 18.3333 16.5367 18.1667 16.7034L13.25 21.62L13.25 3.20337C13.25 2.98115 13.1806 2.80059 13.0417 2.6617C12.9028 2.52281 12.7222 2.45337 12.5 2.45337Z"
            fill="white"
          />
        </svg>
    </button>
  );
};

export default ScrollBottom;
