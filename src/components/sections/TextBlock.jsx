import React from "react";
import DotPattern from "../patterns/DotPattern";

const TextBlock = ({ className = "", title, description, points = [] }) => {
  return (
    <section
      className={` bg-white bg-[top_center] bg-cover ${className}`}
    >
      <div className="container-fluid mx-auto px-5 sm:px-0 flex flex-col justify-between items-start gap-5 pt-20 xl:pt-32.5 pb-20 xl:pb-33">
        <DotPattern className="absolute top-13.5 right-0" />

        <h2 className="text-3xl lg:text-[2.875rem] lg:leading-13.75 font-bold font-orbitron lg:mb-14 mb-7">
          {title}
        </h2>
        {description && <p>{description}</p>}
        {points.map(({ title, content }, index) => (
          <div key={index} className="text-lg">
            <h4 className="font-semibold text-lg">{title}</h4>
            {content instanceof Array ? (
              <ul className="ps-[1.625rem]">
                {content.map((item, j) => (
                  <li className="list-disc ps-[0.375rem] my-[0.25rem]" key={j}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextBlock;
