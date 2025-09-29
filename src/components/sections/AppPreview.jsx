import ExhibitorCard from "@/components/cards/ExhibitorCard";
import { HorizontalCardStagger } from "@/utils/animations/CardStagger";
import { PrimaryLink } from "../buttons/PrimaryButton";
import { format } from "date-fns";
import { AppStoreButton, GooglePlayButton } from "@/data/icons";
import Image from "next/image";

// const exhibitorsList = Array(3).fill({
//   booth_details: {
//     number: 12,
//   },
//   code: "B12",
//   company_name: "Eventpro Test Company",
//   email: "demo@spacemain",
// });

const updateList = [
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
const AppPreview = ({
  className = "",
  label,
  title = "Press Releases & Live Updates",
  showNavButton,
  navLabel = "View All Announcements",
  navLink = "/media",
  linkType = "internal",
}) => (
  <section
    className={`bg-indigo py-10 bg-[url('/images/backgrounds/app_preview_bg.png')] bg-[top_center] bg-cover bg-no-repeat ${className}`}
  >
    <div className="container-fluid mx-auto w-full px-5 sm:px-0 flex flex-col sm:flex-row items-center justify-center gap-20">
      <div className="flex flex-col lg:gap-10 gap-5">
        <p  data-aos="fade-up" className="text-white bg-secondary rounded-full px-7.5 py-5 w-fit text-center leading-[0.7]  text-2xl font-light ">
          Let’s Interact
        </p>
        <h3   data-aos="fade-up"className="sm:text-4xl text-2xl text-start xl:text-5xl leading-[1.5] font-bold font-azonix text-white">
          Everything Space Lead ‘25,
          <br className="2xl:block hidden" /> at your fingertips.
        </h3>
        <div className="flex sm:flex-row flex-col items-center md:gap-7.5 gap-4 md:max-w-2/3">
          <button data-aos="fade-right" >
            <GooglePlayButton  className="w-full" />
          </button>
          <button data-aos="fade-left" >
            <AppStoreButton className="w-full" />
          </button>
        </div>
      </div>
      <div className="" data-aos="flip-left">
        <Image
          width={350}
          height={724}
          className=""
          alt="app-preview"
          src={"/images/app_preview.png"}
        />
      </div>
    </div>
  </section>
);

export default AppPreview;
