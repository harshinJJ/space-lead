"use client";
import React, { useState } from "react";

const VideoPreview = ({ videoUrl, embedUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const points = [
    "Aerospace engineers and system designers",
    "Space medicine researchers and healthcare professionals",
    "Scientists and Academic researchers",
    "Policy- makers and government agencies",
    "Space industry professionals and entrepreneurs",
    "Graduate students in STEM and advanced engineering",
  ];

  return (
    <section className="bg-transparent relative bg-cover bg-center py-10 lg:py-34 px-5 sm:px-0">
      <video
        autoPlay
        loop
        muted
        className="absolute  object-cover absolute-center w-full h-full"
        src="/images/backgrounds/whocanattend_bg.webm"
      />

      <div className="absolute inset-0 bg-black/20 w-full h-full"></div>

      <div className="relative container-fluid mx-auto flex justify-center items-center w-full rounded-xl overflow-hidden p-2 px-5 xl:px-15.75 md:px-10">
        <div className="relative w-full flex flex-col lg:flex-row justify-between items-center xl:gap-28 md:10 gap-5 rounded-xl overflow-hidden">
          <div className="relative w-full lg:max-w-3/5 xl:max-w-[52.5rem] aspect-video rounded-xl overflow-hidden">
            {!isPlaying && !embedUrl ? (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Thumbnail Image */}
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition duration-500">
                  <div className="flex items-center justify-center w-full max-w-1/7 2xl:max-w-27.5">
                    <svg
                      width="110"
                      className="!w-full !h-auto"
                      height="110"
                      viewBox="0 0 110 110"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <foreignObject x="-8" y="-8" width="126" height="126">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            backdropFilter: "blur(4px)",
                            clipPath: "url(#bgblur_0_268_1641_clip_path)",
                            height: "100%",
                            width: "100%",
                          }}
                        ></div>
                      </foreignObject>
                      <g data-figma-bg-blur-radius="8">
                        <rect
                          width="110"
                          height="110"
                          rx="55"
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <mask id="path-2-inside-1_268_1641" fill="white">
                          <path d="M0 55C0 24.6243 24.6243 0 55 0V0C85.3757 0 110 24.6243 110 55V55C110 85.3757 85.3757 110 55 110V110C24.6243 110 0 85.3757 0 55V55Z" />
                        </mask>
                        <path
                          d="M0 55C0 24.6243 24.6243 0 55 0V0C85.3757 0 110 24.6243 110 55V55C110 85.3757 85.3757 110 55 110V110C24.6243 110 0 85.3757 0 55V55Z"
                          fill="white"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M55 110V108C25.7289 108 2 84.2711 2 55H0H-2C-2 86.4802 23.5198 112 55 112V110ZM110 55H108C108 84.2711 84.2711 108 55 108V110V112C86.4802 112 112 86.4802 112 55H110ZM55 0V2C84.2711 2 108 25.7289 108 55H110H112C112 23.5198 86.4802 -2 55 -2V0ZM55 0V-2C23.5198 -2 -2 23.5198 -2 55H0H2C2 25.7289 25.7289 2 55 2V0Z"
                          fill="white"
                          mask="url(#path-2-inside-1_268_1641)"
                        />
                        <path
                          d="M64.1071 55.4152L46.3214 65.2991C46.1161 65.4152 45.9397 65.4286 45.7924 65.3393C45.6451 65.25 45.5714 65.0893 45.5714 64.8571V45.1429C45.5714 44.9107 45.6451 44.75 45.7924 44.6607C45.9397 44.5714 46.1161 44.5848 46.3214 44.7009L64.1071 54.5848C64.3125 54.7009 64.4152 54.8393 64.4152 55C64.4152 55.1607 64.3125 55.2991 64.1071 55.4152Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath
                          id="bgblur_0_268_1641_clip_path"
                          transform="translate(8 8)"
                        >
                          <rect width="110" height="110" rx="55" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title="Embedded video"
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full rounded-xl"
                  />
                )}
              </>
            )}
          </div>

          <div className="xl:min-w-122.5 w-full xl:w-auto ">
            <h3 className="font-bold xl:text-[2.5rem] font-orbitron leading-[1.3] md:text-3xl text-lg mb-5 text-white">
              Who can attend?
            </h3>
            <ul className="flex flex-col gap-2.5">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-lg text-white flex items-center gap-3"
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.299805"
                      width="18"
                      height="18"
                      rx="9"
                      fill="#5AC0BE"
                    />
                    <path
                      d="M12.3601 5.87996C12.5201 5.71996 12.7101 5.63996 12.9301 5.63996C13.1501 5.63996 13.3401 5.71996 13.5001 5.87996C13.6601 6.03996 13.7501 6.23996 13.7701 6.47996C13.7901 6.71996 13.7201 6.91996 13.5601 7.07996L9.06009 12.66C8.90009 12.86 8.70009 12.96 8.46009 12.96C8.22009 12.96 8.02009 12.88 7.86009 12.72L4.86009 9.71996C4.62009 9.51996 4.54009 9.24996 4.62009 8.90996C4.70009 8.56996 4.90009 8.35996 5.22009 8.27996C5.54009 8.19996 5.82009 8.27996 6.06009 8.51996L8.40009 10.92L12.3001 5.93996L12.3601 5.87996Z"
                      fill="white"
                    />
                  </svg>

                  <span className="font-medium text-[#E4E4E4] text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
