"use client";
import React, { useState } from "react";
// import MemberList from "@/components/sections/MemberList";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import parse from "html-react-parser";
import Image from "next/image";

const CommiteePreview = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {data?.id && (
        <section id="commitee-preview" className="bg-[#EDF0FE] pt-20">
          <div className="container-fluid w-full mx-auto flex flex-col items-center lg:items-start lg:flex-row xl:gap-8.75 gap-5 xl:px-15.75 px-5">
            <div className="xl:w-1/4 lg:w-2/5 sm:max-w-3/4 bg- md:1/2 w-full">
              <div className="flex flex-col items-center gap-2 px-4 py-5 rounded-2xl bg-primary">
                <div className=" aspect-[298/272] w-full rounded-2xl overflow-hidden relative ">
                  <Image
                    fill
                    src={
                      data?.photo ||
                      data?.photo_url ||
                      data?.profile_pic ||
                      data?.image ||
                      "/images/user_placeholder_new.png"
                    }
                    alt={
                      data.name ||
                      `${data.firstname} ${data.lastname}` ||
                      "speaker_image"
                    }
                    className="w-full h-full absolute object-cover object-[top_center] bg-white"
                  />
                </div>
                <h3
                  className={`text-white font-semibold  leading-[1.5] text-center 3xl:text-xl 2xl:text-base xl:text-sm lg:text-base md:text-xl sm:text-base xs:text-lg text-sm`}
                >
                  {data?.name || `${data.firstname} ${data.lastname}`}
                </h3>
                {/* <p className="text-white text-center text-sm">
                  {data?.designation}
                </p> */}

                {data?.designation && (
                  <pre
                    className="text-white font-[inherit] sm:text-sm text-xs text-center whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: data?.designation,
                    }}
                  />
                )}
              </div>
            </div>
            {data && (
              <div className="flex-3/4 w-full mb-5">
                <div className="text-[#737373] mt-2.5">
                  <div className="[&>p]:leading-[1.6] space-y-8 xl:text-lg md:text-base text-sm">
                    {data?.description instanceof Array
                      ? data.description.map((para, index) => (
                          <p key={index}>{para}</p>
                        ))
                      : // <p>{data.description}</p>
                        data?.description && parse(data?.description)}
                  </div>
                  {!data?.description && (
                    <p className="text-center md:py-45 ">
                      No additional information available at the moment.
                    </p>
                  )}
                </div>
                {/* <div className="hidden lg:block border-b lg:w-6/10 lg:mt-6 border-[#D7D7D7]" /> */}
              </div>
            )}
          </div>
          <div className="hidden lg:block border-b lg:w-1/3 mx-auto lg:mt-6 border-[#D7D7D7]" />
        </section>
      )}
    </>
  );
};

export default CommiteePreview;
