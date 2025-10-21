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
import EVENT_INFO from "@/data/eventInfo";
import ComingSoonOverlay from "../common/ComingSoonOverlay";

const extractPath = (pathname) => {
  const list = pathname.split("/");
  if (list.length > 2) {
    list.pop();
  }
  return list.join("/");
};

const DownloadButton = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
    onClick && onClick();
  };

  const handleClick = (url) => {
    if (url) {
      window?.open(url, "_blank"); // Opens in a new tab/window
    }
  };
  return (
    <>
      <PrimaryButton
        onClick={handleClose}
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
        className="!p-0 rounded-3xl !bg-transparent max-w-full xs:max-w-3/4"
        btnClassName="!text-black bg-white aspect-square h-auto w-fit p-2.5 rounded-full flex items-center justify-center text-5xl !-top-4 !-right-4"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <section
          className={`bg-indigo rounded-3xl  max-h-[70vh] h-full overflow-auto md:p-10 p-5 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat `}
        >
          <div className="container-fluid mx-auto w-full flex flex-col  items-center justify-center gap-10">
            <h3 className=" text-xl text-start leading-[1.2] font-bold font-azonix text-white">
              Everything Space Lead ‘25,
              <br className="2xl:block hidden" /> at your fingertips
            </h3>
            <div className="flex flex-col  gap-4 ">
              <button
                onClick={() => handleClick(EVENT_INFO.playStore)}
                disabled={!EVENT_INFO.playStore}
                className="relative rounded-sm overflow-hidden disabled:!cursor-default"
              >
                <GooglePlayButton className="w-full" />
                {!EVENT_INFO.playStore && <ComingSoonOverlay />}
              </button>
              <button
                onClick={() => handleClick(EVENT_INFO.appStore)}
                disabled={!EVENT_INFO.appStore}
                className="relative rounded-sm overflow-hidden disabled:!cursor-default"
              >
                <AppStoreButton className="w-full" />
                {!EVENT_INFO.appStore && <ComingSoonOverlay />}
              </button>
            </div>
          </div>
          <section
            className={` rounded-3xl h-full md:p-5 py-2 bg-[top_center] bg-cover bg-no-repeat`}
          >
            {/* Title */}

            {/* Content Box */}
            <div className="w-full h-full overflow-y-auto max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 space-y-8">
              {/* How to Use */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  How to Use:
                </h4>
                <ul className="list-decimal list-inside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
                  <li>Register for the event.</li>
                  <li>Download the app from your respective store.</li>
                  <li>Log in using your registered email ID.</li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  Features:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
                  <li>Event details and agenda</li>
                  <li>Explore speakers, exhibitors, and sponsors</li>
                  <li>View the floor map and gallery</li>
                  <li>Connect with attendees and join the chat community</li>
                  <li>Access your digital badge</li>
                  <li>Manage your profile with ease</li>
                  <li>Stay updated with notifications</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </Modal>
    </>
  );
};

const Header = ({ showTitleBlock = true, className = "" }) => {
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
    { title: "Download the App", url: "#", Component: DownloadButton },
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

  return (
    <header className="text-white ">
      <div
        className={`fixed z-99 w-full bg-gradient-to-r from-[#0a1316] bg-[#1b373f] xl:bg-transparent via-tertiary to-[#0a1316]  xl:bg-none ${
          hasScrolled ? " xl:!bg-[#1b373f]/98 " : ""
        } transition-all duration-300 ease-in-out ${className}`}
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
            <div className="flex lg:items-stretch items-center gap-2.5 max-w-2/3">
              <div className="xl:block overflow-h relative w-fit h-full bg-white  lg:min-w-[42px] lg:min-h-[62px] overflow-hidden">
                <Image
                  unoptimized
                  width={42}
                  height={62}
                  src="/secondary_logo_new.png"
                  alt="logo"
                />
              </div>
              <Link href="/" className="logo lg:min-w-[132px] lg:min-h-[60px]">
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
        <ul className="flex flex-col items-center justify-center h-full gap-3 text-xl">
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
      {pathname != "/" && showTitleBlock && (
        <TitleBlock pathname={pathname} title={activeLinkTitle} />
      )}
    </header>
  );
};

export default Header;
