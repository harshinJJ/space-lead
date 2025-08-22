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

const speakers = [
  {
    name: "Dr. Maha Bint Mishari AlSaud",
    title: "Chairperson",
    image: "/images/speakers/speaker1.png",
  },
  {
    name: "Prof. Charles Elachi",
    title: "President",
    image: "/images/speakers/speaker2.png",
  },
  {
    name: "Dr. Majid AlBahkali",
    title: "General Manager",
    image: "/images/speakers/speaker3.png",
  },
  {
    name: "Dr. Esam AlBanyan",
    title: "Vice President ",
    image: "/images/speakers/speaker1.png",
  },
  {
    name: "Dr. Maha Bint Mishari AlSaud",
    title: "Chairperson",
    image: "/images/speakers/speaker1.png",
  },
  {
    name: "Prof. Charles Elachi",
    title: "President",
    image: "/images/speakers/speaker2.png",
  },
  {
    name: "Dr. Majid AlBahkali",
    title: "General Manager",
    image: "/images/speakers/speaker3.png",
  },
  {
    name: "Dr. Esam AlBanyan",
    title: "Vice President ",
    image: "/images/speakers/speaker1.png",
  },
];
export default function Home() {
  return (
    <main
    // className="container mx-auto px-5 sm:px-0"
    >
      <HomeBanner banner={"/images/banner_title.png"} />
      <AboutInfo className="xl:pb-42" />
      {/* <MemberList title={"MEET OUR INDUSTRY EXPERT  AND PROFESSIONAL SPEAKERS"} label="Steering Committee Members" speakers={speakers} link={"#"} /> */}
      <section className="bg-[url('/images/backgrounds/commitee_members_bg.gif')] bg-cover bg-[center]">
        <div className="container z-1 relative mx-auto w-full pt-5 lg:pt-9.5">
          <div className="md:absolute mx-auto left-0 right-0 px-5 lg:px-40 xl:px-70 -translate-y-1/2 top-0 w-full">
            <StatsCard />
          </div>
        </div>
        <MemberSlider
          className="!bg-transparent"
          theme="dark"
          title={"Steering Committee Members"}
          speakers={speakers}
          link={"#"}
          cardSize="sm"
        />
      </section>
      <MemberSlider
        className="bg-white"
        title={"Scientific Committee Members"}
        speakers={speakers}
        link={"#"}
      />
      <WhyAttend>
        {/* <EventLists /> */}
        <EventAgenda className=" bg-[#1C192D80]  px-5 lg:px-10 rounded-4xl lg:py-15 py-6 backdrop-blur-[4px]" />
      </WhyAttend>
      <SpeakerSlider />
      {/* <Marquee /> */}
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        // embedUrl={"https://www.youtube.com/embed/sample"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      {/* <section className="bg-[url('/images/backgrounds/event_agenda_bg.png')] bg-[#1c192d] bg-center bg-cover py-33">
        <EventAgenda />
      </section> */}
      <SponsorsBlock hasFaq={true} />
    </main>
  );
}
