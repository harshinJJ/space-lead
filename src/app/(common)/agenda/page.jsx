import EventAgenda from "@/components/sections/EventAgenda";
import PublicServices from "@/services/publicServices";
import { getFullfilled } from "@/utils/functions";
import React from "react";

export const metadata = {
  title: "Agenda",
  description: "Event Agenda",
};
export default async function Agenda() {
  const [agendaRes] = await Promise.allSettled([
    PublicServices.getAgenda(),
  ]);
  const agenda = getFullfilled(agendaRes);
  return (
    <main>
      <section className=" bg-indigo bg-center bg-cover py-20 ">
        <EventAgenda label="Your agenda, your way  --  Never miss a moment" title="Experience what’s now Explore what’s next" dataList={agenda} className=" px-4 xl:px-15.75 " />
      </section>
    </main>
  );
}
