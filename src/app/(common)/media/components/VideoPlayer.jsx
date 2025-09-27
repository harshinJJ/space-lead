"use client";
import Image from "next/image";
import React, { useState } from "react";

const VideoPlayer = ({ videoUrl, embedUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      id="video-Player"
      className={`relative w-full ${!videoUrl?"hidden":"block"}  lg:aspect-[1443/509] aspect-video rounded-3xl overflow-hidden`}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Embedded video"
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        videoUrl&&<video
          src={videoUrl}
          controls
          className="w-full h-full rounded-xl"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
