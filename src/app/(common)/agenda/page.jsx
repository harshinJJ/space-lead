import EventAgenda from "@/components/sections/EventAgenda";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";
import React from "react";

export const metadata = {
  title: "Agenda",
  description: "Event Agenda",
};
export default async function Agenda() {
  const [agendaRes, sponsorsRes] = await Promise.allSettled([
    PublicServices.getAgenda(),
    PublicServices.getSponsors(),
  ]);
  const agenda = getFullfilled(agendaRes);
  const sponsors = getFullfilled(sponsorsRes);
  return (
    <main>
      <section className=" bg-indigo bg-center bg-cover py-20 ">
        <EventAgenda label="Your agenda, your way  --  Never miss a moment." title="Experience what’s now. 
Explore what’s next." dataList={agenda} className=" px-4 xl:px-15.75 " />
      </section>
      {/* <Marquee /> */}
      {/* <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock sponsors={sponsors} /> */}
    </main>
  );
}
