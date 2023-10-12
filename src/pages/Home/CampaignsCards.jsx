import { TestimonialsGirl } from "../../assets";
import { useApiData } from "../../context/ApiContext";
import { useLanguage } from "../../context/LanguageContext";

const CampaignsCards = ({ startIndex, endIndex, theSkipedIndex }) => {
  const { currentLanguage, language, isRtl } = useLanguage();
  const { apiData } = useApiData();
  return (
    <>
      {apiData.slice(startIndex, endIndex).map((item, index) =>
        // the Skiped Index (👇) is temporary code because some of the comapaigns data doesn't have |Photos| I Skip the index 1 in the home page and index 2 at the Campaigns page
        index !== theSkipedIndex ? (
          <li key={index}>
            <div className={`timeline-content ${isRtl ? "" : "DirIsLeft"}`}>
              {item.Photos && item.Photos.length > 0 ? (
                <img src={item.Photos[0].large.url} />
              ) : (
                <img src={TestimonialsGirl} />
              )}

              <h3 className="date">{item["Date"]}</h3>
              <h1>
                {item["Province"]} -{" "}
                {language == "AR" || "KR"
                  ? item["Location Description Arabic"]
                  : item["Location Description"]}
              </h1>
              <p>
                {currentLanguage.CampaignsParagrphVolunteersNumPartOne}
                <span className="text-2xl font-[900] text-yellow-500 underline px-1">
                  {item["Number of Volunteers"]}
                </span>{" "}
                {currentLanguage.CampaignsParagrphVolunteersNumPartTwo}{" "}
                {currentLanguage.CampaignsParagrphTrashNumPartOne}
                <span className="text-2xl font-[900] text-yellow-500 underline px-1">
                  {item["Number of Trash Bags"]}
                </span>{" "}
                {currentLanguage.CampaignsParagrphTrashNumPartTwo}
                <a
                  href="#"
                  className="text-primary underline font-semibold mx-1"
                >
                  {currentLanguage.CampaignsParagrphaTag}
                </a>
              </p>
            </div>
          </li>
        ) : null
      )}
    </>
  );
};

export default CampaignsCards;
