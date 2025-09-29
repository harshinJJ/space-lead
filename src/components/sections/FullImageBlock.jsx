"use client";

import Image from "next/image";

const FullImageBlock = ({ title = "Find us", label, className = "", url }) => {
  return (
    <section className={`bg-indigo lg:py-15 py-5 text-white ${className}`}>
      <div
        className={`container-fluid mx-auto text-[1.13rem] bg-cover bg-center bg-no-repeat flex-3 flex flex-col gap-3 md:gap-7.5 px-5 xl:px-15.75 rounded-3xl `}
      >
        <div data-aos="fade-up" className={`flex flex-col  md:items-center md:justify-center`}>
          {title && (
            <h2
              className={`xs:text-2xl lg:text-4xl 2xl:text-[2.875rem] font-azonix  leading-[1]`}
            >
              {title}
            </h2>
          )}
          {label && (
            <p className="font-azonix 2xl:text-3xl lg:text-2xl text-lg">
              {label}
            </p>
          )}
        </div>
        {url && <div data-aos="zoom-in" data-aos-once="true" className="bg-white rounded-3xl overflow-hidden p-5">
            <Image className="w-full h-auto rounded-2xl" width={1438} height={820} src={url} alt="preview-full-image" />
            </div>}
      </div>
    </section>
  );
};
export default FullImageBlock;
