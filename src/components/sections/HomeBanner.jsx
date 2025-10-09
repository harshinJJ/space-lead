"use client";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import ScrollBottom from "../common/ScrollBottom";
import dynamic from "next/dynamic";
import { CalenderIcon, LocationIcon, LogoSVG } from "@/data/icons";
import { SponsorScroll } from "./Sponsors";
import EVENT_INFO from "@/data/eventInfo";
import Image from "next/image";
const TimerBlock = dynamic(
  () => import("@/components/common/TimerBlock").then((mod) => mod.HomeTimer),
  {
    ssr: false,
  }
);

const BannerOverlay = () => {
  return (
    <div className="absolute absolute-center w-full h-full  bg-[bottom_center] bg-cover bg-no-repeat text-white">
      {/* <div className="absolute absolute-center h-full w-7/10 bg-[rgb(26,29,39,0.2)]"></div> */}

      <Image
        src={"/images/backgrounds/home_banner_overlay.png"}
        alt="banner-overlay"
        priority
        width={602}
        height={1117}
        className="absolute w-full absolute-center h-full lg:object-top bg-right bg-no-repeat object-cover text-white"
      />
      <div className="absolute absolute-center w-full h-full [background:linear-gradient(216.76deg,_rgba(0,_0,_0,_0.35)_98.77%,rgba(19,_31,_84,_0.42)_173.77%),rgba(26,_29,_39,_0.46)] opacity-75" />
    </div>
  );
};
const HomeBanner = ({ sponsors = [] }) => {
  const tags = [
    {
      icon: <CalenderIcon />,
      label: EVENT_INFO.bannerDateLabel,
    },
    {
      icon: <LocationIcon />,
      label: EVENT_INFO.fullAddress,
    },
  ];

  return (
    <section
      id="home-banner"
      className="relative bg-transparent bg-[bottom_center] bg-cover bg-no-repeat py-20 xl:pt-54 pt-30 text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover absolute-center w-full h-full"
        src="/images/backgrounds/home_banner.mp4"
        poster="/images/backgrounds/posters/home_banner.webp"
      />
      <BannerOverlay />
      <div className="relative container-fluid mx-auto px-5 sm:px-0 mb-12.5">
        <div className="relative mx-auto px-5 sm:px-0 flex flex-col items-center ">
          <h2
            data-aos="fade-up"
            className="font-azonix 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl 2xl:tracking-[5px] 2xl:leading-[1] text-center"
          >
            The Future of Health & <br className="hidden sm:block" /> Advanced
            Engineering in Space
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="flex flex-col sm:flex-row xl:gap-15 gap-5 bg-white/4 rounded-[1.25rem] px-7 py-8 mt-4.5"
          >
            <div className="">
              <LogoSVG />
            </div>
            <div className="flex flex-col gap-2 gap-y-2.5">
              <div className="flex items-center px-2.5  py-2 rounded-full  min-w-[70%] w-fit gap-2.5 text-white">
                <div className="flex items-center justify-center">
                  {tags[0].icon}
                </div>
                <span className="lg:text-nowrap xl:text-xl font-droid-bold font-bold text-base">
                  {tags[0].label}
                </span>
              </div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/UmrCYw9Got63qjtN7"
                className="flex items-center px-2.5  py-2 rounded-full w-full min-w-[70%] lg:w-fit gap-2.5 text-white"
              >
                <div className="flex items-center justify-center">
                  {tags[1].icon}
                </div>
                <span className="lg:text-nowrap xl:text-xl font-droid-bold font-bold text-base">
                  {tags[1].label}
                </span>
              </a>
            </div>{" "}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="-translate-y-1/8"
          >
            <TimerBlock eventDate={EVENT_INFO.startDate} />
          </div>
          <PrimaryLink
            href="/agenda"
            data-aos="fade-up"
            data-aos-delay="150"
            className="gap-1 px-7 text-lg py-3 w-fit leading-[100%]"
          >
            <span>Explore Agenda</span>
          </PrimaryLink>
        </div>
      </div>
      <div className="relative py-2 flex items-center">
        <div className="absolute bg-gradient-to-r from-primary/21 to-black/0 to-[50%] mx-2.5 w-full h-full"></div>
        <SponsorScroll sponsors={sponsors} />
      </div>
      <div className="relative w-full flex justify-center items-center">
        <ScrollBottom className="absolute mx-auto top-0 bottom-0 left-0 right-0 transform ms:translate-y-[50%] lg:translate-y-[50%] translate-y-[50%] animate-float" />
      </div>
    </section>
  );
};

export default HomeBanner;
