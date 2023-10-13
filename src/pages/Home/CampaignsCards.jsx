import React from "react";
import { useApiData } from "../../context/ApiContext";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const CampaignsCards = ({
  startIndex,
  endIndex,
  theSkipedIndex,
  RenderOneImage,
}) => {
  const { currentLanguage, language, isRtl } = useLanguage();
  const { apiData } = useApiData();

  if (!apiData || apiData.length === 0) {
    // Displaying skeleton loading cards before the data is loaded
    const skeletonCards = Array.from(
      { length: endIndex - startIndex },
      (_, index) => (
        <li key={index}>
          <div className="timeline-content">
            <img className="skeleton" />
            <div className="skeleton description"></div>
            <div className="skeleton description"></div>
            <div className="skeleton description"></div>
          </div>
        </li>
      )
    );

    return <div>{skeletonCards}</div>;
  }
  return (
    <>
      {apiData.slice(startIndex, endIndex).map((item, index) =>
        // the Skiped Index (👇) is temporary code because some of the comapaigns data doesn't have |Photos| I Skip the index 1 in the home page and index 2 at the Campaigns page
        index !== theSkipedIndex ? (
          <li key={index}>
            <div className={`timeline-content ${isRtl ? "" : "DirIsLeft"}`}>
              {item.Photos && item.Photos.length > 0 ? (
                //  if the Render one Image is ture Render just one image in the Card at the campaings pages if it is fales render all the avalabe images from the API
                <img
                  src={
                    RenderOneImage
                      ? item.Photos[0].large.url
                      : item.Photos.large?.url
                  }
                  className="skeleton"
                />
              ) : (
                <h1 className="w-full aspect-video mb-4 rounded-[15px_0px_15px_15px] bg-slate-200 flex justify-center items-center text-5xl">
                  هذه الحلمة لا تحتوي على صور
                </h1>
              )}

              <h3 className="date">{item["Date"]}</h3>
              <h1>
                {item["Province"]} -
                {language == "AR" || "KR"
                  ? item["Location Description Arabic"]
                  : item["Location Description"]}
              </h1>
              <p>
                {currentLanguage.CampaignsParagrphVolunteersNumPartOne}
                <span className="text-2xl font-[900] text-yellow-500 underline px-1">
                  {item["Number of Volunteers"]}
                </span>
                {currentLanguage.CampaignsParagrphVolunteersNumPartTwo}
                {currentLanguage.CampaignsParagrphTrashNumPartOne}
                <span className="text-2xl font-[900] text-yellow-500 underline px-1">
                  {item["Number of Trash Bags"]}
                </span>
                {currentLanguage.CampaignsParagrphTrashNumPartTwo}
                <Link
                  to="/allCampaigns"
                  className="text-primary underline font-semibold mx-1"
                >
                  {currentLanguage.CampaignsParagrphaTag}
                </Link>
              </p>
            </div>
          </li>
        ) : null
      )}
    </>
  );
};

export default CampaignsCards;
