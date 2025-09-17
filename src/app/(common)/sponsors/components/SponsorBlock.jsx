import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import Image from "next/image";

const SponsorBlock = ({ sponsors = [], label, title, containerClass = "" }) => {
  return (
    <section
      className={`w-full relative py-12 lg:py-20 lg:pb-30 bg-contain bg-no-repeat bg-[#EDF0FE] px-5 sm:px-0 ${containerClass}`}
    >
      <div className="container-fluid mx-auto text-center">
        {label && (
          <p className="text-secondary font-azonix text-lg mb-2">{label}</p>
        )}
        {title && (
          <h2 className="text-2xl font-orbitron lg:text-[2.875rem] font-bold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        <div className="relative mx-auto">
          <HorizontalCardStagger className="py-3 grid grid-col-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:gap-8">
            {sponsors.map((sponsor, i) => (
              sponsor.logo&&<div
                key={i}
                className="card box-border shadow-lg flex flex-row justify-center items-center p-[26px]  h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0"
              >
                <Image
                  width={150}
                  height={40}
                  src={sponsor.logo}
                  alt={sponsor.company_name||"sponsor"}
                  className="max-h-10 object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                />
              </div>
            ))}
          </HorizontalCardStagger>
        </div>
      </div>
    </section>
  );
};

export default SponsorBlock;
