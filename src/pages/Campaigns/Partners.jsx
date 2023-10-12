import React from "react";
import SectionsTitle from "../../components/SectionsTitle";
import { useLanguage } from "../../context/LanguageContext";
import {
  Partner2,
  Partner3,
  zainLogo,
  EarthlinkLogo,
} from "../../assets";
import SectionWarapper from "../../hoc/SectionWrapper";

const Partners = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center"> 
      <SectionsTitle
        title={currentLanguage.SponsorsAndPartnersTitle}
        subTitle={currentLanguage.SponsorsAndPartnersSubTitle}
        AddStyle={"justify-center flex-col mb-5"}
      />
      <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-y-5">
        <div className="w-40 h-32 ml-10">
          <img
            src={Partner2}
            className=" object-contain w-full h-full saturate-0 border rounded-2xl bg-slate-200 px-2"
          />
        </div>
        <div className="w-40 h-32">
          <img
            src={Partner3}
            className=" object-contain w-full h-full saturate-0 border rounded-2xl bg-slate-200 px-2"
          />
        </div>
        <div className="w-40 h-32 ml-10">
          <img
            src={zainLogo}
            className=" object-contain w-full h-full saturate-0 border rounded-2xl bg-slate-200 px-2"
          />
        </div>
        <div className="w-40 h-32">
          <img
            src={EarthlinkLogo}
            className=" object-contain w-full h-full saturate-0 border rounded-2xl bg-slate-200 px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWarapper(Partners);
