"use client";
import React from "react";

const getGradientBg = (theme) => {
  switch (theme) {
    case "primary":
      return "bg-gradient-to-b from-primary to-[#2E1D39] border-primary";
    case "secondary":
      return "bg-gradient-to-b from-secondary to-[#2A5A59] border-secondary";
    default:
      return "bg-gradient-to-b from-secondary to-[#2A5A59] border-secondary";
  }
};

const getTagBg = (theme) => {
  switch (theme) {
    case "primary":
      return "bg-gradient-to-r from-[#DBA9FF] to-[#E8C7FF] text-[#6A1DA1]";
    case "secondary":
      return "bg-gradient-to-r from-[#F6FF00] to-[#818600] text-[#005149]";
    default:
      return "bg-gradient-to-r from-[#F6FF00] to-[#818600] text-[#005149]";
  }
};

const SessionTypeSelector = ({ selected, onSelect, sessions = [] }) => (
  <>
    <p className="text-secondary text-2xl text-center">
      Which session you wish to attend?
    </p>
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 w-full">
      {sessions.map((session) => (
        <SessionCard
          key={session.key}
          session={session}
          isSelected={selected === session.key}
          onSelect={() => onSelect(session)}
        />
      ))}
    </div>
  </>
);

const SessionCard = ({ session, isSelected, onSelect }) => {
  const gradientBg = getGradientBg(session.theme);
  return (
    <div
      className={`flex-1 transition-all duration-300 ease-in-out overflow-hidden relative rounded-xl pt-5 pb-3.5 ps-6 pe-8 cursor-pointer border-1  ${gradientBg} ${
        isSelected
          ? "shadow-[0_0_45px_5px_rgba(255,255,255,0.2)]"
          : "shadow-none"
      }`}
      onClick={onSelect}
    >
      {session.theme == "primary" ? (
        <svg
          width="176"
          height="87"
          className="absolute top-0 aspect-2/1 h-auto w-[32%] right-0 transform -translate-x-[50%]"
          viewBox="0 0 176 87"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M175.75 -1.53392e-05C175.75 11.425 173.487 22.7381 169.089 33.2935C164.692 43.8488 158.247 53.4396 150.122 61.5183C141.997 69.597 132.351 76.0054 121.735 80.3775C111.119 84.7497 99.7407 87 88.25 87C76.7593 87 65.3812 84.7497 54.7652 80.3775C44.1492 76.0054 34.5033 69.597 26.3782 61.5183C18.253 53.4396 11.8078 43.8488 7.41056 33.2935C3.01327 22.7381 0.750016 11.425 0.750015 7.62939e-06L6.34708 6.65077e-06C6.34708 10.6942 8.46556 21.2837 12.5816 31.1638C16.6976 41.0439 22.7305 50.0213 30.3359 57.5832C37.9413 65.1451 46.9702 71.1436 56.9071 75.2361C66.844 79.3286 77.4944 81.4349 88.25 81.4349C99.0057 81.4349 109.656 79.3286 119.593 75.2361C129.53 71.1436 138.559 65.1451 146.164 57.5832C153.77 50.0213 159.802 41.0439 163.918 31.1638C168.034 21.2836 170.153 10.6942 170.153 -1.43606e-05L175.75 -1.53392e-05Z"
            fill="url(#paint0_linear_113_8414)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_113_8414"
              x1="88.4619"
              y1="-91.6344"
              x2="88.2524"
              y2="87"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7F529F" />
              <stop />
              <stop offset="1" stopColor="#7F529F" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="177"
          height="88"
          className="absolute top-0 right-0 aspect-2/1 h-auto w-[32%] transform -translate-x-[75%]"
          viewBox="0 0 177 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M176.75 -7.62939e-06C176.75 11.5563 174.474 22.9995 170.051 33.6761C165.629 44.3528 159.147 54.0538 150.975 62.2254C142.804 70.3969 133.103 76.879 122.426 81.3014C111.749 85.7238 100.306 88 88.75 88C77.1937 88 65.7505 85.7238 55.0739 81.3014C44.3972 76.879 34.6962 70.3969 26.5246 62.2254C18.353 54.0538 11.871 44.3528 7.4486 33.6761C3.02619 22.9995 0.749999 11.5563 0.75 -1.52588e-05H6.37905C6.37905 10.8171 8.50964 21.5283 12.6492 31.522C16.7887 41.5157 22.8561 50.5962 30.5049 58.245C38.1538 65.8939 47.2343 71.9613 57.228 76.1008C67.2217 80.2404 77.9329 82.3709 88.75 82.3709C99.5671 82.3709 110.278 80.2404 120.272 76.1008C130.266 71.9613 139.346 65.8939 146.995 58.2451C154.644 50.5962 160.711 41.5157 164.851 31.522C168.99 21.5283 171.121 10.8171 171.121 -7.62939e-06L176.75 -7.62939e-06Z"
            fill="url(#paint0_linear_113_8407)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_113_8407"
              x1="88.9631"
              y1="-92.6877"
              x2="88.75"
              y2="88"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AC0BE" />
              <stop stopOpacity="0.41" />
              <stop offset="1" stopColor="#5AC0BE" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {session.tag && (
        <div
          className={`text-sm aspect-square absolute -top-2 flex items-center justify-center -right-2 max-w-19.5 text-center transform  `}
        >
          <div
            className={` text-center transform rotate-45 min-w-50 w-full py-1 ${getTagBg(
              session.theme
            )}`}
          >
            {session.tag}
          </div>
        </div>
      )}
      {/* <div className="relative flex flex-col lg:gap-10 gap-5"> */}
      <label className="relative flex flex-col lg:gap-10 gap-5 cursor-pointer">
        <div className="flex items-center gap-2.5">
          <input
            type="radio"
            checked={isSelected}
            onChange={onSelect}
            className="sr-only peer"
          />
          <span
            className={`
        w-6.25 h-6.25 rounded-full border-1 border-white flex items-center justify-center
        peer-checked:border-white peer-checked:bg-transparent
        transition-all duration-200
      `}
          >
            <span
              className={`
          w-3.25 h-3.25 rounded-full
          ${isSelected ? "border-2 border-white bg-white" : ""}
        `}
            ></span>
          </span>
          <span className="text-white text-xl md:text-3xl ms-2">{session.name}</span>
        </div>
        <span className={`text-white text-2xl md:text-5xl`}>
          {session.price
            ? `${session.currency}.${session.price.toFixed(2)}`
            : "Free"}
        </span>
      </label>
      {/* <div className="flex items-center gap-2.5">
          <input
            className="text-white"
            type="radio"
            checked={isSelected ? true : false}
            onChange={onSelect}
          />
          <span className="text-white text-3xl">{session.name}</span>
        </div>
        <span className={`text-white text-5xl`}>
          {session.price
            ? `${session.currency}.${session.price.toFixed(2)}`
            : "Free"}
        </span> */}
      {/* </div> */}
    </div>
  );
};

export default SessionTypeSelector;
