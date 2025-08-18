"use client";
import React, { useState } from "react";

const VideoPreview = ({ videoUrl, embedUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[url('/images/backgrounds/video_preview_bg.png')] bg-cover bg-center py-10 lg:pt-23 lg:pb-16.75 px-5 sm:px-0">
      <div className="container mx-auto flex justify-center items-center w-full relative rounded-xl overflow-hidden p-2">
        <div className="relative w-full aspect-video md:aspect-[21/9] max-w-[89rem] rounded-xl overflow-hidden">
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                <div className="flex items-center justify-center max-w-1/6 md:max-w-full">
                  <svg
                    width="110"
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
      </div>
    </section>
  );
};

export default VideoPreview;
