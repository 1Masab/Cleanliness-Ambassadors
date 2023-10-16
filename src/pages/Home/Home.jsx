import React, { useEffect } from "react";
import { applyIntersectionObserver } from "../../../OnScrollAnimation";
import { NextCampaignBanner } from "../../components";
import StayInformedH from "./StayInformedH";
import Testimonials from "./Testimonials";
import LandingHome from "./LandingHome";
import Statistics from "./Statistics";
import Overview from "./Overview";
import Camps from "./Camps";
import FAQs from "./FAQs";
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
