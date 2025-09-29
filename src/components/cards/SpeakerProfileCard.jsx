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
  const bgClass = cardStyle == "primary" ? "bg-primary border-1 border-[#DD00FF]" : "bg-secondary border-1 border-secondary";
  return (
    <div
      //   {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={` relative w-[fit] h-auto aspect-[330/433] rounded-2xl ${bgClass} overflow-hidden bg-[#232323] flex flex-col justify-between p-3 shadow-2xl ${className}`}
    >
      <div className="  py-4 px-6 ">
        <h3
          className={`text-black font-semibold text-2xl leading-[1.5] text-center`}
        >
          {speaker?.name || `${speaker.firstname} ${speaker.lastname}`}
        </h3>
        <p
          className={`text-[#272727] text-sm leading-[1.8] line-clamp-2 text-center`}
        >
          {speaker?.description_ar}
        </p>
      </div>
      {/* Speaker image */}
      <div className="flex flex-col items-center gap-7 px-8 pb-2">
        <div className=" aspect-[240/210] w-full rounded-2xl overflow-hidden relative bg-black ">
          <Image
            fill
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
