import EventAgenda from "@/components/sections/EventAgenda";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import React from "react";

export default function Agenda() {
  return (
    <main>
      <section className=" bg-[#1c192d] bg-center bg-cover py-20">
        <EventAgenda />
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
