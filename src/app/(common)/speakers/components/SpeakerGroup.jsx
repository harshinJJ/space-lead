import React from "react";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import SpeakerProfileCard from "@/components/cards/SpeakerProfileCard";
import Image from "next/image";

const SpeakerGroup = ({
  speakers = [],
  title,
  label,
  className = "",
  bgUrl = "/images/backgrounds/speaker_group_bg1.jpg",
  cardStyle = "secondary",
  showGroupBg = true,
}) => {
  const borderClass =
    showGroupBg &&
    (cardStyle == "primary"
      ? "border-secondary border-1"
      : "border-1 border-[#AE00FF]");
  return (
    speakers.length > 0 && (
      <section className={`bg-indigo lg:py-15 py-5 px-5 sm:px-0 text-white ${className}`}>
        <div
          className={`container-fluid overflow-hidden mx-auto text-[1.13rem] bg-cover bg-center bg-no-repeat flex-3 flex flex-col gap-3 md:gap-7.5 px-5 xl:px-15.75 2xl:py-20 lg:py-15 py-10 rounded-3xl ${borderClass}`}
        >
          {showGroupBg&&<Image fill src={bgUrl} alt="group-bg-image" className="object-cover object-center" />}
          <div className={`relative flex flex-col  md:items-center md:justify-center`}>
            {title && (
              <h2
                data-aos="fade-up"
                className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-azonix  leading-[1]`}
              >
                {title}
              </h2>
            )}
            {label && (
              <p
                data-aos="fade-up"
                className="font-azonix 2xl:text-3xl lg:text-2xl text-lg"
              >
                {label}
              </p>
            )}
          </div>
          {/* Speaker Cards */}
          <HorizontalCardStagger
            cardPerRow={4}
            className={`container-fluid mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3`}
          >
            {speakers.map((speaker, index) => (
              <div key={index} className="card">
                <SpeakerProfileCard cardStyle={cardStyle} speaker={speaker} />
              </div>
            ))}
          </HorizontalCardStagger>
        </div>
      </section>
    )
  );
};

export default SpeakerGroup;
