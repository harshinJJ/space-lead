"use client";
import React, { useEffect, useRef } from "react";
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
  groupId,
}) => {
  const infoRef = useRef(null);
  // const hoverName = (
  //   speaker?.name || `${speaker.firstname} ${speaker.lastname}`
  // )
  //   ?.split(".")
  //   .pop()
  //   .trim()
  //   .split(" ")
  //   .shift();
  // const showOverlay = () => Math.random() < 0.5;
  useEffect(() => {
    if (!groupId) return; // only run if grouped

    const container = document.querySelectorAll(
      `.speaker-info[data-group='${groupId}']`
    );
    let maxHeight = 0;

    // find tallest
    container.forEach((el) => {
      el.style.height = "auto";
      if (el.offsetHeight > maxHeight) maxHeight = el.offsetHeight;
    });

    // apply tallest height to all in same group
    container.forEach((el) => (el.style.height = `${maxHeight}px`));

    // reapply on resize
    const handleResize = () => {
      let newMax = 0;
      container.forEach((el) => {
        el.style.height = "auto";
        if (el.offsetHeight > newMax) newMax = el.offsetHeight;
      });
      container.forEach((el) => (el.style.height = `${newMax}px`));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [groupId, speaker]);

  return (
    <div
      {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={` ${selectAction ? "cursor-pointer" : ""} ${
        hoverable ? "//group" : ""
      } relative w-[fit] h-full  rounded-2xl border-1 border-secondary overflow-hidden bg-[#232323] flex flex-col justify-end  ${className}`}
    >
      {/* Speaker image */}
      <div className="relative transition-all duration-700 origin-bottom-center grow flex-1 flex items-end justify-center">
        {showOverlay && (
          <div
            className={`absolute h-2/3 w-3/4 top-0 bottom-0 left-0 right-0 m-auto bg-secondary/70`}
            style={{ filter: "blur(6.25rem)" }}
          ></div>
        )}
        <div className="relative w-full aspect-[6/7] h-auto">
          <Image
            fill
            priority={true}
            src={
              speaker?.profile_pic ||
              speaker?.photo ||
              speaker?.image ||
              "/images/user_placeholder_new.png"
            }
            alt={
              speaker.name ||
              `${speaker.firstname} ${speaker.lastname}` ||
              "speaker_image"
            }
            className="w-full !top-10  object-cover object-[top_center] "
          />
        </div>
      </div>

      <div
        ref={infoRef}
        data-group={groupId}
        className="speaker-info bg-white relative py-4 px-6 min-h-27 "
      >
        <div
          className={`text-black font-bold font-gilroy-bold leading-[1.5] text-center ${textSize=="sm"?"text-sm":"2xl:text-sm 3xl:text-sm xl:sm lg:text-sm md:text-sm sm:text-sm xs:text-base"}  text-sm`}
        >
          {speaker?.name || `${speaker.firstname} ${speaker.lastname}`}
        </div>
        {/* <h3
          className={`text-[#139691] font-semibold text-sm leading-[1.4] text-center`}
          >
          {speaker?.designation}
        </h3> */}

        {speaker?.designation && (
          <pre
          className={`text-[#139691] font-semibold 2xl:text-sm text-xs leading-[1.4] text-center font-[inherit] whitespace-pre-wrap`}
            dangerouslySetInnerHTML={{
              __html: speaker?.designation,
            }}
          />
        )}
      </div>
    </div>
  );
};

export const SpeakerSlideCard = ({
  image = "/images/user_placeholder_new.png",
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
          priority={true}
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
