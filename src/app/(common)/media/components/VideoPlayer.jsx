"use client";
import Image from "next/image";
import React, { useState } from "react";

const VideoPlayer = ({ videoUrl, embedUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full  lg:aspect-[1443/509] aspect-video rounded-3xl overflow-hidden">
      {!isPlaying && !embedUrl ? (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail Image */}
          <Image
            width={13443}
            height={509}
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover "
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center bg-gradient-to-b from-indigo/80 to-indigo/0 hover:to-indigo/40 justify-center transition duration-500">
            <div className="flex items-center justify-center w-full max-w-1/7 2xl:max-w-27.5">
              <svg
                width="106"
                height="107"
                viewBox="0 0 106 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.9997 97.6667C77.392 97.6667 97.1664 77.8924 97.1664 53.5C97.1664 29.1075 77.392 9.33337 52.9997 9.33337C28.6071 9.33337 8.83301 29.1075 8.83301 53.5C8.83301 77.8924 28.6071 97.6667 52.9997 97.6667Z"
                  fill="white"
                />
                <path
                  d="M68.0772 58.1773L47.2296 70.4857C43.8739 72.467 39.75 69.8881 39.75 65.8084V41.1915C39.75 37.1119 43.8739 34.5332 47.2296 36.5144L68.0772 48.8228C71.5297 50.8615 71.5297 56.1386 68.0772 58.1773Z"
                  fill="white"
                />
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
  );
};

export default VideoPlayer;
