import React from "react";
import { styles } from "../../styles";
import { wave5 } from "../../assets";
import {
  StaffInformation,
  StaffSocialMediaLinksAndJobs,
} from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
const OurTeam = () => {
  const { currentLanguage } = useLanguage();
  return (
    <div className={`mt-10 sm:px-16 px-6 pt-16 bg-[#548b6831] relative`}>
      <div className="flex justify-between lg:px-0 md:px lg:items-center items-start flex-col-reverse lg:flex-row gap-10">
        <div>
          <h1 className="flex justify-start items-center w-full py-5 pt-0">
            <span
              className={`${styles.sectionHeadText} relative beforeTitle w-fit`}
            >
              {currentLanguage.OurTeam}
            </span>
          </h1>
          <ul className="list-disc">
            {StaffInformation.map((member) => (
              <li key={member.name} className="text-gray-700 py-2">
                <span className="font-semibold text-gray-800">
                  {currentLanguage[member.name]} :
                </span>{" "}
                {currentLanguage[member.description]}
              </li>
            ))}
          </ul>
        </div>
        <StaffImages />
      </div>
      <img
        src={wave5}
        alt="svg wave shape"
        className="absolute bottom-[-300px] right-0 h-[300px] w-full"
      />
    </div>
  );
};

export default OurTeam;

const StaffImages = () => {
  const { currentLanguage, isRtl } = useLanguage();

  return (
    <div className="flex flex-wrap gap-6 md:gap-10 lg:max-w-sm z-20">
      {StaffSocialMediaLinksAndJobs.map((item) => (
        <div
          key={item.memberName}
          className="relative w-36 h-36 sm:w-40"
        >
          <img
            src={item.image}
            className="w-full h-full object-cover object-top saturate-50 rounded-2xl border-2 border-gray-300"
          />
          <div
            className={`w-full absolute bottom-0 ${
              isRtl
                ? "right-0"
                : "left-0"
            } bg-[#D8E3DC] leading-[15px] border text-sm border-gray-400 px-2 rounded-lg shadow-md py-2`}
          >
            <h4 className="font-mono font-bold text-gray-700 text-[14px] sm:text-[16px]">
              {currentLanguage[item.memberName].split(" ")[0]}|
              <span className="font-normal text-[12px] sm:text-[14px] text-[#8C465A">
                &nbsp;{currentLanguage[item.job]}&nbsp;
              </span>
            </h4>
          </div>
          <a href={item.url} target="_blanck">
            <img
              src={item.icon}
              className={`absolute -top-2 ${
                isRtl ? "-right-2" : "-left-2"
              } w-5 h-5 bg-[#D8E3DC] cursor-pointer saturate-0 hover:saturate-100 transition-all`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
