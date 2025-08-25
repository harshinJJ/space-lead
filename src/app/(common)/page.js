import Image from "next/image";
import styles from "./page.module.css";
import HomeBanner from "@/components/sections/HomeBanner";
import AboutInfo from "@/components/sections/AboutInfo";
import MemberList from "@/components/sections/MemberList";
import WhyAttend from "@/components/sections/WhyAttend";
import EventLists from "@/components/sections/EventLists";
import Marquee from "@/components/sections/Marquee";
import VideoPreview from "@/components/sections/VideoPreview";
import EventAgenda from "@/components/sections/EventAgenda";
import SponsorsBlock from "@/components/sections/Sponsors";
import SpeakerSlider from "@/components/sections/SpeakerSlider";
import MemberSlider from "@/components/sections/MemberSlider";
import StatsCard from "@/components/cards/StatsCard";
import speakers from "@/../public/assets/json/speakers-data.json";


// const speakers = [
//   {
//     name: "Dr. Maha Bint Mishari AlSaud",
//     title: "Chairperson",
//     image: "/images/speakers/speaker1.png",
//   },
//   {
//     name: "Prof. Charles Elachi",
//     title: "President",
//     image: "/images/speakers/speaker2.png",
//   },
//   {
//     name: "Dr. Majid AlBahkali",
//     title: "General Manager",
//     image: "/images/speakers/speaker3.png",
//   },
//   {
//     name: "Dr. Esam AlBanyan",
//     title: "Vice President ",
//     image: "/images/speakers/speaker1.png",
//   },
//   {
//     name: "Dr. Maha Bint Mishari AlSaud",
//     title: "Chairperson",
//     image: "/images/speakers/speaker1.png",
//   },
//   {
//     name: "Prof. Charles Elachi",
//     title: "President",
//     image: "/images/speakers/speaker2.png",
//   },
//   {
//     name: "Dr. Majid AlBahkali",
//     title: "General Manager",
//     image: "/images/speakers/speaker3.png",
//   },
//   {
//     name: "Dr. Esam AlBanyan",
//     title: "Vice President ",
//     image: "/images/speakers/speaker1.png",
//   },
// ];
export default function Home() {
  return (
    <main>
      <HomeBanner banner={"/images/banner_title.png"} />
      <AboutInfo className="xl:pb-42" />
      {/* <MemberList title={"MEET OUR INDUSTRY EXPERT  AND PROFESSIONAL SPEAKERS"} label="Steering Committee Members" speakers={speakers} link={"#"} /> */}
      <section className="relative bg-[url('/images/backgrounds/commitee_members_bg.gif')] bg-cover bg-[top_center]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1C192D] opacity-20 w-full h-full"></div>
        <div className="container-fluid z-1 relative mx-auto w-full pt-5 lg:pt-9.5">
          <div className="md:absolute mx-auto left-0 right-0 px-5 md:px-0 -translate-y-1/2 max-w-252.5 top-0 w-full">
            <StatsCard />
          </div>
        </div>
        <MemberSlider
          className="!bg-transparent"
          theme="dark"
          title={"Steering Committee Members"}
          speakers={speakers}
          // link={"#"}
          cardSize="sm"
        />
      </section>
      <MemberSlider
        className="bg-white"
        title={"Scientific Committee Members"}
        speakers={speakers}
        // link={"#"}
      />
      <WhyAttend>
        {/* <EventLists /> */}
        <EventAgenda className="!w-full bg-[#1C192D80]  px-5 lg:px-10 rounded-4xl lg:py-15 py-6 backdrop-blur-[4px]" />
      </WhyAttend>
      <SpeakerSlider speakers={speakers} />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        // embedUrl={"https://www.youtube.com/embed/sample"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock />
    </main>
  );
}
