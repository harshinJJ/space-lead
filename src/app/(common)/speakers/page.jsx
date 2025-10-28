import React from "react";
import PublicServices from "@/services/publicServices";
import SpeakerGroup from "./components/SpeakerGroup";

export const metadata = {
  title: "Speakers",
  description: "Event Speakers",
};
export default async function Speakers() {
  const speakers = await PublicServices.getSessionSpeakers().then(
    (res) => res.data || []
  );
  // const [spaceSpeakers, healthSpeakers] = [
  //   speakers.filter((speaker) =>
  //     speaker.category_name?.toLowerCase().includes("space")
  //   ) || [],
  //   speakers.filter((speaker) =>
  //     speaker.category_name?.toLowerCase().includes("health")
  //   ) || [],
  // ];
  const spaceSpeakers = (
    speakers.filter((speaker) =>
      speaker.category_name?.toLowerCase().includes("space")
    ) || []
  ).sort((a, b) => a.firstname?.localeCompare(b.firstname || ""));

  const healthSpeakers = (
    speakers.filter((speaker) =>
      speaker.category_name?.toLowerCase().includes("health")
    ) || []
  ).sort((a, b) => a.firstname?.localeCompare(b.firstname || ""));
  
  return (
    <main>
      <SpeakerGroup
        label="Speakers"
        title={"Space & Advanced Engineering"}
        className="!pb-7.5"
        bgUrl="/images/backgrounds/speaker_group_bg2.jpg"
        cardStyle="primary"
        speakers={spaceSpeakers}
      />
      <SpeakerGroup
        label="Speakers"
        title={"Human Health Off-Planet"}
        className="!pt-7.5"
        speakers={healthSpeakers}
      />
    </main>
  );
}
