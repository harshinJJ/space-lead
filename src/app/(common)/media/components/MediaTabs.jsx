"use client";
import React, { useState } from "react";
import gallery from "@/../public/assets/json/gallery-data.json";
import Image from "next/image";
import useFancybox from "@/hooks/useFancyBox";

const MediaTabs = () => {
  const [active, setActive] = useState(null);
  const [fancyboxRef] = useFancybox({})
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
    <section
      className={` bg-[url('/images/backgrounds/about_info_bg.png')] bg-[top_center] bg-cover pt-20 xl:pt-32.5 pb-20 xl:pb-33 `}
    >
      <div className="container-fluid mx-auto px-5 sm:px-0 ">
        <div className="flex gap-5 items-center mb-10">
          <button
            onClick={() => setActive(null)}
            className={` text-2xl min-w-31.25 bg-secondary/13 font-medium rounded-full px-8 py-2.75 ${
              !active ? "text-[#0F9F9D]" : "text-[#C2C2C2] "
            }`}
          >
            All
          </button>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleActive(tab.key)}
              className={`text-2xl min-w-31.25 rounded-full bg-secondary/13 font-medium px-8 py-2.75 ${
                active == tab.key ? "text-[#0F9F9D]" : "text-[#C2C2C2] "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div ref={fancyboxRef} className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-6">
          {filteredList.map((media, i) => (
            <div key={i} className="relative aspect-[335/226] cursor-pointer">
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
                    loop
                    poster={media.thumbnail}
                    className="object-cover h-full w-full"
                  />
                  <div className="z-1 absolute-center m-auto rounded-full absolute transition-all duration-300 bg-secondary hover:bg-[#34706f] aspect-square flex items-center justify-center p-5 w-fit">
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
        </div>
      </div>
    </section>
  );
};

export default MediaTabs;
