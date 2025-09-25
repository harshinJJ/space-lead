import RegisterFooter from "@/components/footer/RegisterFooter";
import RegisterHeader from "@/components/header/RegisterHeader";

export default function CommonLayout({ children }) {
  return (
    <>
      <RegisterHeader />
      {children}
      <RegisterFooter />
    </>
  );
}
