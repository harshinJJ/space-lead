import PublicServices from "@/services/publicServices";
import SuccessModal from "../components/SuccessModal";
import { LogoBg } from "@/data/icons";
import { PrimaryLink } from "@/components/buttons/PrimaryButton";

export default async function RegistrationStatus({ params, searchParams }) {
  const { status = "success", encryptionId, uid } = await searchParams;
  const response = uid
    ? await PublicServices.getRegisterStatus(uid).then((res) => res.data || {})
    : null;
  return (
    <main>
      <section className="relative overflow-hidden  text-white py-20 2xl:py-36  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
        <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />
        {response?.booking_status  ? (
          <div className="container-fluid mx-auto flex flex-col items-center justify-center lg:px-56.75 px-5">
            <h2 className="text-3xl md:text-4xl xl:text-[2.5rem] font-azonix  mb-8 tracking-wide text-center">
              YOUR REGISTRATION
            </h2>
            <SuccessModal
              ticketUrl={
                response?.booking_status == "2" && response?.encrypted_unique_id
              }
              uid={response?.unique_id}
              status={status}
              invoiceId={response?.invoice_id}
            />
          </div>
        ) : (
          <div className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
            {/* Error Icon */}
            <div className="bg-[#E84C4C1F] rounded-full p-3 mb-4">
              <svg
                width="89"
                height="90"
                viewBox="0 0 89 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.15625 45C0.15625 20.5096 20.0096 0.65625 44.5 0.65625C68.9905 0.65625 88.8438 20.5096 88.8438 45C88.8438 69.4905 68.9905 89.3438 44.5 89.3438C20.0096 89.3438 0.15625 69.4905 0.15625 45ZM29.9374 30.4374C31.1456 29.2292 33.1044 29.2292 34.3126 30.4374L44.5 40.6246L54.6875 30.4374C55.8957 29.2292 57.8543 29.2292 59.0625 30.4374C60.2707 31.6456 60.2707 33.6044 59.0625 34.8126L48.875 45L59.0625 55.1875C60.2707 56.3957 60.2707 58.3543 59.0625 59.5625C57.8543 60.7707 55.8953 60.7707 54.6871 59.5625L44.5 49.3754L34.3126 59.5625C33.1044 60.7707 31.1456 60.7707 29.9374 59.5625C28.7292 58.3543 28.7292 56.3953 29.9374 55.1871L40.1246 45L29.9374 34.8126C28.7292 33.6044 28.7292 31.6456 29.9374 30.4374Z"
                  fill="#F82D2D"
                />
              </svg>
            </div>

            {/* Error Text */}
            <h2 className="text-[2rem] text-center text-[#E84C4C] mb-2">
              Something went wrong
            </h2>
            <p className="text-[#22222280] text-center tracking-[-2%] mb-4">
              Please try again or go back
            </p>

            {/* Action Button */}
            <PrimaryLink
              href="/registration"
              className="uppercase py-2.5 px-10 mt-4 font-semibold bg-[#E84C4C] hover:bg-[#d23c3c]"
            >
              Go Back
            </PrimaryLink>
          </div>
        )}
      </section>
    </main>
  );
}
