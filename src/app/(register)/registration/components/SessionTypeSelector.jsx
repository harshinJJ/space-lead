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
    {/* <p className="text-secondary text-2xl text-center">
      Which session you wish to attend?
    </p> */}
    <div className="gap-5 grid grid-cols-2 w-full">
      {sessions.map((session, i) => (
        <SessionCard
          key={i}
          session={session}
          isSelected={selected === session.id}
          onSelect={() => onSelect(session)}
          theme={i % 2 == 0 ? "secondary" : "primary"}
        />
      ))}
    </div>
  </>
);

const SessionCard = ({
  session,
  isSelected,
  onSelect,
  theme = "secondary",
}) => {
  // const theme = session.price_amount?"primary":"secondary"
  const gradientBg = getGradientBg(theme);
  return (
    <div
      className={`flex-1 transition-all duration-300 ease-in-out overflow-hidden relative rounded-xl lg:pt-5 lg:pb-3.5 lg:ps-6 lg:pe-8 p-2 md:p-5 cursor-pointer border-1  ${gradientBg} ${
        isSelected
          ? "shadow-[0_0_45px_5px_rgba(255,255,255,0.2)]"
          : "shadow-none"
      }`}
      onClick={onSelect}
    >
      <label className="relative flex flex-col cursor-pointer">
        <div className="flex items-center lg:gap-2.5 gap-1">
          <input
            type="radio"
            checked={isSelected}
            onChange={onSelect}
            className="sr-only peer"
          />
          <span
            className={`lg:w-6.25 w-3  lg:h-6.25 h-3 aspect-square rounded-full border-1 border-white flex items-center justify-center peer-checked:border-white peer-checked:bg-transparent transition-all duration-200 `}
          >
            <span
              className={`lg:w-3.25 w-1.5  lg:h-3.25 h-1.5  rounded-full ${
                isSelected ? "border-2 border-white bg-white" : ""
              } `}
            ></span>
          </span>
          <span className="text-white xs:text-xl text-sm md:text-3xl ms-2">
            {session?.display_ticket_name || session?.ticket_name}
          </span>
        </div>
        {session.price_amount && (
          <span className={`text-white xs:text-2xl text-base md:text-5xl lg:mt-10 xs:mt-5 mt-2`}>
            {session.price_amount &&
              `${session.currency_name}.${session.price_amount.toFixed(2)}`}
          </span>
        )}
        {session.price_amount && (
          <span
            className={`xs:text-xs text-xxs ${
              theme == "primary" ? "text-[#B853FF]" : "text-[#47F8F4]"
            }`}
          >
            Inclusive of 15% VAT.
          </span>
        )}
      </label>
    </div>
  );
};

export default SessionTypeSelector;
