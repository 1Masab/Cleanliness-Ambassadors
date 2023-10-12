import { NavLinks } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { currentLanguage } = useLanguage(); // to access the translation

  return (
    <>
      {NavLinks.map((link) => (
        <li key={link.linkName}>
          <Link
            to={`${link.linkPath}`}
            className="hover:text-white hover:bg-primary active:bg-primary px-2 rounded-lg cursor-pointer transition duration-100"
          >
            {currentLanguage[link.linkName]}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavBar;
