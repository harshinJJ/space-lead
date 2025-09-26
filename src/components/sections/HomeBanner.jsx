"use client";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import ScrollBottom from "../common/ScrollBottom";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CalenderIcon, LocationIcon, LogoSVG } from "@/data/icons";
import { SponsorScroll } from "./Sponsors";
const TimerBlock = dynamic(
  () => import("@/components/common/TimerBlock").then((mod) => mod.HomeTimer),
  {
    ssr: false,
  }
);

const BannerOverlay = () => {
  return (
    <div className="absolute absolute-center w-full h-full  bg-[bottom_center] bg-cover bg-no-repeat text-white">
      <div className="absolute absolute-center h-full w-7/10 bg-[rgb(26,29,39,0.2)]"></div>
      <Image
        src={"/images/backgrounds/home_banner_overlay.png"}
        alt="banner-overlay"
        priority
        width={602}
        height={1117}
        className="absolute w-full absolute-center h-full object-center object-cover text-white"
      />
      <Image
        src={"/images/backgrounds/home_banner_overlay2.png"}
        alt="banner-overlay"
        width={602}
        priority
        height={1117}
        className="absolute w-full md:w-auto absolute-center h-full object-[center_start] object-cover bg-no-repeat text-white"
      />
      <svg
        className="absolute bottom-7 right-0 max-w-1/2 max-h-[55%]"
        width="380"
        height="595"
        viewBox="0 0 380 595"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M298 595C133.419 595 -2.01861e-05 461.805 -1.30041e-05 297.5C-5.82215e-06 133.195 133.419 -2.02201e-05 298 -1.3026e-05C462.581 -5.83194e-06 596 133.195 596 297.5C596 461.805 462.581 595 298 595ZM298 17.4878C143.094 17.4878 17.5172 142.854 17.5172 297.5C17.5172 452.146 143.094 577.512 298 577.512C452.906 577.512 578.483 452.146 578.483 297.5C578.483 142.854 452.906 17.4878 298 17.4878Z"
          fill="url(#paint0_linear_64_1971)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_64_1971"
            x1="611.874"
            y1="298.22"
            x2="-2.22626e-05"
            y2="297.498"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7F529F" />
            <stop />
            <stop offset="1" stopColor="#7F529F" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute absolute-center w-full h-full [background:linear-gradient(216.76deg,_rgba(0,_0,_0,_0.35)_98.77%,rgba(19,_31,_84,_0.42)_173.77%),rgba(26,_29,_39,_0.46)] opacity-75" />

      <div className="absolute p-5 flex items-center justify-center absolute-center w-1/2 md:w-[26%] h-full [background:linear-gradient(216.76deg,rgba(0,0,0,0.35)22%,rgba(19,31,84,0.42)97%),rgba(26,29,39,0.46)] opacity-75">
        <svg
          className="w-full h-auto"
          width="413"
          height="413"
          viewBox="0 0 413 413"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M206.5 -9.0264e-06C320.547 -1.40115e-05 413 92.4532 413 206.5C413 320.547 320.547 413 206.5 413C92.4532 413 -4.04126e-06 320.547 -9.0264e-06 206.5C-1.40115e-05 92.4532 92.4532 -4.04126e-06 206.5 -9.0264e-06ZM206.5 400.861C313.843 400.861 400.861 313.843 400.861 206.5C400.861 99.1571 313.843 12.1386 206.5 12.1386C99.1571 12.1386 12.1386 99.1572 12.1386 206.5C12.1386 313.843 99.1572 400.861 206.5 400.861Z"
            fill="url(#paint0_linear_64_2153)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_64_2153"
              x1="-11"
              y1="206"
              x2="413"
              y2="206.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AC0BE" />
              <stop stopOpacity="0.41" />
              <stop offset="1" stopColor="#5AC0BE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const sponsorData = [
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
];

const HomeBanner = ({ sponsors=[] }) => {
  const remainingTime = {
    days: 9,
    hours: 3,
    minutes: 6,
    seconds: 9,
  };

  const tags = [
    {
      icon: <CalenderIcon />,
      label: "Nov 09, 10, 11 - 2025",
    },
    {
      icon: <LocationIcon />,
      label: "Alfaisal University, Riyadh- Kingdom of Saudi Arabia",
    },
  ];

  return (
    <section
      id="home-banner"
      className="relative bg-transparent bg-[bottom_center] bg-cover bg-no-repeat py-20 pt-54 text-white"
      // className="relative bg-[url('/images/home_banner.png')] bg-[bottom_center] bg-cover bg-no-repeat py-20 pt-54 text-white"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover absolute-center w-full h-full"
        src="/images/backgrounds/home_banner.webm"
      />
      {/* <BannerOverlay /> */}
      <div className="relative container-fluid mx-auto px-5 sm:px-0 mb-12.5">
        <div className="relative mx-auto px-5 sm:px-0 flex flex-col items-center lg:max-w-[65%]">
          <h2 className="font-azonix 2xl:text-[2.5rem] xl:text-3xl lg:text-2xl xs:text-2xl sm:text-xl xl:tracking-[0.2em] 2xl:leading-[1.25] text-center">
            The Future of{" "}
            <span className="text-secondary">
              Health & Advanced Engineering{" "}
            </span>
            in Space
          </h2>
          <div className="flex flex-col sm:flex-row xl:gap-15 gap-5 bg-white/4 rounded-[1.25rem] px-7 py-14 mt-4.5">
            <div className="">
              <LogoSVG />
            </div>
            <div className="flex flex-col gap-2 gap-y-2.5">
              {/* {tags.map(({ icon, label }, i) => ( */}
              <div className="flex items-center px-2.5  py-2 rounded-full bg-linear-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F]  min-w-[70%] w-fit gap-2.5 text-white">
                <div className="flex items-center justify-center">
                  {tags[0].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-lg lg:text-sm text-xs">
                  {tags[0].label}
                </span>
              </div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/UmrCYw9Got63qjtN7"
                className="flex items-center px-2.5  py-2 rounded-full bg-linear-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F] w-full min-w-[70%] lg:w-fit gap-2.5 text-white"
              >
                <div className="flex items-center justify-center">
                  {tags[1].icon}
                </div>
                <span className="lg:text-nowrap 2xl:text-base  text-xs">
                  {tags[1].label}
                </span>
              </a>
              {/* ))} */}
            </div>{" "}
          </div>
          <div className="-translate-y-1/6">
            <TimerBlock eventDate="2025-11-09" />
          </div>
          <PrimaryButton className="gap-1 px-7 text-lg py-3 w-fit leading-[100%]">
            <span>Explore Agenda</span>
          </PrimaryButton>
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
