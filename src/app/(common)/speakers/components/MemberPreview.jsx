"use client";
import React, { useState } from "react";
import MemberList from "@/components/sections/MemberList";
import PrimaryButton, {
  PrimaryDualTextLink,
} from "@/components/buttons/PrimaryButton";
import SpeakerAbout from "./SpeakerAbout";
import SpeakerAgenda from "./SpeakerAgenda";
import SpeakerCard from "@/components/cards/SpeakerCard";

const speakers = [
  {
    name: "Dr. Maha Bint Mishari AlSaud",
    title: "Chairperson",
    image: "/images/speaker1.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Prof. Charles Elachi",
    title: "President",
    image: "/images/speaker2.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Dr. Majid AlBahkali",
    title: "General Manager",
    image: "/images/speaker3.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Dr. Esam AlBanyan",
    title: "Vice President Health Sector",
    image: "/images/speaker4.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Dr. Maha Bint Mishari AlSaud",
    title: "Chairperson",
    image: "/images/speaker1.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Prof. Charles Elachi",
    title: "President",
    image: "/images/speaker2.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Dr. Majid AlBahkali",
    title: "General Manager",
    image: "/images/speaker3.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
  {
    name: "Dr. Esam AlBanyan",
    title: "Vice President Health Sector",
    image: "/images/speaker4.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    facts: [
      "Phosfluorescently architect optimal",
      "Synergistically target interoperable dev",
      "Collaboratively productivate",
      "Distinctively monetize robust times",
    ],
  },
];

const agenda = [
  {
    image: "/images/agenda1.png", // Replace with actual image
    title: "Events That Leave a Impression",
    time: "10:00 AM To 09:00 PM - 09 Nov 2025",
    hall: "HALL - 01",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    speakers: [
      {
        name: "John D. Alexon",
        role: "Moderator",
        image: "/images/speaker1.png",
      },
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker2.png",
      },
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker3.png",
      },
    ],
  },
  {
    image: "/images/agenda2.png",
    title: "Sparkle & Shine on Celebrations",
    time: "10:00 AM To 09:00 PM - 09 Nov 2025",
    hall: "HALL - 01",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    speakers: [
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker1.png",
      },
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker2.png",
      },
    ],
  },
  {
    image: "/images/agenda3.png",
    title: "Sparkle & Shine on Celebrations",
    time: "10:00 AM To 09:00 PM - 09 Nov 2025",
    hall: "HALL - 01",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    speakers: [
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker1.png",
      },
      {
        name: "John D. Alexon",
        role: "Design Expert",
        image: "/images/speaker2.png",
      },
      {
        name: "John D. Alexon",
        role: "Moderator",
        image: "/images/speaker3.png",
      },
      {
        name: "John D. Alexon",
        role: "Moderator",
        image: "/images/speaker4.png",
      },
    ],
  },
];
const MemberPreview = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveSpeaker = (speaker) => {
    setActiveSpeaker(speaker);
    setActiveTab(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {activeSpeaker && (
        <section className="bg-[#EDF0FE] pt-20">
          <div className="container mx-auto text-[1.13rem] flex-3 flex flex-col gap-7.5 px-5 sm:px-0 xl:px-8">
            <p className="text-secondary">Steering Committee Members</p>
            <div
              className={`flex flex-col md:flex-row md:items-center md:justify-between mt-2`}
            >
              <h2
                className={`text-4xl md:text-[2.875rem] font-azonix text-[#000222] leading-snug max-w-[25ch]`}
              >
                MEET OUR INDUSTRY EXPERT AND PROFESSIONAL SPEAKERS
              </h2>

              <PrimaryDualTextLink
                initialText={"Buy Ticket"}
                hoverText={"Join The Event"}
              />
            </div>
          </div>

          <div className="container w-full mx-auto flex flex-col lg:flex-row xl:gap-8.75 gap-5 xl:px-8">
            <div className="lg:w-1/4">
              <SpeakerCard speaker={activeSpeaker} />
            </div>
            <div className="flex-3/4">
              <div className="flex bg bg-gradient-to-r from-white to-transparent w-full rounded-l-lg p-1 items-center  border border-[#E4E4E7]">
                {["About", "Agenda"].map((tab, i) => (
                  <PrimaryButton
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-5 sm:px-8 !py-1 rounded-lg flex-col relative ${
                      activeTab === i
                        ? ""
                        : " from-transparent !text-secondary to-transparent"
                    }`}
                  >
                    {tab}
                  </PrimaryButton>
                ))}
              </div>
              {activeTab === 0 && <SpeakerAbout speaker={activeSpeaker} />}
              {activeTab === 1 && <SpeakerAgenda agenda={agenda} />}
              {/* <div className="hidden lg:block border-b lg:w-6/10 lg:mt-6 border-[#D7D7D7]" /> */}
            </div>
          </div>
          <div className="hidden lg:block border-b lg:w-1/3 mx-auto lg:mt-6 border-[#D7D7D7]" />
        </section>
      )}
      <MemberList
        selectAction={(speaker) => handleActiveSpeaker(speaker)}
        speakers={speakers}
        title={
          activeSpeaker
            ? "Steering Committee Members"
            : "MEET OUR INDUSTRY EXPERT  AND PROFESSIONAL SPEAKERS"
        }
        label={!activeSpeaker && "Steering Committee Members"}
        navComponent={
          !activeSpeaker && (
            <PrimaryDualTextLink
              initialText={"Buy Ticket"}
              hoverText={"Join The Event"}
            />
          )
        }
      />
      <MemberList
        title={"Scientific Committee Members"}
        speakers={speakers}
        selectAction={(speaker) => handleActiveSpeaker(speaker)}
      />
    </>
  );
};

export default MemberPreview;
