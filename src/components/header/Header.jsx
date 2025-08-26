"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import TitleBlock from "./TitleBlock";
import { usePathname } from "next/navigation";
import { SecondaryLink } from "../buttons/SecondaryButton";
import Image from "next/image";

const DownloadButton = () => {
  return (
    <a
      target="_blank"
      href="#"
      className="flex items-center gap-1.25 text-secondary"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
          stroke="#5AC0BE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
          stroke="#5AC0BE"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span>Download the App</span>
    </a>
  );
};

const RegisterBtn = () => {
  return (
    <PrimaryLink href="/registration" className=" gap-1.25 py-3.25 px-3.25 text-lg">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5787 3.66663H6.41206C2.90122 3.66663 1.92039 4.50996 1.83789 7.79163C3.60706 7.79163 5.03706 9.23079 5.03706 11C5.03706 12.7691 3.60706 14.1991 1.83789 14.2083C1.92039 17.49 2.90122 18.3333 6.41206 18.3333H15.5787C19.2454 18.3333 20.1621 17.4166 20.1621 13.75V8.24996C20.1621 4.58329 19.2454 3.66663 15.5787 3.66663Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24365 3.66663V6.87496"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24365 15.125V18.3333"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.773 8.55236L14.3413 9.69818C14.3963 9.80818 14.5063 9.89068 14.6255 9.90902L15.8905 10.0923C16.2022 10.1382 16.3305 10.5232 16.1013 10.7432L15.1847 11.6323C15.093 11.7148 15.0563 11.8432 15.0747 11.9715L15.2947 13.2273C15.3497 13.539 15.0197 13.7773 14.7447 13.6307L13.6172 13.0348C13.5072 12.9798 13.3697 12.9798 13.2597 13.0348L12.1322 13.6307C11.848 13.7773 11.5272 13.539 11.5822 13.2273L11.8022 11.9715C11.8205 11.8432 11.7838 11.724 11.6922 11.6323L10.7847 10.7432C10.5555 10.5232 10.6838 10.1382 10.9955 10.0923L12.2605 9.90902C12.3888 9.89068 12.4897 9.81735 12.5447 9.69818L13.1038 8.55236C13.2322 8.26819 13.6355 8.26819 13.773 8.55236Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Register Now</span>
    </PrimaryLink>
  );
};

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
    { title: "Gallery", url: "/media", type: "link" },
    { title: "Contact Us", url: "/contact-us", type: "link" },
    {
      title: "Download the App",
      url: "/registration",
      Component: DownloadButton,
    },
    { title: "Register Now", url: "/registration", Component:RegisterBtn },
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
          className={`py-2 w-full container-fluid mx-auto left-0 right-0 top-0 px-5 sm:px-0 ${
            hasScrolled ? "xl:py-9" : "xl:py-14"
          }`}
        >
          <nav
            aria-label="Main Navigation"
            className="flex relative flex-col xl:flex-row justify-between items-center"
          >
            <Link href="/" className="logo">
              <Image width={132} height={60} src="/logo.png" alt="logo" />
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
            <ul className="hidden xl:flex flex-col xl:flex-row items-center justify-between gap-11.5 py-1.5 ps-10 pe-2 rounded-full xl:bg-linear-to-r from-[#90D3D012] to-white/7">
              {navLinks.map(({ type, url, title, Component }, i) => (
                <li key={i}>
                  {Component ? (
                    <Component />
                  ) : type == "primaryButton" ? (
                    <PrimaryLink className="px-8 ms-1" href={url}>
                      {title}
                    </PrimaryLink>
                  ) : type == "secondaryButton" ? (
                    <SecondaryLink className="px-1 ms-1" href={url}>
                      {title}
                    </SecondaryLink>
                  ) : (
                    <Link
                      className={`relative text-sm ${i == 0 ? "px-1" : ""}`}
                      href={url || "#"}
                    >
                      {title}
                      {pathname === url && (
                        <span className="absolute bottom-[-4px] left-0 w-full h-[0.5px] bg-gradient-to-r from-secondary to-primary"></span>
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
