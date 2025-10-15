import React from "react";
import DotPattern from "../patterns/DotPattern";

const TextBlock = ({ className = "", title, description, points = [] }) => {
  return (
    <section className={`relative bg-white bg-[top_center] bg-cover ${className}   [&_a]:!text-primary [&_a]:underline`}>
      <div className="container-fluid mx-auto px-5 sm:px-0 flex flex-col justify-between items-start gap-5 pt-20 xl:pt-32.5 pb-20 xl:pb-33">
        <DotPattern className="absolute top-13.5 right-0" />

        <h2 className="xl:text-5xl md:text-4xl text-2xl font-azonix lg:leading-13.75 font-bold lg:mb-14 mb-7">
          {title}
        </h2>

        {description && <p className="text-lg" dangerouslySetInnerHTML={{ __html: description }} />}

        <ol className=" space-y-6">
          {points.map(({ title, description, content }, index) => (
            <li key={index} className="text-lg">
              <h4 className="font-semibold font-droid-bold text-xl">{title}</h4>

              {description && (
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}

              {Array.isArray(content) ? (
                <ul className=" ps-0 mt-2 space-y-1">
                  {content.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ) : (
                      <li key={i}>
                        <strong>{item.subTitle}</strong>
                        {item.subDescription && (
                          <p className="mt-1" dangerouslySetInnerHTML={{ __html: item.subDescription }} />
                        )}
                        {item.subContent && (
                          <ul className="list-disc ps-10 mt-1 space-y-1">
                            {item.subContent.map((sub, j) => (
                              <li key={j} dangerouslySetInnerHTML={{ __html: sub }} />
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  )}
                </ul>
              ) : (
                content&&<p className="mt-2" dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default TextBlock;
