"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "@/utils/CustomLink";

const PassSelectionCard = ({ type, icon, onClick,url="#", gradient = "secondary" }) => {
  const gradientBg =
    gradient === "primary"
      ? "bg-gradient-to-b from-primary/46 to-[#2E1D3975]"
      : "bg-gradient-to-b from-secondary/46 to-[#2A5A5975]"
  return (
    <Link href={url}
      className={`flex w-full md:w-fit flex-col border-1 border-white backdrop-blur-[1.85px] items-center justify-center ${gradientBg} rounded-4xl shadow-lg py-13.5 md:px-22 px-10 w-fit cursor-pointer hover:scale-105 transition-transform duration-200`}
      // onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center md:max-w-[163px] w-full text-center] ">
        <div className="mb-4 aspect-square h-auto bg-white rounded-full flex items-center justify-center border-4 border-black/20 xl:max-w-18 p-2.5 max-w-16 ">
          {icon}
        </div>
        <h2 className="text-white text-2xl mb-2 whitespace-nowrap">
          {type} Pass
        </h2>
        <div className={`${gradient === "primary" ? "bg-primary hover:bg-primary/70" : "bg-secondary hover:bg-secondary/70"} cursor-pointer transition-all duration-500 w-full xl:min-w-[163px] text-white px-4 py-[0.90625rem] rounded-full text-sm  mt-2 flex items-center justify-center `}>
          CLICK HERE
        </div>
      </div>
    </Link>
  );
};

export default PassSelectionCard;
