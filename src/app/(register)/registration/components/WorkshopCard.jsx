import EVENT_INFO from "@/data/eventInfo";
import { CalenderIcon, ClockIcon } from "@/data/icons";
import Link from "@/utils/CustomLink";
import { formatTimeTo12Hour } from "@/utils/functions";
import format from "date-fns/format";
import Image from "next/image";
import React from "react";

function timeFormat(start, end) {
  if (!start && !end) return;
  if (!end) {
    return formatTimeTo12Hour(start);
  }
  const from = formatTimeTo12Hour(start);
  const to = formatTimeTo12Hour(end);
  return `${from} To ${to}`;
}

const WorkshopCard = ({
  workshop,
  isActive = false,
  currency = "SAR",
  price,
}) => {
  const containerClassName = isActive ? "text-white" : "text-black";
  const agenda = workshop?.agenda_sessions?.[0] || {};
  const speakers = agenda?.speakers || [];

  const eventDate = agenda?.event_day&&format(new Date(agenda.event_day),"dd MMMM yyyy");
  const eventTime = timeFormat(agenda.start_tm,agenda?.end_tm);
  const title = workshop?.display_title || workshop?.session_title;
  const className = isActive ? "from-white/8" : "from-black/8";
  const subClassName = isActive ? "text-secondary" : "text-primary";
  return (
    <div
      data-aos-once="true"
      data-aos-offset="100"
      className={`flex flex-col gap-4 card w-full ${containerClassName}`}
    >
      {/* <Card isActive={isActive} workshop={workshop} /> */}

      <div
        className={`bg-gradient-to-r ${className} to-transparent  rounded-3xl  px-5 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 `}
      >
        <div className="xl:col-span-2  leading-[1] w-full">
          <h3 className="text-base  font-droid-bold">{title}</h3>
          {price ? (
            <div className={`text-lg font-droid-sans ${subClassName}`}>
              {currency} {price}
            </div>
          ) : null}
          <div className="text-xxs text-[#B853FF]">Inclusive of 15% VAT.</div>
        </div>
       {(eventDate||eventTime)&& <div className={`flex flex-col gap-1 md:text-sm text-sm min-w-fit `}>
          {eventDate?.trim() && (
            <div className="flex items-start md:items-center gap-1">
              <div className={`mt-1 md:mt-0 ${subClassName}`}>
                <CalenderIcon size={16} />
              </div>
              <span>{eventDate}</span>
            </div>
          )}
          {eventTime?.trim() && (
            <div className="flex items-start md:items-center gap-1">
              <div className={`mt-1 md:mt-0 ${subClassName}`}>
                <ClockIcon size={16} />
              </div>
              <span>{eventTime}</span>
            </div>
          )}
        </div>}
      </div>
      {speakers?.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {speakers.map((speaker, i) => (
            <SpeakerTag
              url={`/speakers/${speaker.id}`}
              isActive={isActive}
              key={i}
              image={speaker.profile_pic}
              name={`${speaker.firstname} ${speaker.lastname}`}
              role={speaker.designation}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Card = ({ workshop, containerClass, isActive = false }) => {
  //   const eventDate = formatEventDate(workshop);
  const eventDate = EVENT_INFO.dateLabel;
  const title = workshop?.display_title || workshop?.session_title;
  const className = isActive ? "from-white/8" : "from-black/8";
  const subClassName = isActive ? "text-secondary" : "text-primary";
  return (
    <div
      className={`bg-gradient-to-r ${className} to-transparent  rounded-3xl  px-5 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 `}
    >
      <div className="xl:col-span-2  leading-[1] w-full">
        <h3 className="text-base  font-droid-bold">{title}</h3>
        <div className={`text-lg font-droid-sans ${subClassName}`}>
          {workshop.price}
        </div>
        <div className="text-xxs text-[#B853FF]">Inclusive of 15% VAT.</div>
      </div>
      <div className={`flex flex-col gap-1 md:text-sm text-sm min-w-fit `}>
        {eventDate?.trim() && (
          <div className="flex items-start md:items-center gap-3 md:gap-5">
            <div className={`mt-1 md:mt-0 ${subClassName}`}>
              <CalenderIcon size={16} />
            </div>
            <span>{eventDate}</span>
          </div>
        )}
        {eventDate?.trim() && (
          <div className="flex items-start md:items-center gap-3 md:gap-5">
            <div className={`mt-1 md:mt-0 ${subClassName}`}>
              <ClockIcon size={16} />
            </div>
            <span>{eventDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SpeakerTag = ({
  image = "/images/user_placeholder.png",
  name,
  role,
  className,
  url = "#",
  isActive = false,
}) => {
  return (
    <Link
      target="_blank"
      href={url}
      className={`flex items-center gap-2 md:gap-2.5 ${
        isActive ? "bg-white/8 " : "bg-black/8"
      } p-1.5 md:pe-5 pe-4 rounded-full text-xs ${className}`}
    >
      <div className="w-10 min-w-10 aspect-square rounded-full overflow-hidden border-1 border-white/19">
        <Image
          height={40}
          width={40}
          className="w-full h-full object-cover object-[top_center]"
          src={image || "/images/user_placeholder_new.png"}
          alt={name}
        />
      </div>
      <div>
        <span className="text-sm xl:text-sm font-bold font-droid-bold">
          {name}
        </span>
        <div
          className={`flex items-center gap-1 text-xs ${
            isActive ? "text-white/50 " : "text-black/50"
          }`}
        >
          {role?.toLowerCase() == "moderator" && (
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.08008"
                y="0.38501"
                width="16"
                height="16"
                rx="8"
                fill="#5AC0BE"
              />
              <path
                d="M12.0317 7.58813C12.0317 9.20186 10.7103 10.51 9.0803 10.51M9.0803 10.51C7.45029 10.51 6.12891 9.20186 6.12891 7.58813M9.0803 10.51V12.635M9.0803 12.635H6.93383M9.0803 12.635H11.2268M9.0803 8.91626C8.33939 8.91626 7.73875 8.32163 7.73875 7.58813V5.46313C7.73875 4.72963 8.33939 4.13501 9.0803 4.13501C9.8212 4.13501 10.4218 4.72963 10.4218 5.46313V7.58813C10.4218 8.32163 9.8212 8.91626 9.0803 8.91626Z"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="truncate max-w-[30ch] md:max-w-[50ch]">{role}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkshopCard;
