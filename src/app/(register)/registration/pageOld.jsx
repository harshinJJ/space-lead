import React from "react";
import PassSelector from "./components/PassSelector";
import Marquee from "@/components/sections/Marquee";


export const metadata={
  title:"Registration",
  description:"Event Registration"
}
export default function Registration() {
  return (
    <main >
      <PassSelector/>
      {/* <Marquee/> */}
    </main>
  );
}
