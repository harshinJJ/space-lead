import { LogoCentered } from "@/data/icons/LogoCenteredIcon";
import Image from "next/image";
import React from "react";

const ChairmanBlock = ({ className = "" }) => {
  return (
    <section
      className={`bg-[#EDF0FE] lg:py-15  py-5 px-5 sm:px-0 text-white ${className}`}
    >
      <div
        className={`container-fluid overflow-hidden mx-auto text-[1.13rem] bg-cover bg-center bg-no-repeat flex-3 flex flex-col gap-3 md:gap-7.5 2xl:p-15.75 2xl:py-16.5 xl:p-12.75 xl:py-13.5 lg:p-10.75 lg:py-11.5 md:p-11 md:py-11 p-5 py-6.5  rounded-3xl`}
      >
        <>
          <Image
            fill
            src={"/images/backgrounds/speaker_group_bg2.jpg"}
            alt="group-bg-image"
            className="object-cover object-center"
          />
          <div className="absolute absolute-center h-full w-full bg-[#1D1A2D]/80"></div>
        </>

        <div className="relative mx-auto w-full flex flex-col lg:flex-row items-center justify-center xl:gap-20 md:gap-10 gap-5 gap-y-10">
          <div className="relative aspect-[418/628] max-h-[628px] h-full flex-1 w-full max-w-9/10 sm:max-w-1/2 lg:max-w-auto " data-aos="flip-left">
            <div className="absolute w-full h-full bg-gradient-to-b from-primary to-secondary rounded-2xl lg:top-2.5 top-5 left-2 lg:left-5"></div>
            <Image
              width={418}
              height={628}
              className="relative w-full h-full rounded-2xl overflow-hidden lg:right-0 right-2 lg:bottom-2.5"
              alt="app-preview"
              src={"/images/chairman.png"}
            />
          </div>
          <div className="flex flex-col items-center xl:gap-12.5  gap-8 flex-2 w-full">
            <div className="text-center 2xl:text-4xl xl:text-2xl lg:text-xl md:text-2xl text-xl leading-[1.4] font-noto-kufi-arabic">
              تحت رعاية صاحب السمو الملكي الأمير تركي الفيصل بن عبد العزيز آل
              سعود رئيس مجلس إدارة مركز الملك فيصل للبحوث والدراسات الإسلامية
            </div>
            <div className="xl:max-w-1/2 md:max-w-4/9 sm:max-w-1/2 max-w-2/3 w-full flex items-center justify-center">
              <LogoCentered className="" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end items-center sm:text-base text-sm w-full md:gap-7.5 gap-3">
              <div className="">
                <p className="sm:text-xl text-base">Under the patronage of</p>
                <div className="xl:text-[2rem] lg:text-xl sm:text-2xl text-xl font-bold font-droid-bold mb-2.5">HRH Prince Turki Al-Faisal bin Abdulaziz Al Saud</div>
                <div>
                  Chairman of the Board of Directors of the King Faisal Center
                  for Research and Islamic Studies
                </div>
              </div>
              <div className="rounded-lg overflow-hidden max-w-2/3 sm:max-w-full">
                <Image
                  alt="alfaisal-logo"
                  width={338}
                  height={115}
                  className="w-full sm:w-auto"
                  src={"/logo_secondary_new.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanBlock;
