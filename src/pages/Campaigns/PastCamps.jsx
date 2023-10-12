import CampaignsCards from "../Home/CampaignsCards";
import { styles } from "../../styles";
import { JoinButton } from "../../components";
const PastCampaigns = () => {
  return (
    <section className={`sm:px-16 px-0 sm:py-16 py-10 relative`}>
      <div className="divider"/>
      <div className="container">
        <div className="timeline">
          <ul>
            <CampaignsCards startIndex={1} endIndex={6} theSkipedIndex={2} />
          </ul>
        </div>
        <JoinButton BtnText={"LaodMore"} BtnStyle={"text-white"} />
      </div>
    </section>
  );
};

export default PastCampaigns;
