"use client";
import React from "react";

const SessionTypeSelector = ({ selected, onSelect }) => (
  <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full mb-6">
    <div
      className={`flex-1 bg-gradient-to-br from-cyan-500/60 to-teal-400/60 rounded-xl p-4 cursor-pointer border-2 ${selected === "conference" ? "border-teal-400" : "border-transparent"}`}
      onClick={() => onSelect("conference")}
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">Conference</span>
        <span className="bg-teal-400 text-white px-3 py-1 rounded-full font-semibold">Free</span>
      </div>
    </div>
    <div
      className={`flex-1 bg-gradient-to-br from-purple-700/60 to-indigo-500/60 rounded-xl p-4 cursor-pointer border-2 ${selected === "workshop" ? "border-purple-500" : "border-transparent"}`}
      onClick={() => onSelect("workshop")}
    >
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">Workshop</span>
        <span className="bg-purple-500 text-white px-3 py-1 rounded-full font-semibold">SAR.369.00</span>
      </div>
    </div>
  </div>
);

export default SessionTypeSelector;
