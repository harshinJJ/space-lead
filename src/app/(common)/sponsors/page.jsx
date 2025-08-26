import Marquee from "@/components/sections/Marquee";
import React from "react";
import SponsorBlock from "./components/SponsorBlock";
import { SponsorContentRight, SponsorList } from "@/components/sections/Sponsors";

export const metadata={
  title:"Sponsors",
  description:"Event Sponsors"
}
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
export default function Sponsors() {
  return (
    <main>
      <SponsorContentRight/>
      <SponsorList showSlides={false} />
      {/* gold sponsors pending */}
      {/* sponser companies pending */}
      <SponsorBlock containerClass="bg-gradient-to-b from-white to-[#EDF0FE]" sponsors={sponsors} label={"Our Sponsors"} title={"Gold Sponsored"} />
      <SponsorBlock sponsors={sponsors.slice(10)} 
      containerClass={"bg-[#FBFCFE] lg:pb-31.75 lg:pt-24 bg-[url('/images/backgrounds/sponsor_bg_transparant.png')] bg-[center_2rem]"} title={"Our Sponsored Company"} />
      {/* <Marquee /> */}
    </main>
  );
}
