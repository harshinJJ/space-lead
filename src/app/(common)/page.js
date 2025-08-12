import Image from "next/image";
import styles from "./page.module.css";
import HomeBanner from "@/components/sections/HomeBanner";
import AboutInfo from "@/components/sections/AboutInfo";
import MemberList from "@/components/sections/MemberList";
import WhyAttend from "@/components/sections/WhyAttend";
import EventLists from "@/components/sections/EventLists";

export default function Home() {
  return (
    <main
    // className="container mx-auto px-5 sm:px-0"
    >
      <HomeBanner />
      <AboutInfo />
      <MemberList />
      <WhyAttend>
        <EventLists />
      </WhyAttend>
    </main>
  );
}
