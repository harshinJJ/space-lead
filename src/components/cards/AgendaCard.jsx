import { GoogleIcon, OutlookIcon } from "@/data/icons";
import { format, parse, isValid } from "date-fns";
import Image from "next/image";
import React from "react";

export function formatEventDate(event) {
  if (!event?.event_day || !event?.start_tm || !event?.end_tm) return "";

  // Try parsing "yyyy-MM-dd HH:mm:ss" or fallback to "yyyy-MM-dd HH:mm"
  const startDate = parse(
    `${event.event_day} ${event.start_tm}`,
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  );

  const endDate = parse(
    `${event.event_day} ${event.end_tm}`,
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  );

  if (!isValid(startDate) || !isValid(endDate)) return "";

  return `${format(startDate, "hh:mm a")} To ${format(
    endDate,
    "hh:mm a"
  )} - ${format(startDate, "dd MMM yyyy")}`;
}

function getEventDateRange(event) {
  if (!event?.event_day) return null;

  let startDate, endDate;

  if (event.start_tm && event.end_tm) {
    // If event has time → normal event
    startDate = parse(
      `${event.event_day} ${event.start_tm}`,
      "yyyy-MM-dd HH:mm:ss",
      new Date()
    );
    endDate = parse(
      `${event.event_day} ${event.end_tm}`,
      "yyyy-MM-dd HH:mm:ss",
      new Date()
    );
  } else {
    // If no time → treat as all-day event
    startDate = parse(event.event_day, "yyyy-MM-dd", new Date());
    endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1); // all-day runs until next day
  }

  if (!isValid(startDate) || !isValid(endDate)) return null;

  // Google format → yyyyMMddTHHmmssZ
  const googleStart = format(startDate, "yyyyMMdd'T'HHmmss'Z'");
  const googleEnd = format(endDate, "yyyyMMdd'T'HHmmss'Z'");

  // Outlook format → yyyy-MM-ddTHH:mm:ss (no Z)
  const outlookStart = format(startDate, "yyyy-MM-dd'T'HH:mm:ss");
  const outlookEnd = format(endDate, "yyyy-MM-dd'T'HH:mm:ss");

  return {
    googleStart,
    googleEnd,
    outlookStart,
    outlookEnd,
    startDate,
    endDate,
  };
}
const AgendaCard = ({ event, containerClass, showAddtoCalender = true }) => {
  const eventDate = formatEventDate(event);
  const title = event?.title || "Event";
  const description =
    event?.session_description || event?.description ;
  const location = event?.hall_name || "Venue";

  const dateRange = getEventDateRange(event);
  const googleUrl = dateRange
    ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&dates=${dateRange.googleStart}/${dateRange.googleEnd}&details=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(location)}&sf=true&output=xml`
    : "#";

  const outlookUrl = dateRange
    ? `https://outlook.office.com/calendar/action/compose?subject=${encodeURIComponent(
        title
      )}&startdt=${dateRange.outlookStart}&enddt=${dateRange.outlookEnd}&body=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(location)}`
    : "#";
  return (
    <div
      className={`bg-gradient-to-r from-white/8 to-transparent to-90%  rounded-4xl  px-8.5 py-5 flex flex-col lg:flex-row items-start justify-between gap-6 ${containerClass}`}
    >
      {/* <Image
        width={309}
        height={197}
        src={event.image || "/logo.png"}
        alt={event.title}
        className={`w-full lg:w-1/4 rounded-3xl object-cover bg-[#a2a2a2] ${
          event.image ? "" : "py-15 px-20"
        }`}
      /> */}
      <div className="flex-1">
        <div className="grid grid-cols-2 lg:max-w-9/10">
          <h3 className="text-2xl lg:max-w-3/4">{title}</h3>
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
              <span>{eventDate}</span>
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
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-5">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2025_18492)">
                  <path
                    d="M5.13464 1.40734C5.25307 1.17719 5.31228 1.06211 5.39138 1.02454C5.46025 0.991819 5.5397 0.991819 5.60862 1.02454C5.68771 1.06211 5.74693 1.17719 5.86536 1.40734L6.59175 2.81886C6.64291 2.91823 6.66847 2.96791 6.70657 3.001C6.74018 3.03021 6.78055 3.05011 6.82376 3.05881C6.87276 3.06867 6.92665 3.05817 7.0344 3.03716L8.56477 2.73878C8.81429 2.69012 8.93907 2.6658 9.01708 2.70571C9.08502 2.74046 9.13453 2.80409 9.15249 2.87965C9.17314 2.96641 9.12224 3.08558 9.02038 3.32392L8.3958 4.78567C8.35181 4.88856 8.32987 4.94001 8.32832 4.99114C8.32698 5.03625 8.33694 5.08098 8.35729 5.12106C8.38031 5.16643 8.42192 5.20302 8.50514 5.2762L9.68709 6.31565C9.87981 6.48512 9.97615 6.56988 9.99432 6.65718C10.0102 6.73327 9.99246 6.81258 9.946 6.87408C9.89262 6.94472 9.7699 6.97825 9.52447 7.04529L8.01923 7.45651C7.91324 7.48549 7.86027 7.49998 7.82031 7.53065C7.78505 7.55767 7.75712 7.59357 7.73921 7.63481C7.71892 7.68156 7.71691 7.73766 7.71293 7.84992L7.6564 9.44446C7.64721 9.70446 7.64262 9.83443 7.58727 9.90343C7.53905 9.96355 7.4675 9.99887 7.39155 9.99998C7.30436 10.0013 7.20229 9.92389 6.99805 9.76918L5.74564 8.82025C5.65746 8.75347 5.61337 8.72005 5.56505 8.70715C5.5224 8.69578 5.47759 8.69578 5.43495 8.70715C5.38663 8.72005 5.34254 8.75347 5.25436 8.82025L4.00194 9.76918C3.79772 9.92389 3.69562 10.0013 3.60844 9.99998C3.53252 9.99887 3.46093 9.96355 3.41273 9.90343C3.35739 9.83443 3.35278 9.70446 3.34357 9.44446L3.28705 7.84992C3.28308 7.73766 3.28108 7.68156 3.26079 7.63481C3.24288 7.59357 3.21496 7.55767 3.17967 7.53065C3.13971 7.49998 3.08672 7.48549 2.98076 7.45651L1.47552 7.04529C1.23008 6.97825 1.10737 6.94472 1.054 6.87408C1.00752 6.81258 0.989848 6.73327 1.00567 6.65718C1.02383 6.56988 1.12019 6.48512 1.31291 6.31565L2.49487 5.2762C2.57808 5.20302 2.61968 5.16643 2.64271 5.12106C2.66303 5.08098 2.673 5.03625 2.67165 4.99114C2.67014 4.94001 2.64816 4.88856 2.60419 4.78567L1.97961 3.32392C1.87777 3.08558 1.82685 2.96641 1.84749 2.87965C1.86545 2.80409 1.915 2.74046 1.98293 2.70571C2.06091 2.6658 2.18569 2.69012 2.43522 2.73878L3.96561 3.03716C4.07335 3.05817 4.12722 3.06867 4.17621 3.05881C4.21947 3.05011 4.25982 3.03021 4.29344 3.001C4.33151 2.96791 4.35708 2.91823 4.40822 2.81886L5.13464 1.40734Z"
                    stroke="#5AC0BE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2025_18492">
                    <rect width="11" height="11" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>{event?.session_type_details?.name}</span>
            </div>
          </div>
        </div>
        <p className="mt-5 lg:max-w-17/20">{description}</p>
      </div>
      {showAddtoCalender && (
        <div className="bg-gradient-to-r from-white  to-indigo rounded-full flex items-center gap-3 py-1.5 px-3.5">
          <a href={outlookUrl} target="_blank" rel="noopener noreferrer">
            <OutlookIcon />
          </a>
          <a href={googleUrl} target="_blank" rel="noopener noreferrer">
            <GoogleIcon />
          </a>
          <span>Add to my calender</span>
        </div>
      )}
    </div>
  );
};

export default AgendaCard;
