import React from "react";
import Landing from "./Landing";
import PasstCamps from "./PastCamps";
import { NextCampaign } from "../../components";
import OpinionsOnNextCamp from "./OpinionsOnNextCamp";
import StayInformed from "./StayInformed";
import Resources from "./Resources";
import Partners from "./Partners";

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
