import EVENT_INFO from "@/data/eventInfo";
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

        <div className="relative mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-center xl:gap-6.5 md:gap-10 gap-5 gap-y-10">
          <div className="hidden lg:flex lg:absolute rounded-lg flex-1/3 items-center justify-center bg-white overflow-hidden max-w-2/3 lg:max-w-[150px] w-full top-0 left-0">
            <Image
              alt="alfaisal-logo"
              priority={true}
              width={253}
              height={86}
              className="w-full sm:w-full h-auto"
              src={"/logo_secondary_new.png"}
            />
          </div>
          <div className="flex flex-col items-center xl:gap-12.5  gap-8  w-fit">
            <div className=" flex flex-col items-center justify-center gap-5">
              <LogoCentered className="w-full" />
              <div className="w-full py-5 px-5 max-w-full flex-2/3  3xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl xs:text-3xl text-xl leading-[1] h-inherit font-semibold bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg text-nowrap space-y-1">
                <div className="w-fit text-center">
                  <span>10 - 11 November </span>
                  <span className="text-secondary font-droid-bold">2025</span>
                </div>
              </div>
              <div className="lg:hidden rounded-lg flex-1/3 flex items-center justify-center bg-white overflow-hidden max-w-2/3 lg:max-w-[150px] w-full top-0 left-0">
                <Image
                  alt="alfaisal-logo"
                  priority={true}
                  width={253}
                  height={86}
                  className="w-full sm:w-full h-auto"
                  src={"/logo_secondary_new.png"}
                />
              </div>
            </div>
          </div>
          <div
            className="relative aspect-[418/628] max-h-[628px] h-full w-fit max-w-9/10 sm:max-w-1/2 lg:max-w-auto "
            data-aos="flip-left"
          >
            <div className="absolute w-full h-full bg-gradient-to-b from-primary to-secondary rounded-2xl lg:top-2.5 top-5 left-2 lg:left-5"></div>
            <Image
              width={418}
              height={628}
              className="relative w-fit h-full rounded-2xl overflow-hidden lg:right-0 right-2 lg:bottom-2.5"
              alt="chairman"
              priority={true}
              src={"/images/chairman.png"}
            />
          </div>
        </div>

        <div className="relative mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-center xl:gap-6.5 md:gap-10 gap-5 gap-y-10">
          <div className="flex flex-col items-center xl:gap-12.5  gap-8 flex-2 w-full">
            <div className="w-full text-center flex flex-col items-center gap-3 md:max-w-[90%]">
              <p className="sm:text-xl text-base">Under the patronage of</p>
              <div className="xl:text-[2rem] lg:text-xl sm:text-2xl text-xl font-bold font-droid-bold mb-2.5">
                HRH Prince Turki Al-Faisal bin Abdulaziz Al Saud
              </div>
              <div className="2xl:text-xl lg:text-lg text-base">
                Chairman of the Board of Directors of the King Faisal Center for
                Research and Islamic Studies
              </div>
              <div className="text-center 2xl:text-4xl xl:text-2xl lg:text-xl md:text-2xl text-xl leading-[1.4] font-noto-kufi-arabic">
                تحت رعاية صاحب السمو الملكي الأمير تركي الفيصل بن عبد العزيز آل
                سعود رئيس مجلس إدارة مركز الملك فيصل للبحوث والدراسات الإسلامية
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChairmanBlockOld = ({ className = "" }) => {
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

        <div className="relative mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-center xl:gap-6.5 md:gap-10 gap-5 gap-y-10">
          <div className="flex flex-col items-center xl:gap-12.5  gap-8 flex-2 w-full">
            <div className="text-center 2xl:text-4xl xl:text-2xl lg:text-xl md:text-2xl text-xl leading-[1.4] font-noto-kufi-arabic">
              تحت رعاية صاحب السمو الملكي الأمير تركي الفيصل بن عبد العزيز آل
              سعود رئيس مجلس إدارة مركز الملك فيصل للبحوث والدراسات الإسلامية
            </div>
            <div className="xl:max-w-1/2 md:max-w-4/9 sm:max-w-1/2 max-w-2/3 w-full flex items-center justify-center">
              <LogoCentered className="" />
            </div>

            <div className="w-full">
              <p className="sm:text-xl text-base">Under the patronage of</p>
              <div className="xl:text-[2rem] lg:text-xl sm:text-2xl text-xl font-bold font-droid-bold mb-2.5">
                HRH Prince Turki Al-Faisal bin Abdulaziz Al Saud
              </div>
              <div className="2xl:text-xl lg:text-lg text-base">
                Chairman of the Board of Directors of the King Faisal Center for
                Research and Islamic Studies
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-stretch items-center w-full 2xl:gap-30 xl:gap-20 lg:gap-10 md:gap-10 gap-3">
              <div className="max-w-full w-fit flex-2/3  3xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl xs:text-3xl text-xl leading-[1] h-inherit font-semibold bg-gradient-to-r from-primary/50 to-secondary/50 px-5.5 rounded-lg text-nowrap flex items-center justify-between space-y-1">
                <div className="w-full text-center sm:py-0 py-5">
                  <span>10 - 11 November </span>
                  <span className="text-secondary font-droid-bold">2025</span>
                </div>
              </div>
              <div className="rounded-lg flex-1/3 flex items-center justify-center bg-white overflow-hidden max-w-2/3 lg:max-w-auto w-full">
                <Image
                  alt="alfaisal-logo"
                  width={253}
                  height={86}
                  className="w-full sm:w-full h-auto"
                  src={"/logo_secondary_new.png"}
                />
              </div>
            </div>
          </div>
          <div
            className="relative aspect-[418/628] max-h-[628px] h-full flex-1 w-full max-w-9/10 sm:max-w-1/2 lg:max-w-auto "
            data-aos="flip-left"
          >
            <div className="absolute w-full h-full bg-gradient-to-b from-primary to-secondary rounded-2xl lg:top-2.5 top-5 left-2 lg:left-5"></div>
            <Image
              width={418}
              height={628}
              className="relative w-full h-full rounded-2xl overflow-hidden lg:right-0 right-2 lg:bottom-2.5"
              alt="app-preview"
              src={"/images/chairman.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChairmanBlock;
