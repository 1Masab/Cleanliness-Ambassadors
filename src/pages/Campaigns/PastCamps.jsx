import React from "react";
import CampaignsCards from "../Home/CampaignsCards";
import { JoinButton } from "../../components";
import SectionsTitle from "../../components/SectionsTitle";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const PastCampaigns = () => {
  const { currentLanguage } = useLanguage();

  return (
    <section className={`sm:px-16 px-0 sm:py-16 py-10 relative`}>
      <SectionsTitle
        title={currentLanguage.CampaignSectionHeading}
         AddStyle="flex-col mb-12"
        color="before:bg-yellow-300"
      />
      <div className="divider" />
      <div className="container">
        <div className="timeline">
          <ul>
            <CampaignsCards startIndex={1} endIndex={6} theSkipedIndex={2} RenderOneImage />
          </ul>
        </div>
        <Link to="/allCampaigns">
        <JoinButton BtnText={"LaodMore"} BtnStyle={"text-white"} />
        </Link>
      </div>
    </section>
  );
};

export default PastCampaigns;
