import { useEffect, useRef } from "react";
import gsap from "gsap";

export const ParallaxSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: -100,
      ease: "none",
    });
  }, []);

  return (
    <div ref={sectionRef} className="parallax-container">
      {children}
    </div>
  );
};
