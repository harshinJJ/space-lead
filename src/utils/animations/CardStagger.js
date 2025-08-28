"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Vertical Cards Stagger Animation
export const VerticalStagger = ({ children, className }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);

    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        stagger: 0.2, // one after another
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`vertical-stagger-cards-container ${className}`}
    >
      {children}
    </div>
  );
};

// Horizontal Cards Stagger Animation
export const HorizontalCardStagger = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(
        containerRef.current?.querySelectorAll(" .card")
      );
      const rows = {};
      cards.forEach((card) => {
        const rowTop = card.offsetTop;
        if (!rows[rowTop]) rows[rowTop] = [];
        rows[rowTop].push(card);
      });

      // Animate row by row
      Object.values(rows).forEach((rowCards) => {
        gsap.fromTo(
          rowCards,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.3, // 👈 300ms between items in same row
            scrollTrigger: {
              trigger: rowCards[0], // trigger based on first card in row
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [], revertOnUpdate: true } // 👈 makes it auto-clean when pathname changes
  );

  return (
    <div
      ref={containerRef}
      className={`horizondal-stagger-container ${className}`}
    >
      {children}
    </div>
  );
};

export const ZigZagCardStagger = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(
        containerRef.current?.querySelectorAll(".card")
      );

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0; // even = left, odd = right

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50, x: fromLeft ? -100 : 100 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            stagger: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [], revertOnUpdate: true }
  );

  return (
    <div ref={containerRef} className={`zigzag-stagger-container ${className}`}>
      {children}
    </div>
  );
};

export const RowStagger = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.children);

    if (cards.length !== 2) return; // only work for 2 elements

    gsap.fromTo(
      cards[0],
      { autoAlpha: 0, x: -100 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: cards[0],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cards[1],
      { autoAlpha: 0, x: 100 },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: cards[1],
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className={`row-zigzag-container ${className}`}>
      {children}
    </div>
  );
};

// export const TextSplitStagger = ({ children, className = "" }) => {
//   const containerRef = useRef(null);

// useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // Find all h, p, span elements
//     const textElements = container.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span");

//     textElements.forEach((el) => {
//       const text = el.textContent;
//       if (!text) return;

//       // Split into characters, preserving spaces
//       const chars = text.split("").map((char) => {
//         const span = document.createElement("span");
//         span.textContent = char === " " ? "\u00A0" : char; // preserve space
//         span.style.display = "inline-block";
//         span.style.opacity = 0;
//         span.style.transform = "translateY(20px)";
//         return span;
//       });

//       el.textContent = "";
//       chars.forEach((span) => el.appendChild(span));

//       // Animate each character
//       gsap.to(chars, {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power1.out",
//         stagger: 0.005,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 90%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     });

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`text-split-stagger ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

export const TextSplitStagger = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const textElements = container.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span");

    textElements.forEach((el) => {
      const text = el.textContent.trim();
      if (!text) return;

      // Wrap each line in a span
      const words = text.split(" ");
      el.textContent = "";
      const lineWrapper = document.createElement("div");
      lineWrapper.style.display = "inline-block";
      lineWrapper.style.whiteSpace = "pre-wrap";
      lineWrapper.style.overflow = "hidden";

      words.forEach((word, i) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + (i < words.length - 1 ? " " : "");
        wordSpan.style.display = "inline-block";
        lineWrapper.appendChild(wordSpan);
      });

      el.appendChild(lineWrapper);

      // Animate each line (word spans grouped by offsetTop)
      const linesMap = {};
      const spans = lineWrapper.querySelectorAll("span");
      spans.forEach((span) => {
        const top = span.offsetTop;
        if (!linesMap[top]) linesMap[top] = [];
        linesMap[top].push(span);
      });

      Object.values(linesMap).forEach((line) => {
        gsap.fromTo(
          line,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power1.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className={`text-split-container ${className}`}>
      {children}
    </div>
  );
};
