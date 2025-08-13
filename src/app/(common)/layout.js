import { Geist, Geist_Mono, Open_Sans,Raleway,Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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

export const metadata = {
  title: "SpaceLead",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} ${raleway.variable} ${poppins.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
