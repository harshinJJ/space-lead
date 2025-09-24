import React from "react";
import PublicServices from "@/services/publicServices";
import SpeakerGroup from "./components/SpeakerGroup";

export const metadata = {
  title: "Speakers",
  description: "Event Speakers",
};
export default async function Speakers() {
  const speakers = await PublicServices.getSpeakers().then(
    (res) => res.data || []
  );
  return (
    <main>
      <SpeakerGroup
        label="Speakers"
        title={"Space & Advanced Engineering"}
        className="!pb-7.5"
        bgUrl="/images/backgrounds/speaker_group_bg2.jpg"
        cardStyle="primary"
        speakers={speakers}
      />
      <SpeakerGroup
        label="Speakers"
        title={"Space & Advanced Engineering"}
        className="!pt-7.5"
        speakers={speakers}
      />
      {/* speakers block pending */}
      {/* <Marquee /> */}
      {/* <VideoPreview
        videoUrl={"/videos/sample.mp4"}
        thumbnail={"/images/video_thumbnail.png"}
      />
      <SponsorList /> */}
    </main>
  );
}
