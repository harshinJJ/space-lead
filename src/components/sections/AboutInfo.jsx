import React from "react";
import { RowStagger } from "@/utils/animations/CardStagger";
import DotPattern from "../patterns/DotPattern";
import SemiCirclePattern from "../patterns/SemiCirclePattern";
import Link from "@/utils/CustomLink";

const AboutInfo = ({ className = "", isHome }) => {
  const data = {
    title: "Space Lead 25",
    description: `${
      isHome
        ? "“The Space Lead’25 in Riyadh is a pioneering global conference bringing together the brightest minds in space science, engineering, and human health. "
        : "“The Space Lead’25 in Riyadh is a pioneering global conference uniting aerospace engineers, space medicine professionals, scientists, researchers, policymakers, industry leaders, and students. Over two immersive days, delegates will engage in thought-provoking discussions, collaborative exchanges, and strategic networking sessions that shape the future of space exploration and its impact on humanity"
    }`,
    vision: [
      {
        icon: (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5 9.00673C27.2936 7.73046 24.7321 7 22 7C13.7157 7 7 13.7157 7 22C7 24.3995 7.56343 26.6674 8.56519 28.6787C8.83141 29.2132 8.92001 29.8241 8.76568 30.4009L7.87227 33.7401C7.48443 35.1895 8.81051 36.5155 10.26 36.1278L13.5991 35.2344C14.1759 35.08 14.7868 35.1686 15.3213 35.4347C17.3326 36.4366 19.6005 37 22 37C30.2842 37 37 30.2842 37 22C37 19.2679 36.2695 16.7063 34.9933 14.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 22H16.0135M21.9865 22H22M27.9865 22H28"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label:
          "Conference Themes:<br/> Human Health Off-Planet | Space & Advanced Engineering",
      },
      {
        icon: (
          <svg
            width="28"
            height="38"
            viewBox="0 0 28 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5 15.625C26.5 22.4596 20.9036 28 14 28M14 28C7.09643 28 1.5 22.4596 1.5 15.625M14 28V37M14 37H4.90909M14 37H23.0909M14 21.25C10.862 21.25 8.31818 18.7316 8.31818 15.625V6.625C8.31818 3.5184 10.862 1 14 1C17.138 1 19.6818 3.5184 19.6818 6.625V15.625C19.6818 18.7316 17.138 21.25 14 21.25Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label:
          "Across 3 Days We Cover:<br/> Keynotes, Workshops, Panels, Exhibitions",
      },
    ],
    features: [
      {
        icon: (
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.0001 36.36C31.2691 36.36 29.8391 35.044 29.6591 33.36H21.0001C20.8011 33.36 20.6401 33.199 20.6401 33V21.36H12.3411C12.1611 23.044 10.7311 24.36 9.00014 24.36C7.14714 24.36 5.64014 22.852 5.64014 21C5.64014 19.148 7.14714 17.64 9.00014 17.64C10.7311 17.64 12.1611 18.956 12.3411 20.64H20.6401V9.00001C20.6401 8.80101 20.8011 8.64001 21.0001 8.64001H29.6591C29.8391 6.95601 31.2681 5.64001 33.0001 5.64001C34.8531 5.64001 36.3601 7.14701 36.3601 9.00001C36.3601 10.853 34.8531 12.36 33.0001 12.36C31.2691 12.36 29.8391 11.044 29.6591 9.36001H21.3601V20.64H29.6591C29.8391 18.956 31.2681 17.64 33.0001 17.64C34.8531 17.64 36.3601 19.147 36.3601 21C36.3601 22.853 34.8521 24.36 33.0001 24.36C31.2691 24.36 29.8391 23.044 29.6591 21.36H21.3601V32.64H29.6591C29.8391 30.956 31.2681 29.64 33.0001 29.64C34.8531 29.64 36.3601 31.148 36.3601 33C36.3601 34.852 34.8531 36.36 33.0001 36.36ZM33.0001 30.36C31.5441 30.36 30.3601 31.544 30.3601 33C30.3601 34.456 31.5441 35.64 33.0001 35.64C34.4561 35.64 35.6401 34.456 35.6401 33C35.6401 31.544 34.4561 30.36 33.0001 30.36ZM33.0001 18.36C31.5441 18.36 30.3601 19.545 30.3601 21C30.3601 22.456 31.5441 23.64 33.0001 23.64C34.4561 23.64 35.6401 22.456 35.6401 21C35.6401 19.544 34.4561 18.36 33.0001 18.36ZM9.00014 18.36C7.54414 18.36 6.36014 19.545 6.36014 21C6.36014 22.456 7.54514 23.64 9.00014 23.64C10.4551 23.64 11.6401 22.456 11.6401 21C11.6401 19.544 10.4561 18.36 9.00014 18.36ZM33.0001 6.36001C31.5441 6.36001 30.3601 7.54501 30.3601 9.00001C30.3601 10.455 31.5441 11.64 33.0001 11.64C34.4561 11.64 35.6401 10.456 35.6401 9.00001C35.6401 7.54401 34.4561 6.36001 33.0001 6.36001Z"
              fill="currentColor"
            />
          </svg>
        ),
        title: "Networking",
        // description: `Dolor sit amet consectetur elit sed do eiusmod tempor`,
      },
      {
        icon: (
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_67_3055)">
              <path
                d="M16.8996 10.2116C17.7228 8.8483 18.1346 8.16663 18.75 8.16663C19.3654 8.16663 19.7772 8.8483 20.6004 10.2116L20.8134 10.5644C21.0474 10.9518 21.1644 11.1455 21.3468 11.2733C21.5292 11.4011 21.7564 11.4486 22.2106 11.5435L22.6243 11.6298C24.2232 11.9638 25.0225 12.1307 25.2126 12.6953C25.4029 13.2599 24.8579 13.848 23.768 15.0246L23.4859 15.329C23.1762 15.6633 23.0213 15.8304 22.9518 16.0373C22.8821 16.2441 22.9055 16.467 22.9523 16.9131L22.9948 17.3193C23.1596 18.8889 23.2422 19.6739 22.7441 20.0228C22.2462 20.3717 21.4977 20.0535 20.0008 19.4174L19.6135 19.2527C19.1881 19.0719 18.9754 18.9815 18.75 18.9815C18.5246 18.9815 18.3119 19.0719 17.8865 19.2527L17.4992 19.4174C16.0023 20.0535 15.2538 20.3717 14.7558 20.0228C14.2579 19.6739 14.3403 18.8889 14.5051 17.3193L14.5477 16.9131C14.5946 16.467 14.618 16.2441 14.5483 16.0373C14.4786 15.8304 14.3238 15.6633 14.0141 15.329L13.7321 15.0246C12.6421 13.848 12.0971 13.2599 12.2873 12.6953C12.4775 12.1307 13.2769 11.9638 14.8757 11.6298L15.2893 11.5435C15.7436 11.4486 15.9708 11.4011 16.1533 11.2733C16.3356 11.1455 16.4526 10.9518 16.6866 10.5644L16.8996 10.2116Z"
                stroke="currentColor"
              />
              <path
                d="M4.25 13.2125C4.25 8.25618 4.25 5.77806 4.83725 4.94436C5.42449 4.11066 7.76294 3.31306 12.4399 1.71785L13.3309 1.41394C15.7689 0.582398 16.9878 0.166626 18.25 0.166626C19.5122 0.166626 20.7311 0.582398 23.1691 1.41394L24.0602 1.71785C28.7371 3.31306 31.0756 4.11066 31.6628 4.94436C32.25 5.77806 32.25 8.25618 32.25 13.2125C32.25 13.961 32.25 14.7729 32.25 15.6533C32.25 19.5359 30.9483 22.5306 29.1389 24.818M4.54997 18.7666C5.88374 25.4291 11.3689 28.8616 14.9811 30.4339C16.1033 30.9223 16.6644 31.1666 18.25 31.1666C19.8356 31.1666 20.3967 30.9223 21.5188 30.4339C22.4183 30.0424 23.4337 29.5357 24.4722 28.8925"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_67_3055">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        title: "Experience",
        // description: `Dolor sit amet consectetur elit sed do eiusmod tempor`,
      },
      {
        icon: (
          <svg
            width="41"
            height="42"
            viewBox="0 0 41 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33 17.625C33 24.4596 27.4036 30 20.5 30M20.5 30C13.5964 30 8 24.4596 8 17.625M20.5 30V39M20.5 39H11.4091M20.5 39H29.5909M20.5 23.25C17.362 23.25 14.8182 20.7316 14.8182 17.625V8.625C14.8182 5.5184 17.362 3 20.5 3C23.638 3 26.1818 5.5184 26.1818 8.625V17.625C26.1818 20.7316 23.638 23.25 20.5 23.25Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: "Great Speakers",
        // description: `Dolor sit amet consectetur elit sed do eiusmod tempor`,
      },
      {
        icon: (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.5 14C27.5 18.1421 24.1421 21.5 20 21.5C15.8579 21.5 12.5 18.1421 12.5 14C12.5 9.85787 15.8579 6.5 20 6.5C24.1421 6.5 27.5 9.85787 27.5 14Z"
              stroke="currentColor"
            />
            <path
              d="M6.5 33.5C7.93592 28.8856 11.63 27.5 20 27.5C28.37 27.5 32.064 28.8856 33.5 33.5"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
        ),
        title: "New People",
        // description: `Dolor sit amet consectetur elit sed do eiusmod tempor`,
      },
      // {
      //   icon: (
      //     <svg
      //       width="40"
      //       height="40"
      //       viewBox="0 0 40 40"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         d="M37.8151 35.7221C37.8481 32.1257 36.1936 30.4606 34.5216 29.9145C33.0493 29.4337 30.0339 29.8731 27.8004 28.7251C25.6646 27.6274 24.4591 24.7218 24.3575 21.423M28.8378 37.9775L28.8376 38M10.1014 35.723L10.1011 35.7455M37.0521 8.66923L37.0519 8.69177M20.9848 35.723C20.9848 32.3413 19.8628 30.0868 17.7642 28.0463M29.7857 15.9686C32.2047 17.6871 34.4487 18.8144 38 17.7056M25.9844 6.96193C23.4594 4.42515 20.0347 3 16.4638 3C12.893 3 9.46846 4.42515 6.94348 6.96193C4.41851 9.49872 3 12.9393 3 16.527C3 20.1143 4.41851 23.5551 6.94348 26.0918L25.9844 6.96193Z"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //       />
      //     </svg>
      //   ),
      //   title: "Party",
      //   description: `Dolor sit amet consectetur elit sed do eiusmod tempor`,
      // },
    ],
  };
  return (
    <section
      id="about"
      className={`relative bg-[#EDF0FE] bg-[top_center] bg-cover ${className}`}
    >
      <SemiCirclePattern className="absolute bottom-5 right-0" />
      <RowStagger className="relative container-fluid pt-20 xl:pt-32.5 2xl:pb-33 mx-auto px-5 sm:px-0 flex flex-col lg:flex-row justify-between items-start lg:items-stretch 2xl:items-start gap-5 md:gap-10 3xl:gap-39 xl:gap-35">
        <DotPattern className="absolute top-13.5 right-0 transform " />
        {/* image */}
        <div
          data-aos="flip-left"
          className=" mb-20 md:mb-0 flex w-full flex-col md:flex-row items-center justify-center xl:justify-end flex-2 gap-5 relative lg:min-w-[42.85%]  xl:ps-47 lg:ps-15"
        >
          <video
            className=" object-cover aspect-[483/613] h-auto w-[90%] xs:w-[70%] md:w-full md:max-w-1/2 lg:max-w-full [transform:rotateY(180deg)] rounded-4xl"
            src="/images/about_section_img.mp4"
            poster="/images/backgrounds/posters/about_section_img.webp"
            alt=""
            autoPlay
            muted
            playsInline
            loop
          />
          {/* <div className="absolute right-0 bottom-0 md:bottom-[unset] md:top-[2rem] md:left-0 md:right-[unset] xl:text-base sm:text-sm xl:max-w-[28ch] sm:max-w-[28ch] max-w-[22ch] transform md:translate-x-[38%] lg:translate-x-0 md:translate-y-0 translate-y-[20%] rounded-[2rem] text-white bg-linear-to-t from-primary to-black opacity-90 xl:p-10 p-6 flex flex-col gap-5">
            <div className="bg-secondary aspect-square xl:w-18.5 w-15 rounded-full flex items-center justify-center">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3067 14.1266L8.99333 20.1066C8.53111 20.3955 8.08333 20.41 7.65 20.15C7.21667 19.89 7 19.5 7 18.98V7.01998C7 6.49998 7.21667 6.10998 7.65 5.84998C8.08333 5.58998 8.53111 5.60442 8.99333 5.89331L19.3067 11.8733C19.7689 12.1044 20 12.48 20 13C20 13.52 19.7689 13.8955 19.3067 14.1266Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="pb-2.5 text-sm sm:text-base leading-[1.2rem] break-words">
              Conveniently real time infrastructures economically
            </p>
            <Link href={"/agenda"} className="cursor-pointer text-nowrap leading-[1] hover:bg-[#4461EF] transition-all duration-500 flex items-center gap-2 py-3.75 px-6.25 rounded-full bg-indigo border border-[#222222] hover:border-[#4461EF] w-fit">
              View Agenda
            </Link>
          </div> */}
        </div>

        {/* content */}
        <div
          data-aos="fade-up"
          className=" text-lg justify-between h-[inherit] flex flex-col lg:gap-7.5 gap-3 px-5 md:px-0"
        >
          {data?.name && (
            <h5 className="text-secondary font-azonix xl:text-lg text-base">
              {data.name}
            </h5>
          )}
          {data?.title && (
            <h3 className="text-tertiary  2xl:leading-[3rem] uppercase font-azonix  tracking-[-1.6px] text-lg md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[2.5rem]">
              {data.title}
            </h3>
          )}
          {data?.description && (
            <p className={`text-[#737373] xl:max-w-[92%] ${isHome? "3xl:text-2xl lg:text-xl" : "lg:text-lg"} text-base`}>
              {data.description}
            </p>
          )}
          <div className="flex xl:items-center justify-between xl:flex-row flex-col gap-5 lg:gap-10 2xl:gap-18 3xl:gap-21.25 py-5 lg:py-0">
            {data.vision.map((vision, i) => (
              <div
                className="flex flex-1 flex-col xs:flex-row items-center gap-2 xl:gap-6"
                key={i}
              >
                <div className="bg-secondary aspect-square min-w-18.5 lg:min-w-15 2xl:min-w-16.5 3xl:min-w-18.5 rounded-full flex items-center justify-center">
                  <div className="lg:scale-75 xl:scale-90 3xl:scale-100">
                    {vision.icon}
                  </div>
                </div>
                {vision?.label && (
                  <p
                    className={`${
                      vision.label.length > 50
                        ? "2xl:max-w-[30ch] 2xl:min-w-[24ch]"
                        : ""
                    } text-sm 3xl:text-sm 2xl:text-base lg:text-sm text-center xs:text-start break-words`}
                    dangerouslySetInnerHTML={{ __html: vision.label }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3.25 md:me-12  border-t border-[#D7D7D7] pt-6 ">
            <div className="flex flex-col justify-center px-2.5">

              <h4 className="text-tertiary font-azonix text-lg 2xl:text-2xl 3xl:text-3xl">
                Why Attend?
              </h4>
            </div>
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="group hidden 2xl:flex items-center border border-[#F4F4F4] px-2.5 pe-2.25 py-5 bg-white hover:bg-secondary focus:bg-secondary active:bg-secondary transition-all duration-700"
              >
                <div className="flex-1/5 flex items-center justify-center">
                  {/* {feature.icon} */}
                  {React.cloneElement(feature.icon, {
                    className:
                      "w-full h-auto text-secondary group-hover:text-white group-focus:text-white group-active:text-white transition-colors duration-700",
                    // stroke: "currentColor",
                  })}
                </div>
                <div className="ps-2.5 flex-4/5">
                  <h5 className="text-tertiary text-sm">{feature.title}</h5>
                  {feature.description&&<p className="text-[#737373] group-hover:text-white group-focus:text-white group-active:text-white duration-700 text-sm  leading-4.5">
                    {feature.description}
                  </p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RowStagger>
      <div className="relative px-10 pb-10 sm:px-0  container mt-10  mx-auto 2xl:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 md:max-w-[90%]  border-t lg:border-t-0 border-[#D7D7D7] pt-6 ">
        <div className="lg:hidden flex flex-col justify-center px-2.5 py-2">
          {/* <p className="text-secondary font-azonix uppercase text-xs leading-[2.5rem]">
            Features
          </p> */}
          <h4 className="text-tertiary font-azonix text-2xl">Why Attend?</h4>
        </div>
        {data.features.map((feature, i) => (
          <div
            key={i}
            className="group flex items-center gap-2.5 border border-[#F4F4F4] px-2.5 py-5 bg-white hover:bg-secondary focus:bg-secondary active:bg-secondary transition-all duration-700"
          >
            <div className="">
              {/* {feature.icon} */}
              {React.cloneElement(feature.icon, {
                className:
                  "text-secondary group-hover:text-white group-focus:text-white group-active:text-white transition-colors duration-700",
                // stroke: "currentColor",
              })}
            </div>
            <div className="">
              <h5 className="text-tertiary text-sm">{feature.title}</h5>
              <p className="text-[#737373] group-hover:text-white group-focus:text-white group-active:text-white duration-700 text-sm leading-4.5">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInfo;
