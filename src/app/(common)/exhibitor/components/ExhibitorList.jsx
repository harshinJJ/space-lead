const exhibitors = Array(8).fill({
  code: "B12",
  name: "Eventpro Test Company",
  email: "demo@spacemain",
});

const ExhibitorList = () => (
  <section className="container-fluid mx-auto w-full py-10 px-5 sm:px-0">
    <p className="text-secondary text-center tracking-wide font-light mb-5">
      Our Exhibitor
    </p>
    <h3 className="text-4xl md:text-2xl text-center xl:text-5xl font-bold font-raleway text-[#000222] mb-12">
      All Exhibitor
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
      {exhibitors.map((item, i) => (
        <div
          key={i}
          className="bg-[#F2F5FE] font-poppins  border-2 border-white rounded-[1.25rem] shadow-md p-5.5 pb-8 w-full flex flex-col items-start"
        >
          <div className="flex items-end mb-2 gap-2.5">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_246_5137)">
                <path
                  d="M17.5797 18.78H15.6986C15.1618 18.78 14.7266 19.2152 14.7266 19.752C14.7266 19.8419 14.7397 19.9285 14.7626 20.0112H18.5157C18.5385 19.9285 18.5517 19.8419 18.5517 19.752C18.5517 19.2152 18.1166 18.78 17.5797 18.78Z"
                  fill="url(#paint0_linear_246_5137)"
                />
                <path
                  d="M23.2819 18.78H21.4007C20.8639 18.78 20.4287 19.2152 20.4287 19.752C20.4287 19.8419 20.4419 19.9285 20.4647 20.0112H24.2179C24.2407 19.9285 24.2539 19.8419 24.2539 19.752C24.2539 19.2152 23.8187 18.78 23.2819 18.78Z"
                  fill="url(#paint1_linear_246_5137)"
                />
                <path
                  d="M11.0333 16.7701H10.1587V16.2826C10.1587 15.9248 9.86853 15.6346 9.51073 15.6346C9.15293 15.6346 8.86276 15.9248 8.86276 16.2826V16.7701H7.56677V16.2826C7.56677 15.9248 7.2766 15.6346 6.9188 15.6346C6.561 15.6346 6.27083 15.9248 6.27083 16.2826V16.7701H5.39602C5.03822 16.7701 4.74805 17.0602 4.74805 17.418V20.0098H11.6814V17.418C11.6813 17.0602 11.3913 16.7701 11.0333 16.7701Z"
                  fill="url(#paint2_linear_246_5137)"
                />
                <path
                  d="M26.9095 21.3076H24.418V21.3076C24.4185 21.3184 24.4196 21.3291 24.4196 21.34V29.0996H26.0647C26.6015 29.0996 27.0367 28.6644 27.0367 28.1276V21.2949C26.9956 21.3031 26.953 21.3076 26.9095 21.3076Z"
                  fill="url(#paint3_linear_246_5137)"
                />
                <path
                  d="M10.1709 21.3063C10.1714 21.3171 10.1725 21.3277 10.1725 21.3386V29.0983H13.6256V21.3386C13.6256 21.3277 13.6267 21.317 13.6272 21.3063H10.1709Z"
                  fill="url(#paint4_linear_246_5137)"
                />
                <path
                  d="M1.54546 21.308C1.53374 21.308 1.52235 21.3068 1.51074 21.3063V28.128C1.51074 28.6648 1.94591 29.1 2.48275 29.1H4.12782V21.3404C4.12782 21.3295 4.1289 21.3188 4.12946 21.308H1.54546Z"
                  fill="url(#paint5_linear_246_5137)"
                />
                <path
                  d="M14.9189 21.3063C14.9195 21.3171 14.9206 21.3277 14.9206 21.3386V29.0983H18.3736V21.3386C18.3736 21.3277 18.3747 21.317 18.3753 21.3063H14.9189Z"
                  fill="url(#paint6_linear_246_5137)"
                />
                <path
                  d="M19.6689 21.3063C19.6695 21.3171 19.6706 21.3277 19.6706 21.3386V29.0983H23.1236V21.3386C23.1236 21.3277 23.1247 21.317 23.1253 21.3063H19.6689Z"
                  fill="url(#paint7_linear_246_5137)"
                />
                <path
                  d="M5.42285 21.3063C5.42336 21.3171 5.42449 21.3277 5.42449 21.3386V29.0983H8.87753V21.3386C8.87753 21.3277 8.87861 21.317 8.87918 21.3063H5.42285Z"
                  fill="url(#paint8_linear_246_5137)"
                />
                <path
                  d="M27.9173 8.66659H26.596L14.8379 0.280603C14.5002 0.0397666 14.0467 0.0397666 13.7091 0.280603L1.95096 8.66659H1.08334C0.546555 8.66659 0.111328 9.10176 0.111328 9.6386C0.111328 10.1754 0.546498 10.6106 1.08334 10.6106H1.51035V20.0137C1.52196 20.0131 1.53335 20.012 1.54507 20.012H3.45431V11.4001C3.84264 11.6814 4.31973 11.8478 4.83606 11.8478C5.73268 11.8478 6.51178 11.3472 6.91086 10.6106H7.48005C7.87908 11.3472 8.65817 11.8478 9.55479 11.8478C10.4514 11.8478 11.2305 11.3472 11.6296 10.6106H12.1988C12.5978 11.3472 13.3769 11.8478 14.2735 11.8478C15.1701 11.8478 15.9492 11.3472 16.3483 10.6106H16.9175C17.3165 11.3472 18.0956 11.8478 18.9923 11.8478C19.8889 11.8478 20.668 11.3472 21.0671 10.6106H21.6362C22.0353 11.3472 22.8144 11.8478 23.711 11.8478C24.2273 11.8478 24.7043 11.6815 25.0927 11.4001V20.012H26.9095C26.953 20.012 26.9956 20.0165 27.0368 20.0246V10.6106H27.9174C28.4542 10.6106 28.8894 10.1754 28.8894 9.6386C28.8895 9.10181 28.4541 8.66659 27.9173 8.66659Z"
                  fill="url(#paint9_linear_246_5137)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_246_5137"
                  x1="14.7266"
                  y1="19.3956"
                  x2="18.5517"
                  y2="19.3956"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_246_5137"
                  x1="20.4287"
                  y1="19.3956"
                  x2="24.2539"
                  y2="19.3956"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_246_5137"
                  x1="4.74805"
                  y1="17.8222"
                  x2="11.6814"
                  y2="17.8222"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_246_5137"
                  x1="24.418"
                  y1="25.1973"
                  x2="27.0367"
                  y2="25.1973"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_246_5137"
                  x1="10.1709"
                  y1="25.2023"
                  x2="13.6272"
                  y2="25.2023"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_246_5137"
                  x1="1.51074"
                  y1="25.2031"
                  x2="4.12946"
                  y2="25.2031"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_246_5137"
                  x1="14.9189"
                  y1="25.2023"
                  x2="18.3753"
                  y2="25.2023"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_246_5137"
                  x1="19.6689"
                  y1="25.2023"
                  x2="23.1253"
                  y2="25.2023"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_246_5137"
                  x1="5.42285"
                  y1="25.2023"
                  x2="8.87918"
                  y2="25.2023"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_246_5137"
                  x1="0.111328"
                  y1="10.0623"
                  x2="28.8894"
                  y2="10.0623"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC0BE" />
                  <stop offset="1" stopColor="#7F529F" />
                </linearGradient>
                <clipPath id="clip0_246_5137">
                  <rect
                    width="29"
                    height="29"
                    fill="white"
                    transform="translate(0 0.0999756)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className=" text-primary leading-[0.8] text-[2rem]">
              {item.code}
            </span>
          </div>
          <span className="text-[#111111CC] text-[1.75rem] mt-2.5">
            {item.name}
          </span>
          <div className="flex items-center gap-4 mt-3.75">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.4375 0.712463L0.75 1.39996V12.4L1.4375 13.0875H16.5625L17.25 12.4V1.39996L16.5625 0.712463H1.4375ZM2.125 2.95417V11.7125H15.875V2.95394L8.99991 9.2041L2.125 2.95417ZM14.7841 2.08746H3.2157L8.99991 7.34583L14.7841 2.08746Z"
                fill="#5AC0BE"
              />
            </svg>

            <span className="font-light text-black-b2 leading-1.5">
              {item.email}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExhibitorList;
