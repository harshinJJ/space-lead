import EventAgenda from "@/components/sections/EventAgenda";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import React from "react";

export const metadata={
  title:"Agenda",
  description:"Event Agenda"
}
export default function Agenda() {
  return (
    <main>
      <section className=" bg-indigo bg-center bg-cover py-20 ">
        <EventAgenda className=" px-4 xl:px-15.75 " />
      </section>
      {/* <Marquee /> */}
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock />
    </main>
  );
}
