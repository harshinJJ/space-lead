import Marquee from "@/components/sections/Marquee";
import ExhibitorBlock from "./components/ExhibitorBlock";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";
import FullImageBlock from "@/components/sections/FullImageBlock";
import JoinUs from "@/components/sections/JoinUs";

export const metadata = {
  title: "Exhibitor",
  description: "Exhibitor Information",
};
export default async function Exhibitor() {
  const [exhibitorRes] = await Promise.allSettled([
    PublicServices.getExhibitors(),
  ]);
  const exhibitors = getFullfilled(exhibitorRes);
  return (
    <main>
      <ExhibitorBlock exhibitors={exhibitors} />
      <FullImageBlock url="/images/event_venue_location.png" title="Find Us" />
      <JoinUs
        title="Where visibility becomes opportunity."
        description={"Be seen. Be heard. Be part of Space Lead ’25.”"}
        navLinks={[
          {
            label: "Become an Exhibitor  ",
            url: "/registration",
            arrowDirection: "right",
          },
          {
            label: "Download Booklet",
            url: "#",
            arrowDirection: "bottom",
            type:"external"
          },
        ]}
        overlay="indigo"
      />
      {/* <Marquee /> */}
    </main>
  );
}
