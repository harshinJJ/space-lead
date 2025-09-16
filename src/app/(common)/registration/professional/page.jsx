import Marquee from "@/components/sections/Marquee";
import RegistrationBlock from "../components/RegistrationBlock";
import PublicServices from "@/services/publicServices";
import { SUCCESS_CODES } from "@/data/successCodes";

export default async function ProfessionalRegistration() {
  let passTypes;
  const res = await PublicServices.getRegisterPassInfo();
  if (SUCCESS_CODES.includes(res.status) && res.data) {
    passTypes = res?.data?.data || [];
  }
  return (
    <main>
      <RegistrationBlock  passTypes={passTypes} type="professional" ticketType={"Professional Pass"} />
      {/* <Marquee/> */}
    </main>
  );
}
