"use client";
import React from "react";
import { CircularLink } from "../buttons/CircularButton";
import Link from "next/link";
import { SecondaryLink } from "../buttons/SecondaryButton";
import Image from "next/image";

const SpeakerCard = ({
  speaker = {},
  selectAction,
  color = "#4DE3ED",
  textSize = "lg",
  className = "",
  hoverable = true,
  showOverlay = true,
}) => {
  const hoverName = (
    speaker?.name || `${speaker.firstname} ${speaker.lastname}`
  )
    ?.split(".")
    .pop()
    .trim()
    .split(" ")
    .shift();
  // const showOverlay = () => Math.random() < 0.5;
  return (
    <div
      {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={`${
        hoverable ? "//group" : ""
      } relative w-[fit] h-auto aspect-[331/488] rounded-2xl border-1 border-secondary overflow-hidden bg-[#232323] flex flex-col justify-end  ${className}`}
    >
      <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-[100%] group-hover:translate-y-0 [writing-mode:sideways-lr] w-full h-full top-0 left-0 right-0 font-semibold text-7xl text-stroke text-transparent flex items-end">
        {hoverName}
      </div>
      {/* Speaker image */}
      <div className="relative group-hover:scale-[1.2] transition-all duration-700 origin-bottom-center grow flex-1 flex items-end justify-center">
        {showOverlay && (
          <div
            className={`absolute h-2/3 w-3/4 top-0 bottom-0 left-0 right-0 m-auto bg-secondary/70`}
            style={{  filter: "blur(6.25rem)" }}
          ></div>
        )}
        <Image
          fill
          src={
            speaker?.profile_pic || speaker?.photo||
            speaker?.image ||
            "/images/user_placeholder.png"
          }
          alt={
            speaker.name ||
            `${speaker.firstname} ${speaker.lastname}` ||
            "speaker_image"
          }
          className="w-full relative  object-contain object-[bottom_center] "
        />
      </div>

      <div className=" bg-white  py-4 px-6 min-h-21 ">
        <span
          className={`text-black font-bold font-gilroy-bold text-lg leading-[1.5]`}
        >
          {speaker?.name || `${speaker.firstname} ${speaker.lastname}`}
        </span>
        <h3 className={`text-secondary text-sm leading-[1.8]`}>
          {speaker?.designation}
        </h3>
      </div>
    </div>
  );
};
const SpeakerCardOld = ({
  speaker = {},
  selectAction,
  color = "#4DE3ED",
  textSize = "lg",
  showBtn = false,
  className = "",
  hoverable = true,
  showOverlay = true,
}) => {
  const labelClass =
    textSize === "sm" ? "2xl:text-base xl:text-sm" : "text-base";
  const titleClass =
    textSize === "sm"
      ? ` md:text-[1.375rem] text-lg leading-[1.5] tracking-[-1.5%]`
      : `3xl:text-[2.5rem] 2xl:text-4xl lg:text-[1.5rem] md:text-4xl text-4xl font-semibold leading-[1.1] tracking-[-1.5%]`;
  const hoverName = (
    speaker?.name || `${speaker.firstname} ${speaker.lastname}`
  )
    ?.split(".")
    .pop()
    .trim()
    .split(" ")
    .shift();
  // const showOverlay = () => Math.random() < 0.5;
  return (
    <div
      {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={`${
        hoverable ? "group" : ""
      } relative p-8 2xl:pt-15 py-5 md:pb-2.5 w-[fit] h-auto aspect-[43/50] rounded-2xl border-1 border-[#4F4F4F] overflow-hidden bg-[#232323] flex flex-col justify-between ${className}`}
    >
      <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-[100%] group-hover:translate-y-0 [writing-mode:sideways-lr] w-full h-full top-0 left-0 right-0 font-semibold text-7xl text-stroke text-transparent flex items-end">
        {hoverName}
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-10 flex flex-col gap-5 md:gap-7.5 w-full h-full justify-start">
        <span
          style={{ color: color }}
          className={` font-semibold  ${labelClass} `}
        >
          {speaker?.name || `${speaker.firstname} ${speaker.lastname}`}
        </span>
        <h3 className={`text-white ${titleClass} mb-2`}>
          {speaker?.title || "Nail your  interviews"}
        </h3>
      </div>
      <div
        className={` group-hover:scale-[1.1] transition-all duration-700  origin-bottom-left  relative z-30 flex flex-col w-full h-full justify-end`}
      >
        <span className="text-white text-base font-semibold ">
          {speaker?.event?.name || "Live Event"}
        </span>
        {textSize == "lg" && (
          <SecondaryLink
            className={"3xl:mt-15 2xl:mt-12  mt-10"}
            href={speaker?.event?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Event Details</span>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28571 15.7408L14.9642 8.06228M14.9642 8.06228L8.46701 8.06228M14.9642 8.06228L14.9642 14.5595"
                stroke="white"
                strokeWidth="1.50356"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SecondaryLink>
        )}
      </div>
      {/* Speaker image */}
      <div className=" h-1/2 aspect-square absolute z-20 bottom-0 right-0 group-hover:scale-[1.2] transition-all duration-700 origin-bottom-right ">
        {showOverlay && (
          <div
            className={`absolute w-full h-full `}
            style={{ background: color + "50", filter: "blur(6.25rem)" }}
          ></div>
        )}
        <Image
          width={256}
          height={280}
          src={
            speaker?.profile_pic ||
            speaker?.image ||
            "/images/user_placeholder.png"
          }
          alt={
            speaker.name ||
            `${speaker.firstname} ${speaker.lastname}` ||
            "speaker_image"
          }
          className="w-full relative aspect-square object-cover object-[top_center]"
          style={{ borderRadius: "0.75rem" }}
        />
      </div>
    </div>
  );
};

export const SpeakerSlideCard = ({
  image = "/images/user_placeholder.png",
  name = "",
  title = "",
  link = "#",
  program = "",
  color = "#4DE3ED",
}) => {
  const hoverName = name?.split(".").pop().trim().split(" ").shift();

  return (
    <div className="group relative p-8 py-15 w-[fit] h-115 rounded-2xl border-1 border-[#4F4F4F] overflow-hidden bg-[#232323] flex flex-col justify-between ">
      <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-[100%] group-hover:translate-y-0 [writing-mode:sideways-lr] w-full h-full top-0 left-0 right-0 font-semibold text-7xl text-stroke text-transparent flex items-end">
        {hoverName}
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-10 flex flex-col gap-6 w-full h-full justify-start">
        <span style={{ color: color }} className={` font-semibold text-base`}>
          {name}
        </span>
        <h3 className="text-white text-[2.5rem] font-semibold leading-[1.1] tracking-[-1.5%] mb-2">
          {title || "Nail your Interviews"}
        </h3>
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-30 flex flex-col gap-15 w-full h-full justify-end">
        <span className="text-white text-lg font-medium ">{program}</span>
        <SecondaryLink href={link} target="_blank" rel="noopener noreferrer">
          <span>Event Details</span>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28571 15.7408L14.9642 8.06228M14.9642 8.06228L8.46701 8.06228M14.9642 8.06228L14.9642 14.5595"
              stroke="white"
              strokeWidth="1.50356"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SecondaryLink>
      </div>
      {/* Speaker image */}
      <div className=" h-1/2 aspect-square absolute z-20 bottom-0 right-0 group-hover:scale-[1.2] transition-all duration-700 origin-bottom-right ">
        <div
          className={`absolute w-full h-full `}
          style={{ background: color + "50", filter: "blur(6.25rem)" }}
        ></div>
        <Image
          width={256}
          height={280}
          src={image}
          alt={name}
          className="w-full relative aspect-square object-cover object-[top_center]"
          style={{ borderRadius: "0.75rem" }}
        />
      </div>
    </div>
  );
};

export default SpeakerCard;
