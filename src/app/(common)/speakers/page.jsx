import React from "react";
import Marquee from "@/components/sections/Marquee";
import { SponsorList } from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import MemberPreview from "./components/MemberPreview";
import PublicServices from "@/services/publicServices";

export const metadata = {
  title: "Speakers",
  description: "Event Speakers",
};
export default async function Speakers() {
  const speakers = await PublicServices.getSpeakers().then(
    (res) => res.data || []
  );
  return (
    <main>
      {/* speakers block pending */}
      <MemberPreview speakerList={speakers} />
      {/* <Marquee /> */}
      {/* <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorList /> */}
    </main>
  );
}
