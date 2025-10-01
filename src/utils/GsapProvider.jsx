"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

export default function GsapProvider({ children }) {
  const pathname = usePathname();
  const containerRef = useRef(null);
  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   // const sections = gsap.utils.toArray("section");
  //   const sections = containerRef.current.querySelectorAll("section");

  //   sections.forEach((section) => {
  //     gsap.fromTo(
  //       section,
  //       { autoAlpha: 0, y: 60 },
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 1.2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: section,
  //           start: "top 90%",
  //           end: "bottom top",
  //           toggleActions: "play none none reverse",
  //           // markers: true, // enable for debugging
  //         },
  //       }
  //     );
  //   });

  //   ScrollTrigger.refresh();
  //   return () => {
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, [pathname]);

  useEffect(() => {
    // ✅ AOS init
    AOS.init({
      duration: 800,
      // once: true,
      // offset:500,
      easing: "ease-in-out",
    });
  }, []);
  return <div ref={containerRef} className="flex flex-col justify-between min-h-[100vh] bg-white">{children}</div>;
}
