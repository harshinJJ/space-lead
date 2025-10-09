"use client";
import React from "react";
import Image from "next/image";
import Link from "@/utils/CustomLink";
import { GotoArrow } from "@/data/icons";

const SpeakerProfileCard = ({
  speaker = {},
  selectAction,
  className = "",
  cardStyle = "secondary",
}) => {
  const name = speaker?.name || `${speaker.firstname} ${speaker.lastname}`;
  const bgClass = cardStyle == "primary" ? "bg-primary border-1 border-[#DD00FF]" : "bg-secondary border-1 border-secondary";
  return (
    <div
      //   {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={` relative w-[fit] h-full rounded-2xl ${bgClass} overflow-hidden bg-[#232323] flex flex-col justify-between md:p-3 p-1 2xl:gap-6 md:gap-4 gap-1 shadow-2xl ${className}`}
    >
      <div className=" 2xl:py-4 py-2 3xl:px-6 xl:px-4 px-1">
        <h3
          className={`text-black line-clamp-3 font-semibold 2xl:text-base 3xl:text-lg xl:text-lg lg:text-base md:text-lg sm:text-base leading-[1.5] text-center`}
        >
          {name}
        </h3>
        {speaker?.description_ar&&<p
          className={`text-[#272727] text-sm 3xl:leading-[1.8] line-clamp-2 text-center`}
        >
          {speaker?.description_ar}
        </p>}
      </div>
      {/* Speaker image */}
      <div className="flex flex-col items-center md:gap-7 gap-3 2xl:px-8 xs:px-4 px-1 pb-2">
        <div className=" aspect-[240/210] w-full rounded-2xl overflow-hidden relative bg-black ">
          <Image
            fill
            src={
              speaker?.profile_pic ||
              speaker?.image ||
              "/images/user_placeholder.png"
            }
            alt={name||
              "speaker_image"
            }
            className="w-full h-full object-contain object-[bottom_center] bg-black"
          />
        </div>
        <Link
          className={
            "bg-white text-black rounded-full py-2 px-4 flex items-center gap-1 text-sm transition-colors hover:bg-white/60 duration-300"
          }
          href={speaker?.id ? `/speakers/${speaker.id}` : "#"}
        >
          <span>Profile</span>
          <GotoArrow size={21}/>
        </Link>
      </div>
    </div>
  );
};

export default SpeakerProfileCard;
