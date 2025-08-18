"use client";
import React, { useState } from "react";
import SessionTypeSelector from "./SessionTypeSelector";
import RegistrationForm from "./RegistrationForm";
import BadgePreview from "./BadgePreview";
import TicketSummary from "./TicketSummary";
import SuccessModal from "./SuccessModal";

const sessionList=[
  {name:"Conference",price:0,tag:"Free",theme:"secondary",key:"conference"},
  {name:"Conference",price:369.00,tag:"Early Bird",theme:"primary",currency:"SAR",key:"workshop"},
]
export default function RegistrationBlock({type=""}) {
  const [session, setSession] = useState("conference");
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  return (
    <section className="py-10 text-white lg:pt-22 lg:pb-57.5 bg-[#1c192d] bg-[url('/images/backgrounds/pass_selector_bg.png')] bg-cover bg-[center_top] bg-no-repeat">
      <div className="container mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
        <h1 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
          SELECT YOUR PASS
        </h1>
        <div className="w-full flex flex-col gap-8">
          <SessionTypeSelector sessions={sessionList} selected={session} onSelect={setSession} />
          {!success ? (
            <RegistrationForm
              type={type}
              paid={session === "workshop"}
              session={session}
            />
          ) : (
            <SuccessModal onContinue={() => setSuccess(false)} />
          )}
        </div>
      </div>
    </section>
  );
}
