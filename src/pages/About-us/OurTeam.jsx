import React from "react";
import { styles } from "../../styles";
import { useLanguage } from "../../context/LanguageContext";
import {
  StaffInformation,
  StaffSocialMediaLinksAndJobs,
} from "../../data/Constants";
import { wave5 } from "../../assets";
const OurTeam = () => {
  const { currentLanguage } = useLanguage();
  return (
    <div
      className={`mt-10 sm:px-16 px-6 pt-16 bg-[#548b6831] relative`}
    >
      <div className="flex justify-evenly lg:px-0 md:px-20 lg:items-center items-start flex-col-reverse lg:flex-row gap-10">
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
        className="absolute bottom-[-300px] right-0  h-[300px] w-full"
      />
    </div>
  );
};

export default OurTeam;

const StaffImages = () => {
  const { currentLanguage, isRtl } = useLanguage();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-10 sm:gap-16 lg:gap-8 sm:max-w-[400px] w-[300px] sm:w-[420px] z-20">
      {StaffSocialMediaLinksAndJobs.map((item) => (
        
        <div
          key={item.memberName}
          className="relative w-32 h-32 sm:w-[180px] sm:h-[180px]"
        >
          <img
            src={item.image}
            className="w-full h-full object-cover object-top saturate-50 rounded-2xl border-2 border-gray-300"
          />
          <div
            className={`w-fit absolute bottom-0 ${isRtl ? "right-0 rounded-StaffImagesRTL": "left-0 rounded-StaffImagesLTR"} bg-[#D8E3DC] leading-[15px] border text-sm border-gray-400  px-2 py-2`}
          >
            <h4 className="font-mono font-bold text-gray-700 text-[14px] sm:text-[16px]">
              {currentLanguage[item.memberName].split(' ')[0]} |
              
              <span className="font-normal text-[12px] sm:text-[14px] text-[#8C465A">
              &nbsp; {currentLanguage[item.job]} &nbsp;
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
