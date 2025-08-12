import Link from "next/link";
import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";

const Header = () => {
  const navLinks = [
    { title: "Home", url: "/", type: "link" },
    { title: "About Us", url: "/about-us", type: "link" },
    { title: "Agenda", url: "/agenda", type: "link" },
    { title: "Speakers", url: "/speakers", type: "link" },
    { title: "Sponsors", url: "/sponsors", type: "link" },
    { title: "Exhibitor", url: "/exhibitor", type: "link" },
    { title: "Contact Us", url: "/contact-us", type: "link" },
    { title: "Register Now", url: "/registration", type: "button" },
  ];
  return (
    <header className="container mx-auto px-5 sm:px-0 text-white">
      <section className="mt-9  w-full container mx-auto top-0">
        <nav
          aria-label="Main Navigation"
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
          </a>
          <ul className="flex flex-col md:flex-row items-center justify-between gap-11 py-2.5 ps-8.5 pe-4.5 rounded-full md:bg-linear-to-r from-[#90D3D012] to-[#FFFFFF12]">
            {navLinks.map((link, i) => (
              <li key={i}>
                {link.type == "button" ? (
                  <PrimaryLink className="px-8 " href={link.url}>{link.title}</PrimaryLink>
                ) : (
                  <Link href={link.url || "#"}>{link.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className=""></section>
    </header>
  );
};

export default Header;
