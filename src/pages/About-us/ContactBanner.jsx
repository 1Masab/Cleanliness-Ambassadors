import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { SectionsTitle } from "../../components";
import { ContactUSS } from "../../assets";
import { styles } from "../../styles";
const ContactBanner = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section>
      <div className={`${styles.padding}`}>
        <div className="max-w-5xl mx-auto lg:mb-32 flex justify-between items-center text-center lg:text-start lg:flex-row flex-col bg-[#90ACA7] relative shadow-xl overflow-hidden rounded-S4">
          <div className="w-full md:w-full mt-3 md:mt-0 md:mb-10 px-4 sm:px-10 text-white rounded-2xl z-10">
            <SectionsTitle
              title={currentLanguage.ContactUs}
              color={"text-white"}
              AddStyle={"sm:py-2 py-0 justify-center lg:justify-start"}
            />
            <p className="text-[17px] mb-4">
              {currentLanguage.ContactUsSubTitle}
            </p>

            <h4 className="text-white font-thin text-lg py-2">
              {currentLanguage.EmailAddress} : example@gmail.com
            </h4>
            <h4 className="text-white font-thin text-lg">
              Iraq, Baghdad, Al-Karradah, Near Al-Firdous Square
            </h4>
          </div>
          <img
            src={ContactUSS}
            className="lg:w-[450px] w-full h-[500px] object-cover z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
