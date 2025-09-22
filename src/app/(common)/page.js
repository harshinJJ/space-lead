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
import speakerData from "@/../public/assets/json/speakers-data.json";
import PublicServices from "@/services/publicServices";

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

function getFullfilled(result) {
  return result.status === "fulfilled" ? result.value?.data ?? [] : [];
}
export default async function Home() {
  const [agendaRes, speakersRes, sponsorsRes] = await Promise.allSettled([
    PublicServices.getAgenda(),
    PublicServices.getSpeakers(),
    PublicServices.getSponsors(),
  ]);
  const agenda = getFullfilled(agendaRes);
  const speakers = getFullfilled(speakersRes);
  const sponsors = getFullfilled(sponsorsRes);
  return (
    <main>
      <HomeBanner banner={"/images/banner_title.png"} />
      <AboutInfo className="2xl:pb-0 lg:pb-15 md:pb-10 xs:pb-5 " />
      {/* <MemberList title={"MEET OUR INDUSTRY EXPERT  AND PROFESSIONAL SPEAKERS"} label="Steering Committee Members" speakers={speakers} link={"#"} /> */}
      <section className="relative bg-transparent bg-cover bg-[top_center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.webm"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>
        <div className="container-fluid z-1 relative mx-auto w-full pt-5 lg:pt-9.5">
          <div className="lg:absolute mx-auto left-0 right-0 px-5 md:px-0 lg:translate-y-1/2 -translate-y-1/10 top-0 w-full">
            <StatsCard />
          </div>
        </div>
        <MemberSlider
          className="!bg-transparent"
          theme="dark"
          // title={"Steering Committee Members"}
          title={"Speakers"}
          speakers={speakerData}
          // link={"#"}
          cardSize="sm"
        />
      </section>
      {/* <MemberSlider
        className="bg-white"
        title={"Scientific Committee Members"}
        speakers={speakerData}
        // link={"#"}
      /> */}
      <WhyAttend>
        {/* <EventLists /> */}
        <EventAgenda
          showViewAll={true}
          dataList={agenda}
          className="!w-full bg-indigo/50 px-5 lg:px-10 rounded-4xl lg:py-15 py-6 backdrop-blur-[4px]"
        />
      </WhyAttend>
      <SpeakerSlider speakers={speakers} />
      <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        // embedUrl={"https://www.youtube.com/embed/sample"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorsBlock sponsors={sponsors} />
    </main>
  );
}
