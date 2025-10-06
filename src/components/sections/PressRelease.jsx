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
}) =>
  updates?.length > 0 ? (
    <section className={`bg-white py-10  ${className}`}>
      <div className="container-fluid mx-auto w-full px-5 sm:px-0 ">
        {label && (
          <p className="text-secondary text-center font-azonix tracking-wide font-light mb-5">
            {label}
          </p>
        )}
        {title && (
          <h3 className="text-center xl:text-5xl md:text-4xl text-2xl  leading-[1.2] font-bold font-azonix text-black lg:mb-12 mb-6">
            {title}
          </h3>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-7.5 gap-5 justify-items-center w-full">
          {updates.map((item, i) => {
            const month=item.date && format(new Date(item.date), "MMMM")
            const day=item.date && format(new Date(item.date), "dd")
            return (
              <div
                key={i}
                data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
                className="bg-[#F7F7F7] rounded-2xl p-5.5 flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full"
              >
                <div className="flex xs:min-w-2/9 min-w-1/3 font-droid-bold font-bold flex-col items-center justify-center uppercase aspect-square bg-gradient-to-b from-secondary to-primary/37  text-black 2xl:rounded-4xl rounded-2xl p-2.5 sm:p-5 2xl:p-7.5 shrink-0">
                  <span className={`${month?.length>5?"md:text-base text-xs":"md:text-2xl text-sm"} leading-[1]`}>
                    {month}
                  </span>
                  <div className="md:text-[4rem] text-3xl leading-[1]">
                    {day}
                  </div>
                </div>
                <div className="flex flex-col gap-2 xl:gap-4 flex-1">
                  <h4 className="2xl:text-2xl text-[#121416] font-semibold">
                    {item.title}
                  </h4>
                  <p className="2xl:text-xl text-[#6C757D]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

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
  ) : null;

export default PressRelease;
