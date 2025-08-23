import {
  Geist,
  Geist_Mono,
  Open_Sans,
  Raleway,
  Poppins,
  Inter,
  Encode_Sans_Semi_Condensed,
  Outfit,
  DM_Sans,
  Orbitron,
  Figtree,
} from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBtn from "@/components/common/RegisterBtn";
import GsapProvider from "@/utils/GsapProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const encodeSans = Encode_Sans_Semi_Condensed({
  variable: "--font-encode-sans-semi-condensed",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${raleway.variable} ${poppins.variable} ${inter.variable} ${encodeSans.variable} ${outfit.variable} ${dmSans.variable} ${orbitron.variable} ${figtree.variable} antialiased`}
      >
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
