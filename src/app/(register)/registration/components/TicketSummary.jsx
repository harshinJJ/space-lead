"use client";
import EVENT_INFO from "@/data/eventInfo";
import { formatCurrency } from "@/utils/util";
import React from "react";

const TicketSummary = ({ price = 0, currency = "SAR",name }) => {
  const vat =( price/115)*15; // VAT calculation
  const basePrice = price - vat;
  return (
    <div className="text-black-b2 text-xs  bg-gradient-to-b from-[#F4E4FF] to-secondary rounded-[1.25rem] py-5 px-6 mt-5 w-full  mx-auto">
      <h3 className="text-base text-black mb-4.5">Your Ticket Summary</h3>
      <div className="border border-secondary p-2.5 mb-4.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">SPACELEAD'25</span>
          <span className="text-secondary text-[1.25rem] font-gilroy-black">
            {currency} {formatCurrency(price)}
          </span>
        </div>
        <div className=" text-black-b2">
          <div className=" mb-2.75">{name}</div>
          <div className="">{EVENT_INFO.startDateLabel}</div>
          <div className="">{EVENT_INFO.eventTimeLabel}</div>
        </div>
        <div className=" ">
          <div className="font-gilroy-black text-black">Venue</div>
          <p>{EVENT_INFO.venue}</p>
        </div>
      </div>
      <div className="border border-secondary p-2.5 flex flex-col gap-1.5 ">
        <div className="flex justify-between items-center">
          <span>Sub-total</span>
          <span className="text-[#101010] text-xs">
            {currency}. {formatCurrency(basePrice)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            VAT <span className="text-[0.625rem]">(15%)</span>
          </div>
          <span>
            {currency}. {formatCurrency(vat)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Total Amount</span>
          <span className="text-[#101010] text-xs">
            {currency}. {formatCurrency(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketSummary;
