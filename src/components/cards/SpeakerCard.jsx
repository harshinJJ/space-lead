"use client";
import React from "react";
import { CircularLink } from "../buttons/CircularButton";
import Link from "next/link";
import { SecondaryLink } from "../buttons/SecondaryButton";

const SpeakerCard = ({
  speaker = {},
  selectAction,
  color = "#4DE3ED",
  textSize = "lg",
  showBtn = false,
  className = "",
  hoverable = true,
}) => {
  const labelClass =
    textSize === "sm" ? "2xl:text-base xl:text-sm" : "text-base";
  const titleClass =
    textSize === "sm"
      ? ` md:text-[1.375rem] text-lg leading-[1.5] tracking-[-1.5%]`
      : `2xl:text-[2.5rem] lg:text-[1.5rem] md:text-4xl text-4xl font-semibold leading-[1.1] tracking-[-1.5%]`;
  const hoverName = speaker?.name?.split(".").pop().trim().split(" ").shift();
  const showOverlay = () => Math.random() < 0.5;
  return (
    <div
      {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
      className={`${
        hoverable ? "group" : ""
      } relative p-8 2xl:pt-15 py-5 md:pb-2.5 w-[fit] h-auto aspect-[43/50] rounded-2xl border-1 border-[#4F4F4F] overflow-hidden bg-[#232323] flex flex-col justify-between shadow-2xl ${className}`}
    >
      <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-[100%] group-hover:translate-y-0 [writing-mode:sideways-lr] w-full h-full top-0 left-0 right-0 font-semibold text-7xl text-stroke text-transparent flex items-end">
        {hoverName}
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-10 flex flex-col gap-5 md:gap-7.5 w-full h-full justify-start">
        <span
          style={{ color: color }}
          className={` font-semibold  ${labelClass} `}
        >
          {speaker?.name}
        </span>
        <h3 className={`text-white ${titleClass} mb-2`}>{speaker?.title||"Nail your  interviews"}</h3>
      </div>
      <div
        className={` group-hover:scale-[1.1] transition-all duration-700  origin-bottom-left  relative z-30 flex flex-col gap-15 w-full h-full justify-end`}
      >
        <span className="text-white text-base font-semibold ">
          {speaker?.event?.name || "Live Event"}
        </span>
        {textSize == "lg" && (
          <SecondaryLink
            href={speaker?.event?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Event Details</span>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28571 15.7408L14.9642 8.06228M14.9642 8.06228L8.46701 8.06228M14.9642 8.06228L14.9642 14.5595"
                stroke="white"
                strokeWidth="1.50356"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SecondaryLink>
        )}
      </div>
      {/* Speaker image */}
      <div className=" h-1/2 aspect-square absolute z-20 bottom-0 right-0 group-hover:scale-[1.2] transition-all duration-700 origin-bottom-right ">
        {showOverlay() && (
          <div
            className={`absolute w-full h-full `}
            style={{ background: color + "50", filter: "blur(6.25rem)" }}
          ></div>
        )}
        <img
          src={speaker?.image || "/images/user_placeholder.jpeg"}
          alt={speaker.name || "speaker_image"}
          className="w-full relative aspect-square object-cover object-[top_center]"
          style={{ borderRadius: "0.75rem" }}
        />
      </div>
    </div>
  );
};

const SpeakerCardOld = ({ speaker = {}, selectAction }) => {
  const socials = [
    {
      label: "facebook",
      activeClass: "hover:!bg-[#1877F2]",
      icon: (
        <svg
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99114 0.937499V3.29464H7.58936C7.07745 3.29464 6.73221 3.40178 6.55364 3.61607C6.37507 3.83036 6.28578 4.15178 6.28578 4.58036V6.26786H8.90186L8.55364 8.91071H6.28578V15.6875H3.55364V8.91071H1.27686V6.26786H3.55364V4.32143C3.55364 3.21428 3.86317 2.35565 4.48221 1.74553C5.10126 1.13542 5.92567 0.830357 6.95543 0.830357C7.83043 0.830357 8.509 0.866071 8.99114 0.937499Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "twitter",
      activeClass: "hover:!bg-black",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-twitter-x"
          viewBox="0 0 16 16"
        >
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      ),
    },
    {
      label: "instagram",
      activeClass:
        "bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
      icon: (
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.61628 10.4464C8.61628 10.4464 8.72789 10.3348 8.9511 10.1116C9.17432 9.88839 9.28592 9.46131 9.28592 8.83036C9.28592 8.1994 9.06271 7.66071 8.61628 7.21428C8.16985 6.76786 7.63116 6.54464 7.00021 6.54464C6.36926 6.54464 5.83057 6.76786 5.38414 7.21428C4.93771 7.66071 4.7145 8.1994 4.7145 8.83036C4.7145 9.46131 4.93771 10 5.38414 10.4464C5.83057 10.8929 6.36926 11.1161 7.00021 11.1161C7.63116 11.1161 8.16985 10.8929 8.61628 10.4464ZM9.49128 6.33928C9.49128 6.33928 9.66241 6.51042 10.0047 6.85268C10.3469 7.19494 10.5181 7.85417 10.5181 8.83036C10.5181 9.80655 10.1758 10.6369 9.49128 11.3214C8.80676 12.006 7.9764 12.3482 7.00021 12.3482C6.02402 12.3482 5.19366 12.006 4.50914 11.3214C3.82461 10.6369 3.48235 9.80655 3.48235 8.83036C3.48235 7.85417 3.82461 7.02381 4.50914 6.33928C5.19366 5.65476 6.02402 5.3125 7.00021 5.3125C7.9764 5.3125 8.80676 5.65476 9.49128 6.33928ZM11.2413 4.58928C11.2413 4.58928 11.2815 4.62946 11.3618 4.70982C11.4422 4.79018 11.4824 4.94345 11.4824 5.16964C11.4824 5.39583 11.402 5.58928 11.2413 5.75C11.0806 5.91071 10.8871 5.99107 10.6609 5.99107C10.4347 5.99107 10.2413 5.91071 10.0806 5.75C9.91985 5.58928 9.8395 5.39583 9.8395 5.16964C9.8395 4.94345 9.91985 4.75 10.0806 4.58928C10.2413 4.42857 10.4347 4.34821 10.6609 4.34821C10.8871 4.34821 11.0806 4.42857 11.2413 4.58928ZM7.68325 3.20089C7.68325 3.20089 7.57982 3.20164 7.37298 3.20312C7.16613 3.20461 7.04188 3.20536 7.00021 3.20536C6.95854 3.20536 6.73086 3.20387 6.31717 3.20089C5.90348 3.19792 5.5895 3.19792 5.37521 3.20089C5.16092 3.20387 4.87372 3.2128 4.5136 3.22768C4.15348 3.24256 3.84694 3.27232 3.59396 3.31696C3.34098 3.36161 3.12819 3.41667 2.95557 3.48214C2.65795 3.60119 2.39604 3.77381 2.16985 4C1.94366 4.22619 1.77104 4.48809 1.652 4.78571C1.58652 4.95833 1.53146 5.17113 1.48682 5.42411C1.44217 5.67708 1.41241 5.98363 1.39753 6.34375C1.38265 6.70387 1.37372 6.99107 1.37075 7.20536C1.36777 7.41964 1.36777 7.73363 1.37075 8.14732C1.37372 8.56101 1.37521 8.78869 1.37521 8.83036C1.37521 8.87202 1.37372 9.0997 1.37075 9.51339C1.36777 9.92708 1.36777 10.2411 1.37075 10.4554C1.37372 10.6696 1.38265 10.9568 1.39753 11.317C1.41241 11.6771 1.44217 11.9836 1.48682 12.2366C1.53146 12.4896 1.58652 12.7024 1.652 12.875C1.77104 13.1726 1.94366 13.4345 2.16985 13.6607C2.39604 13.8869 2.65795 14.0595 2.95557 14.1786C3.12819 14.244 3.34098 14.2991 3.59396 14.3437C3.84694 14.3884 4.15348 14.4182 4.5136 14.433C4.87372 14.4479 5.16092 14.4568 5.37521 14.4598C5.5895 14.4628 5.90348 14.4628 6.31717 14.4598C6.73086 14.4568 6.95854 14.4554 7.00021 14.4554C7.04188 14.4554 7.26955 14.4568 7.68325 14.4598C8.09694 14.4628 8.41092 14.4628 8.62521 14.4598C8.8395 14.4568 9.1267 14.4479 9.48682 14.433C9.84694 14.4182 10.1535 14.3884 10.4065 14.3437C10.6594 14.2991 10.8722 14.244 11.0449 14.1786C11.3425 14.0595 11.6044 13.8869 11.8306 13.6607C12.0568 13.4345 12.2294 13.1726 12.3484 12.875C12.4139 12.7024 12.469 12.4896 12.5136 12.2366C12.5582 11.9836 12.588 11.6771 12.6029 11.317C12.6178 10.9568 12.6267 10.6696 12.6297 10.4554C12.6327 10.2411 12.6327 9.92708 12.6297 9.51339C12.6267 9.0997 12.6252 8.87202 12.6252 8.83036C12.6252 8.78869 12.6267 8.56101 12.6297 8.14732C12.6327 7.73363 12.6327 7.41964 12.6297 7.20536C12.6267 6.99107 12.6178 6.70387 12.6029 6.34375C12.588 5.98363 12.5582 5.67708 12.5136 5.42411C12.469 5.17113 12.4139 4.95833 12.3484 4.78571C12.2294 4.48809 12.0568 4.22619 11.8306 4C11.6044 3.77381 11.3425 3.60119 11.0449 3.48214C10.8722 3.41667 10.6594 3.36161 10.4065 3.31696C10.1535 3.27232 9.84694 3.24256 9.48682 3.22768C9.1267 3.2128 8.8395 3.20387 8.62521 3.20089C8.41092 3.19792 8.09694 3.19792 7.68325 3.20089ZM13.8127 6C13.8425 6.52381 13.8574 7.46726 13.8574 8.83036C13.8574 10.1935 13.8425 11.1369 13.8127 11.6607C13.7532 12.8988 13.3841 13.8571 12.7056 14.5357C12.027 15.2143 11.0687 15.5833 9.83057 15.6429C9.30676 15.6726 8.36331 15.6875 7.00021 15.6875C5.63711 15.6875 4.69366 15.6726 4.16985 15.6429C2.93176 15.5833 1.97342 15.2143 1.29485 14.5357C0.616281 13.8571 0.247233 12.8988 0.187709 11.6607C0.157947 11.1369 0.143066 10.1935 0.143066 8.83036C0.143066 7.46726 0.157947 6.52381 0.187709 6C0.247233 4.7619 0.616281 3.80357 1.29485 3.125C1.97342 2.44643 2.93176 2.07738 4.16985 2.01786C4.69366 1.98809 5.63711 1.97321 7.00021 1.97321C8.36331 1.97321 9.30676 1.98809 9.83057 2.01786C11.0687 2.07738 12.027 2.44643 12.7056 3.125C13.3841 3.80357 13.7532 4.7619 13.8127 6Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "linkedin",
      activeClass: "hover:!bg-[#0a66c2]",
      icon: (
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.25914 6.4096V15.2578H0.312709V6.4096H3.25914ZM3.44664 3.67745C3.45259 4.11198 3.30229 4.47507 2.99575 4.76674C2.6892 5.05841 2.28592 5.20424 1.78592 5.20424H1.76807C1.27997 5.20424 0.887114 5.05841 0.589495 4.76674C0.291876 4.47507 0.143066 4.11198 0.143066 3.67745C0.143066 3.23698 0.29634 2.8724 0.602888 2.5837C0.909435 2.29501 1.30973 2.15067 1.80378 2.15067C2.29783 2.15067 2.69366 2.29501 2.99128 2.5837C3.2889 2.8724 3.44069 3.23698 3.44664 3.67745ZM13.8574 10.1864V15.2578H10.9199V10.5257C10.9199 9.90067 10.7993 9.41109 10.5582 9.05692C10.3172 8.70275 9.94069 8.52567 9.42878 8.52567C9.05378 8.52567 8.73979 8.62835 8.48682 8.8337C8.23384 9.03906 8.04485 9.29353 7.91985 9.5971C7.85438 9.77567 7.82164 10.0167 7.82164 10.3203V15.2578H4.88414C4.89604 12.8828 4.902 10.9572 4.902 9.48103C4.902 8.00484 4.89902 7.12388 4.89307 6.83817L4.88414 6.4096H7.82164V7.69531H7.80378C7.92283 7.50484 8.04485 7.33817 8.16985 7.19531C8.29485 7.05245 8.46301 6.89769 8.67432 6.73103C8.88563 6.56436 9.14456 6.4349 9.4511 6.34263C9.75765 6.25037 10.0984 6.20424 10.4734 6.20424C11.4913 6.20424 12.3097 6.54204 12.9288 7.21763C13.5478 7.89323 13.8574 8.88281 13.8574 10.1864Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-white group hover:border-2 active:border-2 focus:border-2 border-[#4461EF] rounded-2xl overflow-hidden shadow hover:shadow-lg  active:shadow-lg  focus:shadow-lg  transition p-5.5">
      <div
        {...(selectAction ? { onClick: () => selectAction(speaker) } : {})}
        className="w-full object-cover rounded-2xl overflow-hidden relative"
      >
        <img
          src={speaker?.image || "/images/user_placeholder.jpeg"}
          alt={speaker?.name || "speaker"}
          className="w-full object-cover rounded-2xl group-hover:scale-[1.1] group-focus:scale-[1.1] group-active:scale-[1.1] "
        />
        <div className="absolute bottom-5 hidden group-hover:flex group-active:flex group-focus:flex items-center gap-2 mx-auto w-full left-0 right-0 justify-center">
          {socials.map((social, i) => (
            <CircularLink
              key={i}
              href={social.link}
              target="_blank"
              className={`block p-2 min-w-[38px] ${social.activeClass}`}
            >
              {social.icon}
            </CircularLink>
          ))}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold font-gilroy-bold text-black">
          {speaker?.name}
        </h3>
        <p className="text-sm text-gray-600">{speaker.title}</p>
        <button className="mt-3 bg-primary text-white leading-normal text-sm px-7 py-1.5 rounded-full">
          SPEAKER
        </button>
      </div>
    </div>
  );
};

export const SpeakerSlideCard = ({
  image = "/images/user_placeholder.jpeg",
  name = "",
  title = "",
  link = "#",
  program = "",
  color = "#4DE3ED",
}) => {
    const hoverName = name?.split(".").pop().trim().split(" ").shift();

  return (
    <div className="group relative p-8 py-15 w-[fit] h-115 rounded-2xl border-1 border-[#4F4F4F] overflow-hidden bg-[#232323] flex flex-col justify-between shadow-2xl">
      <div className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-[100%] group-hover:translate-y-0 [writing-mode:sideways-lr] w-full h-full top-0 left-0 right-0 font-semibold text-7xl text-stroke text-transparent flex items-end">
        {hoverName}
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-10 flex flex-col gap-6 w-full h-full justify-start">
        <span style={{ color: color }} className={` font-semibold text-base`}>
          {name}
        </span>
        <h3 className="text-white text-[2.5rem] font-semibold leading-[1.1] tracking-[-1.5%] mb-2">
          {title||"Nail your Interviews"}
        </h3>
      </div>
      <div className=" group-hover:scale-[1.2] transition-all duration-700 origin-top-left relative z-30 flex flex-col gap-15 w-full h-full justify-end">
        <span className="text-white text-lg font-medium ">{program}</span>
        <SecondaryLink href={link} target="_blank" rel="noopener noreferrer">
          <span>Event Details</span>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28571 15.7408L14.9642 8.06228M14.9642 8.06228L8.46701 8.06228M14.9642 8.06228L14.9642 14.5595"
              stroke="white"
              strokeWidth="1.50356"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SecondaryLink>
      </div>
      {/* Speaker image */}
      <div className=" h-1/2 aspect-square absolute z-20 bottom-0 right-0 group-hover:scale-[1.2] transition-all duration-700 origin-bottom-right ">
        <div
          className={`absolute w-full h-full `}
          style={{ background: color + "50", filter: "blur(6.25rem)" }}
        ></div>
        <img
          src={image}
          alt={name}
          className="w-full relative aspect-square object-cover object-[top_center]"
          style={{ borderRadius: "0.75rem" }}
        />
      </div>
    </div>
  );
};

export default SpeakerCard;
