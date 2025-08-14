import React from "react";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock, { SponsorList } from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import MemberList from "@/components/sections/MemberList";
import { PrimaryDualTextLink } from "@/components/buttons/PrimaryButton";
import MemberPreview from "./components/MemberPreview";


export default function Speakers() {
  return (
    <main>
      {/* speakers block pending */}
      <MemberPreview/>
      <Marquee />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      {/* <SponsorsBlock /> */}
      <SponsorList />
    </main>
  );
}
