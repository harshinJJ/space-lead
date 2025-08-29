import Image from "next/image";
import React from "react";
import dotPattern from "@/../public/images/dots_pattern.png"

const DotPattern = ({ className="", ...props }) => {
  return <Image src={dotPattern} alt="dot-pattern" className={`${className}`} {...props} />;
};

export default DotPattern;
