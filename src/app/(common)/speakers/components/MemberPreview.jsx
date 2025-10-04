"use client";
import React, { useState } from "react";
// import MemberList from "@/components/sections/MemberList";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SpeakerAbout from "./SpeakerAbout";
import SpeakerAgenda from "./SpeakerAgenda";
// import speakers from "@/../public/assets/json/speakers-data.json";
import SpeakerGroup from "./SpeakerGroup";
import Image from "next/image";

const MemberPreview = ({ speakerList = [], activeSpeaker }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {activeSpeaker?.id && (
        <section id="speaker-preview" className="bg-[#EDF0FE] pt-20">
          <div className="container-fluid mx-auto text-[1.13rem] flex-3 flex flex-col gap-7.5 px-5 sm:px-0 xl:px-15.75 mb-15">
            {/* <p className="text-secondary font-azonix">The Speakers Line-Up</p> */}
            <div
              className={`flex flex-col gap-5 sm:flex-row md:items-start md:justify-between mt-2`}
            >
              {/* <h2
                className={`xl:text-5xl md:text-4xl text-2xl font-azonix text-[#000222] leading-snug `}
              >
                MEET OUR INDUSTRY EXPERT AND PROFESSIONAL SPEAKERS
              </h2> */}
            </div>
          </div>

          <div className="container-fluid w-full mx-auto flex flex-col items-center lg:items-start lg:flex-row xl:gap-8.75 gap-5 xl:px-15.75 px-5">
            <div className="xl:w-1/4 lg:w-2/5 sm:max-w-3/4 bg- md:1/2 w-full">
              {/* <SpeakerCard speaker={activeSpeaker} showBtn={true} /> */}
              <div className="flex flex-col items-center gap-7 px-4 py-5 rounded-2xl bg-black">
                <div className=" aspect-[298/272] w-full rounded-2xl overflow-hidden relative ">
                  <Image
                    fill
                    src={
                      activeSpeaker?.profile_pic ||
                      activeSpeaker?.image ||
                      "/images/user_placeholder.png"
                    }
                    alt={
                      activeSpeaker.name ||
                      `${activeSpeaker.firstname} ${activeSpeaker.lastname}` ||
                      "speaker_image"
                    }
                    className="w-full h-full absolute object-contain object-[bottom_center] bg-white"
                  />
                </div>
                <h3
                  className={`text-white font-semibold text-2xl leading-[1.5] text-center`}
                >
                  {activeSpeaker?.name ||
                    `${activeSpeaker.firstname} ${activeSpeaker.lastname}`}
                </h3>
                <p className="text-white text-center text-sm">{activeSpeaker?.designation}</p>
              </div>
            </div>
            {activeSpeaker&&<div className="flex-3/4 w-full">
              <div className="flex bg bg-gradient-to-r from-white to-transparent w-full rounded-l-lg p-1 items-center  border border-[#E4E4E7]">
                {["About", "Agenda"].map((tab, i) => (
                  <PrimaryButton
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-5 sm:px-8 !py-1 rounded-lg flex-col relative ${
                      activeTab === i
                        ? ""
                        : " !bg-[url('')] from-transparent !text-secondary to-transparent"
                    }`}
                  >
                    {tab}
                  </PrimaryButton>
                ))}
              </div>
              {activeTab === 0 && <SpeakerAbout speaker={activeSpeaker} />}
              {activeTab === 1 && (
                <SpeakerAgenda agenda={activeSpeaker?.agenda_sessions} />
              )}
              {/* <div className="hidden lg:block border-b lg:w-6/10 lg:mt-6 border-[#D7D7D7]" /> */}
            </div>}
          </div>
          <div className="hidden lg:block border-b lg:w-1/3 mx-auto lg:mt-6 border-[#D7D7D7]" />
        </section>
      )}

      <SpeakerGroup
        className="!pt-7.5 !text-black !bg-[#EDF0FE]"
        speakers={speakerList}
        title={"Speakers"}
        showGroupBg={false}
        cardStyle="primary"
      />
    </>
  );
};

export default MemberPreview;
