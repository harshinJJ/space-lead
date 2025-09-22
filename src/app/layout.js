import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBtn from "@/components/common/RegisterBtn";
import GsapProvider from "@/utils/GsapProvider";
import PageLoader from "@/utils/animations/PageLoader";
import RecaptchaProvider from "@/contexts/RecaptchaProvider";
import { Toaster } from "react-hot-toast";

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
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="" className={`${orbitron.variable} antialiased`}>
        {/* Transition overlay */}
        <div
          id="transition-overlay"
          className="fixed inset-0 bg-indigo z-[9999] pointer-events-none"
          style={{ transform: "translateX(-100%)" }} // start hidden to the left
        ></div>
        <Header />
        <PageLoader />
        <RecaptchaProvider>
          <GsapProvider>
            {children}
            <Footer />
          </GsapProvider>
        </RecaptchaProvider>
        <RegisterBtn />
        <Toaster />
      </body>
    </html>
  );
}
