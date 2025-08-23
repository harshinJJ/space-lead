import React from "react";

const WhyAttend = ({ children }) => {
  return (
    <section className="bg-[url('/images/backgrounds/why_attend_bg.png')] bg-[top_center] bg-[#1C192D] bg-cover bg-no-repeat py-10 sm:py-20 px-1 sm:px-0">
      <div className="container mx-auto px-2 lg:ps-15.75 xs:px-8 lg:pe-0 rounded-t-4xl bg-gradient-to-b from-secondary via-secondary/50 via-[40%] to-transparent to-[50%] pt-22.5 text-white">
        <div className="w-full p-2 md:p-3 bg-[#EEEEEE] mb-5" />
        <div className="mb-10 flex flex-col justify-between lg:flex-row gap-3.5">
          <div className="font-azonix flex-1">
            <p className="text-primary uppercase tracking-wide text-lg xl:text-2xl font-semibold">
              Why Attend?
            </p>
            <h2 className="text-4xl lg:text-6xl 2xl:text-[4.9rem] md:text-5xl 2xl:leading-[5rem] lg:leading-[3.5rem] tracking-[-0.12rem] text-[#263469] mb-4">
              Explore the Features <br /> of Health Beyond Earth
            </h2>
          </div>
          <div className="flex-1 w-full flex flex-col gap-3 lg:gap-6.5">
            <div className="w-full p-2 md:p-3 bg-linear-to-r from-[#EEEEEE] to-primary" />

            <div className="w-full p-2 md:p-3 bg-[#EEEEEE]" />
            <div className="md:pe-16 xs:pe-8">
              <p className="text-gray-300 text-lg 2xl:text-2xl md:text-xl leading-normal 2xl:leading-10 tracking-[0%] w-full">
                Join Space Lead '25 Conference to connect with global experts at
                the forefront of space science, technology and human health.
                Gain insights into the innovations shaping the future of
                off-planet exploration and network with industry leaders,
                researchers and visionaries committed to advancing humanity's
                future.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pe-15.75 ">{children}</div>
      </div>
    </section>
  );
};

export default WhyAttend;
