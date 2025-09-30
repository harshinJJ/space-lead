"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";

const PageLoader = () => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const videoRef = useRef(null);
  const [done, setDone] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {

  //   window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  //   const ctx = gsap.context(() => {
  //     const loader = loaderRef.current;
  //     const logo = logoRef.current;
  //     const headerLogo = document.querySelector(".logo img"); // header logo

  //     const tl = gsap.timeline({
  //       defaults: { ease: "power2.inOut" },
  //       onComplete: () => setDone(true),
  //     });

  //     if (headerLogo) {

  //       const headerRect = headerLogo.getBoundingClientRect();
  //       const { top, left, width, height } = headerRect;
  //       const yOffset = pathname === "/" ? 0 : -20;

  //       tl.fromTo(
  //         logo,
  //         { scale: 1, opacity: 1 },
  //         { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
  //       )
  //         .to(logo, {
  //           x: left - window.innerWidth / 2 + width / 2,
  //           y: top - window.innerHeight / 2 + height / 2 + yOffset,
  //           scale: width / 132, // header logo base width
  //           duration: 1,
  //           ease: "power3.inOut",
  //         })
  //         .to(loader, {
  //           opacity: 0,
  //           duration: 0.5,
  //           pointerEvents: "none",
  //         });
  //     } else {

  //       tl.fromTo(
  //         logo,
  //         { scale: 1, opacity: 1 },
  //         { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
  //       )
  //         .to(logo, {
  //           scale: 0, // zoom big
  //           duration: 0.5,
  //           ease: "power3.inOut",
  //         })
  //         .to(
  //           loader,
  //           {
  //             opacity: 0,
  //             duration: 1,
  //             delay: 0.2,
  //             pointerEvents: "none",
  //           },
  //           "<"
  //         );
  //     }
  //   });

  //   return () => ctx.revert();
  // }, [pathname]);

  useEffect(() => {
    // Always reset scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const video = videoRef.current;
    const loader = loaderRef.current;

    if (!video || !loader ) return;

    // wait until video finishes
    const handleEnd = () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => setDone(true),
      });

      // 🔥 just fade away
      tl.to(
        loader,
        {
          opacity: 0,
          scale:100,
          duration: 0.8,
          pointerEvents: "none",
        },
        "<" // sync with logo fade
      );
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, [pathname]);

  if (done) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a1316]"
    >
        {/* <Image
          src="/logo.png"
          alt="Loading Logo"
          width={132}
          height={60}
          className="w-[132px] h-auto"
        /> */}
        <video className="w-full md:max-w-1/3 sm:w-2/3 " ref={videoRef} muted autoPlay src={"/loader.webm"}></video>
    </div>
  );
};

export default PageLoader;
