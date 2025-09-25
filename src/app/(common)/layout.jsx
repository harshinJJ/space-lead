import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


export default function CommonLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
