"use client";
import React from "react";
import PassSelectionCard from "./PassSelectionCard";
import { useRouter } from "next/navigation";
import Image from "next/image";

const icons = {
  student: (
    <svg
      width="54"
      height="60"
      viewBox="0 0 54 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.37891 23.5852V44.554"
        stroke="#5AC0BE"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M5.37891 48.3665C7.35936 48.3665 8.96484 46.6595 8.96484 44.554C8.96484 42.4484 7.35936 40.7415 5.37891 40.7415C3.39845 40.7415 1.79297 42.4484 1.79297 44.554C1.79297 46.6595 3.39845 48.3665 5.37891 48.3665Z"
        fill="#5AC0BE"
      />
      <path
        d="M28.6875 15.6418L6.27539 23.5852L28.6875 31.5285L51.0996 23.5852L28.6875 15.6418Z"
        stroke="#5AC0BE"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M12.5508 26.3512V36.929C12.5508 40.0876 19.7747 42.6477 28.6875 42.6477C37.6003 42.6477 44.8242 40.0876 44.8242 36.929V26.3512"
        stroke="#5AC0BE"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  ),
  professional: (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.75 39.9821L33.575 43.625L42.5 35.125M8.5 43.625C8.5 35.4098 15.1598 28.75 23.375 28.75C26.5353 28.75 29.4657 29.7356 31.875 31.4162M31.875 13.875C31.875 18.5694 28.0693 22.375 23.375 22.375C18.6806 22.375 14.875 18.5694 14.875 13.875C14.875 9.18058 18.6806 5.375 23.375 5.375C28.0693 5.375 31.875 9.18058 31.875 13.875Z"
        stroke="#7F529F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const BgOverlay = () => {
  return (
    <div className="absolute absolute-center w-full h-full flex items-start">
      <div className="w-full absolute">
        <video
          autoPlay
          loop
          muted
          className="object-contain w-full h-auto max-h-[100%]"
          src="/images/backgrounds/register_bg.webm"
        />
        {/* <div className="absolute absolute-center !-bottom-1 w-full h-full bg-gradient-to-b from-indigo/0 to-indigo"></div> */}
      </div>
    </div>
  );
};

export default function PassSelector() {
  const router = useRouter();
  return (
    <section className="relative bg-indigo overflow-hidden   bg-cover bg-no-repeat bg-[center_top] xl:pt-33.5 lg:py-30 md:py-20 py-10 xl:pb-56.25">
      {/* <Image alt="register-bg" src={"/images/backgrounds/register_bg.png"} fill className="object-cover object-[center_top] w-full h-full" /> */}
      <BgOverlay />
      <div className="container-fluid mx-auto flex flex-col items-center justify-center px-5">
        <h2 className="text-3xl lg:text-4xl xl:text-[2.5rem] font-azonix text-white xl:mb-15 lg:mb-10 mb-5 tracking-wide text-center">
          SELECT YOUR PASS
        </h2>
        <div className="flex flex-col md:flex-row xl:gap-15 lg:gap-10 gap-5 w-full justify-center">
          <PassSelectionCard
            type="Student"
            icon={icons.student}
            url={"/registration/student"}
            // onClick={() => router.push("/registration/student")}
          />
          <PassSelectionCard
            gradient="primary"
            type="Professionals"
            icon={icons.professional}
            url={"/registration/professional"}
            // onClick={() => router.push("/registration/professional")}
          />
        </div>
      </div>
    </section>
  );
}
