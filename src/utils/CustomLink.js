"use client";
import DefaultLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Link({ href, children, className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  // 👉 Enter animation after route change


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
        duration: 0,
        ease: "power2.in",
        immediateRender:true,
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
