import React from "react";
import PublicServices from "@/services/publicServices";
import CommiteePreview from "../components/CommiteePreview";

export const metadata = {
  title: "Commitee",
  description: "Commitee Member",
};
export default async function Commitee({ params, ...props }) {
  const { slug } = await params;

  const commitee = await PublicServices.getCommiteeCategory().then(
    (res) => res?.data || []
  );
  const allMembers = commitee?.flatMap((item) => item?.staff_members || []);

  // Find member matching slug
  const member = allMembers?.find((m) => m.id == slug);
  return (
    <main>
      <CommiteePreview data={member} />
    </main>
  );
}
