import Marquee from "@/components/sections/Marquee";
import ExhibitorBlock from "./components/ExhibitorBlock";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";

export const metadata = {
  title: "Exhibitor",
  description: "Exhibitor Information",
};
export default async function Exhibitor() {
  const [exhibitorRes, boothRes] = await Promise.allSettled([
    PublicServices.getExhibitors(),
    PublicServices.getBooths(),
  ]);
  const exhibitors = getFullfilled(exhibitorRes);
  const booths = getFullfilled(boothRes);
  return (
    <main>
      <ExhibitorBlock exhibitors={exhibitors} booths={booths} />
      {/* <Marquee /> */}
    </main>
  );
}
