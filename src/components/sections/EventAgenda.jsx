"use client";
import React, { useState } from "react";
import PrimaryButton, { PrimaryLink } from "../buttons/PrimaryButton";
import SpeakerTag from "../cards/SpeakerTag";
import AgendaCard from "../cards/AgendaCard";
import EVENT_INFO from "@/data/eventInfo";


const sortBytime = (sessions = []) => {
  const sorted = [...sessions]?.sort((a, b) => {
    const timeA = a?.start_tm?.split(":")?.map(Number);
    const timeB = b?.start_tm?.split(":")?.map(Number);
    const minutesA = timeA&&timeA[0] * 60 + timeA[1];
    const minutesB = timeB&&timeB[0] * 60 + timeB[1];
    return minutesA - minutesB;
  });
  return sorted;
};

export default function EventAgenda({
  className = "",
  label = "Event Agenda",
  title = "Follow Event AGENDA",
  dataList = [],
  showViewAll = false,
}) {
  const [activeDay, setActiveDay] = useState(EVENT_INFO.dayList[0].dateKey);
    const filteredEvents = sortBytime(
    dataList.filter((data) => data.event_day == activeDay)
  );

  return (
    <div className={`container-fluid mx-auto text-white ${className}`}>
      <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:mb-10 xl:mb-15">
        <div className="flex flex-col justify-between 3xl:gap-3 gap-2 lg:max-w-2/3">
          <p className="uppercase xl:text-lg text-sm font-azonix w-fit bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            {label}
          </p>
          <h2 className=" font-azonix text-xl xs:text-3xl sm:text-4xl md:text-4xl 3xl:text-5xl xl:text-[2.6875rem] font-bold leading-[1.3]" dangerouslySetInnerHTML={{__html:title}} />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 xl:gap-5.5 pb-7 mt-10 lg:mt-0">
          {EVENT_INFO.dayList.map((day) => (
            <PrimaryButton
              key={day.dateKey}
              onClick={() => setActiveDay(day.dateKey)}
              className={`px-5 lg:px-4 2xl:px-8 2xl:py-2 lg:!py-1 rounded-full flex-col relative btn-transparent-gradient ${
                activeDay === day.dateKey
                  ? "btn-transparent-gradien-active after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-14 after:border-transparent after:border-t-secondary"
                  : " border border-[#CCCCCC33]"
              }`}
            >
              <span className="block lg:text-sm xl:text-base 2xl:text-lg">
                {day.label}
              </span>
              <span className="block text-xs lg:text-[0.625rem] xl:text-sm">
                {day.date}
              </span>
            </PrimaryButton>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div key={filteredEvents} className="flex flex-col gap-7.5">
        {filteredEvents.map((event, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 == 0 ? "fade-right" : "fade-left"}
            data-aos-once="true"
            data-aos-offset="100"
            className="bg-white/8 rounded-4xl xl:p-7.5 md:p-4 p-2 flex flex-col gap-4 card"
          >
            <AgendaCard event={event} />
            {event?.speakers?.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {event.speakers.map((speaker, i) => (
                  <SpeakerTag
                    url={`/speakers/${speaker.id}`}
                    key={i}
                    image={speaker.profile_pic}
                    name={`${speaker.firstname} ${speaker.lastname}`}
                    role={speaker.designation}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {filteredEvents?.length <= 0 && (
        <div className="w-full flex items-center text-center text-xl justify-center py-10 text-white">
          No sessions available for the selected date.
        </div>
      )}

      {/* View All Button */}
      {showViewAll && (
        <div className="mt-15 flex items-center justify-center">
          <PrimaryLink
            href="/agenda"
            className="w-fit group px-7.5 py-[1.0625rem] items-center gap-2 btn-gradient transition-all duration-300"
          >
            <span className="leading-[100%] text-lg ">View Agenda List</span>
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
      )}
    </div>
  );
}
