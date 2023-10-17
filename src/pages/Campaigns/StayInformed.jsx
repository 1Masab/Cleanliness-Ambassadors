import React from "react";
import { SubscribInput } from "../../components";
import { useLanguage } from "../../context/LanguageContext";
import { styles } from "../../styles";
const StayInformed = () => {
  const { currentLanguage } = useLanguage();
  return (
    <div className={`${styles.padding}`} id="Subscribe">
      <div className="shadow-1 mx-auto bg-primary rounded-xl text-white max-w-3xl overflow-hidden">
        <div className="p-5 flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold pb-2 beforeTitle relative w-fit z-20 before:bg-[#08221c91]">
            {currentLanguage.StayInformedTitle}
          </h1>
          <p className="text-xl font-semibold text-center">
            {currentLanguage.StayInfomedSubTitle}
          </p>
        </div>
        <div className="py-5 px-2 rounded-t-full relative z-[2]">
          <div className=" absolute left-[50%] -top-2 translate-x-[-50%] z-[-1] w-[2000px] h-[2000px] bg-[#08221c91] rounded-full" />
          <SubscribInput />
        </div>
      </div>
    </div>
  );
};

export default StayInformed;
