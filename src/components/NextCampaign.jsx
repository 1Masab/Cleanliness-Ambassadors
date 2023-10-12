import { NextCampaignf } from "../assets";
import NextCampDetalis from "./NextCampDetalis";
const NextCampaign = () => {
  return (
    <section>
      <div className={`bg-[#D8E3DC] relative py-10 max-w-full`}>
        <div className="flex flex-col sm:flex-row items-center gap-0 sm:gap-10 font-[500] leading-7 w-fit mx-auto ">
          <div className="h-[300px]">
            <img
              src={NextCampaignf}
              alt="A picture of a man on the shore of the Tigris River"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="px-5 text-center sm:text-start">
            <NextCampDetalis MoreInfoBTN={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextCampaign;
