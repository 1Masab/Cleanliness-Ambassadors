import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const NextCampDetalis = ({MoreInfoBTN}) => {
  const { currentLanguage } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-bold py-2">
        {currentLanguage.NextCampaign.campaign_name}
      </h1>
      <p>
        {currentLanguage.NextCampaign.description} <br />
         | &nbsp;
        <span className="text-red-700 bg-slate-300 p-1 rounded-sm inline-block">
          {currentLanguage.NextCampaign.date}
        </span>
        &nbsp; | &nbsp;
        <span className="text-sky-700 bg-slate-300 p-1 rounded-sm inline-block my-1">
          {currentLanguage.NextCampaign.location}
        </span>&nbsp; |
      </p>

      {MoreInfoBTN && (
        <Link
          to="/NextCampaignFrome"
          className="text-white px-8 py-2 mt-5 w-fit block bg-[#003c2f] rounded-JoinUsBottunradius hover:bg-[#003c2fb0] transition-all shadow-lg cursor-pointer mx-auto sm:mx-0"
        >
          {currentLanguage.NextCampaign.learn_more_link}
        </Link>
      )}
    </div>
  );
};

export default NextCampDetalis;
