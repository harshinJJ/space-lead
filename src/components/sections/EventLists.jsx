import React from "react";
import { PrimaryLink } from "../buttons/PrimaryButton";
import SpeakerTag from "../cards/SpeakerTag";
import Image from "next/image";

const EventLists = () => {
  const events = [
    {
      id: 1,
      date: "18 Nov, 2025",
      time: "10:00 - 12:00",
      title: "Innovate Design Conference 2025",
      location: "City Mall Complex, Sandiago",
      speakers: [
        {
          name: "John D. Alison",
          image: "/images/speaker1.png",
          role: "Design Expert",
        },
        {
          name: "John D. Alison",
          image: "/images/speaker2.png",
          role: "Moderator",
        },
        {
          name: "John D. Alison",
          image: "/images/speaker3.png",
          role: "Panelist",
        },
      ],
      image: "/images/event1.png", // Replace with actual path
      buttonColor: "bg-purple-500",
    },
    {
      id: 2,
      date: "18 Nov, 2025",
      time: "10:00 - 12:00",
      title: "Innovate Design Conference 2025",
      location: "City Mall Complex, Shanghai",
      speakers: [
        {
          name: "John D. Alison",
          image: "/images/speaker1.png",
          role: "Design Expert",
        },
      ],
      image: "/images/event2.png",
      buttonColor: "bg-green-500",
    },
    {
      id: 3,
      date: "18 Nov, 2025",
      time: "10:00 - 12:00",
      title: "Innovate Design Conference 2025",
      location: "City Mall Complex, Shanghai",
      speakers: [
        {
          name: "John D. Alison",
          image: "/images/speaker1.png",
          role: "Design Expert",
        },
        {
          name: "John D. Alison",
          image: "/images/speaker2.png",
          role: "Moderator",
        },
        {
          name: "John D. Alison",
          image: "/images/speaker3.png",
          role: "Moderator",
        },
      ],
      image: "/images/event3.png",
      buttonColor: "bg-purple-500",
    },
  ];
  const tags = ["Business", "Marketing", "Design"];
  return (
    <div className="container mx-auto px-5 lg:px-10 rounded-4xl bg-indigo/44 lg:py-16 py-6 text-white">
      {/* Heading */}
      <div className="mb-10 ">
        <p className="text-secondary  tracking-wide font-light">Event Lists</p>
        <div className="flex flex-col lg:flex-row justify-between">
          <h2 className="xl:text-5xl md:text-4xl text-2xl font-azonix text-center leading-tight font-bold text-white mb-4 lg:max-w-2xl">
            Explore Upcoming Events with Industry Expert
          </h2>
          <div className="flex flex-wrap items-start justify-center gap-3 ">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex-1 text-center bg-secondary text-indigo px-4 xl:px-8 py-2 rounded-full text-base xl:text-lg "
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div className="space-y-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="border-2 lg:p-7 pb-2 border-white/6 rounded-3xl overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Image */}
            <div className="lg:w-2/5 lg:rounded-3xl overflow-hidden">
              <Image
                width={509}
                height={407}
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:w-3/5 p-2 sm:p-6 flex flex-col gap-9 items-end sm:items-start">
              <div className="border-b border-white/6 pb-9 w-full">
                <div className="flex items-center gap-1 sm:gap-4 text-sm text-white mb-3 bg-white/6 w-fit px-2 sm:px-10 py-1 sm:py-3 rounded-sm sm:rounded-full">
                  <span>{event.date}</span>
                  <span className="border-s ps-1 sm:ps-4 border-white/19">
                    {event.time}
                  </span>
                </div>
                <h3 className="text-lg sm:text-3xl  text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/50 text-sm leading-7 mb-4 flex items-center gap-1 sm:gap-2">
                  <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.01172 12.0464C3.70703 11.6571 3.32617 11.1535 2.86914 10.5356C2.41211 9.91781 1.96989 9.264 1.54248 8.57422C1.11507 7.88444 0.753255 7.19678 0.457031 6.51123C0.152344 5.82568 0 5.21631 0 4.68311C0 4.0568 0.11849 3.46436 0.355469 2.90576C0.592448 2.34717 0.918294 1.86051 1.33301 1.4458C1.74772 1.03109 2.23438 0.701009 2.79297 0.455566C3.35156 0.218587 3.94824 0.100098 4.58301 0.100098C5.21777 0.100098 5.81445 0.218587 6.37305 0.455566C6.93164 0.701009 7.41829 1.03109 7.83301 1.4458C8.24772 1.86051 8.57357 2.34717 8.81055 2.90576C9.05599 3.46436 9.17871 4.0568 9.17871 4.68311C9.17871 5.21631 9.02637 5.82568 8.72168 6.51123C8.41699 7.19678 8.05094 7.88444 7.62354 8.57422C7.19613 9.264 6.75391 9.91781 6.29688 10.5356C5.83138 11.1535 5.44629 11.6571 5.1416 12.0464C4.99772 12.2241 4.80941 12.313 4.57666 12.313C4.34391 12.313 4.1556 12.2241 4.01172 12.0464ZM4.58301 6.21924C5.00619 6.21924 5.368 6.07113 5.66846 5.7749C5.96891 5.47868 6.11914 5.11475 6.11914 4.68311C6.11914 4.26839 5.96891 3.91081 5.66846 3.61035C5.368 3.3099 5.00619 3.15967 4.58301 3.15967C4.15983 3.15967 3.80013 3.3099 3.50391 3.61035C3.20768 3.91081 3.05957 4.26839 3.05957 4.68311C3.05957 5.11475 3.20768 5.47868 3.50391 5.7749C3.80013 6.07113 4.15983 6.21924 4.58301 6.21924Z"
                      fill="#5AC0BE"
                    />
                  </svg>

                  <span className="">{event.location}</span>
                </p>
                <div className="flex flex-wrap gap-3.5">
                  {event.speakers.map((speaker, i) => (
                    <SpeakerTag
                      key={i}
                      image={speaker.image}
                      name={speaker.name}
                      role={speaker.role}
                    />
                  ))}
                </div>
              </div>

              {/* Button */}
              <PrimaryLink className="w-fit group px-6 py-5 items-center gap-2 btn-gradient transition-all duration-300">
                <span className="leading-[100%] text-lg group-hover:hidden">
                  View Details
                </span>
                <span className="leading-[100%] text-lg group-hover:block hidden">
                  Join The Event
                </span>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7598 9.46875L11.6807 15.5479C11.5732 15.6553 11.4463 15.7383 11.2998 15.7969C11.1533 15.8555 11.002 15.8848 10.8457 15.8848C10.6797 15.8848 10.521 15.8555 10.3696 15.7969C10.2183 15.7383 10.0889 15.6553 9.98145 15.5479C9.72754 15.3135 9.60059 15.0254 9.60059 14.6836C9.60059 14.3418 9.72754 14.0586 9.98145 13.834L13.9658 9.82031H2.34961C2.00781 9.82031 1.71973 9.70312 1.48535 9.46875C1.25098 9.23438 1.13379 8.94629 1.13379 8.60449C1.13379 8.28223 1.25098 7.99902 1.48535 7.75488C1.71973 7.51074 2.00781 7.38867 2.34961 7.38867H13.9658L9.98145 3.4043C9.72754 3.16992 9.60059 2.88184 9.60059 2.54004C9.60059 2.19824 9.72754 1.91504 9.98145 1.69043C10.2061 1.44629 10.4893 1.32422 10.8311 1.32422C11.1729 1.32422 11.4561 1.44629 11.6807 1.69043L17.7598 7.76953C18.0039 7.99414 18.126 8.27734 18.126 8.61914C18.126 8.96094 18.0039 9.24414 17.7598 9.46875Z"
                    fill="white"
                  />
                </svg>
              </PrimaryLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLists;
