import React from "react";
import Marquee from "@/components/sections/Marquee";
import { SponsorList } from "@/components/sections/Sponsors";
import VideoPreview from "@/components/sections/VideoPreview";
import MemberPreview from "../components/MemberPreview";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";

export const metadata = {
  title: "Speakers",
  description: "Event Speakers",
};
export default async function Speakers({ params,...props }) {
  const { slug } = await params;
  // const speakers = await PublicServices.getSpeakers().then(
  //   (res) => res.data || []
  // );
  const [speakersRes, speaker] = await Promise.allSettled([
    PublicServices.getSpeakers(),
    PublicServices.getSpeaker(slug),
  ]);
  const activeSpeaker = getFullfilled(speaker);
  const speakers = getFullfilled(speakersRes).filter(item=>item?.id!=activeSpeaker?.id);
  return (
    <main>
      <MemberPreview activeSpeaker={activeSpeaker} speakerList={speakers} />
    </main>
  );
}
