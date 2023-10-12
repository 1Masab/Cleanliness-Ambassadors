import { createContext, useContext, useState } from "react";
import ar from '../data/LanguageData/ar.json';
import en from '../data/LanguageData/en.json';
import kr from '../data/LanguageData/kr.json';



const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("AR");


  const isRtl = language === "AR" || language === "KR";
  let currentLanguage = {};
  switch (language) {
    case "AR":
      currentLanguage = ar;
      break;
    case "EN":
      currentLanguage = en;
      break;
    case "KR":
      currentLanguage = kr;
      break;
    default:
      currentLanguage = ar;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currentLanguage,
        isRtl
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export  const useLanguage = () => useContext(LanguageContext);
