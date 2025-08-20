"use client";
import React, { useState } from "react";
import PrimaryButton, { PrimaryLink } from "../buttons/PrimaryButton";
import SpeakerTag from "../cards/SpeakerTag";
import AgendaCard from "../cards/AgendaCard";

const eventsData = {
  day1: [
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
  ],
  day2: [
    {
      image: "/images/agenda1.png",
      title: "Future of Innovation",
      time: "09:00 AM To 05:00 PM - 10 Nov 2025",
      hall: "HALL - 02",
      description: "A deep dive into technology trends shaping the future.",
      speakers: [
        {
          name: "John D. Alexon",
          role: "Tech Expert",
          image: "/images/speaker1.png",
        },
        {
          name: "Jane Smith",
          role: "Innovation Lead",
          image: "/images/speaker2.png",
        },
      ],
    },
  ],
  day3: [
    {
      image: "/images/agenda1.png",
      title: "Closing Ceremony",
      time: "06:00 PM To 09:00 PM - 11 Nov 2025",
      hall: "HALL - 03",
      description: "A grand closing celebration with performances and awards.",
      speakers: [
        { name: "John D. Alexon", role: "Host", image: "/images/speaker1.png" },
        { name: "Sarah Lee", role: "Performer", image: "/images/speaker2.png" },
      ],
    },
  ],
};
const tabs = [
  { id: "day1", label: "Day 01", date: "09 Nov 2025" },
  { id: "day2", label: "Day 02", date: "10 Nov 2025" },
  { id: "day3", label: "Day 03", date: "11 Nov 2025" },
];

export default function EventAgenda() {
  const [activeDay, setActiveDay] = useState("day1");

  return (
      <div className="container mx-auto text-white px-4 xl:px-38 sm:px-15">
        <div className="flex flex-col lg:flex-row w-full justify-between items-stretch lg:mb-15">
          <div className="flex flex-col justify-between gap-3">
            <h2 className="uppercase xl:text-lg w-fit bg-gradient-to-r from-[#5AC0BE] to-[#7F529F] bg-clip-text text-transparent">
              Event Agenda
            </h2>
            <h1 className="uppercase font-azonix text-2xl md:text-3xl 2xl:text-5xl font-bold">
              Follow Event Agenda
            </h1>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-5.5 pb-7 mt-10 lg:mt-0">
            {tabs.map((day) => (
              <PrimaryButton
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-5 2xl:px-8 2xl:py-2 lg:!py-1 rounded-full flex-col relative ${
                  activeDay === day.id
                    ? "after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-14 after:border-transparent after:border-t-[#5AC0BE]"
                    : " from-transparent to-transparent border border-[#CCCCCC33]"
                }`}
              >
                <span className="block 2xl:text-lg">{day.label}</span>
                <span className="block text-xs xl:text-sm">{day.date}</span>
              </PrimaryButton>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-7.5">
          {eventsData[activeDay].map((event, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF14] rounded-4xl p-7.5 flex flex-col gap-4"
            >
              <AgendaCard event={event}/>
              {/* <div className="bg-gradient-to-r from-[#FFFFFF14] to-transparent to-90%  rounded-4xl px-[0.9375rem] py-[0.71875rem] flex flex-col lg:flex-row items-center gap-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full lg:w-1/4 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="grid grid-cols-2 lg:max-w-9/10">
                    <h3 className="text-2xl lg:max-w-3/4">{event.title}</h3>
                    <div className="flex flex-col gap-2 text-teal-400 text-sm mt-1">
                      <div className="flex items-center gap-5">
                        <svg
                          width="14"
                          height="26"
                          viewBox="0 0 14 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 6.46973C6.17057 6.46973 5.3877 6.6263 4.65137 6.93945C3.91504 7.2526 3.27393 7.68213 2.72803 8.22803C2.18213 8.77393 1.7526 9.41504 1.43945 10.1514C1.1263 10.8877 0.969727 11.6706 0.969727 12.5C0.969727 13.3294 1.1263 14.1123 1.43945 14.8486C1.7526 15.585 2.18213 16.2261 2.72803 16.772C3.27393 17.3179 3.91504 17.7474 4.65137 18.0605C5.3877 18.3737 6.17057 18.5303 7 18.5303C7.82943 18.5303 8.6123 18.3737 9.34863 18.0605C10.085 17.7474 10.7261 17.3179 11.272 16.772C11.8179 16.2261 12.2474 15.585 12.5605 14.8486C12.8737 14.1123 13.0303 13.3294 13.0303 12.5C13.0303 11.6706 12.8737 10.8877 12.5605 10.1514C12.2474 9.41504 11.8179 8.77393 11.272 8.22803C10.7261 7.68213 10.085 7.2526 9.34863 6.93945C8.6123 6.6263 7.82943 6.46973 7 6.46973ZM9.78027 13.4268H7C6.94076 13.4268 6.88151 13.4162 6.82227 13.395C6.76302 13.3739 6.71224 13.3379 6.66992 13.2871C6.6276 13.2448 6.59375 13.1961 6.56836 13.1411C6.54297 13.0861 6.53027 13.029 6.53027 12.9697V8.78027C6.53027 8.72103 6.54297 8.6639 6.56836 8.60889C6.59375 8.55387 6.6276 8.50521 6.66992 8.46289C6.71224 8.41211 6.76302 8.37614 6.82227 8.35498C6.88151 8.33382 6.94076 8.32324 7 8.32324C7.05924 8.32324 7.11849 8.33382 7.17773 8.35498C7.23698 8.37614 7.28776 8.41211 7.33008 8.46289C7.3724 8.50521 7.40625 8.55387 7.43164 8.60889C7.45703 8.6639 7.46973 8.72103 7.46973 8.78027V12.5H9.78027C9.84798 12.5 9.90934 12.5127 9.96436 12.5381C10.0194 12.5635 10.068 12.5973 10.1104 12.6396C10.1527 12.682 10.1865 12.7306 10.2119 12.7856C10.2373 12.8407 10.25 12.902 10.25 12.9697C10.25 13.029 10.2373 13.0861 10.2119 13.1411C10.1865 13.1961 10.1527 13.2448 10.1104 13.2871C10.068 13.3379 10.0194 13.3739 9.96436 13.395C9.90934 13.4162 9.84798 13.4268 9.78027 13.4268Z"
                            fill="#5AC0BE"
                          />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-5">
                        <svg
                          width="10"
                          height="26"
                          viewBox="0 0 10 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.51758 17.9463C4.21289 17.557 3.83203 17.0534 3.375 16.4355C2.91797 15.8177 2.47575 15.1639 2.04834 14.4741C1.62093 13.7843 1.25911 13.0967 0.962891 12.4111C0.658203 11.7256 0.505859 11.1162 0.505859 10.583C0.505859 9.95671 0.624349 9.36426 0.861328 8.80566C1.09831 8.24707 1.42415 7.76042 1.83887 7.3457C2.25358 6.93099 2.74023 6.60091 3.29883 6.35547C3.85742 6.11849 4.4541 6 5.08887 6C5.72363 6 6.32031 6.11849 6.87891 6.35547C7.4375 6.60091 7.92415 6.93099 8.33887 7.3457C8.75358 7.76042 9.07943 8.24707 9.31641 8.80566C9.56185 9.36426 9.68457 9.95671 9.68457 10.583C9.68457 11.1162 9.53223 11.7256 9.22754 12.4111C8.92285 13.0967 8.5568 13.7843 8.12939 14.4741C7.70199 15.1639 7.25977 15.8177 6.80273 16.4355C6.33724 17.0534 5.95215 17.557 5.64746 17.9463C5.50358 18.124 5.31527 18.2129 5.08252 18.2129C4.84977 18.2129 4.66146 18.124 4.51758 17.9463ZM5.08887 12.1191C5.51204 12.1191 5.87386 11.971 6.17432 11.6748C6.47477 11.3786 6.625 11.0146 6.625 10.583C6.625 10.1683 6.47477 9.81071 6.17432 9.51025C5.87386 9.2098 5.51204 9.05957 5.08887 9.05957C4.66569 9.05957 4.30599 9.2098 4.00977 9.51025C3.71354 9.81071 3.56543 10.1683 3.56543 10.583C3.56543 11.0146 3.71354 11.3786 4.00977 11.6748C4.30599 11.971 4.66569 12.1191 5.08887 12.1191Z"
                            fill="#5AC0BE"
                          />
                        </svg>
                        <span>{event.hall}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 lg:max-w-17/20">{event.description}</p>
                </div>
              </div> */}
              {/* Speakers */}
              <div className="flex flex-wrap gap-2.5">
                {event.speakers.map((speaker, i) => (
                  <SpeakerTag
                    key={i}
                    image={speaker.image}
                    name={speaker.name}
                    role={speaker.role}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-15 flex items-center justify-center">
          <PrimaryLink className="w-fit group px-7.5 py-[1.0625rem] items-center gap-2 hover:from-[#B20D5D] hover:to-[#4A0AB4] transition-all duration-300">
            <span className="leading-[100%] text-lg group-hover:hidden">
              View Agenda List
            </span>
            <span className="leading-[100%] text-lg group-hover:block hidden">
              Join The Event
            </span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7598 9.46875L11.6807 15.5479C11.5732 15.6553 11.4463 15.7383 11.2998 15.7969C11.1533 15.8555 11.002 15.8848 10.8457 15.8848C10.6797 15.8848 10.521 15.8555 10.3696 15.7969C10.2183 15.7383 10.0889 15.6553 9.98145 15.5479C9.72754 15.3135 9.60059 15.0254 9.60059 14.6836C9.60059 14.3418 9.72754 14.0586 9.98145 13.834L13.9658 9.82031H2.34961C2.00781 9.82031 1.71973 9.70312 1.48535 9.46875C1.25098 9.23438 1.13379 8.94629 1.13379 8.60449C1.13379 8.28223 1.25098 7.99902 1.48535 7.75488C1.71973 7.51074 2.00781 7.38867 2.34961 7.38867H13.9658L9.98145 3.4043C9.72754 3.16992 9.60059 2.88184 9.60059 2.54004C9.60059 2.19824 9.72754 1.91504 9.98145 1.69043C10.2061 1.44629 10.4893 1.32422 10.8311 1.32422C11.1729 1.32422 11.4561 1.44629 11.6807 1.69043L17.7598 7.76953C18.0039 7.99414 18.126 8.27734 18.126 8.61914C18.126 8.96094 18.0039 9.24414 17.7598 9.46875Z"
                fill="white"
              />
            </svg>
          </PrimaryLink>
        </div>
      </div>
  );
}
