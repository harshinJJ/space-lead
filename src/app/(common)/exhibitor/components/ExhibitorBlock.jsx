
import ExhibitContent from './ExhibitContent';
import ExhibitorList from './ExhibitorList';
import CategoryList from './CategoryList';

const ExhibitorBlock = () => {
  return (
    <div 
      className={`w-full relative py-12 lg:py-20 lg:pb-0 bg-[url('/images/backgrounds/sponsor_bg_transparant.png')] bg-[center_2rem] bg-contain bg-no-repeat bg-[#EDF0FE] `}
    >
      <ExhibitContent />
      <ExhibitorList />
      <CategoryList />
    </div>
  );
};

export default ExhibitorBlock;
