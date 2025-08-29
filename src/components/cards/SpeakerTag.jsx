import Image from "next/image";
import React from "react";

const SpeakerTag = ({
  image = "/images/user_placeholder.jpeg",
  name,
  role,
  className,
}) => {
  return (
    <div
      className={`flex items-center md:gap-2.5 bg-white/8 text-gray-300 p-[0.65625rem] xl:pe-9 md:pe-5 pe-2 rounded-full text-xs ${className}`}
    >
      <div className="w-10 aspect-square rounded-full overflow-hidden border-1 border-white/19">
        <Image
          height={40}
          width={40}
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <span className="text-sm xl:text-lg font-semibold">{name}</span>
        <div className="flex items-center gap-1 text-xs text-white/50">
          {role.toLowerCase() == "moderator" && (
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.08008"
                y="0.38501"
                width="16"
                height="16"
                rx="8"
                fill="#5AC0BE"
              />
              <path
                d="M12.0317 7.58813C12.0317 9.20186 10.7103 10.51 9.0803 10.51M9.0803 10.51C7.45029 10.51 6.12891 9.20186 6.12891 7.58813M9.0803 10.51V12.635M9.0803 12.635H6.93383M9.0803 12.635H11.2268M9.0803 8.91626C8.33939 8.91626 7.73875 8.32163 7.73875 7.58813V5.46313C7.73875 4.72963 8.33939 4.13501 9.0803 4.13501C9.8212 4.13501 10.4218 4.72963 10.4218 5.46313V7.58813C10.4218 8.32163 9.8212 8.91626 9.0803 8.91626Z"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerTag;
