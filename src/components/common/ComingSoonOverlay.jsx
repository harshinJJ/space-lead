import React from "react";

const ComingSoonOverlay = () => {
  return (
    <div className="absolute h-full w-full backdrop-blur-[1.65px] top-0 left-0  flex items-center justify-center">
      <div className="py-1 px-2 rounded-full  bg-black/80 text-white ">
        Coming Soon
      </div>
    </div>
  );
};

export const TextOverlay = ({ text, className = "",containerClass="" }) => {
  return (
    <div className={`absolute h-full w-full backdrop-blur-[1.65px] top-0 left-0  flex items-center justify-center ${containerClass}`}>
      <div
        className={`py-1 px-2 rounded-full flex items-center justify-center text-center bg-black/80 text-white ${className}`}
      >
        {text}
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
