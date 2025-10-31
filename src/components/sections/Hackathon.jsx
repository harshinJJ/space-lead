import React from "react";
import Image from "next/image";
import { CalenderIcon, LocationIcon, LogoSVG, SARIcon } from "@/data/icons";
import EVENT_INFO from "@/data/eventInfo";

const Arrow = ({size=29,className=""}) => (
  <svg
    width={size}
    className={`h-auto ${className}`}
    viewBox="0 0 29 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2854_1117)">
      <path
        d="M1.63867 9.63074H23.7499"
        stroke="currentColor"
        strokeWidth="2.375"
        strokeMiterlimit="20"
        strokeLinecap="square"
      />
      <path
        d="M15.6982 18.0739L25.1982 9.63073L15.6982 1.18523"
        stroke="currentColor"
        strokeWidth="2.375"
        strokeMiterlimit="20"
      />
    </g>
    <defs>
      <clipPath id="clip0_2854_1117">
        <rect width="28.5" height="19" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Line = ({ className }) => (
  <div
    className={`mx-auto w-full ${className} p-0.25 before:aspect-square after:aspect-square before:w-1 before:h-1 after:w-1  after:h-1 before:left-0 before:rotate-45 after:rotate-45 before:top-1/2 before:-translate-y-1/2 after:top-1/2 after:-translate-y-1/2 before:absolute after:absolute after:right-0 bg-gradient-to-r from-secondary to-primary relative before:p-1 before:bg-secondary after:p-1 after:bg-primary`}
  ></div>
);

const Li = ({children}) => (
  <li className="flex items-start gap-2">
    <span className="text-secondary mt-2">
      <Arrow size={20} />
    </span>
    <span>
      {children}
      </span>
  </li>
);

const Hackathon = ({
  speakers = [],
  title,
  label,
  className = "",
  bgUrl = "/images/backgrounds/hackathon_bg.jpg",
  cardStyle = "secondary",
  showGroupBg = true,
}) => {
  const borderClass =
    showGroupBg &&
    (cardStyle == "primary"
      ? "border-secondary border-1"
      : "border-1 border-[#AE00FF]");
  return (
    <section
      className={`bg-indigo lg:py-15 2xl:pb-40 xl:pb-30 lg:pb-20 pb-15 py-5 px-5 sm:px-0 text-white ${className}`}
    >
      <div
        className={`container-fluid overflow-hidden mx-auto text-[1.13rem] bg-cover bg-center bg-no-repeat flex-3 flex flex-col gap-3 md:gap-7.5 px-5 xl:px-15.75 2xl:py-20 lg:py-15 py-5 md:px-10 md:py-10 rounded-[3rem] ${borderClass}`}
      >
        {showGroupBg && (
          <>
            <Image
              fill
              src={bgUrl}
              alt="group-bg-image"
              className="object-cover object-center"
            />
            <div className="absolute absolute-center h-full w-full bg-indigo/85"></div>
            <div className="absolute absolute-center h-full w-full bg-gradient-to-br from-primary/0 to-secondary/23"></div>
          </>
        )}

        <div className={`relative flex flex-col items-center md:gap-10 gap-5`}>
          {/* title block */}
          <div className=" w-full lg:px-15">
            <div className="border-1 border-secondary rounded-[3rem] text-white flex flex-col text-center items-center p-8.5 w-full gap-2">
              <h2 className="font-azonix xl:text-6xl text-4xl">SPACE LEAD’25 Conference</h2>
              <div className="text-secondary font-bold font-droid-bold xl:text-5xl sm:text-3xl text-2xl uppercase">
                Space Lead Hackathon 2025
              </div>
              <p className="xl:text-4xl text-2xl">
                The Future of Health & Advanced Engineering in Space
              </p>
            </div>
          </div>
          {/* content block */}
          <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-x-10 gap-y-10">
            <div className="">
              <h5 className="mb-2.5 text-secondary flex items-center gap-2.5 uppercase border-b-1 xl:pb-5 pb-2.5 border-secondary w-fit font-droid-bold lg:text-3xl text-2xl">
                
                <span>Challenges:</span>
              </h5>
              <ul className="xl:text-2xl md:text-xl space-y-2.5">
                <li className="md:text-lg text-sm text-secondary mb-0">
                  Identify a Space related challenge in the following themes and
                  provide a possible solution
                </li>
                <Li>Engineering & Design Challenge</Li>
                <Li>Business Strategy Challenge</Li>
                <Li>Space Medicine Challenge</Li>
                <li className="md:text-lg text-sm text-secondary">
                  Exhibition-style format with posters and prototypes
                </li>
              </ul>
            </div>
            <div className="xl:col-span-2">
              <h5 className="mb-2.5 text-secondary flex items-center gap-2.5 uppercase border-b-1 xl:pb-5 pb-2.5 border-secondary w-fit font-droid-bold lg:text-3xl text-2xl">
                
                <span>Proposed Awards:</span>
              </h5>
              <ul className="xl:text-2xl md:text-xl space-y-2.5">
                <Li>
                  Best Poster (per track: Engineering, Business, Medicine)
                </Li>
                <Li>Best Interdisciplinary Poster (overall)</Li>
                <Li>Innovation Award (most creative concept)</Li>
                <Li>
                  Feasibility Award (most practical and implementable idea)
                </Li>
                <Li>Prototype Award (best physical/digital representation)</Li>
              </ul>
            </div>
            <div className="xl:col-span-3">
              <h5 className="mb-2.5 text-secondary flex items-center gap-2.5 uppercase border-b-1 xl:pb-5 pb-2.5 border-secondary w-fit font-droid-bold lg:text-3xl text-2xl">
                
                <span>Get Involved:</span>
              </h5>
              <ul className="xl:text-2xl md:text-xl space-y-2.5">
                <Li>
                  Showcase your project and connect with experts from diverse
                  disciplines.
                </Li>
                <Li>Inspire others with your creativity and innovation.</Li>
                <Li>
                  Compete for recognition and awards celebrating excellence and
                  ingenuity.
                </Li>
                <Li>Teams of 4–5 students</Li>
              </ul>
            </div>
          </div>

          {/* prize */}

          <div className="rounded-4xl border-6 border-[#9242CC] bg-primary/19 text-center p-4 md:px-17.5 px-5">
            <div className="md:text-3xl text-2xl flex items-end">
              <span className="font-droid-bold">Prizes:</span>{" "}
              <span className="md:text-6xl text-5xl flex items-end">
                <SARIcon className="md:!w-[3.75rem] !w-[3rem]" /> 3000
              </span>
            </div>
            <p className="text-secondary">Per award</p>
          </div>

          {/* dates */}
          <div className="w-full ">
            <Line className={"max-w-9/10"} />
            <div className="py-5 flex lg:flex-row font-space-grotesk font-medium flex-col 2xl:gap-6 gap-6 w-full flex-wrap 2xl:flex-nowrap 2xl:justify-between justify-center 2xl:text-3xl xl:text-2xl text-lg">
              <div className="bg-gradient-to-b from-secondary/60 to-primary/15 p-6 px-2 md:px-6 border-1 border-primary rounded-2xl text-center text-nowrap  justify-center gap-1">
                <span className="2xl:text-2xl xl:text-xl lg:text-base sm:text-xl text-sm">Judging:</span>{" "}Sunday Nov 9
              </div>
              <div className="bg-gradient-to-b from-secondary/60 to-primary/15 p-6 px-2 md:px-6 border-1 border-primary rounded-2xl text-center text-nowrap  justify-center gap-1">
                <span className="2xl:text-2xl xl:text-xl lg:text-base sm:text-xl text-sm">VIP Touring:</span>{" "}Monday Nov
                10
              </div>
              <div className="bg-gradient-to-b from-secondary/60 to-primary/15 p-6 px-2 md:px-6 border-1 border-primary rounded-2xl text-center text-nowrap  justify-center gap-1">
                <span className="2xl:text-2xl xl:text-xl lg:text-base sm:text-xl text-sm">Award Ceremony:</span>{" "}Tuesday
                Nov 11
              </div>
            </div>
            <Line className={"max-w-9/10"} />
          </div>

          <div className="flex rounded-3xl border-1 border-secondary/80 px-6 py-4.5  flex-col gap-2.5">
            <div className="flex flex-col sm:flex-row xl:gap-15 gap-5 bg-white/4 rounded-[1.25rem] px-7 py-8 mt-4.5">
              <div className="">
                <LogoSVG />
              </div>
              <div className="flex flex-col gap-2 gap-y-2.5 lg:text-nowrap font-droid-bold font-bold 2xl:text-3xl xl:text-2xl md:text-xl">
                <div className="flex items-center  rounded-full  min-w-[70%] w-fit gap-2.5 text-white">
                  <div className="flex items-center justify-center text-secondary">
                    <CalenderIcon />
                  </div>
                  <span className="">9th – 11th November</span>
                </div>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/UmrCYw9Got63qjtN7"
                  className="flex items-center  rounded-full w-full min-w-[70%] lg:w-fit gap-2.5 text-white"
                >
                  <div className="flex items-center justify-center text-secondary">
                    <LocationIcon />
                  </div>
                  <span className="">{EVENT_INFO.venueName}</span>
                </a>
              </div>{" "}
            </div>
            <div className="text-center font-droid-bold text-xl">
              <div className="text-secondary">Contact:</div>
              <div className="">
                For participation details or inquiries, please contact: <br />{" "}
                mnoor@alfaisal.edu
              </div>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
