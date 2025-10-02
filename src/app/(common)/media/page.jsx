import React from "react";
import MediaTabs from "./components/MediaTabs";
import RegisterBtn from "@/components/common/RegisterBtn";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";

export default async function Media() {
  const [galleryRes, liveUpdateRes] = await Promise.allSettled([
    PublicServices.getMedia(),
    PublicServices.getLiveUpdates(),
  ]);
  const gallery = getFullfilled(galleryRes);
  const liveUpdates = getFullfilled(liveUpdateRes);
  return (
    <main>
      <MediaTabs gallery={gallery} updates={liveUpdates} />
      {/* <RegisterBtn className="!bottom-0">Download Media Kit</RegisterBtn> */}
    </main>
  );
}
