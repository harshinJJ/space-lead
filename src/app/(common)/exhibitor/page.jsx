import Marquee from "@/components/sections/Marquee";
import ExhibitorBlock from "./components/ExhibitorBlock";

export const metadata={
  title:"Exhibitor",
  description:"Exhibitor Information"
}
export default function Exhibitor() {
  return (
    <main>
      <ExhibitorBlock/>
      {/* <Marquee /> */}
    </main>
  );
}
