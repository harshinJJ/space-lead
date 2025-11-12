"use client";
// import Link from "next/link";
import Link from "@/utils/CustomLink";

import React, { useState } from "react";
import ScrollTop from "../common/ScrollTop";
import Image from "next/image";
import { AppStoreButton, GooglePlayButton, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/data/icons";
import EVENT_INFO from "@/data/eventInfo";
import Modal from "../common/Modal";
import ComingSoonOverlay from "../common/ComingSoonOverlay";

const BgOverlay = () => {
  return (
    <div className="absolute absolite-center w-full h-full flex items-end justify-between">
      <svg
        width="310"
        className="absolute bottom-0 left-0  max-w-2/3"
        height="133"
        viewBox="0 0 310 133"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.5 -9.0264e-06C217.547 -1.40115e-05 310 92.4532 310 206.5C310 320.547 217.547 413 103.5 413C-10.5468 413 -103 320.547 -103 206.5C-103 92.4532 -10.5468 -4.04126e-06 103.5 -9.0264e-06ZM103.5 400.861C210.843 400.861 297.861 313.843 297.861 206.5C297.861 99.1571 210.843 12.1386 103.5 12.1386C-3.84285 12.1386 -90.8614 99.1572 -90.8614 206.5C-90.8614 313.843 -3.84284 400.861 103.5 400.861Z"
          fill="url(#paint0_linear_1058_17912)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1058_17912"
            x1="-114"
            y1="206"
            x2="310"
            y2="206.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5AC0BE" />
            <stop stopOpacity="0.41" />
            <stop offset="1" stopColor="#5AC0BE" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute bottom-0 right-0 max-w-2/3"
        width="500"
        height="221"
        viewBox="0 0 500 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M298 595C133.419 595 -2.01861e-05 461.805 -1.30041e-05 297.5C-5.82215e-06 133.195 133.419 -2.02201e-05 298 -1.3026e-05C462.581 -5.83194e-06 596 133.195 596 297.5C596 461.805 462.581 595 298 595ZM298 17.4878C143.094 17.4878 17.5172 142.854 17.5172 297.5C17.5172 452.146 143.094 577.512 298 577.512C452.906 577.512 578.483 452.146 578.483 297.5C578.483 142.854 452.906 17.4878 298 17.4878Z"
          fill="url(#paint0_linear_1058_17911)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1058_17911"
            x1="611.874"
            y1="298.22"
            x2="-2.22626e-05"
            y2="297.498"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7F529F" />
            <stop />
            <stop offset="1" stopColor="#7F529F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const MobileApp = ({ onClick }) => {
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
      <div onClick={handleClose} className={"link w-full block text-nowrap cursor-pointer"}>
        Mobile App
      </div>
      <Modal
        className="!p-0 rounded-3xl !bg-transparent max-w-full lg:max-w-[50%] xl:max-w-[40%] xs:max-w-3/4"
        btnClassName="!text-black bg-white aspect-square h-auto w-fit p-2.5 rounded-full flex items-center justify-center text-5xl !-top-4 !-right-4"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <section
          className={`bg-indigo rounded-3xl  max-h-[70vh] h-full overflow-auto custom-scroll md:p-10 p-5 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat `}
        >
          <div className="container-fluid mx-auto w-full flex flex-col  items-center justify-center gap-10">
            <h3 className=" text-xl text-start leading-[1.5] font-bold font-azonix text-white">
              Everything <span className="text-nowrap whitespace-nowrap">Space Lead ‘25</span>
              <br className="" /> at your fingertips
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
            className={` rounded-3xl h-full mx-auto md:p-5 py-2 bg-[top_center] bg-cover bg-no-repeat`}
          >
            {/* Title */}

            {/* Content Box */}
            <div className="w-full h-full mx-auto overflow-y-auto max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 space-y-8">
              {/* How to Use */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  How to Use:
                </h4>
                <ul className="list-disc list-outside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
                  <li>Register for the event</li>
                  <li>Download the app from your respective store</li>
                  <li>Log in using your registered email ID</li>
                </ul>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 text-white underline underline-offset-4 decoration-white/40">
                  Features:
                </h4>
                <ul className="list-disc list-outside space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
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

const Footer = () => {
  const quickLinks = [
    { title: "Home", url: "/" },
    // { title: "Registration", url: "/registration" },
    { title: "Media", url: "/media" },
    { title: "About Us", url: "/about-us" },
    { title: "Mobile App", url: "#", Component: MobileApp },
    { title: "Contact", url: "/contact-us" },
    { title: "Agenda", url: "/agenda" },
    { title: "Sponsors", url: "/sponsors" },
    { title: "FAQ", url: "/faq" },
    { title: "Speakers", url: "/speakers" },
    { title: "Exhibitor", url: "/exhibitor" },
  ];

  const contactLinks = [
    {
      url: `mailto:${EVENT_INFO.email}`,
      title: EVENT_INFO.email,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_195_4162" fill="white">
            <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" />
          </mask>
          <path
            d="M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z"
            fill="#CCCCCC"
            fillOpacity="0.2"
            mask="url(#path-1-inside-1_195_4162)"
          />
          <path
            d="M11.3333 14.5833L18.8517 19.2823C19.5542 19.7214 20.4458 19.7214 21.1483 19.2823L28.6667 14.5833M12.4167 26.5H27.5833C28.78 26.5 29.75 25.53 29.75 24.3333V15.6667C29.75 14.47 28.78 13.5 27.5833 13.5H12.4167C11.22 13.5 10.25 14.47 10.25 15.6667V24.3333C10.25 25.53 11.22 26.5 12.4167 26.5Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    // {
    //   url: "tel:+966112157777",
    //   title: "+966 11 215 7777",
    //   icon: (
    //     <svg
    //       width="40"
    //       height="40"
    //       viewBox="0 0 40 40"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <mask id="path-1-inside-1_195_4169" fill="white">
    //         <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" />
    //       </mask>
    //       <path
    //         d="M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z"
    //         fill="#CCCCCC"
    //         fillOpacity="0.2"
    //         mask="url(#path-1-inside-1_195_4169)"
    //       />
    //       <path
    //         d="M28.3096 25.2748C28.3096 25.5748 28.243 25.8832 28.1013 26.1832C27.9596 26.4832 27.7763 26.7665 27.5346 27.0332C27.1263 27.4832 26.6763 27.8082 26.168 28.0165C25.668 28.2248 25.1263 28.3332 24.543 28.3332C23.693 28.3332 22.7846 28.1332 21.8263 27.7248C20.868 27.3165 19.9096 26.7665 18.9596 26.0748C18.0013 25.3748 17.093 24.5998 16.2263 23.7415C15.368 22.8748 14.593 21.9665 13.9013 21.0165C13.218 20.0665 12.668 19.1165 12.268 18.1748C11.868 17.2248 11.668 16.3165 11.668 15.4498C11.668 14.8832 11.768 14.3415 11.968 13.8415C12.168 13.3332 12.4846 12.8665 12.9263 12.4498C13.4596 11.9248 14.043 11.6665 14.6596 11.6665C14.893 11.6665 15.1263 11.7165 15.3346 11.8165C15.5513 11.9165 15.743 12.0665 15.893 12.2832L17.8263 15.0082C17.9763 15.2165 18.0846 15.4082 18.1596 15.5915C18.2346 15.7665 18.2763 15.9415 18.2763 16.0998C18.2763 16.2998 18.218 16.4998 18.1013 16.6915C17.993 16.8832 17.8346 17.0832 17.6346 17.2832L17.0013 17.9415C16.9096 18.0332 16.868 18.1415 16.868 18.2748C16.868 18.3415 16.8763 18.3998 16.893 18.4665C16.918 18.5332 16.943 18.5832 16.9596 18.6332C17.1096 18.9082 17.368 19.2665 17.7346 19.6998C18.1096 20.1332 18.5096 20.5748 18.943 21.0165C19.393 21.4582 19.8263 21.8665 20.268 22.2415C20.7013 22.6082 21.0596 22.8582 21.343 23.0082C21.3846 23.0248 21.4346 23.0498 21.493 23.0748C21.5596 23.0998 21.6263 23.1082 21.7013 23.1082C21.843 23.1082 21.9513 23.0582 22.043 22.9665L22.6763 22.3415C22.8846 22.1332 23.0846 21.9748 23.2763 21.8748C23.468 21.7582 23.6596 21.6998 23.868 21.6998C24.0263 21.6998 24.193 21.7332 24.3763 21.8082C24.5596 21.8832 24.7513 21.9915 24.9596 22.1332L27.718 24.0915C27.9346 24.2415 28.0846 24.4165 28.1763 24.6248C28.2596 24.8332 28.3096 25.0415 28.3096 25.2748Z"
    //         stroke="white"
    //         strokeMiterlimit="10"
    //       />
    //     </svg>
    //   ),
    // },
    {
      url: EVENT_INFO.mapLink,
      title: EVENT_INFO.address,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_195_4175" fill="white">
            <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" />
          </mask>
          <path
            d="M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z"
            fill="#CCCCCC"
            fillOpacity="0.2"
            mask="url(#path-1-inside-1_195_4175)"
          />
          <path
            d="M20 31.25C24.375 26.75 28.75 22.7205 28.75 17.75C28.75 12.7794 24.8325 8.75 20 8.75C15.1675 8.75 11.25 12.7794 11.25 17.75C11.25 22.7205 15.625 26.75 20 31.25Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 20C21.3807 20 22.5 18.8807 22.5 17.5C22.5 16.1193 21.3807 15 20 15C18.6193 15 17.5 16.1193 17.5 17.5C17.5 18.8807 18.6193 20 20 20Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

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
        className="container-fluid  mx-auto px-5 lg:px-0 pt-8"
      >
        {/* <section className=" relative border-b border-[#CCCCCC33] flex items-center justify-between py-3.5">
          <Image width={132} height={60} src="/logo.png" alt="logo" />
        </section> */}
        <section className="relative py-10 border-b border-[#CCCCCC33] grid md:grid-cols-3 grid-cols-1 gap-y-12">
          <ScrollTop className="absolute xl:top-10  mx-auto -top-3.5 left-0 right-0 xl:left-[unset] xl:mx-0 transform -translate-y-[70%] xl:translate-y-0  animate-float" />
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex flex-row md:flex-row xl:flex-row items-start justify-center md:justify-start gap-2.5"
          >
            <div className="overflow-h relative w-fit h-auto bg-white  min-w-[42px] min-h-[62px] overflow-hidden">
              <Image
                width={42}
                height={62}
                unoptimized
                src="/secondary_logo_new.png"
                alt="logo"
              />
            </div>
            <Link href="/" className="  md:min-w-30">
              <Image width={132} height={60} src="/logo.png" alt="logo" />
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
            className=" flex flex-col items-center md:items-start lg:gap-10 gap-5"
          >
            <h4 className="text-[1.5rem] font-medium">Quick Links</h4>
            <ul className="grid xs:grid-cols-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xs:text-sm sm:text-base  gap-y-2.5 leading-[1.8] 2xl:gap-x-12.5 xl:gap-x-6 lg:gap-x-1 gap-5 md:w-fit xs:w-2/3 min-w-3/5 ">
              {quickLinks.map(({ url, title, Component }, i) => (
                <li
                  key={i}
                  className="
         [&:nth-child(odd)]:text-start [&:nth-child(even)]:text-end xs:[&:nth-child(3n+1)]:!text-start xs:[&:nth-child(3n+2)]:!text-center xs:[&:nth-child(3n)]:!text-end 
       
        md:[&_a,&_.link]:!text-start "
                >
                  {Component ? (
                    <Component />
                  ) : (
                    <Link
                      className={"w-full block text-nowrap"}
                      href={url || "#"}
                    >
                      {title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="400"
            className=" flex flex-col  gap-y-12"
          >
            <div className="flex flex-col lg:gap-10 gap-5 items-center md:items-start">
              <h4 className="text-[1.5rem] font-medium text-center">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-4 xs:text-sm sm:text-base">
                {contactLinks.map((info, i) => (
                  <li key={i}>
                    <a
                      className="flex items-center gap-2.5"
                      href={info.url}
                      target="_blank"
                    >
                      <div>{info.icon}</div>
                      <span>{info.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center lg:gap-10 gap-5 flex-wrap">
              <h4 className="text-[1.5rem] font-medium">Let’s Connect</h4>
              <ul className="flex items-center gap-4 text-secondary">
                <li>
                  <a
                    aria-label="twitter-link"
                    href={EVENT_INFO.socials.twitter}
                    target="_blank"
                  >
                    <TwitterIcon size={17} />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="instagram-link"
                    href={EVENT_INFO.socials.instagram}
                    target="_blank"
                  >
                    <InstagramIcon size={17} />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="linkedin-link"
                    href={EVENT_INFO.socials.linkedin}
                    target="_blank"
                  >
                    <LinkedInIcon size={17} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="text-center py-10 flex flex-col-reverse gap-2 lg:flex-row items-center lg:items-start justify-between">
          <p className="md:text-nowrap">
            &copy; Spacelead'25 | All Rights Reserved{" "}
            <a
              className=" underline"
              target="_blank"
              href="https://www.alfaisal.edu/en/"
            >
              www.alfaisal.edu
            </a>
          </p>
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

export default Footer;
