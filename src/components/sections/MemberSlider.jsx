"use client";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { CircularLink } from "../buttons/CircularButton";
import SpeakerCard from "../cards/SpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import dynamic from "next/dynamic";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";

const MemberSlider = ({
  speakers = [],
  title,
  label,
  theme = "light",
  selectAction,
  className = "",
  cardSize = "lg",
  showNavButton,
  navLabel = "View Full Line-Up",
  navLink = "/speakers",
  linkType = "internal",
}) => {


  return (
    speakers.length > 0 && (
      <section className={`bg-[#EDF0FE] py-20 ${className}`}>
        <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 sm:px-0">
          <div
            className={`flex flex-col sm:items-center sm:justify-between  md:justify-center `}
          >
            {label && <p className="text-secondary font-azonix">{label}</p>}
            {title && (
              <h2
                className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-azonix ${
                  theme == "dark" ? "text-white" : "text-[#000222]"
                } 2xl:leading-snug  `}
              >
                {title}
              </h2>
            )}
          </div>
        </div>

        {/* Speaker Cards as Swiper FreeMode */}
        <div className="container-fluid mx-auto px-5 sm:px-0 mt-10 mb-5">
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            spaceBetween={24}
            slidesPerView={cardSize == "sm" ? 1.2 : "auto"}
            breakpoints={{
              480: { slidesPerView: cardSize == "sm" ? 1.8 : "auto" },
              640: { slidesPerView: cardSize == "sm" ? 2.8 : "auto" },
              768: { slidesPerView: cardSize == "sm" ? 3 : "auto" },
              1024: { slidesPerView: cardSize == "sm" ? 4 : "auto" },
              1280: { slidesPerView: cardSize == "sm" ? 4.2 : "auto" },
              1400: { slidesPerView: cardSize == "sm" ? 4.8 : "auto" },
            }}
            className="w-full"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 300}
                className={`${
                  cardSize == "sm" ? "!w-[331px] !h-auto" : "!w-[320px] !h-auto"
                } lg:!max-w-2/5 flex items-stretch card`}
              >
                <SpeakerCard
                  speaker={speaker}
                  selectAction={selectAction}
                  textSize={cardSize}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {showNavButton && (
          <div className="container-fluid mx-auto pt-5 flex items-center justify-center gap-3 px-5 sm:px-0">
            <PrimaryLink
              href={navLink}
              target={linkType == "external" ? "_blank" : "_self"}
              className="px-5 py-3.5 text-sm lg:text-lg sm:whitespace-nowrap md:whitespace-normal w-fit"
            >
              {navLabel}
            </PrimaryLink>
          </div>
        )}
      </section>
    )
  );
};

export default dynamic(() => Promise.resolve(MemberSlider), { ssr: false });
