"use client";
import React from "react";

const SuccessModal = ({ onContinue }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto mt-12">
    <div className="bg-green-400 rounded-full p-4 mb-4">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    </div>
    <h2 className="text-2xl font-bold text-green-600 mb-2">Your Registration is Successful</h2>
    <p className="text-gray-600 mb-4">Thank you for registering for the Event</p>
    <div className="bg-gray-200 rounded-lg w-24 h-24 flex items-center justify-center mb-4">
      <span className="text-gray-500">QR</span>
    </div>
    <button className="bg-gradient-to-r from-teal-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold" onClick={onContinue}>CONTINUE</button>
  </div>
);

export default SuccessModal;
