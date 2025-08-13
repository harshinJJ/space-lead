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

export default function Home() {
  return (
    <main
    // className="container mx-auto px-5 sm:px-0"
    >
      <HomeBanner banner={"/images/banner_title.png"} />
      <AboutInfo />
      <MemberList />
      <WhyAttend>
        <EventLists />
      </WhyAttend>
      <Marquee />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        // embedUrl={"https://www.youtube.com/embed/sample"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <EventAgenda />
      <SponsorsBlock />
    </main>
  );
}
