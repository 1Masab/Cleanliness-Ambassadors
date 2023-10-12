import { NavLinks } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const { currentLanguage } = useLanguage(); // to access the translation

  return (
    <div
      className={`flex p-6 absolute top-[4.5rem] right-0 md:hidden mx-0 w-full z-50 rounded-b-2xl shadow-xl bg-[rgba(255,255,255,0.8)] backdrop-blur-sm `}
    >
      <ul className="gap-5 flex text-lg flex-wrap justify-center">
        {NavLinks.map((link) => (
          <Link
            to={link.linkPath}
            key={link.linkName}
            className="cursor-pointer w-[80%] flex items-center justify-start gap-2 CustomClassMenu p-4 text-xl rounded-xl bg-white"
          >
            <img src={link.icon} alt={link.linkName} className="w-[10%]" />
            {currentLanguage[link.linkName]}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
