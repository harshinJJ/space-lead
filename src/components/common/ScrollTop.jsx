"use client";
import React from "react";

const ScrollTop = ({ className = "" }) => {
  const scrollToTop = (duration = 1000) => {
    const start = window.scrollY || window.pageYOffset;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <button
      id="scroll-top"
      aria-label="Scroll to top"
      onClick={() => scrollToTop(500)} // Adjust duration here
      className={`cursor-pointer w-fit aspect-square max-w-12.5 max-h-12.5 md:max-h-full md:max-w-full z-10 bg-secondary p-0.5 bg-gradient-to-r from-secondary to-primary rounded-full transition-colors duration-300 ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center bg-[#302e40] xl:p-6 p-4 aspect-square overflow-hidden rounded-full">
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          className="min-w-4.5 min-h-4.5"
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
