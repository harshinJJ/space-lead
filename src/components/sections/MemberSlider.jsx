"use client";
import React, { useRef, useState } from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { CircularLink } from "../buttons/CircularButton";
import SpeakerCard from "../cards/SpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import dynamic from "next/dynamic";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const ChevronRightIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    className={className}
    viewBox="0 0 23 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.953125 7.5C0.953125 7.72222 1.02257 7.90277 1.16146 8.04166C1.30035 8.18055 1.4809 8.25 1.70312 8.25L20.1198 8.25L15.2031 13.1667C15.0365 13.3333 14.9531 13.5278 14.9531 13.75C14.9531 13.9722 15.0365 14.1528 15.2031 14.2917C15.3698 14.4306 15.5642 14.5 15.7865 14.5C16.0087 14.5 16.2031 14.4444 16.3698 14.3333L22.6198 8.08333C22.7309 7.91666 22.7865 7.72222 22.7865 7.5C22.7865 7.27778 22.7309 7.08333 22.6198 6.91666L16.3698 0.666664C16.2031 0.555552 16.0087 0.499997 15.7865 0.499997C15.5642 0.499997 15.3698 0.569441 15.2031 0.70833C15.0365 0.847219 14.9531 1.02777 14.9531 1.25C14.9531 1.47222 15.0365 1.66666 15.2031 1.83333L20.1198 6.75L1.70312 6.75C1.4809 6.75 1.30035 6.81944 1.16146 6.95833C1.02257 7.09722 0.953125 7.27777 0.953125 7.5Z"
      fill="currentColor"
    />
  </svg>
);

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
  loop = false,
  autoplay = false,
}) => {
  const router = useRouter();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const selectAction = (id) => {
    if (hasCardNav) {
      gsap.to("#transition-overlay", {
        x: "0%",
        duration: 0,
        immediateRender: true,
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
            className={`flex flex-col items-center sm:justify-between  md:justify-center `}
          >
            {label && <p className="text-secondary font-azonix">{label}</p>}
            {title && !showNavButton && (
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
          data-aos-once="true"
          className="container-fluid mx-auto px-5 sm:px-0 mt-10 mb-5"
        >
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            autoplay={
              autoplay
                ? {
                    delay: 1000, // continuous scroll
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            speed={1000} // control smoothness
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
            <div
              slot={showNavButton ? "container-start" : "container-end"}
              className={`w-full flex items-center gap-4 py-6 ${
                showNavButton ? "justify-between" : "justify-center"
              }`}
            >
              {title && showNavButton && (
                <h2
                  className={`xl:text-5xl md:text-4xl text-2xl font-azonix ${
                    theme == "dark" ? "text-white" : "text-[#000222]"
                  } 2xl:leading-snug  `}
                >
                  {title}
                </h2>
              )}
              <div className="flex justify-center gap-4">
                <button
                  disabled={!loop && swiperInstance?.isBeginning}
                  ref={prevRef}
                  className={` p-3 aspect-square flex items-center justify-center h-11.5 w-11.5 border-1 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition ${
                    theme == "dark"
                      ? "border-white text-white hover:bg-white/20"
                      : "border-black text-black hover:bg-black/20"
                  }`}
                >
                  <ChevronRightIcon className="rotate-180" />
                </button>
                <button
                  disabled={!loop && swiperInstance?.isEnd}
                  ref={nextRef}
                  className={` p-3 aspect-square  flex items-center justify-center h-11.5 w-11.5 border-1 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition ${
                    theme == "dark"
                      ? "border-white text-white hover:bg-white/20"
                      : "border-black text-black hover:bg-black/20"
                  }`}
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
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
