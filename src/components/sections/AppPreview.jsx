"use client";

import { AppStoreButton, GooglePlayButton } from "@/data/icons";
import Image from "next/image";
import EVENT_INFO from "@/data/eventInfo";
import ComingSoonOverlay from "../common/ComingSoonOverlay";
import { useState } from "react";
import Modal from "../common/Modal";

// const exhibitorsList = Array(3).fill({
//   booth_details: {
//     number: 12,
//   },
//   code: "B12",
//   company_name: "Eventpro Test Company",
//   email: "demo@spacemain",
// });

const AppPreview = ({ className = "" }) => {
  const handleClick = (url) => {
    if (url) {
      window?.open(url, "_blank"); // Opens in a new tab/window
    }
  };
  return (
    <section
      className={`bg-indigo py-10 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat ${className}`}
    >
      <div className="container-fluid mx-auto w-full px-5 sm:px-0 flex flex-col sm:flex-row items-center justify-center 2xl:gap-20 gap-10">
        <div className="flex flex-col lg:gap-10 gap-5">
          <p
            data-aos="fade-up"
            className="text-white bg-secondary rounded-full px-7.5 py-5 w-fit text-center leading-[0.7]  text-2xl font-light "
          >
            Let’s Interact
          </p>
          <h3
            data-aos="fade-up"
            data-aos-once="true"
            className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-azonix text-start leading-[1.5] font-bold  text-white"
          >
            Everything <span className="text-nowrap whitespace-nowrap">Space Lead ‘25</span>
            <br className="2xl:block " /> at your fingertips
          </h3>
          <div className="flex sm:flex-row flex-col items-center md:gap-7.5 gap-4 md:max-w-2/3">
            <button
              onClick={() => handleClick(EVENT_INFO.playStore)}
              name="google-play"
              data-aos="fade-right"
              data-aos-once="true"
              disabled={!EVENT_INFO.playStore}
              className="relative rounded-sm overflow-hidden disabled:!cursor-default"
            >
              <GooglePlayButton className="w-full" />
              {!EVENT_INFO.playStore && <ComingSoonOverlay />}
            </button>
            <button
              onClick={() => handleClick(EVENT_INFO.appStore)}
              name="apple-store"
              data-aos="fade-left"
              data-aos-once="true"
              disabled={!EVENT_INFO.appStore}
              className="relative rounded-sm overflow-hidden disabled:!cursor-default"
            >
              <AppStoreButton className="w-full" />
              {!EVENT_INFO.appStore && <ComingSoonOverlay />}
            </button>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <HowToUse />
          </div>
        </div>
        <div className="" data-aos="flip-left">
          <Image
            width={350}
            height={724}
            className=""
            alt="app-preview"
            src={"/images/app_preview.png"}
          />
        </div>
      </div>
    </section>
  );
};

const HowToUse = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        onClick={handleClose}
        className={
          "w-fit text-white flex items-center gap-2 text-nowrap md:text-xl"
        }
      >
        <span>How to use</span>
        <div className="bg-primary max-w-8 w-8 h-8 p-2 aspect-square rounded-full">
          <svg className="w-full h-auto" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"
            ></path>
            <path
              fill="currentColor"
              d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"
            ></path>
          </svg>
        </div>
      </button>
      <Modal
        className="!p-0 rounded-3xl !bg-transparent max-h-[70vh] md:h-auto h-full"
        btnClassName="!text-black bg-white aspect-square h-auto w-fit p-2.5 rounded-full flex items-center justify-center text-5xl !-top-4 !-right-4"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <section
          className={`bg-indigo rounded-3xl h-full md:p-10 p-5 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat`}
        >
            {/* Title */}

            {/* Content Box */}
            <div className="w-full h-full overflow-y-auto max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 space-y-8">
              {/* How to Use */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  How to Use:
                </h4>
                <ul className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
                  <li>Register for the event.</li>
                  <li>Download the app from your respective store.</li>
                  <li>Log in using your registered email ID.</li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  Features:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
                  <li>Event details and agenda</li>
                  <li>Explore speakers, exhibitors, and sponsors</li>
                  <li>View the floor map and gallery</li>
                  <li>Connect with attendees and join the chat community</li>
                  <li>Access your digital badge</li>
                  <li>Manage your profile with ease</li>
                  <li>Stay updated with notifications</li>
                </ul>
              </div>
            </div>
        </section>
      </Modal>
    </>
  );
};

export default AppPreview;
