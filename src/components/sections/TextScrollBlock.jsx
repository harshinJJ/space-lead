"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextScrollBlock = ({
  showSlides = true,
  sponsors = [],
  title,
  description = "",
  label,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (description) {
      const letters = textRef.current.querySelectorAll(".letter");

      gsap.fromTo(
        letters,
        { color: "#9ca3af" }, // Tailwind gray-400
        {
          color: "#000",
          stagger: 1, // delay between each letter
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 40%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }
  }, [description]);

  return (
    description && (
      <section className="w-full relative py-12 lg:py-20 bg-[url('/images/backgrounds/sponsorlist_bg.png')]">
        {/* Left & right edge gradients */}

        <div className="container-fluid px-5 mx-auto lg:px-12.75 text-center">
          {label && (
            <p className="text-secondary font-azonix text-lg mb-2">{label}</p>
          )}
          {title && (
            <h2 className="text-2xl font-orbitron lg:text-[2.875rem] font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {/* {description && (
          <p
            className={`lg:max-w-[68.5rem] leading-[1.875rem] text-lg mx-auto text-[#303030] ${
              !show ? "mb-0" : ""
            } mb-10 `}
          >
            {description}
          </p>
        )} */}
          <p
            ref={textRef}
            className=" 2xl:text-5xl lg:text-4xl text-3xl font-bold font-gilroy-bold text-start leading-relaxed"
          >
            {description.split("").map((char, i) => (
              <span
                key={i}
                className={`letter ${
                  char === " " ? "inline-block w-[0.25em]" : "inline"
                }`}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </section>
    )
  );
};
export default TextScrollBlock;
