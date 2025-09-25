import React from "react";
import MediaTabs from "./components/MediaTabs";
import RegisterBtn from "@/components/common/RegisterBtn";

export default function Media() {
  return (
    <main>
      <MediaTabs />
      <RegisterBtn className="!bottom-0">Download Media Kit</RegisterBtn>
    </main>
  );
}
