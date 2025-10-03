import { GoogleIcon, OutlookIcon } from "@/data/icons";
import { format, parse, isValid } from "date-fns";
import Image from "next/image";
import React from "react";

export function formatEventDate(event) {
  if (!event?.event_day) return "";

  const baseDate = parse(event.event_day, "yyyy-MM-dd", new Date());
  if (!isValid(baseDate)) return "";

  const startDate = event.start_tm
    ? parse(
        `${event.event_day} ${event.start_tm}`,
        "yyyy-MM-dd HH:mm:ss",
        new Date()
      )
    : null;

  const endDate = event.end_tm
    ? parse(
        `${event.event_day} ${event.end_tm}`,
        "yyyy-MM-dd HH:mm:ss",
        new Date()
      )
    : null;

  // If only date is available
  if (!startDate && !endDate) {
    return format(baseDate, "dd MMM yyyy");
  }

  // If both start and end are valid
  if (startDate && isValid(startDate) && endDate && isValid(endDate)) {
    return `${format(startDate, "hh:mm a")} To ${format(
      endDate,
      "hh:mm a"
    )} - ${format(baseDate, "dd MMM yyyy")}`;
  }

  // If only start is valid
  if (startDate && isValid(startDate)) {
    return `${format(startDate, "hh:mm a")} - ${format(
      baseDate,
      "dd MMM yyyy"
    )}`;
  }

  // If only end is valid
  if (endDate && isValid(endDate)) {
    return `${format(endDate, "hh:mm a")} - ${format(baseDate, "dd MMM yyyy")}`;
  }

  return format(baseDate, "dd MMM yyyy");
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
  const title = event?.title;
  const description = event?.session_description || event?.description;
  const location = event?.hall_name;
  const theme = event?.agenda_topic;

  const dateRange = getEventDateRange(event);
  const googleUrl = dateRange
    ? `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&dates=${dateRange.googleStart}/${
        dateRange.googleEnd
      }&details=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(location)}&sf=true&output=xml`
    : "#";

  const outlookUrl = dateRange
    ? `https://outlook.office.com/calendar/action/compose?subject=${encodeURIComponent(
        title
      )}&startdt=${dateRange.outlookStart}&enddt=${
        dateRange.outlookEnd
      }&body=${encodeURIComponent(description)}&location=${encodeURIComponent(
        location
      )}`
    : "#";

  const miscSession =
    event?.session_type_details?.name == "Break" ||
    event?.session_type_details?.name == "Lunch";
  return miscSession ? (
    <div
      className={`bg-secondary rounded-4xl  px-8.5 py-5 flex flex-col lg:flex-row items-start justify-between gap-6 ${containerClass}`}
    >
      <div className="flex-1 w-full">
        <div className="flex w-full flex-col md:flex-row items-center justify-center gap-10">
          <h3 className="text-2xl lg:max-w-3/4">{title}</h3>
          <div className="flex flex-col gap-2 text-white text-sm mt-1">
            {eventDate?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0.469727C5.67057 0.469727 4.8877 0.626302 4.15137 0.939453C3.41504 1.2526 2.77393 1.68213 2.22803 2.22803C1.68213 2.77393 1.2526 3.41504 0.939453 4.15137C0.626302 4.8877 0.469727 5.67057 0.469727 6.5C0.469727 7.32943 0.626302 8.1123 0.939453 8.84863C1.2526 9.58496 1.68213 10.2261 2.22803 10.772C2.77393 11.3179 3.41504 11.7474 4.15137 12.0605C4.8877 12.3737 5.67057 12.5303 6.5 12.5303C7.32943 12.5303 8.1123 12.3737 8.84863 12.0605C9.58496 11.7474 10.2261 11.3179 10.772 10.772C11.3179 10.2261 11.7474 9.58496 12.0605 8.84863C12.3737 8.1123 12.5303 7.32943 12.5303 6.5C12.5303 5.67057 12.3737 4.8877 12.0605 4.15137C11.7474 3.41504 11.3179 2.77393 10.772 2.22803C10.2261 1.68213 9.58496 1.2526 8.84863 0.939453C8.1123 0.626302 7.32943 0.469727 6.5 0.469727ZM9.28027 7.42676H6.5C6.44076 7.42676 6.38151 7.41618 6.32227 7.39502C6.26302 7.37386 6.21224 7.33789 6.16992 7.28711C6.1276 7.24479 6.09375 7.19613 6.06836 7.14111C6.04297 7.0861 6.03027 7.02897 6.03027 6.96973V2.78027C6.03027 2.72103 6.04297 2.6639 6.06836 2.60889C6.09375 2.55387 6.1276 2.50521 6.16992 2.46289C6.21224 2.41211 6.26302 2.37614 6.32227 2.35498C6.38151 2.33382 6.44076 2.32324 6.5 2.32324C6.55924 2.32324 6.61849 2.33382 6.67773 2.35498C6.73698 2.37614 6.78776 2.41211 6.83008 2.46289C6.8724 2.50521 6.90625 2.55387 6.93164 2.60889C6.95703 2.6639 6.96973 2.72103 6.96973 2.78027V6.5H9.28027C9.34798 6.5 9.40934 6.5127 9.46436 6.53809C9.51937 6.56348 9.56803 6.59733 9.61035 6.63965C9.65267 6.68197 9.68652 6.73063 9.71191 6.78564C9.7373 6.84066 9.75 6.90202 9.75 6.96973C9.75 7.02897 9.7373 7.0861 9.71191 7.14111C9.68652 7.19613 9.65267 7.24479 9.61035 7.28711C9.56803 7.33789 9.51937 7.37386 9.46436 7.39502C9.40934 7.41618 9.34798 7.42676 9.28027 7.42676Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>

                <span>{eventDate}</span>
              </div>
            )}
            {location?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.01758 11.9463C3.71289 11.557 3.33203 11.0534 2.875 10.4355C2.41797 9.81771 1.97575 9.1639 1.54834 8.47412C1.12093 7.78434 0.759115 7.09668 0.462891 6.41113C0.158203 5.72559 0.00585938 5.11621 0.00585938 4.58301C0.00585938 3.95671 0.124349 3.36426 0.361328 2.80566C0.598307 2.24707 0.924154 1.76042 1.33887 1.3457C1.75358 0.930989 2.24023 0.600911 2.79883 0.355469C3.35742 0.118489 3.9541 0 4.58887 0C5.22363 0 5.82031 0.118489 6.37891 0.355469C6.9375 0.600911 7.42415 0.930989 7.83887 1.3457C8.25358 1.76042 8.57943 2.24707 8.81641 2.80566C9.06185 3.36426 9.18457 3.95671 9.18457 4.58301C9.18457 5.11621 9.03223 5.72559 8.72754 6.41113C8.42285 7.09668 8.0568 7.78434 7.62939 8.47412C7.20199 9.1639 6.75977 9.81771 6.30273 10.4355C5.83724 11.0534 5.45215 11.557 5.14746 11.9463C5.00358 12.124 4.81527 12.2129 4.58252 12.2129C4.34977 12.2129 4.16146 12.124 4.01758 11.9463ZM4.58887 6.11914C5.01204 6.11914 5.37386 5.97103 5.67432 5.6748C5.97477 5.37858 6.125 5.01465 6.125 4.58301C6.125 4.16829 5.97477 3.81071 5.67432 3.51025C5.37386 3.2098 5.01204 3.05957 4.58887 3.05957C4.16569 3.05957 3.80599 3.2098 3.50977 3.51025C3.21354 3.81071 3.06543 4.16829 3.06543 4.58301C3.06543 5.01465 3.21354 5.37858 3.50977 5.6748C3.80599 5.97103 4.16569 6.11914 4.58887 6.11914Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <span>{location}</span>
              </div>
            )}
            {event?.session_type_details?.name?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2025_18492)">
                      <path
                        d="M5.13464 1.40734C5.25307 1.17719 5.31228 1.06211 5.39138 1.02454C5.46025 0.991819 5.5397 0.991819 5.60862 1.02454C5.68771 1.06211 5.74693 1.17719 5.86536 1.40734L6.59175 2.81886C6.64291 2.91823 6.66847 2.96791 6.70657 3.001C6.74018 3.03021 6.78055 3.05011 6.82376 3.05881C6.87276 3.06867 6.92665 3.05817 7.0344 3.03716L8.56477 2.73878C8.81429 2.69012 8.93907 2.6658 9.01708 2.70571C9.08502 2.74046 9.13453 2.80409 9.15249 2.87965C9.17314 2.96641 9.12224 3.08558 9.02038 3.32392L8.3958 4.78567C8.35181 4.88856 8.32987 4.94001 8.32832 4.99114C8.32698 5.03625 8.33694 5.08098 8.35729 5.12106C8.38031 5.16643 8.42192 5.20302 8.50514 5.2762L9.68709 6.31565C9.87981 6.48512 9.97615 6.56988 9.99432 6.65718C10.0102 6.73327 9.99246 6.81258 9.946 6.87408C9.89262 6.94472 9.7699 6.97825 9.52447 7.04529L8.01923 7.45651C7.91324 7.48549 7.86027 7.49998 7.82031 7.53065C7.78505 7.55767 7.75712 7.59357 7.73921 7.63481C7.71892 7.68156 7.71691 7.73766 7.71293 7.84992L7.6564 9.44446C7.64721 9.70446 7.64262 9.83443 7.58727 9.90343C7.53905 9.96355 7.4675 9.99887 7.39155 9.99998C7.30436 10.0013 7.20229 9.92389 6.99805 9.76918L5.74564 8.82025C5.65746 8.75347 5.61337 8.72005 5.56505 8.70715C5.5224 8.69578 5.47759 8.69578 5.43495 8.70715C5.38663 8.72005 5.34254 8.75347 5.25436 8.82025L4.00194 9.76918C3.79772 9.92389 3.69562 10.0013 3.60844 9.99998C3.53252 9.99887 3.46093 9.96355 3.41273 9.90343C3.35739 9.83443 3.35278 9.70446 3.34357 9.44446L3.28705 7.84992C3.28308 7.73766 3.28108 7.68156 3.26079 7.63481C3.24288 7.59357 3.21496 7.55767 3.17967 7.53065C3.13971 7.49998 3.08672 7.48549 2.98076 7.45651L1.47552 7.04529C1.23008 6.97825 1.10737 6.94472 1.054 6.87408C1.00752 6.81258 0.989848 6.73327 1.00567 6.65718C1.02383 6.56988 1.12019 6.48512 1.31291 6.31565L2.49487 5.2762C2.57808 5.20302 2.61968 5.16643 2.64271 5.12106C2.66303 5.08098 2.673 5.03625 2.67165 4.99114C2.67014 4.94001 2.64816 4.88856 2.60419 4.78567L1.97961 3.32392C1.87777 3.08558 1.82685 2.96641 1.84749 2.87965C1.86545 2.80409 1.915 2.74046 1.98293 2.70571C2.06091 2.6658 2.18569 2.69012 2.43522 2.73878L3.96561 3.03716C4.07335 3.05817 4.12722 3.06867 4.17621 3.05881C4.21947 3.05011 4.25982 3.03021 4.29344 3.001C4.33151 2.96791 4.35708 2.91823 4.40822 2.81886L5.13464 1.40734Z"
                        stroke="#ffffff"
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
                </div>

                <span>{event?.session_type_details?.name}</span>
              </div>
            )}
            {theme?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 1H14v6h5V2.5A1.5 1.5 0 0017.5 1zM19 9h-5v10h3.5a1.5 1.5 0 001.5-1.5V9zM1 14h11v5H2.5A1.5 1.5 0 011 17.5V14zM2.5 1A1.5 1.5 0 001 2.5V12h11V1H2.5z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>

                <span>{theme}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
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
        <div className="grid xl:grid-cols-2 lg:max-w-9/10">
          <h3 className="text-2xl lg:max-w-3/4">{title}</h3>
          <div className="flex flex-col gap-2 text-teal-400 text-sm mt-1">
            {eventDate?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0.469727C5.67057 0.469727 4.8877 0.626302 4.15137 0.939453C3.41504 1.2526 2.77393 1.68213 2.22803 2.22803C1.68213 2.77393 1.2526 3.41504 0.939453 4.15137C0.626302 4.8877 0.469727 5.67057 0.469727 6.5C0.469727 7.32943 0.626302 8.1123 0.939453 8.84863C1.2526 9.58496 1.68213 10.2261 2.22803 10.772C2.77393 11.3179 3.41504 11.7474 4.15137 12.0605C4.8877 12.3737 5.67057 12.5303 6.5 12.5303C7.32943 12.5303 8.1123 12.3737 8.84863 12.0605C9.58496 11.7474 10.2261 11.3179 10.772 10.772C11.3179 10.2261 11.7474 9.58496 12.0605 8.84863C12.3737 8.1123 12.5303 7.32943 12.5303 6.5C12.5303 5.67057 12.3737 4.8877 12.0605 4.15137C11.7474 3.41504 11.3179 2.77393 10.772 2.22803C10.2261 1.68213 9.58496 1.2526 8.84863 0.939453C8.1123 0.626302 7.32943 0.469727 6.5 0.469727ZM9.28027 7.42676H6.5C6.44076 7.42676 6.38151 7.41618 6.32227 7.39502C6.26302 7.37386 6.21224 7.33789 6.16992 7.28711C6.1276 7.24479 6.09375 7.19613 6.06836 7.14111C6.04297 7.0861 6.03027 7.02897 6.03027 6.96973V2.78027C6.03027 2.72103 6.04297 2.6639 6.06836 2.60889C6.09375 2.55387 6.1276 2.50521 6.16992 2.46289C6.21224 2.41211 6.26302 2.37614 6.32227 2.35498C6.38151 2.33382 6.44076 2.32324 6.5 2.32324C6.55924 2.32324 6.61849 2.33382 6.67773 2.35498C6.73698 2.37614 6.78776 2.41211 6.83008 2.46289C6.8724 2.50521 6.90625 2.55387 6.93164 2.60889C6.95703 2.6639 6.96973 2.72103 6.96973 2.78027V6.5H9.28027C9.34798 6.5 9.40934 6.5127 9.46436 6.53809C9.51937 6.56348 9.56803 6.59733 9.61035 6.63965C9.65267 6.68197 9.68652 6.73063 9.71191 6.78564C9.7373 6.84066 9.75 6.90202 9.75 6.96973C9.75 7.02897 9.7373 7.0861 9.71191 7.14111C9.68652 7.19613 9.65267 7.24479 9.61035 7.28711C9.56803 7.33789 9.51937 7.37386 9.46436 7.39502C9.40934 7.41618 9.34798 7.42676 9.28027 7.42676Z"
                      fill="#5AC0BE"
                    />
                  </svg>
                </div>
                <span>{eventDate}</span>
              </div>
            )}
            {location?.trim() && (
              <div className="flex items-center gap-5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.01758 11.9463C3.71289 11.557 3.33203 11.0534 2.875 10.4355C2.41797 9.81771 1.97575 9.1639 1.54834 8.47412C1.12093 7.78434 0.759115 7.09668 0.462891 6.41113C0.158203 5.72559 0.00585938 5.11621 0.00585938 4.58301C0.00585938 3.95671 0.124349 3.36426 0.361328 2.80566C0.598307 2.24707 0.924154 1.76042 1.33887 1.3457C1.75358 0.930989 2.24023 0.600911 2.79883 0.355469C3.35742 0.118489 3.9541 0 4.58887 0C5.22363 0 5.82031 0.118489 6.37891 0.355469C6.9375 0.600911 7.42415 0.930989 7.83887 1.3457C8.25358 1.76042 8.57943 2.24707 8.81641 2.80566C9.06185 3.36426 9.18457 3.95671 9.18457 4.58301C9.18457 5.11621 9.03223 5.72559 8.72754 6.41113C8.42285 7.09668 8.0568 7.78434 7.62939 8.47412C7.20199 9.1639 6.75977 9.81771 6.30273 10.4355C5.83724 11.0534 5.45215 11.557 5.14746 11.9463C5.00358 12.124 4.81527 12.2129 4.58252 12.2129C4.34977 12.2129 4.16146 12.124 4.01758 11.9463ZM4.58887 6.11914C5.01204 6.11914 5.37386 5.97103 5.67432 5.6748C5.97477 5.37858 6.125 5.01465 6.125 4.58301C6.125 4.16829 5.97477 3.81071 5.67432 3.51025C5.37386 3.2098 5.01204 3.05957 4.58887 3.05957C4.16569 3.05957 3.80599 3.2098 3.50977 3.51025C3.21354 3.81071 3.06543 4.16829 3.06543 4.58301C3.06543 5.01465 3.21354 5.37858 3.50977 5.6748C3.80599 5.97103 4.16569 6.11914 4.58887 6.11914Z"
                    fill="#5AC0BE"
                  />
                </svg>

                <span>{location}</span>
              </div>
            )}
            {event?.session_type_details?.name?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
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
                </div>

                <span>{event?.session_type_details?.name}</span>
              </div>
            )}
            {theme?.trim() && (
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 1H14v6h5V2.5A1.5 1.5 0 0017.5 1zM19 9h-5v10h3.5a1.5 1.5 0 001.5-1.5V9zM1 14h11v5H2.5A1.5 1.5 0 011 17.5V14zM2.5 1A1.5 1.5 0 001 2.5V12h11V1H2.5z"
                      fill="#5AC0BE"
                    />
                  </svg>
                </div>
                <span>{theme}</span>
              </div>
            )}
          </div>
        </div>
        <p className="mt-5 lg:max-w-17/20">{description}</p>
      </div>
      {showAddtoCalender && !miscSession && (
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
