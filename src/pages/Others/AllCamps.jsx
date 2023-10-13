import React from "react";
import { useApiData } from "../../context/ApiContext";
import { useLanguage } from "../../context/LanguageContext";
import { styles } from "../../styles";
import { instagram, swipeUpIcon } from "../../assets";
const AllCamps = () => {
  const { language, currentLanguage } = useLanguage();
  const { apiData } = useApiData();

  if (!apiData || apiData.length === 0) {
    // Displaying skeleton loading cards before the data is loaded
    const skeletonCards = (
      //   <div className="text-3xl w-full h-[90vh] flex items-center justify-center Loeading"/>
      <div className="text-3xl w-full h-[90vh] flex items-center justify-center mt-[70px]">
        <div className="LoadingEffect">
          <div></div>
          <div></div>
        </div>
      </div>
    );
    return <>{skeletonCards}</>;
  }
  return (
    <>
      <div
        className={`${styles.padding} mt-[71px] max-w-7xl flex gap-10 flex-wrap mx-auto`}
      >
        {apiData.map((item, index) => (
          <div
            key={index}
            className="max-w-xl flex flex-col gap-2 border-b-2 pb-5 relative"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-600 flex gap-2">
                {item["Date"]}
              </h3>
              <h1 className="text-2xl font-bold text-gray-600">
                {item["Province"]} -
                {language == "AR" || "KR"
                  ? item["Location Description Arabic"]
                  : item["Location Description"]}
              </h1>
              <p>
                {currentLanguage.allCampaignPlaceHoderText}
                <a
                  href="https://www.instagram.com/clean.iraq/"
                  className="opacity-25"
                  target="_blank"
                >
                  <img src={instagram} className="invert w-4 inline mx-2" />
                </a>
              </p>
            </div>
            <div className="w-full overflow-x-hidden overflow-y-scroll border-2 grid grid-cols-2 h-[290px] gap-2 rounded-lg">
              {item.Photos && item.Photos.length > 0
                ? item.Photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo.large.url}
                      className=" object-cover w-80 aspect-video"
                      alt="Campaign Image"
                    />
                  ))
                : Array.from({ length: 6 }, (_, index) => (
                    <p
                      key={index}
                      className="flex justify-center h-[170px] items-center aspect-video"
                    >
                      No campaign images
                    </p>
                  ))}
            </div>
            <p className="absolute bottom-5 left-0 bg-slate-50 rounded-[0px_10px_0px_10px] p-1 shadow-md font-semibold opacity-100 text-gray-600 text-sm">
              <img src={swipeUpIcon} className="invert w-6" />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllCamps;
