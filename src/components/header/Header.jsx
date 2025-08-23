"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import TitleBlock from "./TitleBlock";
import { usePathname } from "next/navigation";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
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

  const pageLinks = [
    ...navLinks,
    {
      title: "Student Registration",
      url: "/registration/student",
      type: "link",
    },
    {
      title: "Professional Registration",
      url: "/registration/professional",
      type: "link",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (pathname == "/") {
        if (window.scrollY > 50) {
          setHasScrolled(true);
        } else {
          setHasScrolled(false);
        }
      } else {
        setHasScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeLinkTitle =
    pageLinks.find((link) => link.url === pathname)?.title || "";
  return (
    <header className="text-white ">
      <div
        className={`fixed z-99 w-full bg-gradient-to-r from-[#0a1316] via-tertiary to-[#0a1316]  xl:bg-none ${
          hasScrolled ? " xl:bg-[#21162c]/98" : ""
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`py-2 w-full container-fluid mx-auto left-0 right-0 top-0 px-5 sm:px-0 ${hasScrolled?"xl:py-9":"xl:py-14"}`}
        >
          <nav
            aria-label="Main Navigation"
            className="flex relative flex-col xl:flex-row justify-between items-center"
          >
            <Link href="/" className="logo">
              <img src="/logo.png" alt="" />
            </Link>
            <button
              className=" absolute left-0 mx-auto top-0 bottom-0 xl:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <ul className="hidden xl:flex flex-col xl:flex-row items-center justify-between gap-11.5 py-2.5 ps-8.5 pe-4.5 rounded-full xl:bg-linear-to-r from-[#90D3D012] to-white/7">
              {navLinks.map((link, i) => (
                <li key={i}>
                  {link.type == "button" ? (
                    <PrimaryLink className="px-8 " href={link.url}>
                      {link.title}
                    </PrimaryLink>
                  ) : (
                    <Link
                      className={`relative text-sm`}
                      href={link.url || "#"}
                    >
                      {link.title}
                      {pathname === link.url && (
                        <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-secondary to-primary"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0a1316] z-40 xl:hidden transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          {navLinks.map((link, i) => (
            <li key={i}>
              {link.type === "button" ? (
                <PrimaryLink
                  className="px-8 py-3 text-lg"
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </PrimaryLink>
              ) : (
                <Link
                  className={`relative hover:text-gray-300 transition-colors ${
                    pathname === link.url ? "text-gray-100" : "text-gray-400"
                  }`}
                  href={link.url || "#"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                  {pathname === link.url && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gradient-to-r from-secondary to-primary"></span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {pathname != "/" && <TitleBlock title={activeLinkTitle} />}
    </header>
  );
};

export default Header;
