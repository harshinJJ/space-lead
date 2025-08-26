import Marquee from "@/components/sections/Marquee";
import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

export const metadata={
  title:"Contact Us",
  description:"Get in touch with us"
}
export default function ContactUs() {
  return (
    <main>
      {/* contact form pending  */}
      {/* map pending */}
      <ContactInfo />
      <ContactForm />
      {/* <Marquee /> */}
    </main>
  );
}
