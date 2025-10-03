import { RowStagger } from "@/utils/animations/CardStagger";
import Image from "next/image";

const ExhibitContent = () => (
  <section className="w-full">
    <RowStagger className="container-fluid mx-auto gap-y-10 w-full flex flex-col lg:flex-row items-start px-5 sm:px-0 lg:py-8  py-10 relative overflow-hidden">
      <div className="flex justify-center items-center mb-6 lg:mb-0 relative w-full lg:w-auto h-auto xl:min-w-[656px] xl:max-w-[656px] lg:h-[283px] rounded-2xl overflow-hidden border-2 border-blue-200">
        {/* <Image
        width={657}
        height={299}
          src="/images/why_exhibit_img.png"
          alt="Why Exhibit"
          className="object-cover w-full h-auto"
        /> */}
        <video
          className=" object-cover w-full h-auto"
          src="/images/why_exhibit_img.webm"
          poster="/images/backgrounds/posters/why_exhibit_img.webp"
          alt=""
          autoPlay
          muted
          loop
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col justify-center lg:pl-8">
        <p className="text-secondary  tracking-wide font-light mb-5 font-azonix">
          Exhibitors
        </p>
        <h2 className="text-2xl xl:text-5xl font-bold font-orbitron text-[#000222] mb-12">
          Why Exhibit
        </h2>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
          Showcase your offerings, technologies and expertise at the Space Lead
          Conference where industry innovators, decision-makers, and
          stakeholders connect with high-value prospects, strategic partners,
          and new markets, all under a single platform. Tap into high-impact
          opportunities in the space sector and accelerate growth in a rapidly
          evolving landscape.
        </p>
      </div>
    </RowStagger>
  </section>
);

export default ExhibitContent;
