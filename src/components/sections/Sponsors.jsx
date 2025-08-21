"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { PrimaryDualTextLink, PrimaryLink } from "../buttons/PrimaryButton";

const sponsors = [
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
  { name: "Datab", logo: "/images/logos/sponsor1.png" },
  { name: "Novolex", logo: "/images/logos/sponsor2.png" },
  { name: "Walmart", logo: "/images/logos/sponsor3.png" },
  { name: "Logitek", logo: "/images/logos/sponsor4.png" },
  { name: "Acme Corp", logo: "/images/logos/sponsor5.png" },
  { name: "Aderant", logo: "/images/logos/sponsor6.png" },
  { name: "Templar", logo: "/images/logos/sponsor7.png" },
];

export default function SponsorsBlock() {
  return (
    <>
      <SponsorContent />
      <SponsorList />
    </>
  );
}

export const SponsorContent = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-25 pb-10 md:pb-30.5">
      <div className="container px-5 lg:px-12.75 mx-auto flex flex-col xl:flex-row items-start gap-8 md:gap-20">
        {/* Image */}
        <div className="w-full xl:w-1/2 xl:max-w-[44rem] flex justify-center">
          <img
            src="/images/sponsor_content_img.png" // replace with your actual image path
            alt="Astronaut looking at space"
            className="w-full  rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full xl:w-1/2 text-center xl:text-left flex flex-col items-center xl:items-start">
          <p className="text-secondary text-lg mb-4 leading-[100%] font-open-sans">
            Our Sponsors
          </p>
          <h2 className="text-3xl lg:text-[2.875rem] lg:leading-13.75 font-bold font-raleway lg:mb-14 mb-7">
            Why sponsor
          </h2>
          <p className="font-poppins sm:text-lg leading-[150%]  mb-10">
            Sponsoring the Space Lead ’25 Conference positions your organization
            at the forefront of space innovation. Engage with top-level
            decision-makers, policymakers, and global disruptors. Build
            credibility, amplify visibility, expand your network, and forge
            lasting partnerships through a high-impact platform designed for
            those shaping the next era of space.
          </p>
          <PrimaryDualTextLink
            href="#"
            className="px-7.5 py-6 text-lg tracking-[1px] [&span]:font-[600]"
            initialText="View All Sponsors"
            hoverText="Join The Event"
          />
        </div>
      </div>
    </section>
  );
};

export const SponsorList = () => {
  return (
    <section className="w-full relative py-12 lg:py-20 lg:pb-30 bg-[url('/images/backgrounds/sponsorlist_bg.png')]">
                {/* Left & right edge gradients */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-50 xl:w-100 bg-gradient-to-r from-[#EDF0FE] to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-50 xl:w-100 bg-gradient-to-l from-[#EDF0FE] to-transparent"></div>

      <div className="container px-5 mx-auto lg:px-12.75 text-center">
        <p className="text-secondary font-open-sans text-lg mb-2">
          Our Sponsors
        </p>
        <h2 className="text-2xl font-raleway lg:text-[2.875rem] font-bold text-gray-900 mb-4">
          Sponsorship opportunities
        </h2>
        <p className="lg:max-w-[68.5rem] xl:text-start leading-[1.875rem] text-lg mx-auto text-[#303030] mb-10 ">
          The Space Lead ’25 Conference offers curated sponsorship opportunities
          designed to deliver strategic value and measurable impact. Gain
          exclusive visibility, immersive branding experiences, and tailored
          access to key stakeholders — including government leaders, educators,
          researchers, global investors, and C-level executives. Whether your
          goal is market expansion, thought leadership, lead generation, or
          ecosystem engagement, choose your tier and lead the conversation.
        </p>
      </div>
      <div className="relative mx-auto ">

        {/* Swiper for logos */}
        <div className="py-3">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 0, // continuous scroll
              disableOnInteraction: false,
              reverseDirection: false, // first swiper normal
            }}
            speed={3000} // control smoothness
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1400: { slidesPerView: 6 },
            }}
          >
            {sponsors.map((sponsor, idx) => (
              <SwiperSlide key={idx}>
                {/* <div className="flex items-center justify-center bg-white shadow rounded-xl py-4 px-6 hover:shadow-md transition"> */}
                <div className="box-border flex flex-row justify-center items-center p-[26px] md:w-[248px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.98,0,0)] flex-none order-0 self-stretch grow-0">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-10 object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-3">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            autoplay={{
              delay: 0, // continuous scroll
              disableOnInteraction: false,
              reverseDirection: true, // first swiper normal
            }}
            speed={3000} // control smoothness
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1400: { slidesPerView: 6 },
            }}
          >
            {sponsors.map((sponsor, idx) => (
              <SwiperSlide key={idx}>
                <div className="box-border flex flex-row justify-center items-center p-[26px] md:w-[247px] h-[86.96px] bg-white rounded-[20px] [transform:matrix(1,0,0.26,0.97,0,0)] flex-none order-0 self-stretch grow-0">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-10 object-contain [transform:matrix(1,0,-0.26,1.03,0,0)]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
