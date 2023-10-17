import React from "react";
import OurTeam from "./OurTeam";
import Slider from "./Slider";
import ContactBanner from "./ContactBanner";
import { NextCampaignBanner, SectionsTitle } from "../../components";
import { useLanguage } from "../../context/LanguageContext";
import { waveImgCampaignsTop } from "../../assets";
const AboutUS = () => {
  const { currentLanguage, isRtl } = useLanguage();
  return (
    <section className="relative">
      <div className="h-[40vh] w-full relative flex items-center justify-center mx-auto overflow-hidden z-[50] dark-green-gradient">
        <h1 className="font-semibold text-3xl sm:text-4xl text-white z-10 text-center">
          {currentLanguage.WelcomeToAmbassadorsCleanliness}
        </h1>
        <img
          src={waveImgCampaignsTop}
          alt="svg wave shape"
          className="absolute -bottom-[2px] h-[300px] w-full"
        />
      </div>

      <div className="w-full relative">
        <SectionsTitle
          title={`${currentLanguage.WhoWeAre} ${isRtl ? "؟" : "?"}`}
          subTitle={currentLanguage.WhoWeAreSubTitle}
          AddStyle={"justify-center flex-col pt-0 sm:pt-0 mb-5"}
        />
        <Slider />
        <OurTeam />
        <SectionsTitle
          title={currentLanguage.AboutUsHeadSectionJoinUs}
          subTitle={currentLanguage.AboutUsSubSectionJoinUs}
          AddStyle={"justify-center flex-col sm:pt-28 pt-24 mb-5"}
        />
        <NextCampaignBanner />
        <ContactBanner />
      </div>
    </section>
  );
};

export default AboutUS;
