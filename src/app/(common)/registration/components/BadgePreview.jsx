"use client";
import React from "react";

const BadgePreview = ({ name, category, badgeId }) => (
  <div className="w-full px-4.5">
    <div className="bg-white  bg-gradient-to-r from-[#5AC0BE80] to-[#7F529F80] rounded-[1.25rem] shadow-lg p-2.5 flex flex-col items-center w-full max-w-xs overflow-hidden">
      <div className="bg-white rounded-[1.25rem] overflow-hidden flex flex-col items-center w-full max-w-xs">
        <div
          className={`w-full cursor-pointer font-azonix text-lg leading-[1.6] text-white text-center py-4 px-3 bg-linear-to-r from-[#5AC0BE] to-[#7F529F] `}
        >
          Badge Preview
        </div>
        <div className="flex flex-col items-center p-5.5">
          <div className="mb-2">
            {/* Placeholder for QR code, replace with actual QR code if needed */}
            <div className="bg-gray-200 rounded-sm aspect-square min-w-33 flex items-center justify-center">
              <span className="text-gray-500">QR</span>
            </div>
          </div>
          <div className="text-sm text-black font-outfit mb-10">
            #{badgeId || "BADGEID"}
          </div>
          <div className="font-azonix text-3xl mb-1">{name || "FULL NAME"}</div>
        </div>
        <div
          className={`w-full text-center uppercase cursor-pointer font-azonix text-3xl leading-[1.6] text-white py-2 px-3 bg-linear-to-r from-[#5AC0BE] to-[#7F529F] `}
        >
          <div className=" font-gilroy-med text-xs">BADGE CATEGORY</div>
          <div>{category || "CATEGORY"}</div>
        </div>
      </div>
    </div>
  </div>
);

export default BadgePreview;
