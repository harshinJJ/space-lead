"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { SpeakerSlideCard } from "../cards/SpeakerCard";
import { PrimaryLink } from "../buttons/PrimaryButton";
// import Link from "next/link";
import Link from "@/utils/CustomLink";

import { RowStagger } from "@/utils/animations/CardStagger";

// const speakers = [
//   "Zylaran Vexor",
//   "Threxis N'alor",
//   "Xylozar K'thar",
//   "Virok Tal'mor",
//   "Zarathis O'rdan",
//   "Ilithra Velon",
// ];

const cards = [
  {
    name: "Rochelle Fernandez",
    title: "Learn about no-code tools",
    type: "Live Event",
    btn: "Event Details",
    color: "#DF91F2",
    image: "/images/speakers/speaker1.png",
    program: "Live Event",
  },
  {
    name: "Regina Phalange",
    title: "Nail your interviews",
    type: "Live Event",
    btn: "Event Details",
    color: "#4DE3ED",
    image: "/images/speakers/speaker2.png",
    program: "Live Event",
  },
  {
    name: "Shawn Frost",
    title: "Nail your  interviews",
    type: "Live Event",
    btn: "Event Details",
    color: "#91F2A6",
    image: "/images/speakers/speaker3.png",
    program: "Live Event",
  },
  {
    name: "Rochelle Fernandez",
    title: "Learn about no-code tools",
    type: "Live Event",
    btn: "Event Details",
    color: "#DF91F2",
    image: "/images/speakers/speaker1.png",
    program: "Live Event",
  },
  {
    name: "Regina Phalange",
    title: "Nail your interviews",
    type: "Live Event",
    btn: "Event Details",
    color: "#4DE3ED",
    image: "/images/speakers/speaker2.png",
    program: "Live Event",
  },
  {
    name: "Shawn Frost",
    title: "Nail your  interviews",
    type: "Live Event",
    btn: "Event Details",
    color: "#91F2A6",
    image: "/images/speakers/speaker3.png",
    program: "Live Event",
  },
];

const colors = ["#DF91F2", "#4DE3ED", "#91F2A6"];

const SpeakerSlider = ({ speakers = [], className }) => {
  const swiperRef = useRef(null);
  return (
    <section className={`bg-[#191A2A] py-20 relative ${className}`}>
      <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col px-5 xl:px-15.75 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-2.5">
          <h2 className="text-white text-6xl font-medium tracking-wide font-orbitron">
            Speakers
          </h2>

          <PrimaryLink
            href="/speakers"
            className="px-5 py-3.5 text-sm lg:text-lg"
          >
            View Full Line-Up
          </PrimaryLink>
        </div>
        <div className="">
          <p className="text-white text-xl lg:text-[2.5rem] font-light mb-10">
            The Astronauts of Our Adventure: Meet the Team
          </p>
          <RowStagger className="flex flex-col xl:flex-row items-start justify-between mt-4">
            <div className="2xl:w-1/5 w-full flex-2 text-xl mb-10">
              <Link
                href={"/speakers"}
                className="bg-radial mb-2 from-[#149CCD] leading-[200%] w-fit text-transparent bg-clip-text to-[#00435B] font-bold cursor-pointer"
              >
                All
              </Link>
              <ul className="flex gap-x-9 items-center xl:items-start justify-start overflow-auto xl:flex-col gap-2 overflow-x-auto scrollbar-hide hide-scrollbar">
                {speakers.map((sp, i) => (
                  <li
                    key={i}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                    className="text-white font-light hover:text-cyan-400 cursor-pointer whitespace-nowrap"
                  >
                    {sp.name ||`${sp.firstname} ${sp.lastname}`}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex w-full items-center justify-center relative lg:max-w-265 xl:px-20">
              {/* Swiper carousel */}
              <Swiper
                modules={[Navigation]}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation={{
                  nextEl: ".swiper-next.speaker-swiper", // Actual DOM element
                  prevEl: ".swiper-prev.speaker-swiper",
                }}
                spaceBetween={-100}
                slidesPerView={1.1}
                breakpoints={{
                  480: { slidesPerView: 1.5 },
                  640: { slidesPerView: 3 },
                }}
                centeredSlides={true}
                className={`speaker-swiper-container ${speakers.length>2?"lg:max-w-200":"lg:min-w-200"} !w-full h-115 `}
              >
                {speakers.map((card, id) => {
                  const color = colors[id % colors.length];
                  return (
                    <SwiperSlide
                      className="swiper-slide-custom !flex !items-center !justify-center  cursor-pointer  transition-all duration-300"
                      key={id}
                    >
                      <SpeakerSlideCard
                        name={card.name ||`${card.firstname} ${card.lastname}`}
                        title={card.title}
                        type={card.type}
                        btn={card.btn}
                        color={color}
                        image={card?.image||card.profile_pic}
                        program={card.program||"Live Event"}
                      />
                    </SwiperSlide>
                  );
                })}
                {/* Swiper navigation buttons */}
                <button aria-label="swiper-prev-btn" className="swiper-prev speaker-swiper absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#353535] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#454545] transition">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9006 12.541H4.1907"
                      stroke="white"
                      strokeWidth="1.56535"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3853 5.34619L4.1906 12.5408L11.3853 19.7355"
                      stroke="white"
                      strokeWidth="1.56535"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button aria-label="swiper-next-btn" className="swiper-next speaker-swiper absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#353535] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#454545] transition">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.09915 12.541H21.8091"
                      stroke="white"
                      strokeWidth="1.56535"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.6145 5.34619L21.8092 12.5408L14.6145 19.7355"
                      stroke="white"
                      strokeWidth="1.56535"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Swiper>
            </div>
          </RowStagger>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSlider;
