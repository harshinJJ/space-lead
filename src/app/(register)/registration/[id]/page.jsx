import RegistrationServices from "@/services/registrationServices";
import RegistrationBlock from "../components/RegistrationBlock";
import { SUCCESS_CODES } from "@/data/successCodes";
import PublicServices from "@/services/publicServices";

export default async function StudentRegistration({ params }) {
  const passTypes = await PublicServices.getRegisterPassInfo().then((res) =>
    res.data ? res.data : []
  );
  const { id } = await params;
  return (
    <main>
      <RegistrationBlock
        passTypes={passTypes}
        type={id}
      />
    </main>
  );
}
