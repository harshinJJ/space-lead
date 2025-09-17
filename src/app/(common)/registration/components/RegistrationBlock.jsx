"use client";
import React, { useState } from "react";
import SessionTypeSelector from "./SessionTypeSelector";
import RegistrationForm from "./RegistrationForm";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import SuccessModal from "./SuccessModal";
import Image from "next/image";

const sessionList = [
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
      <video
        autoPlay
        loop
        muted
        className="object-contain w-full h-auto max-h-[100%]"
        src="/images/backgrounds/register_bg.webm"
      />
      <div className="absolute absolute-center !-bottom-1 w-full h-full bg-gradient-to-b from-indigo/00 to-indigo"></div>
      </div>
    </div>
  );
};
export default function RegistrationBlock({ type = "",passTypes=[],ticketType }) {
  const sessionList = passTypes.filter(pass=>pass.sales_ticket_type_name==ticketType)
  const [session, setSession] = useState(sessionList[0]);
  const [success, setSuccess] = useState(false);

  return (
    <section className="relative overflow-hidden py-10 text-white lg:pt-22 lg:pb-57.5 bg-indigo bg-cover bg-[center_top] bg-no-repeat">
      <BgOverlay/>

      {!success ? (
        <div className="container-fluid mx-auto flex flex-col items-center justify-center 2xl:px-56.75 lg:px-20 px-5">
          <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            SELECT YOUR PASS
          </h2>
          <div className="w-full flex flex-col gap-8">
            <SessionTypeSelector
              sessions={sessionList}
              selected={session?.id}
              onSelect={setSession}
            />

            <RegistrationForm
              type={type}
              paid={session?.price_amount?true:false}
              session={session}
              onSuccess={() => setSuccess(true)}
            />
          </div>
        </div>
      ) : (
        <div className="container-fluid mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
          <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            YOUR REGISTRATION
          </h2>
          <SuccessModal onContinue={() => setSuccess(false)} />
        </div>
      )}
    </section>
  );
}
