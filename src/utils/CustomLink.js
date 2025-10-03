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
    gsap.fromTo(
      overlay,
      { x: "0%" }, // start fully covering
      {
        x: "100%", // slide off left
        delay:0.8,
        duration: 1,
        ease: "power2.out",
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
      // 👉 Exit animation before navigation
      gsap.to("#transition-overlay", {
        x: "0%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
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
