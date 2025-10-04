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
  const pathRef = useRef(null);

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
  useEffect(() => {
    if (pathname != pathRef.current) {
      const overlay = document.getElementById("transition-overlay");
      const loader = document.getElementById("transition-loader");
      gsap.fromTo(
        overlay,
        { x: "0%" }, // start fully covering
        {
          x: "100%", // slide off left
          delay: 0.8,
          duration: 1,
          ease: "power2.out",
          onStart: () => {
            gsap.to(loader, { opacity: 0, duration: 0.3 }); // hide loader as we leave
          },
          onComplete: () => {
            gsap.set(overlay, { x: "-100%" }); // reset offscreen for next time
            pathRef.current = pathname;
          },
        }
      );
    }
  }, [pathname]);
  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-between min-h-[100vh] bg-indigo"
    >
      {children}
    </div>
  );
}
