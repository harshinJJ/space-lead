import AboutInfo from "@/components/sections/AboutInfo";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import WhyAttend from "@/components/sections/WhyAttend";
import React from "react";

const About = () => {
  return (
    <main>
      <AboutInfo />
      <WhyAttend>{/* sub component */}</WhyAttend>
      <Marquee />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock />
    </main>
  );
};

export default About;
