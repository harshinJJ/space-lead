import React from "react";
import parse from "html-react-parser"

const SpeakerAbout = ({ speaker }) => {
  return (
    <div className="text-[#737373] mt-2.5">
      <div className="[&>p]:leading-[1.6] space-y-8 text-lg">
        {speaker?.description instanceof Array ? (
          speaker.description.map((para, index) => <p key={index}>{para}</p>)
        ) : (
          // <p>{speaker.description}</p>
          speaker?.description&&parse(speaker?.description)
        )}
      </div>

      {speaker?.facts&&<div className="mt-4">
        <p className="mb-2.5 text-lg text-black">
          Fast facts about {speaker.name}
        </p>
        <ul className=" space-y-3">
          {speaker?.facts?.map((point, index) => (
            <li key={index} className="flex items-center gap-2.5 text-lg ">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9296 9.08398L10.8505 15.1631C10.743 15.2705 10.6161 15.3535 10.4696 15.4121C10.3231 15.4707 10.1718 15.5 10.0155 15.5C9.84949 15.5 9.6908 15.4707 9.53943 15.4121C9.38806 15.3535 9.25867 15.2705 9.15125 15.1631C8.89734 14.9287 8.77039 14.6406 8.77039 14.2988C8.77039 13.957 8.89734 13.6738 9.15125 13.4492L13.1356 9.43555H1.51941C1.17761 9.43555 0.889526 9.31836 0.655151 9.08398C0.420776 8.84961 0.303589 8.56152 0.303589 8.21973C0.303589 7.89746 0.420776 7.61426 0.655151 7.37012C0.889526 7.12598 1.17761 7.00391 1.51941 7.00391H13.1356L9.15125 3.01953C8.89734 2.78516 8.77039 2.49707 8.77039 2.15527C8.77039 1.81348 8.89734 1.53027 9.15125 1.30566C9.37585 1.06152 9.65906 0.939453 10.0009 0.939453C10.3427 0.939453 10.6259 1.06152 10.8505 1.30566L16.9296 7.38477C17.1737 7.60938 17.2958 7.89258 17.2958 8.23438C17.2958 8.57617 17.1737 8.85938 16.9296 9.08398Z"
                  fill="#7F529F"
                />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>}
    </div>
  );
};

export default SpeakerAbout;
