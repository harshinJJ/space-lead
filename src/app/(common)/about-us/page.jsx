import AboutInfo from "@/components/sections/AboutInfo";
import Marquee from "@/components/sections/Marquee";
import SponsorsBlock from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import WhyAttend from "@/components/sections/WhyAttend";
import React from "react";
import LatestInfo from "./components/LatestInfo";
import speakers from "@/../public/assets/json/speakers-data.json";

import MemberList from "@/components/sections/MemberList";
import PublicServices from "@/services/publicServices";
import MemberSlider from "@/components/sections/MemberSlider";
import FocusAreas from "@/components/sections/FocusAreas";
import TheSpaces from "@/components/sections/TheSpaces";
import JoinUs from "@/components/sections/JoinUs";

export const metadata = {
  title: "About Us",
};
const About = async () => {
  const sponsors = await PublicServices.getSponsors().then(
    (res) => res.data || []
  );

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
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>

        <FocusAreas
          className="bg-transparent"
          label={"What We Explore"}
          title={"Focus Areas"}
          data={speakers}
          theme="dark"
        />
      </section>

      <MemberSlider
        className="bg-white"
        title={"Steering Committee"}
        label={"Visionaries Behind Space Lead’25"}
        speakers={speakers}
        cardSize="sm"
      />
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.webm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>

        <MemberList
          className="bg-transparent"
          title={"Scientific Committee  "}
          speakers={speakers.splice(0, 4)}
          theme="dark"
          cardSize="lg"
        />
      </section>
      {/* <WhyAttend>
        <LatestInfo />
      </WhyAttend> */}
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/the_spaces_bg.webm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>
        <TheSpaces
          title={"The Spaces"}
          description={
            "Discover Space Lead, Explore the Four immersive spaces designed to engage, inspire, and transform."
          }
        />
      </section>
      <JoinUs
        title="Be a part of the future"
        description={
          "Join global pioneers, innovators, and leaders in shaping tomorrow’s health and engineering advancements beyond Earth."
        }
        navLinks={[
          {
            label: "Register Now ",
            url: "/registration",
            arrowDirection: "right",
          },
          {
            label: "Explore Agenda ",
            url: "/agendas",
          },
        ]}
      />
      {/* <Marquee /> */}
      {/* <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock sponsors={sponsors} hasFaq={true} /> */}
    </main>
  );
};

export default About;
