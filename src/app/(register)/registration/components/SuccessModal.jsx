"use client";
import PrimaryButton, { PrimaryLink } from "@/components/buttons/PrimaryButton";
import SharePopup from "@/components/common/SharePopup";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const SuccessModal = ({ onContinue, status = "failure", ticketUrl, uid }) => {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [qrReady, setQrReady] = useState(false);

  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const handleShare = () => {
    setIsSharePopupOpen(!isSharePopupOpen);
  };

  const shareref = useRef(null);

  const handleClick = () => {
    if (onContinue) {
      onContinue();
    } else {
      gsap.to("#transition-overlay", {
        x: "0%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          router.push("/"); // navigate after cover
        },
      });
    }
  };
  useEffect(() => {
    if (ticketUrl && canvasRef.current) {
      (async () => {
        const QRCode = (await import("qrcode")).default;
        try {
          await QRCode.toCanvas(canvasRef.current, ticketUrl, {
            width: 180,
            margin: 1,
          });
          setQrReady(true);
        } catch (err) {
          console.error("QR generation failed:", err);
          setQrReady(false);
        }
      })();
    }
  }, [status, ticketUrl]);
  return ticketUrl ? (
    <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
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
      <h2 className="text-[2rem] text-center text-[#78B6BA] mb-2">
        Your Registration is Successful
      </h2>
      <p className="text-[#22222280] tracking-[-2%] mb-4">
        Thank you for registering for the Event
      </p>
      {ticketUrl && (
        <div className="flex flex-col items-center mb-6">
          <canvas
            ref={canvasRef}
            className="border rounded-lg bg-[#F0F0F0] p-2.5"
          />
          {qrReady && (
            <p className="text-sm text-gray-500 mt-2 break-all text-center">
              {uid}
            </p>
          )}
        </div>
      )}

      {/* <div className="bg-[#F0F0F0] p-2.5 rounded-lg w-44.5 aspect-square flex items-center justify-center my-4">
        <Image
          width={178}
          height={178}
          src="/images/dummy_qr.png"
          className="w-full aspect-square object-cover"
          alt=""
        />
      </div> */}
      <PrimaryButton
        onClick={handleClick}
        className="uppercase py-2.5 px-10 mt-4 font-semibold"
      >
        Continue
      </PrimaryButton>
      <button onClick={handleShare} className="relative flex items-center gap-3 bg-gradient-to-r from-[#1F273F] via-[#3D4762] to-[#432F5F] p-2 rounded-full mt-5">
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.928589"
            width="19"
            height="19"
            rx="9.5"
            fill="white"
            fillOpacity="0.24"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.3333 7.22026C11.3333 6.46086 11.949 5.84526 12.7083 5.84526C13.4677 5.84526 14.0833 6.46086 14.0833 7.22026C14.0833 7.97965 13.4677 8.59526 12.7083 8.59526C11.949 8.59526 11.3333 7.97965 11.3333 7.22026ZM12.7083 4.92859C11.4427 4.92859 10.4167 5.9546 10.4167 7.22026C10.4167 7.37446 10.4319 7.52511 10.4609 7.67078L8.14075 9.07459C7.72373 8.50604 7.0508 8.13692 6.29167 8.13692C5.02601 8.13692 4 9.16293 4 10.4286C4 11.6943 5.02601 12.7203 6.29167 12.7203C7.11681 12.7203 7.84009 12.2842 8.24362 11.6298L10.4696 13.145C10.4349 13.3035 10.4167 13.4681 10.4167 13.6369C10.4167 14.9026 11.4427 15.9286 12.7083 15.9286C13.974 15.9286 15 14.9026 15 13.6369C15 12.3712 13.974 11.3453 12.7083 11.3453C11.9437 11.3453 11.2665 11.7197 10.8503 12.2953L8.56262 10.7381C8.57624 10.6369 8.58333 10.5336 8.58333 10.4286C8.58333 10.2514 8.56323 10.079 8.52522 9.91336L10.8229 8.5232C11.2365 9.12061 11.9267 9.51192 12.7083 9.51192C13.974 9.51192 15 8.48591 15 7.22026C15 5.9546 13.974 4.92859 12.7083 4.92859ZM11.3333 13.6369C11.3333 12.8776 11.949 12.2619 12.7083 12.2619C13.4677 12.2619 14.0833 12.8776 14.0833 13.6369C14.0833 14.3963 13.4677 15.0119 12.7083 15.0119C11.949 15.0119 11.3333 14.3963 11.3333 13.6369ZM4.91667 10.4286C4.91667 9.66922 5.53228 9.05359 6.29167 9.05359C7.05106 9.05359 7.66667 9.66922 7.66667 10.4286C7.66667 11.188 7.05106 11.8036 6.29167 11.8036C5.53228 11.8036 4.91667 11.188 4.91667 10.4286Z"
            fill="white"
          />
        </svg>

        <span>Invite Someone to Join You</span>
        <SharePopup
          websiteSlug={"registration"}
          isOpen={isSharePopupOpen}
          onClose={() => setIsSharePopupOpen(false)}
        />
      </button>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
      {/* Error Icon */}
      <div className="bg-[#E84C4C1F] rounded-full p-3 mb-4">
        <svg
          width="89"
          height="90"
          viewBox="0 0 89 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.15625 45C0.15625 20.5096 20.0096 0.65625 44.5 0.65625C68.9905 0.65625 88.8438 20.5096 88.8438 45C88.8438 69.4905 68.9905 89.3438 44.5 89.3438C20.0096 89.3438 0.15625 69.4905 0.15625 45ZM29.9374 30.4374C31.1456 29.2292 33.1044 29.2292 34.3126 30.4374L44.5 40.6246L54.6875 30.4374C55.8957 29.2292 57.8543 29.2292 59.0625 30.4374C60.2707 31.6456 60.2707 33.6044 59.0625 34.8126L48.875 45L59.0625 55.1875C60.2707 56.3957 60.2707 58.3543 59.0625 59.5625C57.8543 60.7707 55.8953 60.7707 54.6871 59.5625L44.5 49.3754L34.3126 59.5625C33.1044 60.7707 31.1456 60.7707 29.9374 59.5625C28.7292 58.3543 28.7292 56.3953 29.9374 55.1871L40.1246 45L29.9374 34.8126C28.7292 33.6044 28.7292 31.6456 29.9374 30.4374Z"
            fill="#F82D2D"
          />
        </svg>
      </div>

      {/* Error Text */}
      <h2 className="text-[2rem] text-center text-[#E84C4C] mb-2">
        Your Registration has Failed
      </h2>
      <p className="text-[#22222280] tracking-[-2%] mb-4">
        Please try again later
      </p>

      {/* Action Button */}

      <PrimaryButton
        onClick={handleClick}
        className="uppercase py-2.5 px-10 mt-4 font-semibold"
      >
        Continue
      </PrimaryButton>
    </div>
  );
};

export default SuccessModal;
