import React from "react";
import VideoPopUp from "./VideoPopUp";
import { styles } from "../../styles";
import { useLanguage } from "../../context/LanguageContext";
import SectionsTitle from "../../components/SectionsTitle";
// this is the overview About us Section in the Home Page {هذا قسم النظرة العامة في الصفحة الرئيسة }
const Overview = () => {
  const { currentLanguage } = useLanguage();

  return (
    <>
      <section
        id="aboutUs"
        className={`py-5 pb-28 flex flex-col items-center justify-center text-center lg:text-start dark-green-gradient`}
      >
        {/* 👇 down here the container that wraps all the contenet of the about us section  */}
        <div
          className={`relative grid lg:grid-cols-2 grid-cols-1 grid-rows-1 md:gap-6 gap-5 ${styles.padding} max-w-7xl mx-auto OnScrollAnimation OnScrollTranslateY-0`}
        >
          {/* 👇 this is the first container of content which conten the video thumbnail and the text */}
          <div className="p-2 border-white border rounded-2xl flex items-center justify-center max-w-[500px] mx-auto fixed-element">
            <VideoPopUp />
          </div>
          {/* 👇 this is the text container overview and who we are */}
          <div className="max-w-[600px] mt-2">
            <h3 className={`${styles.sectionSubText} text-white`}>
              {currentLanguage.Overview}
            </h3>
            <SectionsTitle
              title={currentLanguage.WhoWeAre}
              AddStyle="justify-center lg:justify-start"
              color="text-white before:bg-yellow-300"
            />

            <p className="mt-4 text-white text-[16px] sm:text-[18px] leading-[30px] PlusOneRemWidth">
              {currentLanguage.AboutUsSectionParagraph}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
