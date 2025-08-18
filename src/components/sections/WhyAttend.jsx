import React from "react";

const WhyAttend = ({ children }) => {
  return (
    <section className="bg-[url('/images/backgrounds/why_attend_bg.png')] bg-[top_center] bg-cover py-10 sm:py-20 px-1 sm:px-0">
      <div className="container mx-auto px-2 sm:px-0 md:ps-19 rounded-t-4xl bg-gradient-to-b from-[#5AC0BE] via-[#5AC0BE80] via-[40%] to-transparent to-[50%] pt-22.5 text-white">
        <div className="w-full p-2 md:p-3 bg-[#EEEEEE] mb-5" />
        <div className="mb-10 flex flex-col lg:flex-row gap-3.5">
          <div className="font-azonix flex-1">
            <p className="text-[#7F529F] uppercase tracking-wide text-lg md:text-2xl font-semibold">
              Why Attend?
            </p>
            <h2 className="text-4xl md:text-[4.9rem]  md:leading-[5rem] tracking-[-0.12rem] text-[#263469] mb-4">
              Explore the Features <br /> of Health Beyond Earth
            </h2>
          </div>
          <div className="flex-1 lg:min-w-200 flex flex-col gap-3 lg:gap-6.5">
            <div className="w-full p-2 md:p-3 bg-linear-to-r from-[#EEEEEE] to-[#7F529F]" />

            <div className="w-full p-2 md:p-3 bg-[#EEEEEE]" />
            <div className="md:pe-16">
              <p className="text-gray-300 text-2xl leading-normal lg:leading-10 tracking-[0%] w-full">
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
        <div className="md:pe-19">{children}</div>
      </div>
    </section>
  );
};

export default WhyAttend;
