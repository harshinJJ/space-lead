import ExhibitorCard from "@/components/cards/ExhibitorCard";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import { PrimaryLink } from "../buttons/PrimaryButton";

// const exhibitorsList = Array(3).fill({
//   booth_details: {
//     number: 12,
//   },
//   code: "B12",
//   company_name: "Eventpro Test Company",
//   email: "demo@spacemain",
// });

const exhibitorsList = [
  {
    booth_details: {
      number: 12,
    },
    code: "B12",
    company_name: "Eventpro Test Company",
    email: "demo@spacemain",
  },
  {
    booth_details: {
      number: 12,
    },
    code: "B12",
    company_name: "Eventpro Test Company",
    email: "demo@spacemain",
  },
  {
    booth_details: {
      number: 12,
    },
    code: "B12",
    company_name: "Eventpro Test Company",
    email: "demo@spacemain",
    is_active: false,
  },
];
const OurExhibitor = ({
  exhibitors = [],
  className = "",
  label,
  title = "Exhibitors",
  showNavButton,
  navLabel = "View All Exhibitor",
  navLink = "/exhibitors",
  linkType = "internal",
}) =>
  exhibitors?.length > 0 ? (
    <section className={`bg-[#EDF0FE] py-10  ${className}`}>
      <div className="container-fluid mx-auto w-fullpx-5 sm:px-0 ">
        {label && (
          <p
            data-aos="fade-up"
            className="text-secondary text-center font-azonix tracking-wide font-light mb-5"
          >
            {label}
          </p>
        )}
        {title && (
          <h3
            data-aos="fade-up"
            className="text-4xl md:text-2xl text-center xl:text-5xl font-bold font-orbitron text-[#000222] mb-12 uppercase"
          >
            {title}
          </h3>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {exhibitors.map((item, i) => (
            <ExhibitorCard
              key={i}
              index={i}
              boothNumber={item.booth_details?.number}
              name={item?.company_name || item?.name}
              email={item?.email}
              // isActive={item.is_active}
              isActive={item?.booth_details?.active_status}
            />
          ))}
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

export default OurExhibitor;
