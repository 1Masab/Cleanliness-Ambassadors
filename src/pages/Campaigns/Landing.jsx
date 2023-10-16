import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CampaignHero } from "../../assets";
import { styles } from "../../styles";

const Landing = () => {
  const { currentLanguage } = useLanguage();
  const isMobileScreen = window.innerWidth >= 800;
  return (
    <section>
      <div className="w-full h-fit bg-CampaignHeroBackImg bg-cover object-bottom mt-[70px] bg-slate-100 pt-10 sm:pt-5 pb-16 sm:pb-5">
        <div className="mx-auto h-full px-5 flex items-center justify-evenly gap-10 text-gray-500 text-xl font-medium">
          <div className="lg:w-[50%]  z-10">
            <h6
              className={`${styles.sectionHeadText} leading-normal HeroGradientText`}
            >
              {currentLanguage.CampaignsLandingTitle}
            </h6>

            <p>{currentLanguage.CampaignsLandingSubTitle}</p>
            <a
              className="underline text-white px-8 py-2 mt-5 w-fit block bg-[#003c2f] rounded-JoinUsBottunradius hover:bg-[#003c2fc4] transition-all shadow-lg"
              href="#Subscribe"
            >
              {currentLanguage.Subscribe}
            </a>
          </div>
          {isMobileScreen && (
            <div className="h-full w-[400px]">
              <img
                src={CampaignHero}
                alt="Hero image of a Iraqi child Participates in cleaning campaign"
                className="w-full h-full object-cover light-effect-shadow"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Landing;
