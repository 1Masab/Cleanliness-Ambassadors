import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { JoinButton } from "../../components";
import { NextCampaignIllustration, waveImgCampaignsTop } from "../../assets";
import CampaignsCards from "./CampaignsCards";
import { Link } from "react-router-dom";
import {SectionsTitle} from "../../components";
// this is the Campaigns Section in the Hom page {هذا قسم الحملات في الصفحة الرئيسية }
const Camps = () => {
  const { currentLanguage } = useLanguage();
  return (
    <>
      <img
        src={waveImgCampaignsTop}
        alt="svg"
        className="absolute -top-[300px] h-[300px] w-full"
      />
      <section className="container sm:pb-16 pb-10 pt-4 relative">
        <SectionsTitle
          title={currentLanguage.CampaignSectionHeading}
          subTitle={currentLanguage.CampaignSectionIntroductory}
          AddStyle="flex-col mb-12"
          color="before:bg-yellow-300"
        />
        <div className="timeline HomePage">
          <ul>
            {/* 👇 this component renders the past Campaings Cards*/}
            <CampaignsCards
              startIndex={2}
              endIndex={6}
              theSkipedIndex={1}
              RenderOneImage
            />
            <li>
              <div className="timeline-content last-Card border-2 border-primary p-4 rounded-NextCampaign">
                <img src={NextCampaignIllustration} />
                <h1>{currentLanguage.theNextCampaignHeadText}</h1>
                <p>{currentLanguage.NextCampaignDate} : 2023-12-3</p>
                <Link
                  to="/NextCampaignFrome"
                  className="text-primary underline font-semibold"
                >
                  {currentLanguage.theNextCampaignSubHeadText}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <Link to="/allCampaigns" >
          <JoinButton BtnText={"LaodMore"} BtnStyle={"text-white"} />
        </Link>
      </section>
    </>
  );
};

export default Camps;
