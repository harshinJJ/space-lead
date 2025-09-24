"use client";
import React, { useState } from "react";
import gallery from "@/../public/assets/json/gallery-data.json";
import Image from "next/image";
import useFancybox from "@/hooks/useFancyBox";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import DotPattern from "@/components/patterns/DotPattern";
import VideoPlayer from "./VideoPlayer";
import PressRelease from "@/components/sections/PressRelease";
import ConnectWithUs from "@/components/sections/ConnectWithUs";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "@/data/icons";

const MediaTabs = () => {
  const [active, setActive] = useState(null);
  const [fancyboxRef] = useFancybox({});
  const handleActive = (tab) => {
    setActive((prev) => (prev == tab ? null : tab));
  };
  const tabs = [
    { label: "Day 1", key: "day1" },
    { label: "Day 2", key: "day2" },
    { label: "Day 3", key: "day3" },
  ];
  const filteredList = active
    ? gallery.filter((media) => media.key == active)
    : gallery;

  return (
    <section className={` bg-white bg-[top_center] bg-cover `}>
      <div className="container-fluid mx-auto px-5 sm:px-0  pt-20 xl:pt-32.5 pb-20 xl:pb-33">
        <DotPattern className="absolute top-13.5 right-0" />
        <div className="xl:px-15.75">
          <h3 className="md:text-4xl text-2xl text-center xl:text-5xl font-bold font-orbitron text-[#000222] mb-12.5">
            Join the conversation. Shape the narrative.
          </h3>
          <div className="relative">
            <VideoPlayer thumbnail={"/images/video_thumb.png"} />
          </div>
          <h3 className="md:text-4xl text-2xl text-center xl:text-5xl font-bold font-orbitron text-[#000222] my-12">
            Event Coverage
          </h3>
          <div className="relative flex xl:text-2xl lg:text-lg  gap-x-4 items-center  flex-col-reverse lg:flex-row justify-between gap-5 i mb-10">
            <div className="relative flex-1 w-full lg:w-auto flex xl:text-2xl lg:text-lg  gap-x-3 2xl:gap-9 items-center xl:items-start justify-start overflow-auto  overflow-x-auto scrollbar-hide gap-5 i mb-10">
              <button
                onClick={() => setActive(null)}
                className={`cursor-pointer min-w-31.25 bg-secondary font-medium rounded-full px-8 py-2.75 ${
                  !active ? "text-[#00504E]" : "text-white "
                }`}
              >
                All
              </button>
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleActive(tab.key)}
                  className={`cursor-pointer min-w-31.25 rounded-full bg-secondary font-medium px-8 py-2.75 ${
                    active == tab.key ? "text-[#00504E]" : "text-white "
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="relative px-8 py-2.75  bg-secondary font-medium rounded-full flex text-sm md:text-lg  items-center justify-start gap-5 i mb-10">
              <div className="flex items-center">Connect with us :</div>
              <div className="flex items-center gap-4">
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          <div ref={fancyboxRef}>
            <HorizontalCardStagger className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
              {filteredList.map((media, i) => (
                <div
                  key={i}
                  className="relative aspect-[335/226] cursor-pointer card opacity-0 will-change-transform"
                >
                  {media.type == "video" ? (
                    <a
                      data-fancybox="gallery"
                      href={media.url || "#"}
                      data-caption={media.alt}
                      data-thumb={media.thumbnail}
                    >
                      <video
                        src={media.url}
                        autoPlay
                        muted
                        loop
                        poster={media.thumbnail}
                        className="object-cover h-full w-full"
                      />
                      <div className="z-1 absolute-center max-w-17 max-h-17 m-auto rounded-full absolute transition-all duration-300 bg-secondary hover:bg-[#34706f] aspect-square flex items-center justify-center p-5 w-fit">
                        <svg
                          width="27"
                          height="26"
                          viewBox="0 0 27 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.4317 14.1266L9.11833 20.1066C8.65611 20.3955 8.20833 20.41 7.775 20.15C7.34167 19.89 7.125 19.5 7.125 18.98V7.01998C7.125 6.49998 7.34167 6.10998 7.775 5.84998C8.20833 5.58998 8.65611 5.60442 9.11833 5.89331L19.4317 11.8733C19.8939 12.1044 20.125 12.48 20.125 13C20.125 13.52 19.8939 13.8955 19.4317 14.1266Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </a>
                  ) : (
                    <a
                      data-fancybox="gallery"
                      href={media.url || "#"}
                      data-caption={media.alt}
                    >
                      <Image
                        src={media.url}
                        alt={media.alt}
                        className="object-cover"
                        fill
                      />
                    </a>
                  )}
                </div>
              ))}
            </HorizontalCardStagger>
          </div>
        </div>
        <PressRelease />
      </div>
      <ConnectWithUs />
    </section>
  );
};

export default MediaTabs;
