"use client";
import React, { useEffect, useState } from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { usePathname } from "next/navigation";
import RegisterTitleBlock from "./RegisterTitleBlock";

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

const RegisterBtn = () => {
  return (
    <PrimaryLink
      href="/registration"
      className=" gap-1.25 3xl:py-3.25 py-2.75 3xl:px-3.25 px-2.75 3xl:text-lg text-base leading-[100%]"
    >
      {/* <svg
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
      <span>Register Now</span> */}
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
    </PrimaryLink>
  );
};

const RegisterHeader = () => {
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
    {
      title: "Registration Complete",
      url: "/registration/status",
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
  pageLinks
    .filter((link) => pathname.startsWith(link.url))
    .pop()?.title || "";
  // pageLinks.find((link) => link.url === pathname)?.title || "";
  return (
    <header className="text-white ">
      {pathname != "/" && <RegisterTitleBlock title={activeLinkTitle} />}
    </header>
  );
};

export default RegisterHeader;
