"use client";

const ButtonLoader = () => {
  const circles = [
    { delay: "0s", outlineDelay: "0.9s" },
    { delay: "0.3s", outlineDelay: "1.2s" },
    { delay: "0.6s", outlineDelay: "1.5s" },
    { delay: "0.9s", outlineDelay: "1.8s" },
  ];

  return (
    <div className="flex justify-center items-center">
      {circles.map((c, i) => (
        <div
          key={i}
          className={`relative flex items-center justify-center w-auto h-auto mx-2 rounded-full border-2 border-white bg-transparent 
            animate-[circle_2s_ease-in-out_infinite]`}
          style={{ animationDelay: c.delay }}
        >
          <div
            className={`absolute w-4 h-4 rounded-full bg-white
              animate-[dot_2s_ease-in-out_infinite]`}
            style={{ animationDelay: c.delay }}
          />
          <div
            className={`absolute w-5 h-5 rounded-full 
              animate-[outline_2s_ease-in-out_infinite]`}
            style={{ animationDelay: c.outlineDelay }}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonLoader;
