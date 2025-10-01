// import Link from "next/link";
import Link from "@/utils/CustomLink";

import React from "react";


const RegisterFooter = () => {


  const footerLinks = [
    { label: "Terms & Condition", url: "/terms-and-conditions" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Cookie Policy", url: "/cookie-policy" },
  ];
  return (
    <footer className="relative bg-black bg-cover bg-center bg-no-repeat text-white">
      {/* <BgOverlay /> */}
      <nav
        aria-label="Footer Navigation"
        className="container-fluid  mx-auto px-5 lg:px-16"
      >
        <div className="text-center py-10 flex flex-col-reverse gap-2 lg:flex-row items-center lg:items-start justify-between">
          <p className="md:text-nowrap">&copy; Spacelead'25 | All Rights Reserved <a className=" underline" target="_blank" href="https://www.alfaisal.edu/en/">www.alfaisal.edu</a></p>
          <ul className="flex flex-wrap gap-4 lg:gap-x-5 xl:gap-x-11 items-center place-content-center">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.url || "#"}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default RegisterFooter;
