
import HomeBanner from "@/components/sections/HomeBanner";
import AboutInfo from "@/components/sections/AboutInfo";
import MemberSlider from "@/components/sections/MemberSlider";
import StatsCard from "@/components/cards/StatsCard";
// import speakerData from "@/../public/assets/json/speakers-data.json";
import PublicServices from "@/services/publicServices";
import OurExhibitor from "@/components/sections/OurExhibitor";
import PressRelease from "@/components/sections/PressRelease";
import AppPreview from "@/components/sections/AppPreview";

function getFullfilled(result) {
  return result.status === "fulfilled" ? result.value?.data ?? [] : [];
}
export default async function Home() {
  const [speakersRes, sponsorsRes, liveUpdateRes, exhibitorRes] =
    await Promise.allSettled([
      PublicServices.getSpeakers(),
      PublicServices.getSponsors(),
      PublicServices.getLiveUpdates(),
      PublicServices.getExhibitors(),
    ]);
  const speakers = getFullfilled(speakersRes);
  const sponsors = getFullfilled(sponsorsRes);
  const liveUpdates = getFullfilled(liveUpdateRes);
  const exhibitors = getFullfilled(exhibitorRes);
  return (
    <main>
      <HomeBanner sponsors={sponsors} banner={"/images/banner_title.png"} />
      <AboutInfo className="2xl:pb-0 lg:pb-15 md:pb-10 xs:pb-5 " />
      <section className="z-1 relative bg-transparent bg-cover bg-[top_center]">
        <video
          autoPlay
          loop
          muted
          className="absolute absolute-center w-full h-full object-cover"
          src="/images/backgrounds/commitee_members_bg.webm"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black to-indigo opacity-20 w-full h-full"></div>
        <div
          className={`container-fluid z-1 relative mx-auto w-full ${speakers?.length>0?"pt-5 lg:pt-9.5":"py-5"}`}
        >
          <div className={`${speakers?.length>0?"lg:absolute lg:-translate-y-1/2 -translate-y-1/10":""} mx-auto left-0 right-0 px-5 md:px-0  top-0 w-full`}>
            <StatsCard />
          </div>
        </div>
        <MemberSlider
          className="!bg-transparent pt-5 lg:pt-20"
          theme="dark"
          // title={"Steering Committee Members"}
          title={"Speakers"}
          speakers={speakers}
          // link={"#"}
          cardSize="sm"
          showNavButton={true}
          navLabel="View All Speakers"
          navLink="/speakers"
        />
      </section>
      <OurExhibitor
        exhibitors={exhibitors}
        showNavButton={true}
        navLabel="Become an Exhibitor"
        navLink="/registration"
      />
      <PressRelease updates={liveUpdates} showNavButton={true} />
      <AppPreview />
    </main>
  );
}
