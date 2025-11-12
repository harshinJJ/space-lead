import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBtn from "@/components/common/RegisterBtn";

export default function CommonLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* <RegisterBtn href="/registration" className="btn-gradient-secondary gap-2 xl:text-3xl md:text-2xl text-xl  !px-5 ">
        <svg
          width="30"
          height="30"
          className="xl:w-8.5 h-auto md:w-6 w-5 font-azonix rotate-90"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8333 15.5786L18.8333 6.41194C18.8333 2.9011 17.99 1.92027 14.7083 1.83777C14.7083 3.60694 13.2692 5.03694 11.5 5.03694C9.73084 5.03694 8.30084 3.60693 8.29168 1.83777C5.01001 1.92027 4.16668 2.9011 4.16668 6.41193L4.16668 15.5786C4.16668 19.2453 5.08334 20.162 8.75001 20.162L14.25 20.162C17.9167 20.162 18.8333 19.2453 18.8333 15.5786Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.8333 8.24377L15.625 8.24377"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.375 8.24377L4.16667 8.24377"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9476 13.7729L12.8018 14.3412C12.6918 14.3962 12.6093 14.5062 12.5909 14.6254L12.4076 15.8904C12.3618 16.2021 11.9768 16.3304 11.7568 16.1012L10.8676 15.1846C10.7851 15.0929 10.6568 15.0562 10.5284 15.0746L9.27259 15.2946C8.96092 15.3496 8.72259 15.0196 8.86926 14.7446L9.46509 13.6171C9.52009 13.5071 9.52009 13.3696 9.46509 13.2596L8.86926 12.1321C8.72259 11.8479 8.96092 11.5271 9.27259 11.5821L10.5284 11.8021C10.6568 11.8204 10.7759 11.7837 10.8676 11.6921L11.7568 10.7846C11.9768 10.5554 12.3618 10.6837 12.4076 10.9954L12.5909 12.2604C12.6093 12.3887 12.6826 12.4896 12.8018 12.5446L13.9476 13.1037C14.2317 13.2321 14.2317 13.6354 13.9476 13.7729Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Register Now</span>
      </RegisterBtn> */}
    </>
  );
}
