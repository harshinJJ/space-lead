"use client";
import React from "react";

const TicketSummary = ({ price = "SAR.1,369.00" }) => (
  <div className="bg-gradient-to-br from-purple-700/10 to-cyan-500/10 rounded-xl p-4 mt-4 w-full max-w-md mx-auto shadow">
    <h3 className="text-lg font-bold text-purple-700 mb-2">Your Ticket Summary</h3>
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold">SPACE LEAD 2025</span>
      <span className="text-teal-500 font-bold">{price}</span>
    </div>
    <div className="text-xs text-gray-600">Early Bird Offer<br/>Valid till Aug 31</div>
    <div className="flex justify-between items-center mt-2 text-sm">
      <span>Sub-total</span>
      <span>{price}</span>
    </div>
    <div className="flex justify-between items-center text-sm">
      <span>VAT (15%)</span>
      <span>SAR. 205.00</span>
    </div>
    <div className="flex justify-between items-center font-bold mt-2">
      <span>Total Amount</span>
      <span>SAR. 1,574.00</span>
    </div>
  </div>
);

export default TicketSummary;
