import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSelector } from "../../components";
import { languageIcon, Logo, menuIcon, closeIcon } from "../../assets";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";

const Header = () => {
  const [selectLanguage, setSelectLangauge] = useState(false); // state to toggle the languages menu
  const [toggleMenu, setToggleMenu] = useState(false); // state to toggle the nav icon from Hamberger menu to close icon
  const { currentLanguage, isRtl } = useLanguage(); // to access the translation / to access the if the direction is rtl or ltr

  return (
    <header
      className="flex items-center shadow-md bg-white justify-between px-2 py-2 sm:px-6 z-[60] fixed w-full"
      style={{ direction: isRtl ? "rtl" : "ltr" }}
    >
      <div className=" flex  items-center cursor-pointer ">
        <Link to="/">
          <img
            src={Logo}
            className="Logo w-[50px] h-[50px] relative border-2 rounded-lg border-primary"
          />
        </Link>
        {/* I am user ternary operator to apply some styles because there is an issue related to how Tailwind CSS
            processes the rtl: and ltr: classes when applied to inline elements like span or Pseudo-elements.*/}
        <h1
          className={` ${
            isRtl
              ? "font-[Ruwudu] leading-6 mr-2"
              : "font-[Coiny] leading-5 ml-2"
          } pt-1  sm:text-[1.35rem] text-[1rem]  text-primary`}
        >
          {currentLanguage.LogoSofra || "سفراء"} <br />
          {currentLanguage.LogoAlnathafa || "النظافة"}
        </h1>
      </div>
      <nav>
        <ul className=" gap-4 hidden lg:flex">{<NavBar />}</ul>
      </nav>
      <div className="flex gap-6 items-center z-50">
        <div
          className="cursor-pointer relative w-6"
          onClick={() => setSelectLangauge(!selectLanguage)}
        >
          <img src={languageIcon} />
          {selectLanguage && <LanguageSelector />}
        </div>
        {/* this is the Hamborger Navba for mobile 👇👇👇 */}
        <div
          className={`lg:hidden flex items-center justify-center transform cursor-pointer ${
            isRtl ? "" : "scale-x-[-1]"
          }`}
        >
          <img
            src={toggleMenu ? closeIcon : menuIcon}
            alt="menu"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
        {/* 👇👇👇 this is the nav bar links for mobile render when toggle the menu icon above */}
        <div
          className={`absolute -top-2 right-0 w-full transition-all bg-black ${
            toggleMenu
              ? "translate-y-[0]"
              : "translate-y-[-850px] md:translate-y-[-450px]"
          }`}
        >
          <MobileNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
