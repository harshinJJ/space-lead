"use client";
import DefaultLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useEffect } from "react";

export default function Link({ href, children, className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  // 👉 Enter animation after route change
  useEffect(() => {
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
        },
      }
    );
  }, [pathname]);

  const handleClick = (e) => {
    if (props.target != "_blank") {
      e.preventDefault();
      if (pathname === href || href == "#") {
        props.onClick && props.onClick();
        return;
      }

      const overlay = document.getElementById("transition-overlay");
      const loader = document.getElementById("transition-loader");
      // 👉 Exit animation before navigation
      gsap.to(overlay, {
        x: "0%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(loader, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
          props.onClick && props.onClick();
          router.push(href); // navigate after cover
        },
      });
    }
  };
  return (
    <DefaultLink
      href={href}
      className={className}
      {...props}
      onClick={handleClick}
    >
      {children}
    </DefaultLink>
  );
}
