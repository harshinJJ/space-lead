"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const [done, setDone] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Always reset scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const ctx = gsap.context(() => {
      const loader = loaderRef.current;
      const logo = logoRef.current;
      const headerLogo = document.querySelector(".logo img"); // header logo

      if (!headerLogo) return;

      // get header logo position
      const headerRect = headerLogo.getBoundingClientRect();
      const { top, left, width, height } = headerRect;

      // Apply path-specific offset (10px upwards on non-home)
      const yOffset = pathname === "/" ? 0 : -20;

      // Animate sequence
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => setDone(true),
      });

      tl.fromTo(
        logo,
        { scale: 1, opacity: 1 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      )
        .to(logo, {
          x: left - window.innerWidth / 2 + width / 2,
          y: top - window.innerHeight / 2 + height / 2 + yOffset,
          scale: width / 132, // header logo base width
          duration: 1,
          ease: "power3.inOut",
        })
        .to(loader, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: "none",
        });
    });

    return () => ctx.revert();
  }, [pathname]);

  if (done) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1316]"
    >
      <div ref={logoRef}>
        <Image
          src="/logo.png"
          alt="Loading Logo"
          width={132}
          height={60}
          className="w-[132px] h-auto"
        />
      </div>
    </div>
  );
};

export default PageLoader;
