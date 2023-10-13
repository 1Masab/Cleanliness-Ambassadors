import React from "react";
import { NavLinks } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { Link,useLocation } from "react-router-dom";
const NavBar = () => {
  const { currentLanguage } = useLanguage(); // to access the translation
  const location = useLocation(); // Geting the current location

  return (
    <>
      {NavLinks.map((link) => (
        <li key={link.linkName}>
          <Link
            to={`${link.linkPath}`}
            className={`hover:text-white hover:bg-primary px-2 rounded-lg cursor-pointer transition duration-100 ${
              location.pathname === link.linkPath ? 'bg-primary text-white' : ''
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
