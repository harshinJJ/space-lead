import RegistrationServices from "@/services/registrationServices";
import RegistrationBlock from "../components/RegistrationBlock";
import { SUCCESS_CODES } from "@/data/successCodes";
import PublicServices from "@/services/publicServices";

export default async function StudentRegistration() {
  const passTypes = await PublicServices.getRegisterPassInfo().then(res=>res.data?res.data:[]);

  return (
    <main>
      <RegistrationBlock passTypes={passTypes} type="student" ticketType={"Student Pass"} />
    </main>
  );
}
