import React from "react";
import { PrimaryLink } from "@/components/buttons/PrimaryButton";
import CircularButton from "@/components/buttons/CircularButton";
import TestimonialsSlider from "./Testimonials";
import StatsCard from "@/components/cards/StatsCard";

const LatestInfo = () => {
  const points = [
    "Space medicine researchers and healthcare professionals",
    "Scientists and academic researchers",
    "Policy-makers and government agencies",
    "Space industry professionals and entrepreneurs",
    "Graduate students in STEM and advanced engineering",
    "Investors in the space sector",
  ];

  return (
    <section className="container mx-auto px-5 md:px-10 rounded-4xl bg-[#1C192DB8] py-15 text-white">
      {/* Top Section */}
      <div className="xl:max-w-[1187px] mx-auto lg:px-4">
        <p className="text-lg text-secondary mb-5">Get the latest info about</p>
        <div className="flex flex-col lg:flex-row gap-15 xl:gap-20 items-start justify-between">
          {/* Left Content */}
          <div className="max-w-">
            <h2 className="font-azonix text-2xl md:text-3xl xl:text-4xl leading-[1.2] tracking-[-0.1rem]">
              EXPLORE THE FEATURES OF <br /> HEALTH BEYOND EARTH
            </h2>
            <div className="mt-6">
              <p className="mb-2.5 text-lg">For Whom</p>
              <ul className=" space-y-3">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 text-lg text-[#B3B3B3]"
                  >
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9296 9.08398L10.8505 15.1631C10.743 15.2705 10.6161 15.3535 10.4696 15.4121C10.3231 15.4707 10.1718 15.5 10.0155 15.5C9.84949 15.5 9.6908 15.4707 9.53943 15.4121C9.38806 15.3535 9.25867 15.2705 9.15125 15.1631C8.89734 14.9287 8.77039 14.6406 8.77039 14.2988C8.77039 13.957 8.89734 13.6738 9.15125 13.4492L13.1356 9.43555H1.51941C1.17761 9.43555 0.889526 9.31836 0.655151 9.08398C0.420776 8.84961 0.303589 8.56152 0.303589 8.21973C0.303589 7.89746 0.420776 7.61426 0.655151 7.37012C0.889526 7.12598 1.17761 7.00391 1.51941 7.00391H13.1356L9.15125 3.01953C8.89734 2.78516 8.77039 2.49707 8.77039 2.15527C8.77039 1.81348 8.89734 1.53027 9.15125 1.30566C9.37585 1.06152 9.65906 0.939453 10.0009 0.939453C10.3427 0.939453 10.6259 1.06152 10.8505 1.30566L16.9296 7.38477C17.1737 7.60938 17.2958 7.89258 17.2958 8.23438C17.2958 8.57617 17.1737 8.85938 16.9296 9.08398Z"
                        fill="#7F529F"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Date Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full lg:w-auto gap-4 lg:gap-0">
            <div className="relative transform  lg:translate-x-[1.625rem] bg-gradient-to-b from-secondary to-[#2A5A59] rounded-4xl px-6.5 py-10.25 text-center shadow-lg">
              <p className="text-6xl xl:text-[6.25rem] font-azonix text-tertiary">
                14
              </p>
              <p className="text-xl xl:text-[2rem]">JULY-2025</p>
            </div>
            <div className=" relative transform lg:translate-y-[33%] bg-gradient-to-b from-primary to-[#2E1D39] rounded-4xl px-6.5 py-10.25 text-center shadow-lg">
              <p className="text-6xl xl:text-[6.25rem] font-azonix text-secondary">
                15
              </p>
              <p className="text-xl xl:text-[2rem]">JULY-2025</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pt-10 lg:py-25 lg:pb-12.5">
          <StatsCard />
        </div>
      </div>

      {/* Testimonials */}
      <div className="lg:max-w-[1593px] w-full mx-auto lg:px-4 lg:ps-15 py-16 flex flex-col lg:flex-row gap-3 gap-y-10 items-start">
        {/* Image */}
        <div className="relative flex flex-col lg:flex-row gap-5 w-full lg:w-1/2 flex-shrink-0">
          <img
            src="/images/testimonial_img.png"
            alt="Speaker"
            className="rounded-lg w-full xl:max-w-[33.5rem] h-full object-cover"
          />
          <div className="lg:absolute lg:max-w-[25ch] w-auto text-center font-open-sans flex flex-col items-center lg:gap-19.5 gap-5 bottom-0 lg:translate-x-[-50%] transform lg:translate-y-[-30%] left-0 bg-gradient-to-b from-primary/31 to-[#2E1D3950] backdrop-blur-[24px]  text-white rounded-2xl p-10">
            <p className="text-6xl">6k+</p>
            <p className="">Trusted Customers also Satisfied</p>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <p className="text-primary font-open-sans mb-5">Testimonials</p>
          <h3 className="xl:text-[2.875rem] lg:text-4xl md:text-2xl text-xl font-bold xl:mb-15 mb-10 font-raleway">
            Discover Clients Feedback <br /> About our Events
          </h3>
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
};

export default LatestInfo;
