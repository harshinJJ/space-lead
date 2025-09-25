import ExhibitorCard from "@/components/cards/ExhibitorCard";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { format } from "date-fns";

// const exhibitorsList = Array(3).fill({
//   booth_details: {
//     number: 12,
//   },
//   code: "B12",
//   company_name: "Eventpro Test Company",
//   email: "demo@spacemain",
// });

const dataList = [
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
  {
    date: "2025-03-25",
    title: "Photography, the best hobby to have",
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  },
];
const PressRelease = ({
  updates = [],
  className = "",
  label,
  title = "Press Releases & Live Updates",
  showNavButton,
  navLabel = "View All Announcements",
  navLink = "/media",
  linkType = "internal",
}) => (
  <section className={`bg-white py-10  ${className}`}>
    <div className="container-fluid mx-auto w-full px-5 sm:px-0 ">
      {label && (
        <p className="text-secondary text-center font-azonix tracking-wide font-light mb-5">
          {label}
        </p>
      )}
      {title && (
        <h3 className="text-4xl md:text-2xl text-center xl:text-[2.875rem] leading-[1.2] font-bold font-azonix text-black/80 mb-12">
          {title}
        </h3>
      )}

      <HorizontalCardStagger className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7.5 gap-5 justify-items-center w-full">
  {dataList.map((item, i) => (
    <div
      key={i}
      className="bg-[#F7F7F7] rounded-2xl p-5.5 flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
    >
      <div className="flex flex-col items-center justify-center uppercase aspect-square bg-gradient-to-b from-secondary to-primary/37  font-semibold text-black 2xl:rounded-4xl rounded-2xl p-2.5 sm:p-5 2xl:p-7.5 shrink-0">
        <span className="md:text-2xl text-sm leading-[1]">
          {item.date && format(new Date(item.date), "MMMM")}
        </span>
        <div className="md:text-[4rem] text-3xl leading-[1]">
          {item.date && format(new Date(item.date), "dd")}
        </div>
      </div>
      <div className="flex flex-col gap-2 xl:gap-4 flex-1">
        <h4 className="2xl:text-2xl text-[#121416] font-semibold">{item.title}</h4>
        <p className="2xl:text-xl text-[#6C757D]">{item.description}</p>
      </div>
    </div>
  ))}
</HorizontalCardStagger>


      {showNavButton && (
        <div className="container-fluid mx-auto mt-10 flex items-center justify-center gap-3 px-5 sm:px-0">
          <PrimaryLink
            href={navLink}
            target={linkType == "external" ? "_blank" : "_self"}
            className="px-5 py-3.5 text-sm lg:text-lg sm:whitespace-nowrap md:whitespace-normal w-fit"
          >
            {navLabel}
          </PrimaryLink>
        </div>
      )}
    </div>
  </section>
);

export default PressRelease;
