"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import PrimaryButton, { PrimaryLink } from "../buttons/PrimaryButton";
import TitleBlock from "./TitleBlock";
import { usePathname } from "next/navigation";
import { SecondaryLink } from "../buttons/SecondaryButton";
import Image from "next/image";
import Link from "@/utils/CustomLink";
import Modal from "../common/Modal";
import { AppStoreButton, GooglePlayButton } from "@/data/icons";

const DownloadButton = () => {
  return (
    <a
      target="_blank"
      href="#"
      className="flex items-center gap-1.25 text-secondary me-4 ms-2.75 text-sm leading-[100%]"
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

const extractPath = (pathname) => {
  const list = pathname.split("/");
  if (list.length > 2) {
    list.pop();
  }
  return list.join("/");
};

const RegisterBtn = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    onClick && onClick();
  };
  return (
    <>
      <PrimaryButton
        onClick={handleClick}
        className=" gap-1.25 3xl:py-3.25 py-2.75 3xl:px-3.25 px-2.75 3xl:text-lg text-base leading-[100%]"
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
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Download the App</span>
      </PrimaryButton>
      <Modal
        className="!p-0 rounded-3xl !bg-transparent"
        btnClassName="!text-black bg-white aspect-square h-auto w-fit p-2.5 rounded-full flex items-center justify-center text-5xl !-top-4 !-right-4"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <section
          className={`bg-indigo rounded-3xl overflow-hidden  max-h-[70vh] h-full md:p-10 p-5 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat `}
        >
          <div className="container-fluid mx-auto w-full flex flex-col  items-center justify-center gap-10">
            <h3 className=" text-2xl text-start leading-[1.2] font-bold font-azonix text-white">
              Everything Space Lead ‘25,
              <br className="2xl:block hidden" /> at your fingertips.
            </h3>
            <div className="flex flex-col  gap-4 ">
              <button>
                <GooglePlayButton className="w-full" />
              </button>
              <button>
                <AppStoreButton className="w-full" />
              </button>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const navLinks = [
    { title: "Home", url: "/", type: "link" },
    { title: "About", url: "/about-us", type: "link" },
    { title: "Agenda", url: "/agenda", type: "link" },
    { title: "Speakers", url: "/speakers", type: "link" },
    { title: "Sponsorship", url: "/sponsors", type: "link" },
    { title: "Exhibition", url: "/exhibitor", type: "link" },
    { title: "Registration", url: "/registration", type: "link" },
    { title: "Media", url: "/media", type: "link" },
    // { title: "Contact Us", url: "/contact-us", type: "link" },
    // {
    //   title: "Download the App",
    //   url: "/registration",
    //   Component: DownloadButton,
    // },
    { title: "Download the App", url: "#", Component: RegisterBtn },
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
    {
      title: "Media",
      url: "/media",
      type: "link",
    },
    {
      title: "Frequently Asked Questions",
      url: "/faq",
      type: "link",
    },
    {
      title: "Contact US",
      url: "/contact-us",
      type: "link",
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
      type: "link",
    },
    {
      title: "Cookie Policy",
      url: "/cookie-policy",
      type: "link",
    },
    // { title: "Register", url: "/registration", Component: RegisterBtn },

    // {
    //   title: "",
    //   url: "/",
    //   type: "link",
    // },
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
    pageLinks.filter((link) => pathname.startsWith(link.url)).pop()?.title ||
    "";
  // pageLinks.find((link) => link.url === pathname)?.title || "";
  console.log(
    "asdasd",
    pathname.split("/").splice(0, pathname.split("/").length - 1)
  );
  return (
    <header className="text-white ">
      <div
        className={`fixed z-99 w-full bg-gradient-to-r from-[#0a1316] via-tertiary to-[#0a1316]  xl:bg-none ${
          hasScrolled ? " xl:bg-[#1b373f]/98" : ""
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
            <div className="flex items-center 2xl:gap-7.5 md:gap-4 gap-2">
              <div className="hidden xl:block rounded-[5px] overflow-h">
                <Image
                  width={113}
                  height={54}
                  src="/logo_secondary.png"
                  alt="logo"
                />
              </div>
              <Link href="/" className="logo">
                <Image width={132} height={60} src="/logo.png" alt="logo" />
              </Link>
            </div>
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
            <ul className="hidden xl:flex flex-col xl:flex-row items-center justify-between py-1.5 ps-6 pe-2 rounded-full xl:bg-linear-to-r from-[#90D3D012] to-white/7">
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
                      className={`relative mx-4 3xl:text-sm text-xs ${
                        i == 0 ? "px-1" : ""
                      }`}
                      href={url || "#"}
                    >
                      {title}
                      {(pathname === url ||
                        (pathname != "/" &&
                          url.includes(extractPath(pathname)))) && (
                        <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-gradient-to-r from-secondary to-primary"></span>
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
          {navLinks.map(({ type, title, url, Component }, i) => (
            <li key={i}>
              {Component ? (
                <Component onClick={() => setIsMenuOpen(false)} />
              ) : type === "button" ? (
                <PrimaryLink
                  className="px-8 py-3 text-lg"
                  href={url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                </PrimaryLink>
              ) : (
                <Link
                  className={`relative hover:text-gray-300 transition-colors ${
                    pathname === url ||
                    (pathname != "/" && url.includes(extractPath(pathname)))
                      ? "text-gray-100"
                      : "text-gray-400"
                  }`}
                  href={url || "#"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {title}
                  {(pathname === url ||
                    (pathname != "/" &&
                      url.includes(extractPath(pathname)))) && (
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
