import AboutInfo from "@/components/sections/AboutInfo";
import React from "react";

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
  const commitee = await PublicServices.getCommiteeCategory().then(
    (res) => res.data || []
  );
  // const [scientific, steering] = [
  //   commitee.find((item) => item?.name?.toLowerCase().includes("scientific"))
  //     ?.staff_members || [],
  //   commitee.find((item) => item?.name?.toLowerCase()?.includes("steering"))
  //     ?.staff_members || [],
  // ];

  const scientific = (
    commitee.find((item) => item?.name?.toLowerCase().includes("scientific"))
      ?.staff_members || []
  ).sort((a, b) => {
    if (a.order === null) return 1; // put nulls last
    if (b.order === null) return -1;
    return a.order - b.order;
  });

  const steering = (
    commitee.find((item) => item?.name?.toLowerCase()?.includes("steering"))
      ?.staff_members || []
  ).sort((a, b) => {
    if (a.order === null) return 1; // put nulls last
    if (b.order === null) return -1;
    return a.order - b.order;
  });
  return (
    <main>
      <AboutInfo />
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.mp4"
          poster="/images/backgrounds/posters/commitee_members_bg_poster.webp"
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-90 w-full h-full"></div>

        <FocusAreas
          className="bg-transparent"
          label={"What We Explore"}
          title={"Focus Areas"}
          theme="dark"
        />
      </section>

      <MemberSlider
        className="bg-white"
        title={"Steering Committee"}
        label={"Visionaries Behind Space Lead’25"}
        speakers={steering}
        cardSize="sm"
      />
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.mp4"
          playsInline
          poster="/images/backgrounds/posters/commitee_members_bg_poster.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>

        <MemberList
          className="bg-transparent"
          title={"Scientific Committee  "}
          speakers={scientific}
          theme="dark"
          cardSize="lg"
        />
      </section>
      <section className="relative bg-transparent bg-cover bg-[center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/the_spaces_bg.mp4"
          playsInline
          poster="/images/backgrounds/posters/the_spaces_bg.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-80 w-full h-full"></div>
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
            url: "/agenda",
          },
        ]}
        // videoURL="/"
      />
    </main>
  );
};

export default About;
