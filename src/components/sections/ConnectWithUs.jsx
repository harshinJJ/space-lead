"use client";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import EVENT_INFO from "@/data/eventInfo";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "@/data/icons";

const platformList = [
  {
    platform: "linkedin",
    label: "@spaceleadau",
    icon:<LinkedInIcon size={24}/>,
    url: EVENT_INFO.socials.twitter,
  },
  {
    platform: "twitter",
    label: "@spaceleadau",
    icon:<TwitterIcon size={24}/>,
    url: EVENT_INFO.socials.twitter,
  },
  {
    platform: "instagram",
    label: "@spaceleadau",
    icon:<InstagramIcon size={24}/>,
    url:EVENT_INFO.socials.instagram,
  },
];

const ConnectWithUs = ({
  title = "Connect with us",
  description,
  className = "",
  overlay = "primary",
}) => {
  return (
    <section className={`bg-indigo py-5 px-5 ${className}`}>
      <div className="container-fluid mx-auto lg:px-16">
        <div className="-translate-y-15 mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5  py-10 lg:py-20 lg:pb-20 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/backgrounds/speaker_group_bg1.jpg')] bg-center bg-cover opacity-90 w-full h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-50 w-full h-full"></div>

          <div
            className={`relative flex flex-col gap-20 sm:items-center sm:justify-between  md:justify-center `}
          >
            {title && (
              <h2
                className={`xl:text-5xl md:text-4xl text-2xl font-azonix text-white leading-[1] text-center font-medium max-w-[80%]`}
              >
                {title}
              </h2>
            )}
            <div className="text-white flex flex-col md:flex-row xl:gap-x-30 gap-x-5 items-center md:gap-y-2.5 gap-y-10 md:text-xl text-sm leading-[1]">
              {platformList.map((item, i) => (
                <div
                  key={i}
                  className=" text-center flex gap-2 flex-col sm:flex-row items-center xl:text-3xl text-2xl font-light"
                >
                  {/* <span>{item.platform}:</span> */}
                  <div className="text-secondary">{item.icon}</div>
                  <a href={item.url} className="leading-[1]" target="_blank">
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
            {description && (
              <p className="text-[#BAFFFE] font-azonix text-center lg:max-w-4/5 2xl:text-[1.375rem] lg:text-lg text-sm  lg:mt-15 mt-8">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
