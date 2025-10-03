"use client";
import React from "react";

const ScrollTop = ({ className = "" }) => {
  const scrollToTop = (duration = 3000) => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Smooth easing
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress ** 3
          : (progress - 1) * (2 * progress - 2) ** 2 + 1;

      // Calculate where to scroll
      const val = start + (0 - start) * easeInOutCubic;
      window.scrollTo(0, val);

      // Continue animation until done
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Start the animation
    requestAnimationFrame(animateScroll);
  };
  return (
    <button
      id="scroll-top"
      aria-label="Scroll to top"
      onClick={() => scrollToTop()}
      className={`cursor-pointer w-fit aspect-square max-w-12.5 max-h-12.5 z-10 bg-secondary p-0.5 bg-gradient-to-r overflow-hidden from-secondary to-primary rounded-full transition-colors duration-300 ${className}`}
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
