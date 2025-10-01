import Marquee from "@/components/sections/Marquee";
import React from "react";
import SponsorBlock from "./components/SponsorBlock";
import {
  SponsorContentRight,
  SponsorList,
} from "@/components/sections/Sponsors";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";
import JoinUs from "@/components/sections/JoinUs";
import StatsCard from "@/components/cards/StatsCard";
import TextScrollBlock from "@/components/sections/TextScrollBlock";

export const metadata = {
  title: "Sponsors",
  description: "Event Sponsors",
};
const sponsors = [
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
];

const stats = [
  { label: "Audience reached", value: "100" },
  { label: "Global media impressions", value: "70" },
  { label: "Networking outcomes / ROI", value: "300" },
];
export default async function Sponsors() {
  const [sponsorsRes] = await Promise.allSettled([
    PublicServices.getSponsors(),
  ]);
  const sponsors = getFullfilled(sponsorsRes);
  return (
    <main>
      <JoinUs
        title="Join us at the epicenter of global space innovation."
        className="!bg-white"
        navLinks={[
          {
            label: "Become a Sponsor",
            url: "/registration",
            arrowDirection: "right",
          },
          {
            label: "Download Booklet ",
            url: "#",
            arrowDirection: "bottom",
            type:"external"
          },
        ]}
      />
      {/* <SponsorContentRight /> */}
      <TextScrollBlock description="“Sponsoring Space Lead ’25 positions your organization at the forefront of space innovation. Engage with global leaders, policymakers, and disruptors. Build credibility, amplify visibility, expand your network, and forge lasting partnerships." />
      <section className="bg-white py-12.5 w-full px-5">
        <StatsCard className="container-fluid mx-auto !max-w-217.5" stats={stats} />
      </section>
      <SponsorList title="Featured Sponsorship" sponsors={sponsors} />

      {/* <SponsorBlock
        containerClass="bg-gradient-to-b from-white to-[#EDF0FE]"
        sponsors={sponsors}
        label={"Our Sponsors"}
        title={"Gold Sponsored"}
      />
      <SponsorBlock
        sponsors={sponsors}
        containerClass={
          "bg-[#FBFCFE] lg:pb-31.75 lg:pt-24 bg-[url('/images/backgrounds/sponsor_bg_transparant.png')] bg-[center_2rem]"
        }
        title={"Our Sponsored Company"}
      /> */}
    </main>
  );
}
