import Link from "next/link";
import React from "react";

const PrimaryButton = ({ children,disabled=false, className = "", ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`cursor-pointer disabled:!cursor-not-allowed disabled:opacity-70 text-white flex justify-center items-center py-2 px-3 btn-gradient rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
export const PrimaryLink = ({
  children,
  className = "",
  href = "#",
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={`cursor-pointer text-white flex justify-center items-center py-2 px-3 btn-gradient rounded-full ${className}`}
    >
      {children}
    </Link>
  );
};
export const PrimaryDualTextLink = ({
  className = "",
  href = "#",
  initialText,
  hoverText,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={`text-white flex justify-center btn-gradient rounded-full w-fit group px-7.5 py-4.25 items-center gap-2 transition-all duration-500 ${className}`}
    >
      <span className="leading-[100%] text-lg group-hover:hidden">
              {initialText}
            </span>
            <span className="leading-[100%] text-lg group-hover:block hidden">
              {hoverText||initialText}
            </span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7598 9.46875L11.6807 15.5479C11.5732 15.6553 11.4463 15.7383 11.2998 15.7969C11.1533 15.8555 11.002 15.8848 10.8457 15.8848C10.6797 15.8848 10.521 15.8555 10.3696 15.7969C10.2183 15.7383 10.0889 15.6553 9.98145 15.5479C9.72754 15.3135 9.60059 15.0254 9.60059 14.6836C9.60059 14.3418 9.72754 14.0586 9.98145 13.834L13.9658 9.82031H2.34961C2.00781 9.82031 1.71973 9.70312 1.48535 9.46875C1.25098 9.23438 1.13379 8.94629 1.13379 8.60449C1.13379 8.28223 1.25098 7.99902 1.48535 7.75488C1.71973 7.51074 2.00781 7.38867 2.34961 7.38867H13.9658L9.98145 3.4043C9.72754 3.16992 9.60059 2.88184 9.60059 2.54004C9.60059 2.19824 9.72754 1.91504 9.98145 1.69043C10.2061 1.44629 10.4893 1.32422 10.8311 1.32422C11.1729 1.32422 11.4561 1.44629 11.6807 1.69043L17.7598 7.76953C18.0039 7.99414 18.126 8.27734 18.126 8.61914C18.126 8.96094 18.0039 9.24414 17.7598 9.46875Z"
                fill="white"
              />
            </svg>
    </Link>
  );
};

export default PrimaryButton;
