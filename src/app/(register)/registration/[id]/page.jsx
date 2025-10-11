import RegistrationBlock from "../components/RegistrationBlock";
import PublicServices from "@/services/publicServices";
import { PrimaryLink } from "@/components/buttons/PrimaryButton";
import { LogoBg } from "@/data/icons";

export default async function StudentRegistration({ params }) {
  const passTypes = await PublicServices.getRegisterPassInfo().then((res) =>
    res.data ? res.data : []
  );
  const { id } = await params;
  const sessionList = passTypes.filter((pass) => pass.ticket_price_type == id);
  console.log("asdasdasd", passTypes);
  return (
    <main>
      {sessionList?.length > 0 ? (
        <RegistrationBlock sessionList={sessionList} type={id} />
      ) : (
        <section className="relative overflow-hidden  text-white py-20 2xl:py-36  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
          {/* <BgOverlay/> */}
          <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />
          <div className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
            {/* Error Icon */}
            <div className=" rounded-full p-3 mb-4">
              {/* <svg
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
              </svg> */}
              <svg
                fill="#ec942c"
                height="89"
                width="89"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <path
                  d="M499.5,385.4L308.9,57.2c-31.8-52.9-74.1-52.9-105.9,0L12.5,385.4c-31.8,52.9,0,95.3,63.5,95.3h360
	C499.5,480.7,531.3,438.3,499.5,385.4z M298.4,438.3h-84.7v-84.7h84.7V438.3z M298.4,311.3h-84.7V120.7h84.7V311.3z"
                />
              </svg>
            </div>

            {/* Error Text */}
            <h2 className="text-[2rem] text-[#ec942c] mb-2">
              No passes available
            </h2>
            <p className="text-[#22222280] tracking-[-2%] mb-4">
              Please choose another category.
            </p>

            {/* Action Button */}
            <PrimaryLink
              href="/registration"
              className="uppercase py-2.5 px-10 mt-4 font-semibold bg-[#E84C4C] hover:bg-[#d23c3c]"
            >
              Go Back
            </PrimaryLink>
          </div>
        </section>
      )}
    </main>
  );
}
