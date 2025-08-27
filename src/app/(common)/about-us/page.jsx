import AboutInfo from "@/components/sections/AboutInfo";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import WhyAttend from "@/components/sections/WhyAttend";
import React from "react";
import LatestInfo from "./components/LatestInfo";
import speakers from "@/../public/assets/json/speakers-data.json";

import MemberList from "@/components/sections/MemberList";

export const metadata = {
  title: "About Us",
};
const About = () => {
  return (
    <main>
      <AboutInfo />
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.webm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1C192D] opacity-20 w-full h-full"></div>

        <MemberList
          className="bg-transparent"
          title={"Steering Committee Members"}
          speakers={speakers}
          theme="dark"
          cardSize="sm"
        />
      </section>
      <MemberList
        className="bg-white"
        title={"Scientific Committee Members"}
        speakers={speakers}
      />
      <WhyAttend>
        <LatestInfo />
      </WhyAttend>
      {/* <Marquee /> */}
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock hasFaq={true} />
    </main>
  );
};

export default About;
