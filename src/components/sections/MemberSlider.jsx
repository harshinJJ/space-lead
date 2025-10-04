"use client";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { CircularLink } from "../buttons/CircularButton";
import SpeakerCard from "../cards/SpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import dynamic from "next/dynamic";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const MemberSlider = ({
  speakers = [],
  title,
  label,
  theme = "light",
  // selectAction,
  className = "",
  cardSize = "lg",
  showNavButton,
  navLabel = "View Full Line-Up",
  navLink = "/speakers",
  linkType = "internal",
  hasCardNav = false,
  cardNavBaseURL = "/speakers",
  loop=false,
  autoplay=false
}) => {
  const router = useRouter();
  const selectAction = (id) => {
    if (hasCardNav) {
      gsap.to("#transition-overlay", {
        x: "0%",
        duration: 0,
        immediateRender:true,
        ease: "power2.in",
        onComplete: () => {
          router.push(`${cardNavBaseURL}/${id}`);
        },
      });
    }
  };
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
                className={`xl:text-5xl md:text-4xl text-2xl font-azonix ${
                  theme == "dark" ? "text-white" : "text-[#000222]"
                } 2xl:leading-snug  `}
              >
                {title}
              </h2>
            )}
          </div>
        </div>

        {/* Speaker Cards as Swiper FreeMode */}
        <div
          data-aos="fade-up"
          // data-aos-once="true"
          className="container-fluid mx-auto px-5 sm:px-0 mt-10 mb-5"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={autoplay?{
              delay: 0, // continuous scroll
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }:false}
            speed={3000} // control smoothness
            // freeMode={true}
            loop={loop}
            spaceBetween={20}
            slidesPerView={"auto"}
            // slidesPerView={cardSize == "sm" ? 1.2 : "auto"}
            // breakpoints={{
            //   480: { slidesPerView: cardSize == "sm" ? 1.8 : "auto" },
            //   640: { slidesPerView: cardSize == "sm" ? 2.8 : "auto" },
            //   768: { slidesPerView: cardSize == "sm" ? 3 : "auto" },
            //   1024: { slidesPerView: cardSize == "sm" ? 4 : "auto" },
            //   1280: { slidesPerView: cardSize == "sm" ? 4.2 : "auto" },
            //   1400: { slidesPerView: cardSize == "sm" ? 4.8 : "auto" },
            // }}
            className="w-full"
          >
            {speakers.map((speaker, index) => (
              <SwiperSlide
                key={index}
                className={`${
                  cardSize == "sm" ? "!w-[331px] !h-auto" : "!w-[320px] !h-auto"
                } lg:!max-w-2/5 flex items-stretch card`}
              >
                <SpeakerCard
                  speaker={speaker}
                  {...(hasCardNav
                    ? { selectAction: () => selectAction(speaker.id) }
                    : {})}
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
