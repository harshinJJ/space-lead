import RegistrationServices from "@/services/registrationServices";
import RegistrationBlock from "../components/RegistrationBlock";
import { SUCCESS_CODES } from "@/data/successCodes";
import PublicServices from "@/services/publicServices";

export default async function StudentRegistration() {
  let passTypes;
  const res = await PublicServices.getRegisterPassInfo();
  if (SUCCESS_CODES.includes(res.status) && res.data) {
    passTypes = res?.data?.data||[];
  }
  return (
    <main>
      <RegistrationBlock passTypes={passTypes} type="student" ticketType={"Student Pass"} />
    </main>
  );
}
