import { useState } from "react";
import { styles } from "../../styles";
import { FAQsData } from "../../data/Constants";
import { useLanguage } from "../../context/LanguageContext";
import { tree } from "../../assets";
import SectionsTitle from "../../components/SectionsTitle";
// this is the FAQs Section in the Home page {هذا قسم الأسئلة الشائعة }
const FAQs = () => {
  const [activeItems, setActiveItems] = useState(
    Array(FAQsData.length).fill(false)
  );
  const { currentLanguage, isRtl } = useLanguage();
  const toggleItem = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };
  const isBigScreen = window.innerWidth >= 1450;
  return (
    <div className="w-full mx-auto relative px-5">
      <div className="max-w-3xl relative mx-auto mb-10 2xl:right-44">
        <SectionsTitle
          title={currentLanguage.FrequentlyAskedQuestions}
          color="before:bg-yellow-300"
        />
        {FAQsData.map((item, index) => (
          <div
            key={item.question}
            className={`contentBx ${activeItems[index] ? "active" : ""} OnScrollAnimation `}
            onClick={() => toggleItem(index)}
          >
            <div
              className={`label relative cursor-pointer h-[50px] flex items-center select-none my-4 transition-[0.4s] ${
                isRtl ? "" : "direction-is-left"
              }`}
            >
              <h3 className="text-lg sm:text-xl w-[90%] sm:w-full font-semibold">
                {currentLanguage[item.question]}
              </h3>
            </div>
            <div
              className={`relative overflow-x-hidden overflow-y-auto transition-[0.4s] border-b border-solid border-[#b3b3b34d] ${
                activeItems[index] ? "h-[90px] pb-2" : "h-0"
              }`}
            >
              <p>{currentLanguage[item.answer]}</p>
            </div>
          </div>
        ))}
      </div>
      {isBigScreen ? <img src={tree} className="absolute top-5 right-0" /> : ""}
    </div>
  );
};

export default FAQs;
