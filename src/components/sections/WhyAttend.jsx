import { TextSplitStagger } from "@/utils/animations/CardStagger";
import React from "react";

const BgOverlay = () => {
  return (
    <div className="absolute absolute-center w-full h-full flex items-end">
      <div className="w-full absolute">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-contain w-full h-auto max-h-[100%]"
          src="/images/backgrounds/why_attend_bg.mp4"
          poster="/images/backgrounds/posters/why_attend_bg.webp"
        />
        <div className="absolute absolute-center !-top-1 w-full h-full bg-gradient-to-t from-indigo/0 to-indigo"></div>
      </div>
    </div>
  );
};
const WhyAttend = ({ children }) => {
  return (
    <section className="relative overflow-hidden bg-[top_center] bg-indigo bg-cover bg-no-repeat py-10 sm:py-20 px-1 xs:px-4">
      <BgOverlay />
      <div className="relative container-fluid mx-auto px-2 lg:ps-15.75 xs:px-4 lg:pe-0 rounded-t-4xl bg-gradient-to-b from-secondary via-secondary/50 via-[50%] to-transparent to-[75%] pt-22.5 text-white">
        <div className="w-full p-2 md:p-3 bg-[#EEEEEE] mb-5" />
        <div className="mb-10 flex flex-col justify-between lg:flex-row gap-3.5">
          <div className="font-azonix flex-1">
            {/* <p className="text-primary uppercase tracking-wide text-lg xl:text-2xl font-semibold">
              Why Attend?
            </p>
            <h2 className="text-4xl lg:text-6xl 3xl:text-[5rem] 2xl:text-[4.4375rem] md:text-5xl 2xl:leading-[100%] lg:leading-[3.5rem] tracking-[-0.12rem] text-[#263469] mb-4">
              Explore the Features <br /> of Health Beyond Earth
            </h2> */}
          </div>
          <div className="flex-1 w-full flex flex-col gap-3 lg:gap-6.5">
            <div className="w-full p-2 md:p-3 bg-linear-to-r from-[#EEEEEE] to-primary" />

            <div className="w-full p-2 md:p-3 bg-[#EEEEEE]" />
            {/* <TextSplitStagger className="md:pe-16 xs:pe-8">
              <p className="text-gray-300 text-lg 3xl:text-2xl 2xl:text-[1.35rem] md:text-xl leading-normal 2xl:leading-[1.7] tracking-[0%] w-full">
                Join Space Lead '25 Conference to connect with global experts at
                the forefront of space science, technology and human health.
                Gain insights into the innovations shaping the future of
                off-planet exploration and network with industry leaders,
                researchers and visionaries committed to advancing humanity's
                future.
              </p>
            </TextSplitStagger> */}
          </div>
        </div>
        <div className="lg:pe-15.75 ">{children}</div>
      </div>
    </section>
  );
};

export default WhyAttend;
