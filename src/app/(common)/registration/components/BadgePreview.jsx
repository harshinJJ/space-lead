"use client";
import React from "react";

const BadgePreview = ({ name, category, badgeId,title,organisation }) => (
    <div className=" bg-white  bg-gradient-to-r from-secondary/50 to-primary/50 rounded-[1.25rem] shadow-lg p-2.5 flex flex-col items-center justify-end w-full max-w-xs overflow-hidden">
      <div className="bg-white uppercase rounded-[1.25rem] overflow-hidden flex flex-col items-center w-full max-w-xs">
        <div
          className={`w-full cursor-pointer font-azonix text-lg leading-[1.6] text-white text-center py-4 px-3 bg-linear-to-r from-secondary to-primary `}
        >
          Badge Preview
        </div>
        <div className="flex flex-col items-center p-5.5 max-w-full">
          <div className="mb-2">
            {/* Placeholder for QR code, replace with actual QR code if needed */}
            <div className="bg-[#F0F0F0] p-1 rounded-sm aspect-square min-w-33 flex items-center justify-center">
              {/* <span className="text-gray-500">QR</span> */}
                    <img src="/images/dummy_qr.png" className="w-full aspect-square object-cover" alt="" />

            </div>
          </div>
          <div className="text-sm text-black uppercase mb-5">
            #{badgeId || "BADGEID"}
          </div>
          <div className={`font-azonix text-center break-all ${name?.length>12?"text-xl":"text-3xl"} mb-1`}>
            {name || "FULL NAME"}
          </div>
          {category == "professional" && (
            <>
              <div className=" text-center text-lg text-[#017792] mt-1">
                {title || "JOB TITLE"}
              </div>
              <div className=" text-center text-xs text-[#5E5E5E] mt-1">
                {organisation || "COMPANY NAME"}
              </div>
            </>
          )}
        </div>
        <div
          className={`w-full text-center uppercase cursor-pointer font-azonix text-3xl leading-[1.6] text-white py-2 px-3 bg-linear-to-r from-secondary to-primary `}
        >
          <div className=" font-gilroy-med text-xs">BADGE CATEGORY</div>
          <div>{category || "CATEGORY"}</div>
        </div>
      </div>
    </div>
);

export default BadgePreview;
