import AboutInfo from "@/components/sections/AboutInfo";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import WhyAttend from "@/components/sections/WhyAttend";
import React from "react";
import LatestInfo from "./components/LatestInfo";
import { speakerList } from "@/data/speakers";
import MemberList from "@/components/sections/MemberList";

const About = () => {
  return (
    <main>
      <AboutInfo />

      <MemberList
      className="bg-white"
        title={"Scientific Committee Members"}
        speakers={speakerList}
      />
      <WhyAttend>
        <LatestInfo/>
      </WhyAttend>
      {/* <Marquee /> */}
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock />
    </main>
  );
};

export default About;
