import ExhibitorCard from "@/components/cards/ExhibitorCard";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";

const exhibitorsList = Array(8).fill({
  booth_details: {
    number: 12,
  },
  code: "B12",
  company_name: "Eventpro Test Company",
  email: "demo@spacemain",
});

const ExhibitorList = ({ exhibitors = [],label,title="All Exhibitor" }) => (
  <section className="container-fluid mx-auto w-full py-10 px-5 sm:px-0">
    {label&&<p className="text-secondary text-center font-azonix tracking-wide font-light mb-5">
      {label}
    </p>}
    <h3 className="text-4xl md:text-2xl text-center xl:text-5xl font-bold font-orbitron text-[#000222] mb-12">
      {title}
    </h3>

    <HorizontalCardStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      {exhibitors.map((item, i) => (
        <ExhibitorCard key={i} boothNumber={item.booth_details?.number} isActive={item?.booth_details?.active_status} name={item?.company_name||item?.name} email={item?.email} />
      ))}
      {/* {exhibitors.slice(0,5).map((item, i) => (
        <ExhibitorCard key={i} boothNumber={item.booth_details?.number} name={item?.company_name||item?.name} isActive={false} email={item?.email} />
      ))} */}
    </HorizontalCardStagger>
  </section>
);

export default ExhibitorList;
