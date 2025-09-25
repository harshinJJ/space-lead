import Marquee from "@/components/sections/Marquee";
import RegistrationBlock from "../components/RegistrationBlock";
import PublicServices from "@/services/publicServices";
import { SUCCESS_CODES } from "@/data/successCodes";

export default async function ProfessionalRegistration() {
  const passTypes = await PublicServices.getRegisterPassInfo().then(res=>res.data?res.data:[]);

  return (
    <main>
      <RegistrationBlock  passTypes={passTypes} type="professional" ticketType={"Professional Pass"} />
      {/* <Marquee/> */}
    </main>
  );
}
