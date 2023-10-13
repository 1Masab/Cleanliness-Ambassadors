import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionsTitle from "../../components/SectionsTitle";
import SubscribInput from "../../components/SubscribInput";
import { useLanguage } from "../../context/LanguageContext";
// اشترك لتصلك الاخبار على الايميل
const StayInformedH = () => {
  const { currentLanguage } = useLanguage();
  return (
    <div className="text-center">
      <SectionsTitle
        title={currentLanguage.SignUpEmailSectionHeadText}
        subTitle={currentLanguage.SignUpEmailSectionSubHeadText}
        AddStyle="justify-center flex-col"
        color="before:bg-yellow-300"
      />
      <SubscribInput />
    </div>
  );
};

export default SectionWrapper(StayInformedH);
