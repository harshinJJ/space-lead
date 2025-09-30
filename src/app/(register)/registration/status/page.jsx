import RegistrationServices from "@/services/registrationServices";
import RegistrationBlock from "../components/RegistrationBlock";
import { SUCCESS_CODES } from "@/data/successCodes";
import PublicServices from "@/services/publicServices";
import SuccessModal from "../components/SuccessModal";
import { LogoBg } from "@/data/icons";

export default async function RegistrationStatus({ params, searchParams }) {
  const { status = "success", encryptionId, uid } = await searchParams;
  const response = uid
    ? await PublicServices.getRegisterStatus(uid).then((res) => res.data || {})
    : null;
  return (
    <main>
      <section className="relative overflow-hidden  text-white py-20 2xl:py-36  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
        <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />
        <div className="container-fluid mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
          <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
            YOUR REGISTRATION
          </h2>
          <SuccessModal
            ticketUrl={
              response?.booking_status == "1" && response?.encrypted_unique_id
            }
            uid={response?.unique_id}
            status={status}
          />
        </div>
      </section>
    </main>
  );
}
