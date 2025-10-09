import RegisterFooter from "@/components/footer/RegisterFooter";
import Header from "@/components/header/Header";
import RegisterHeader from "@/components/header/RegisterHeader";

export default function CommonLayout({ children }) {
  return (
    <>
      {/* <RegisterHeader /> */}
      <Header className="xl:relative" showTitleBlock={false}/>
      {children}
      <RegisterFooter />
    </>
  );
}
