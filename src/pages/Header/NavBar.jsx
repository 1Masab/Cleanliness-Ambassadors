import React from "react";
import { NavLinks } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const { currentLanguage } = useLanguage(); // to access the translation
  const location = useLocation(); // Geting the current location

  return (
    <>
      {NavLinks.map((link) => (
        <li key={link.linkName} className="px-1">
          <Link
            to={`${link.linkPath}`}
            className={`hover:text-[#35997b] rounded-lg  cursor-pointer transition duration-100 ${
              location.pathname === link.linkPath
                ? "border-b-2 border-primary text-[#35997b] rounded-none"
                : ""
            }`}
          >
            {currentLanguage[link.linkName]}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavBar;
