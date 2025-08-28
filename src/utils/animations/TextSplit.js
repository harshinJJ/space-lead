// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import SplitType from 'split-type'; // Install with: npm install split-type

// export const AnimatedText = ({ text }) => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const splitText = new SplitType(textRef.current!, {
//       types: 'words,chars',
//       tagName: 'span'
//     });

//     gsap.from(splitText.chars, {
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: 'top 80%',
//       },
//       opacity: 0,
//       y: 20,
//       stagger: 0.02,
//       duration: 0.5,
//       ease: 'power2.out'
//     });
//   }, []);

//   return <div ref={textRef}>{text}</div>;
// };