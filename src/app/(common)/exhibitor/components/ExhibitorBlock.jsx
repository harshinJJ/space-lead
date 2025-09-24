
import ExhibitContent from './ExhibitContent';
import ExhibitorList from './ExhibitorList';
import CategoryList from './CategoryList';

const ExhibitorBlock = ({exhibitors=[],booths=[]}) => {
  return (
    <div 
      className={`w-full relative py-12 lg:py-20  bg-[url('/images/backgrounds/sponsor_bg_transparant.png')] bg-[center_2rem] bg-contain bg-no-repeat bg-[#EDF0FE] `}
    >
      {/* <ExhibitContent /> */}
      <ExhibitorList title='Exhibitors' exhibitors={exhibitors} />
      {/* <CategoryList categories={booths} /> */}
    </div>
  );
};

export default ExhibitorBlock;
