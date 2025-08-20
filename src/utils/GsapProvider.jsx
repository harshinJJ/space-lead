"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // kill old triggers on route change
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // select all <section> tags
    const sections = gsap.utils.toArray("section");

    sections?.forEach((section, i) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,          // 👈 trigger is this <section>
            start: "top 90%",          // animate when section hits 80% of viewport
            toggleActions: "play none none reverse",
            markers: false,            // set to true for debugging
          },
        }
      );
    });

    // refresh after setup
    ScrollTrigger.refresh();

  }, [pathname]);

  return <>{children}</>;
}
