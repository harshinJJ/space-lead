"use client";
import React, { useState } from "react";
import SessionTypeSelector from "./SessionTypeSelector";
import RegistrationForm from "./RegistrationForm";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import SuccessModal from "./SuccessModal";
import Image from "next/image";
import { LogoBg } from "@/data/icons";
import ClosedModal from "./ClosedModal";

const sessionLists = [
  {
    name: "Conference",
    price: 0,
    tag: "Free",
    theme: "secondary",
    key: "conference",
  },
  {
    name: "Workshop",
    price: 1369.0,
    tag: "Early Bird",
    theme: "primary",
    currency: "SAR",
    key: "workshop",
  },
];
const BgOverlay = () => {
  return (
    <div className="absolute absolute-center w-full h-full flex items-start">
      <div className="w-full absolute">
        {/* <video
          autoPlay
          loop
          muted
          className="object-contain w-full h-auto max-h-[100%]"
          src="/images/backgrounds/register_bg.webm"
        /> */}
        <div className="absolute absolute-center !-bottom-1 w-full h-full bg-gradient-to-b from-indigo/00 to-indigo"></div>
      </div>
    </div>
  );
};

const isEventActive = () => {
  const currentDate = new Date();
  // const eventDate = new Date("2025-11-11T15:59:59");
  const eventDate = new Date("2025-11-11T15:59:59+03:00");
  return currentDate < eventDate;
};
export default function RegistrationBlock({
  type = "",
  sessionList = [],
  workshops = [],
  isWorkshop = false,
  ticketType,
}) {
  // const sessionList = passTypes.filter(
  //   (pass) => pass.ticket_price_type == type
  // );
  const [eventActive, setEventActive] = useState(isEventActive());

  return (
    <section className="relative overflow-hidden  text-white py-25 2xl:py-36  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
      {/* <BgOverlay/> */}
      <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />

      {eventActive ? (
        <RegistrationForm
          sessionList={sessionList}
          workshopList={workshops}
          type={type}
          isWorkshop={isWorkshop}
        />
      ) : (
        <div className="container-fluid mx-auto flex flex-col items-center justify-center xl:py-20 px-5">
          <ClosedModal />
          <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mt-8  text-center tracking-[-1.6px]">
            all Registration closed
          </h2>
        </div>
      )}
    </section>
  );
}
