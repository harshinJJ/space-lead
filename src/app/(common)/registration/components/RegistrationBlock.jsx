"use client";
import React, { useState } from "react";
import SessionTypeSelector from "./SessionTypeSelector";
import RegistrationForm from "./RegistrationForm";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import SuccessModal from "./SuccessModal";

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
export default function RegistrationBlock({ type = "" }) {
  const [session, setSession] = useState(sessionList[0]);
  const [success, setSuccess] = useState(false);

  return (
    <section className="py-10 text-white lg:pt-22 lg:pb-57.5 bg-[#1c192d] bg-[url('/images/backgrounds/pass_selector_bg.png')] bg-cover bg-[center_top] bg-no-repeat">
      {!success ? (
        <div className="container mx-auto flex flex-col items-center justify-center 2xl:px-56.75 lg:px-20 px-5">
          <h1 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            SELECT YOUR PASS
          </h1>
          <div className="w-full flex flex-col gap-8">
            <SessionTypeSelector
              sessions={sessionList}
              selected={session?.key}
              onSelect={setSession}
            />

            <RegistrationForm
              type={type}
              paid={session?.key === "workshop"}
              session={session}
              onSuccess={() => setSuccess(true)}
            />
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
          <h1 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            YOUR REGISTRATION
          </h1>
            <SuccessModal onContinue={() => setSuccess(false)} />
        </div>
      )}
    </section>
  );
}
