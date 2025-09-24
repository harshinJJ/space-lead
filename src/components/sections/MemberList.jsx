import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { CircularLink } from "../buttons/CircularButton";
import SpeakerCard from "../cards/SpeakerCard";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";

const MemberList = ({
  speakers = [],
  navComponent,
  link,
  linkLabel = "View Full Line-Up",
  title,
  label,
  theme = "light",
  selectAction,
  className = "",
  cardSize = "lg",
}) => {
  const containerClass =
    cardSize == "sm"
      ? "!flex flex-wrap justify-center  [&>div]:p-2.5 [&>div]:sm:flex-1/5 [&>div]:w-full [&>div]:sm:w-auto [&>div]:sm:max-w-1/2 [&>div]:md:max-w-1/4 [&>div]:lg:max-w-1/5"
      : " gap-6 sm:grid-cols-2 lg:grid-cols-4";
  return (
    speakers.length > 0 && (
      <section className={`bg-[#EDF0FE] py-20 ${className}`}>
        <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col gap-3 md:gap-7.5 px-5 xl:px-15.75">
          {label && <p className="text-secondary font-azonix">{label}</p>}
          <div
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-7.5 ${
              link || navComponent ? "md:justify-between" : "md:justify-center"
            } mt-2`}
          >
            {title && (
              <h2
                className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-azonix ${
                  theme == "dark" ? "text-white" : "text-[#000222]"
                } 2xl:leading-snug ${
                  link || navComponent ? "max-w-[25ch]" : ""
                }`}
              >
                {title}
              </h2>
            )}
            {navComponent
              ? navComponent
              : link && (
                  <PrimaryLink
                    href="/speakers"
                    className="px-5 py-3.5 text-sm lg:text-lg"
                  >
                    {linkLabel}
                  </PrimaryLink>
                )}
          </div>
        </div>

        {/* Speaker Cards */}
        <HorizontalCardStagger
          cardPerRow={cardSize == "sm" ? 5 : 4}
          className={`container-fluid mx-auto px-5 grid grid-cols-1 ${containerClass} mt-10 xl:px-15.75`}
        >
          {speakers.map((speaker, index) => (
            <div key={index} className="card">
              <SpeakerCard
                speaker={speaker}
                selectAction={selectAction}
                textSize={cardSize}
              />
            </div>
          ))}
        </HorizontalCardStagger>
      </section>
    )
  );
};

export default MemberList;
