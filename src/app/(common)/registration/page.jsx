"use client";
import React from "react";
import PassSelectionCard from "./components/PassSelectionCard";
import { useRouter } from "next/navigation";

const icons = {
  student: (
    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m6-3a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
  ),
  professional: (
    <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

export default function Registration() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-azonix text-white mb-10 tracking-wide text-center">SELECT YOUR PASS</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
        <PassSelectionCard
          type="Student"
          icon={icons.student}
          onClick={() => router.push("/registration/student")}
        />
        <PassSelectionCard
          type="Professionals"
          icon={icons.professional}
          onClick={() => router.push("/registration/professional")}
        />
      </div>
    </main>
  );
}
