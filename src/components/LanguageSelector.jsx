import React,{ useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSelector = () => {
  const {  setLanguage, isRtl } = useLanguage();
  const [firstOptionHovered, setFirstOptionHovered] = useState(false);
  return (
    <div
      // I am user ternary operator to apply some styles because there is an issue related to how Tailwind CSS
      // processes the rtl: and ltr: classes when applied to inline elements like span or Pseudo-elements.
      className={`LanguageSelectorMenu group border border-gray-300 rounded-md ml-2 mr-2 absolute top-11 z-50 bg-white ${
        firstOptionHovered ? "before:bg-slate-200" : ""
      } ${isRtl ? "left-[-15px] text-end" : "right-[-20px] before:left-[2rem] text-start"} `}
    >
      <ul className="flex justify-center items-center flex-col ">
        <li
          onMouseEnter={() => setFirstOptionHovered(true)}
          onMouseLeave={() => setFirstOptionHovered(false)}
          onClick={() => setLanguage("EN")}
          className="hover:bg-slate-200 w-full cursor-pointer z-10 p-1 group-hover:before:bg-slate-200"
        >
          English
        </li>
        <li
          onClick={() => setLanguage("AR")}
          className="hover:bg-slate-200 w-full cursor-pointer border-t p-1"
        >
          Arabic
        </li>
        <li
          onClick={() => setLanguage("KR")}
          className="hover:bg-slate-200 w-full cursor-pointer border-t p-1"
        >
          Kurdish
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
