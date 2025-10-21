"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "@/utils/CustomLink";

const PassSelectionCard = ({
  type,
  icon,
  onClick,
  url,
  gradient = "secondary",
  eventType = "free",
  tag,
  disabled = false,
}) => {
  const gradientBg =
    gradient === "primary"
      ? "bg-gradient-to-b text-primary from-primary/46 to-[#2E1D3975]"
      : "bg-gradient-to-b text-secondary from-secondary/46 to-[#2A5A5975]";
  return url ? (
    <Link
      disabled={true}
      href={url || "#"}
      className={`relative overflow-hidden flex w-full md:w-fit flex-col border-1 border-white backdrop-blur-[1.85px] items-center justify-center ${gradientBg} rounded-4xl shadow-lg py-13.5 md:px-22 px-10 w-fit cursor-pointer hover:scale-105 transition-transform duration-200`}
      // onClick={onClick}
    >
      {tag && (
        <div
          style={{ width: `${tag.length}em` }}
          className={`text-sm  absolute  aspect-square rotate-45 top-0 right-0 flex items-start justify-center  text-center transform  `}
        >
          <div
            className={` text-center transform py-1 w-full bg-gradient-to-r from-[#F6FF00] to-[#818600] text-[#005149]`}
          >
            {tag}
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center md:max-w-[163px] w-full text-center] ">
        <div className="mb-4 aspect-square h-auto bg-white rounded-full flex items-center justify-center border-4 border-black/20 xl:max-w-18 p-2.5 max-w-16 ">
          {icon}
        </div>
        <h2 className="text-white text-2xl mb-2 whitespace-nowrap">
          {type} Pass
        </h2>
        <div
          className={`${
            gradient === "primary" ? "bg-primary" : "bg-secondary"
          } uppercase cursor-pointer transition-all duration-500 w-full xl:min-w-[163px] text-white px-4 py-[0.90625rem] rounded-full text-sm  mt-2 flex items-center justify-center `}
        >
          {eventType}
        </div>
      </div>
      {type == "Workshops " && (
        <span className="text-center leading-[1.5] text-white mt-1">
          Includes the conference <br />
          and exhibition area
        </span>
      )}
    </Link>
  ) : (
    <button
      disabled={disabled}
      className={`relative overflow-hidden flex w-full md:w-fit flex-col border-1 border-white backdrop-blur-[1.85px] items-center justify-center ${gradientBg} rounded-4xl shadow-lg py-13.5 md:px-22 px-10 w-fit  ${
        disabled ? "" : "hover:scale-105"
      } disabled:!cursor-not-allowed transition-transform duration-200`}
      // onClick={onClick}
      {...(onClick && !disabled ? { onClick: onClick } : {})}
    >
      {disabled && (
        <div className="absolute inset-0 bg-black/40 z-10 rounded-4xl"></div>
      )}
      {tag && (
        <div
          style={{ width: `${tag.length}em` }}
          className={`text-sm  absolute  aspect-square rotate-45 top-0 right-0 flex items-start justify-center  text-center transform  `}
        >
          <div
            className={` text-center transform py-1 w-full bg-gradient-to-r from-[#F6FF00] to-[#818600] text-[#005149]`}
          >
            {tag}
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center md:max-w-[163px] w-full text-center] ">
        <div className="mb-4 aspect-square h-auto bg-white rounded-full flex items-center justify-center border-4 border-black/20 xl:max-w-18 p-2.5 max-w-16 ">
          {icon}
        </div>
        <h2 className="text-white text-2xl mb-2 whitespace-nowrap">
          {type} Pass
        </h2>
        <div
          className={`${
            gradient === "primary" ? "bg-primary" : "bg-secondary"
          } uppercase cursor-pointer transition-all duration-500 w-full xl:min-w-[163px] text-white px-4 py-[0.90625rem] rounded-full text-sm  mt-2 flex items-center justify-center `}
        >
          {eventType}
        </div>
      </div>
    </button>
  );
};

export default PassSelectionCard;
