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
  const params = new URLSearchParams({ limit: 100 });
  const [exhibitorRes] = await Promise.allSettled([
    PublicServices.getExhibitors(params),
  ]);
  const exhibitors = getFullfilled(exhibitorRes);

  exhibitors.sort((a, b) => {
    if (a.order === null) return 1; // put nulls last
    if (b.order === null) return -1;
    return a.order - b.order;
  });
  return (
    <main>
      <ExhibitorBlock exhibitors={exhibitors} />
      <FullImageBlock url="/images/event_floor_map_new.png" title="Find Us" />
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
            url: "/assets/documents/Space%20Lead%2025%20Participation%20and%20Exhibition%20Brochure.pdf",
            arrowDirection: "bottom",
            additionaProps: { download: "Space Lead 25 Participation and Exhibition Brochure.pdf" },
            type: "external",
          },
        ]}
        imageURL={"/images/backgrounds/exhibitor_connect_bg.jpg"}
        overlay="indigo"
      />
      {/* <Marquee /> */}
    </main>
  );
}
