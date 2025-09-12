import React from "react";
import { useNavigate } from "react-router-dom";
import SliderSection from "../LandingPage/SliderSection";
import TrainingSection from "../LandingPage/TrainingSection";
import Services from "../LandingPage/Services";
import AmazingTraining from "../LandingPage/AmazingTraining";
import PricingSection from "../LandingPage/PricingSection";
import FactsSection from "../LandingPage/FactsSection";
import Footer from "../LandingPage/Footer";

function Home() {
  return (
    <div>
      <SliderSection />
      <TrainingSection />
      <Services />
      <AmazingTraining />
      <PricingSection />
      <FactsSection />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
