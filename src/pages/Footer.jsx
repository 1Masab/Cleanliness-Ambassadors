import React from "react";
import { LogoWhite } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { SocialMediaIconsContent } from "../data/Constants";
import { SocialMediaIcons } from "../components";
import { Link } from "react-router-dom";
import NavBar from "./Header/NavBar";
const Footer = () => {
  const { currentLanguage, isRtl } = useLanguage();
  return (
    <footer
      className="flex flex-col gap-5 items-center justify-center pb-5 bg-[#08221c] text-white mt-auto"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <div className="max-w-7xl w-full mx-auto sm:px-12 px-6 sm:py-8 py-10 flex flex-col md:flex-row flex-wrap gap-10 justify-between items-center text-center md:text-start">
        <div className="flex items-center">
          <img src={LogoWhite} alt="White logo" className="w-20" />
        </div>
        <nav>
          <h4 className="relative text-yellow-300 font-bold text-lg mb-2 px-2 md:text-start text-center">
            {currentLanguage.FooterHeadTextContact}
          </h4>

          <ul className="flex flex-wrap items-center justify-center text-center md:text-start leading-[30px]">
            <NavBar isfooter={true} />
          </ul>
        </nav>
        <div>
          <h4 className="relative text-yellow-300 font-bold text-lg mb-2 md:text-start text-center">
            {currentLanguage.FooterHeadTextSocialMediaLinks}
          </h4>
          <div className="flex gap-5">
            {SocialMediaIconsContent.map((item, index) => (
              <SocialMediaIcons
                iconName={item.iconName}
                url={item.url}
                icon={item.icon}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="w-[90%] h-[1px] bg-slate-300" />
      <div className="flex justify-between w-[85%] flex-wrap gap-2">
        <small className="text-sm">{currentLanguage.CopyRight}</small>
        <Link to="Donate" className="underline text-sm text-center">
          {currentLanguage.DonateToTheCampaign}
        </Link>
      </div>
      <p className="text-sm">
        made with Love by{" "}
        <a
          href="https://www.instagram.com/fcybeer"
          className="text-sky-500 hover:text-sky-600 underline"
          target="_blank"
        >
          @FCYBER
        </a>
      </p>
    </footer>
  );
};

export default Footer;
