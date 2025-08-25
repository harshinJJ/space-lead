import { Orbitron } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBtn from "@/components/common/RegisterBtn";
import GsapProvider from "@/utils/GsapProvider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpaceLead",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        <Header />
        <GsapProvider>
          {children}
          <Footer />
        </GsapProvider>
        <RegisterBtn />
      </body>
    </html>
  );
}
