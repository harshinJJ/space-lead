"use client";
import React, { useState } from "react";
import SessionTypeSelector from "../components/SessionTypeSelector";
import RegistrationForm from "../components/RegistrationForm";
import BadgePreview from "../components/BadgePreview";
import TicketSummary from "../components/TicketSummary";
import SuccessModal from "../components/SuccessModal";

export default function ProfessionalRegistration() {
  const [session, setSession] = useState("conference");
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);

  const handleFormChange = (data) => setFormData(data);
  const handleFormSubmit = () => setSuccess(true);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-azonix text-white mb-8 tracking-wide text-center">SELECT YOUR PASS</h1>
      <div className="w-full max-w-4xl bg-white/10 rounded-xl shadow-lg p-6 md:p-10 flex flex-col gap-8">
        <SessionTypeSelector selected={session} onSelect={setSession} />
        {!success ? (
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1">
              <div className="bg-white/10 rounded-xl p-6 mb-4">
                <div className="text-xs text-red-400 mb-2">*When adding your phone number, ensure your country code is entered first, e.g. +966*</div>
                <RegistrationForm
                  type="professional"
                  paid={session === "workshop"}
                  onSubmit={handleFormSubmit}
                  onChange={handleFormChange}
                />
              </div>
              {session === "workshop" && <TicketSummary />}
            </div>
            <div className="w-full md:w-80 flex-shrink-0 flex flex-col items-center justify-center">
              <BadgePreview
                name={formData.firstName ? `${formData.firstName} ${formData.lastName || ""}` : undefined}
                category="PROFESSIONAL"
                badgeId={formData.company}
              />
            </div>
          </div>
        ) : (
          <SuccessModal onContinue={() => setSuccess(false)} />
        )}
      </div>
    </main>
  );
}
