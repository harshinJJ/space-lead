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

export default ComingSoonOverlay;
