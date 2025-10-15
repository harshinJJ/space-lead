import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBtn from "@/components/common/RegisterBtn";
import GsapProvider from "@/utils/GsapProvider";
import PageLoader from "@/utils/animations/PageLoader";
import RecaptchaProvider from "@/contexts/RecaptchaProvider";
import { Toaster } from "react-hot-toast";
import SpinnerLoader from "@/components/loader/SpinnerLoader";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpaceLead",
  description: "INTERNATIONAL AEROSPACE MEDICINE CONFERENCE 2025",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="" className={`${orbitron.variable} antialiased`}>
        {/* Transition overlay */}
       
        <PageLoader />
        <RecaptchaProvider>
          <GsapProvider>{children}</GsapProvider>
        </RecaptchaProvider>
        <Toaster toastOptions={{style:{wordBreak: "break-word"}}} />
      </body>
    </html>
  );
}
