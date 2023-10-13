import React from "react";
import { StatisticsCardContent } from "../../data/Constants";
import { styles } from "../../styles";
import { useLanguage } from "../../context/LanguageContext";
import FetchApi from "./StatisticsFetchedData";
import SectionsTitle from "../../components/SectionsTitle";
// this is the Statistics Section {هذا قسم الاحصائيات }
const Statistics = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section className="StatisticsSection py-5 pb-8">
      <div
        className={`${styles.padding} max-w-7xl mx-auto relative flex flex-col items-center justify-center`}
      >
        <SectionsTitle
          title={currentLanguage.StatisticsSectionHead}
          subTitle={currentLanguage.StatisticsSectionSubHead}
          AddStyle="flex-col"
          CustomSub="text-white mb-5"
          color="text-white before:bg-yellow-300"
        />
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 max-w-[1000px] mt-4">
          {StatisticsCardContent.map((item,index) => (
            <Statistics_Card
              key={item.StatisName}
              statsIcon={item.icon}
              IconAlt={item.StatisName}
              CardName={item.StatisName}
              NumOf={item.NumOf}
              Deley={`element-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
const Statistics_Card = ({ statsIcon, IconAlt, CardName, NumOf,Deley }) => {
  const { currentLanguage, isRtl } = useLanguage();
  return (
    <div
      className={
        `sm:w-56 w-40 h-32 flex justify-center gap-2 py-4 bg-stone-100 items-start rounded-StatisticsCardRadius overflow-hidden relative statisticsCard OnScrollAnimation ${Deley}`
      }
    >
      <div className="flex items-center">
        <img
          src={statsIcon}
          alt={IconAlt}
          className={`max-w-14 max-h-14 object-cover p-2 border-gray-400 opacity-50 ${
            isRtl ? " border-l-2" : " border-r-2"
          }`}
        />

        {NumOf !== undefined && <FetchApi NumOf={NumOf} />}
      </div>

      <h1 className="text-sm absolute bottom-0 py-3 font-bold w-full flex items-center justify-center text-[#808080] border-t-2">
        {currentLanguage[CardName]}
      </h1>
    </div>
  );
};
