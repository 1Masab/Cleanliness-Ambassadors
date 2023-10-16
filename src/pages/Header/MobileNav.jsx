import React from "react";
import { NavLinks } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
const MobileNav = ({ setToggleMenu, toggleMenu }) => {
  const { currentLanguage } = useLanguage(); // to access the translation

  return (
    <div
      className={`flex px-6 py-10 absolute top-[4.5rem] right-0 lg:hidden mx-0 w-full z-50 rounded-b-2xl shadow-xl bg-[rgba(255,255,255,0.8)] backdrop-blur-sm`}
    >
      <ul className="gap-5 flex text-lg flex-wrap justify-center">
        {NavLinks.map((link) => (
          <Link
            to={link.linkPath}
            key={link.linkName}
            className="cursor-pointer w-[80%] md:w-[30%] flex items-center justify-start gap-2 border border-primary border-solid p-4 text-xl rounded-xl shadow-[5px_5px_0px_rgb(84,139,104)]"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <img
              src={link.icon}
              alt={link.linkName}
              className={`w-[10%] ${
                link.linkPath == "/Donate" ? "invert-[.7]" : ""
              }`}
            />
            {currentLanguage[link.linkName]}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
