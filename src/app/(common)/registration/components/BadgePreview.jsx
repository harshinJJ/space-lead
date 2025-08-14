"use client";
import React from "react";

const BadgePreview = ({ name, category, badgeId }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full max-w-xs">
    <div className="mb-2">
      {/* Placeholder for QR code, replace with actual QR code if needed */}
      <div className="bg-gray-200 rounded-lg w-24 h-24 flex items-center justify-center">
        <span className="text-gray-500">QR</span>
      </div>
    </div>
    <div className="text-xs text-gray-500 mb-1">#{badgeId || "BADGEID"}</div>
    <div className="font-bold text-lg mb-1">{name || "FULL NAME"}</div>
    <div className="bg-gradient-to-r from-cyan-500 to-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
      {category || "STUDENT"}
    </div>
  </div>
);

export default BadgePreview;
