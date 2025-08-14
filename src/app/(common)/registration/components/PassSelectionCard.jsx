"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PassSelectionCard = ({ type, icon, onClick }) => (
  <div
    className="flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/60 to-purple-700/60 rounded-xl shadow-lg p-6 w-full max-w-xs cursor-pointer hover:scale-105 transition-transform duration-200"
    onClick={onClick}
  >
    <div className="mb-4">{icon}</div>
    <h2 className="text-white text-xl font-bold mb-2">{type} Pass</h2>
    <button className="bg-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold mt-2 hover:bg-teal-500">CLICK HERE</button>
  </div>
);

export default PassSelectionCard;
