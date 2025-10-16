"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { PrimaryDualTextLink, PrimaryLink } from "../buttons/PrimaryButton";
import Image from "next/image";
import { RowStagger } from "@/utils/animations/CardStagger";
import Link from "@/utils/CustomLink";

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

export default function SponsorsBlock({ sponsors = [] }) {
  return (
    <>
      <SponsorContent />
      <SponsorList sponsors={sponsors} />
    </>
  );
}

export const SponsorContent = ({ imageAlign = "right" }) => {
  return (
    <section className="w-full bg-white pt-10 md:pt-25 pb-10 md:pb-30.5 px-5">
      <RowStagger
        className={`container-fluid mx-auto flex flex-col items-stretch ${
          imageAlign === "right" ? "lg:flex-row" : " lg:flex-row-reverse"
        } items-start gap-8 md:gap-20`}
      >
        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="text-secondary text-lg mb-4 leading-[100%] font-azonix">
            Our Sponsors
          </p>
          <h2 className="xl:text-5xl md:text-4xl text-2xl font-azonix lg:leading-13.75 font-bold lg:mb-14 mb-7">
            Why sponsor
          </h2>
          <p className="sm:text-lg leading-[150%]  mb-10">
            Sponsoring the Space Lead ’25 Conference positions your organization
            at the forefront of space innovation. Engage with top-level
            decision-makers, policymakers, and global disruptors. Build
            credibility, amplify visibility, expand your network, and forge
            lasting partnerships through a high-impact platform designed for
            those shaping the next era of space.
          </p>
          <PrimaryDualTextLink
            href="#"
            className="px-7.5 py-6 text-lg tracking-[1px] [&span]:font-[600]"
            initialText="View All Sponsors"
            // hoverText="Join The Event"
          />
        </div>
        {/* Image */}
        <div className="relative w-full lg:w-1/2 ">
          {/* <Image
            src="/images/sponsor_content_img.png" // replace with your actual image path
            alt="Astronaut looking at space"
            className="w-full h-full lg:absolute rounded-2xl object-cover"
            width={775}
            height={387}
          /> */}
          {/* <video
            autoPlay
            loop
            muted
            src="/images/sponsor_content.webm"
            alt="Astronaut looking at space"
            className="w-full h-full lg:absolute rounded-[2.5rem] object-cover"
            width={775}
            height={387}
          /> */}
        </div>
      </RowStagger>
    </section>
  );
};

export const SponsorList = ({
  showSlides = true,
  sponsors = [],
  title = "Sponsorship opportunities",
  description,
  label,
}) => {
  const show = showSlides && sponsors.some((item) => item.logo);
  return sponsors?.length > 0 ? (
    <section className="w-full relative py-12 lg:py-20 bg-[url('/images/backgrounds/sponsorlist_bg.png')]">
      {/* Left & right edge gradients */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 xl:w-100 bg-gradient-to-r from-[#EDF0FE] to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 xl:w-100 bg-gradient-to-l from-[#EDF0FE] to-transparent"></div>

      <div className="container-fluid px-5 mx-auto lg:px-12.75 text-center">
        {label && (
          <p className="text-secondary font-azonix text-lg mb-2">{label}</p>
        )}
        {title && (
          <h2 className="xl:text-5xl md:text-4xl text-2xl font-azonix font-bold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p
            className={`lg:max-w-[68.5rem] leading-[1.875rem] text-lg mx-auto text-[#303030] ${
              !show ? "mb-0" : ""
            } mb-10 `}
          >
            {description}
            {/* The Space Lead ’25 Conference offers curated sponsorship opportunities
          designed to deliver strategic value and measurable impact. Gain
          exclusive visibility, immersive branding experiences, and tailored
          access to key stakeholders — including government leaders, educators,
          researchers, global investors, and C-level executives. Whether your
          goal is market expansion, thought leadership, lead generation, or
          ecosystem engagement, choose your tier and lead the conversation. */}
          </p>
        )}
      </div>
      {show && (
        <div className="relative mx-auto lg:pb-10 ">
          <div className="overflow-hidden w-full relative group">
            <div
              className={`flex w-max items-center gap-5 sm:gap-10  py-3 will-change-transform [--duration:42s] ${
                sponsors.length > 5
                  ? "animate-[customerLogosMarquee_var(--duration)_linear_infinite]"
                  : "justify-center !w-full"
              } group-hover:[animation-play-state:paused]`}
            >
              {sponsors.map(
                (sponsor, idx) =>
                  sponsor.logo && (
                    <div
                      key={idx}
                      className="w-[50vw] md:w-[calc(100vw/3)] lg:w-[calc(100vw/4)] xl:w-[calc(100vw/5)] 2xl:w-[calc(100vw/5)] 3xl:w-[calc(100vw/6)] max-w-[248px] box-border flex flex-row justify-center items-center p-[26px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0 hover:scale-[1.2] transition-transform duration-300"
                    >
                      <Image
                        width={150}
                        height={40}
                        src={sponsor.logo || "/logo.png"}
                        alt={sponsor.id || sponsor.name}
                        priority={true}
                        className="max-h-10 w-full object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                      />
                    </div>
                  )
              )}
              {/* Duplicate items for seamless infinite scroll */}
              {sponsors?.length > 5 &&
                sponsors.map(
                  (sponsor, idx) =>
                    sponsor.logo && (
                      <div
                        key={`duplicate-${idx}`}
                        className="box-border flex flex-row justify-center items-center p-[26px] md:w-[248px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0 hover:scale-[1.2] transition-transform duration-300"
                      >
                        <Image
                          width={150}
                          height={40}
                          priority={true}
                          src={sponsor.logo || "/logo.png"}
                          alt={sponsor.id || sponsor.name}
                          className="max-h-10 w-full object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                        />
                      </div>
                    )
                )}
            </div>
          </div>

          {/* Swiper for logos */}

          {/* <div className="">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              loop
              freeMode={true}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 0, // continuous scroll
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true, // first swiper normal
              }}
              className="!w-full !py-3"
              speed={3000} // control smoothness
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 40 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 10 },
                1280: { slidesPerView: 5, spaceBetween: 10 },
                1400: { slidesPerView: 5, spaceBetween: 40 },
                1536: { slidesPerView: 6, spaceBetween: 40 },
                1728: { slidesPerView: 6, spaceBetween: 40 },
                1920: { slidesPerView: "auto", spaceBetween: 20 },
              }}
            >
              {sponsors.map((sponsor, idx) => (
                <SwiperSlide
                  className="3xl:!w-[248px] hover:scale-[1.2]"
                  key={idx}
                >
                  <div className="box-border flex flex-row justify-center items-center p-[26px] md:w-[247px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.97,0,0)] flex-none order-0 self-stretch grow-0">
                    <Image
                      width={150}
                      height={40}
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-10 w-full object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

          <div className="overflow-hidden w-full relative group">
            <div
              className={`flex w-max items-center gap-5 sm:gap-10  py-3 will-change-transform [--duration:42s] ${
                sponsors.length > 5
                  ? "animate-[customerLogosMarqueeReverse_var(--duration)_linear_infinite]"
                  : "justify-center !w-full"
              } group-hover:[animation-play-state:paused]`}
            >
              {sponsors.map(
                (sponsor, idx) =>
                  sponsor.logo && (
                    <div
                      key={idx}
                      className="w-[50vw] md:w-[calc(100vw/3)] lg:w-[calc(100vw/4)] xl:w-[calc(100vw/5)] 2xl:w-[calc(100vw/5)] 3xl:w-[calc(100vw/6)] max-w-[248px] box-border flex flex-row justify-center items-center p-[26px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0 hover:scale-[1.2] transition-transform duration-300"
                    >
                      <Image
                        width={150}
                        height={40}
                        src={sponsor.logo || "/logo.png"}
                        alt={sponsor.id || sponsor.name}
                        className="max-h-10 w-full object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                      />
                    </div>
                  )
              )}
              {/* Duplicate items for seamless infinite scroll */}
              {sponsors?.length > 5 &&
                sponsors.map(
                  (sponsor, idx) =>
                    sponsor.logo && (
                      <div
                        key={`duplicate-${idx}`}
                        className="box-border flex flex-row justify-center items-center p-[26px] md:w-[248px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0 hover:scale-[1.2] transition-transform duration-300"
                      >
                        <Image
                          width={150}
                          height={40}
                          src={sponsor.logo || "/logo.png"}
                          alt={sponsor.company_name || sponsor.id || "sponsor"}
                          className="max-h-10 w-full object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                        />
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      )}
    </section>
  ) : null;
};

export const SponsorContentRight = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-25 px-5 pb-10 md:pb-30.5">
      <RowStagger className="container-fluid mx-auto flex flex-col xl:flex-row items-start gap-8 md:gap-20">
        {/* Image */}
        <div className="w-full xl:w-1/2 xl:max-w-[44rem] flex justify-center">
          {/* <video
            autoPlay
            loop
            muted
            src="/images/sponsor_content.webm" // replace with your actual image path
            alt="Astronaut looking at space"
            className="w-full  rounded-2xl object-cover"
          /> */}
        </div>

        {/* Content */}
        <div className="w-full xl:w-1/2 text-center xl:text-left flex flex-col items-center xl:items-start">
          <p className="text-secondary text-lg mb-4 leading-[100%] font-orbitron">
            Our Sponsors
          </p>
          <h2 className="xl:text-5xl md:text-4xl text-2xl font-azonix font-bold lg:mb-14 mb-7">
            Why sponsor
          </h2>
          <p className="sm:text-lg leading-[150%]  mb-10">
            Sponsoring the Space Lead ’25 Conference positions your organization
            at the forefront of space innovation. Engage with top-level
            decision-makers, policymakers, and global disruptors. Build
            credibility, amplify visibility, expand your network, and forge
            lasting partnerships through a high-impact platform designed for
            those shaping the next era of space.
          </p>
          <PrimaryDualTextLink
            href="#"
            className="px-7.5 py-6 text-lg tracking-[1px] [&span]:font-[600]"
            initialText="View All Sponsors"
            // hoverText="Join The Event"
          />
        </div>
      </RowStagger>
    </section>
  );
};

export const SponsorScroll = ({ sponsors = [] }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      freeMode={true}
      modules={[FreeMode]}
      className="!w-full !py-3 !ps-2.5"
      speed={3000} // control smoothness
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 40 },
        768: { slidesPerView: 3, spaceBetween: 40 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
        1280: { slidesPerView: 5, spaceBetween: 10 },
        1400: { slidesPerView: 5, spaceBetween: 40 },
        1536: { slidesPerView: 6, spaceBetween: 40 },
        1728: { slidesPerView: 6, spaceBetween: 40 },
        1920: { slidesPerView: "auto", spaceBetween: 20 },
      }}
      preventClicks={false}
      preventClicksPropagation={false}
    >
      {sponsors.map((sponsor, idx) => (
        <SwiperSlide className="3xl:!w-[248px] !transition-all !duration-500 hover:scale-[1.2]" key={idx}>
          <div className="box-border flex flex-row justify-center items-center p-[26px] md:w-[247px] h-[86.96px] text-black bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.97,0,0)] flex-none order-0 self-stretch grow-0">
            <Image
              width={150}
              height={40}
              src={sponsor.logo}
              alt={sponsor.company_name || "sponsor_logo"}
              className="max-h-10 w-full object-contain before:text-black [transform:matrix(1,0,-0.26,1.03,0,0)]"
            />
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="3xl:!max-w-[248px] ">
        <Link
          href={"/sponsors"}
          className="box-border flex flex-row justify-center gap-4 items-center h-[86.96px]"
        >
          <span>View All Sponsors</span>
          <svg
            className="animate-goto"
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-3.0598e-07 7.5C-3.15693e-07 7.72222 0.0694441 7.90278 0.208333 8.04167C0.347222 8.18056 0.527777 8.25 0.75 8.25L19.1667 8.25L14.25 13.1667C14.0833 13.3333 14 13.5278 14 13.75C14 13.9722 14.0833 14.1528 14.25 14.2917C14.4167 14.4306 14.6111 14.5 14.8333 14.5C15.0556 14.5 15.25 14.4444 15.4167 14.3333L21.6667 8.08333C21.7778 7.91667 21.8333 7.72222 21.8333 7.5C21.8333 7.27778 21.7778 7.08333 21.6667 6.91667L15.4167 0.666667C15.25 0.555556 15.0556 0.500001 14.8333 0.500001C14.6111 0.500001 14.4167 0.569445 14.25 0.708334C14.0833 0.847223 14 1.02778 14 1.25C14 1.47222 14.0833 1.66667 14.25 1.83333L19.1667 6.75L0.75 6.75C0.527778 6.75 0.347222 6.81944 0.208333 6.95833C0.0694442 7.09722 -2.96266e-07 7.27778 -3.0598e-07 7.5Z"
              fill="white"
            />
          </svg>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
