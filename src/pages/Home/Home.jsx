import LandingHome from "./LandingHome";
import Overview from "./Overview";
import Camps from "./Camps";
import FAQs from "./FAQs";
import Testimonials from "./Testimonials";
import NextCampaignBanner from "../../components/NextCampaignBanner";
import StayInformedH from "./StayInformedH";
import Statistics from "./Statistics";
import { useEffect } from "react";
import { applyIntersectionObserver } from "../../../OnScrollAnimation";
const Home = () => {
  useEffect(() => {
    // Call the applyIntersectionObserver function to apply the on scroll animation
    applyIntersectionObserver();
  }, []);
  return (
    <>
      <section className="HeroSectionWarapper h-[70vh] sm:h-screen">
        <LandingHome />
      </section>
      <Overview />
      <section className="relative w-full">
        <Camps />
      </section>
      <Statistics />
      <FAQs />
      <Testimonials />
      <section>
        <NextCampaignBanner />
      </section>
      <StayInformedH />
    </>
  );
};

export default Home;
