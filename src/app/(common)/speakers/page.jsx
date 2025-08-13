import React from "react";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock, { SponsorList } from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";

export default function Speakers() {
  return (
    <main>
      {/* speakers block pending */}

      <Marquee />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      {/* <SponsorsBlock /> */}
      <SponsorList/>
    </main>
  );
}
