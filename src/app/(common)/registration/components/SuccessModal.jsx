"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import React from "react";

const SuccessModal = ({ onContinue }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
    <div className="bg-[#23A26D1F] rounded-full p-3 mb-4">
      <svg
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5833 0.571411C21.6404 0.571411 0.5 21.7118 0.5 47.6547C0.5 73.5977 21.6404 94.7381 47.5833 94.7381C73.5263 94.7381 94.6667 73.5977 94.6667 47.6547C94.6667 21.7118 73.5263 0.571411 47.5833 0.571411ZM70.0892 36.8256L43.3929 63.5218C42.7337 64.181 41.8392 64.5577 40.8975 64.5577C39.9558 64.5577 39.0613 64.181 38.4021 63.5218L25.0775 50.1972C23.7121 48.8318 23.7121 46.5718 25.0775 45.2064C26.4429 43.841 28.7029 43.841 30.0683 45.2064L40.8975 56.0356L65.0983 31.8347C66.4638 30.4693 68.7238 30.4693 70.0892 31.8347C71.4546 33.2002 71.4546 35.4131 70.0892 36.8256Z"
          fill="url(#paint0_linear_117_15006)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_117_15006"
            x1="47.5833"
            y1="0.571411"
            x2="47.5833"
            y2="94.7381"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7DC053" />
            <stop offset="1" stopColor="#63B330" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h2 className="text-[2rem] text-[#78B6BA] mb-2">
      Your Registration is Successful
    </h2>
    <p className="text-[#22222280] tracking-[-2%] mb-4">
      Thank you for registering for the Event
    </p>
    <div className="bg-[#F0F0F0] p-2.5 rounded-lg w-44.5 aspect-square flex items-center justify-center my-4">
      <img src="/images/dummy_qr.png" className="w-full aspect-square object-cover" alt="" />
    </div>
    <PrimaryButton className="uppercase py-2.5 px-10 mt-4 font-semibold">Continue</PrimaryButton>
  </div>
);

export default SuccessModal;
