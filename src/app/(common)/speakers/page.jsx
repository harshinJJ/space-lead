import React from "react";
import Marquee from "@/components/sections/Marquee";
import { SponsorList } from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import MemberPreview from "./components/MemberPreview";

export const metadata={
  title:"Speakers"
}
export default function Speakers() {
  return (
    <main>
      {/* speakers block pending */}
      <MemberPreview/>
      {/* <Marquee /> */}
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      {/* <SponsorsBlock /> */}
      <SponsorList />
    </main>
  );
}
