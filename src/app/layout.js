import { Orbitron,Noto_Kufi_Arabic,Space_Grotesk } from "next/font/google";
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

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpaceLead",
  description: "INTERNATIONAL AEROSPACE MEDICINE CONFERENCE 2025",
  robots: "noindex, nofollow",
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
      <body id="" className={`${orbitron.variable} ${notoKufiArabic.variable} ${spaceGrotesk.variable} antialiased`}>
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
