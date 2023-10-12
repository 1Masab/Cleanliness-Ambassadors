import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NextCampaign = () => {
  const { currentLanguage } = useLanguage();
  return (
    <section>
      <div className="flex justify-center my-8">
        <div className="NextCampaignBanner w-full max-w-4xl lg:w-[95%] py-10 px-5 md:mx-10 mx-5 rounded-3xl gap-4 text-white flex flex-col lg:flex-row text-center lg:text-start items-center justify-between lg:justify-around overflow-hidden shadow-[10px_10px_0px_#548b68]">
          <p className="sm:text-2xl text-xl w-full sm:w-[90%] lg:w-[50%] leading-normal">
            {currentLanguage.bannerText}
          </p>
          <Link to="/NextCampaignFrome" className="border py-6 px-10 rounded-2xl sm:scale-100 scale-95 SubscribeBTN">
            {currentLanguage.bannerButton}
          </Link>
          {/* فقاعات */}
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default NextCampaign;
