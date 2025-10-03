import ExhibitorList from "./ExhibitorList";

const ExhibitorBlock = ({ exhibitors = [], booths = [] }) => {
  return exhibitors?.length > 0 ? (
    <div
      className={`w-full relative py-12 lg:py-20  bg-[url('/images/backgrounds/sponsor_bg_transparant.png')] bg-[center_2rem] bg-contain bg-no-repeat bg-[#EDF0FE] `}
    >
      <ExhibitorList title="Exhibitors" exhibitors={exhibitors} />
    </div>
  ) : null;
};

export default ExhibitorBlock;
