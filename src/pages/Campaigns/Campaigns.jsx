import Landing from "./Landing";
import PasstCamps from "./PastCamps";
import { NextCampaign } from "../../components";
import Resources from "./Resources";
import Partners from "./Partners";
import StayInformed from "./StayInformed";
import OpinionsOnNextCamp from "./OpinionsOnNextCamp";

const Campaigns = () => {
  return (
    <>
      <Landing />
      <PasstCamps />
      <NextCampaign MoreInfoBTN={true} />
      <Resources />
      <Partners />
      <StayInformed />
      <OpinionsOnNextCamp />
    </>
  );
};

export default Campaigns;
