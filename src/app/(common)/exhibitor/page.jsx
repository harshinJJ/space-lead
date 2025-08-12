import HomeBanner from "@/components/sections/HomeBanner";
import AboutInfo from "@/components/sections/AboutInfo";
import MemberList from "@/components/sections/MemberList";
import WhyAttend from "@/components/sections/WhyAttend";
import EventLists from "@/components/sections/EventLists";

export default function Exhibitor() {
  return (
    <main>
      <WhyAttend>
        <EventLists />
      </WhyAttend>
    </main>
  );
}
