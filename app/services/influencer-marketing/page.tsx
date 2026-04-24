import FAQ from "@/app/component/website/FAQ";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import { InfluencerFaqs } from "@/app/data/faqData";
import InfluencerHero from "./component/InfluencerHero";
import AboutInfluence from "./component/AboutInfluence";
import WhyInfluence from "./component/WhyInfluence";
import InfluenceService from "./component/InfluenceService";
import WhyInfluenceMar from "./component/WhyInfluenceMar";

export default function InfluencerPage() {
  return (
    <>
      <Navbar />
      <InfluencerHero />
      <AboutInfluence />
      <WhyInfluence />
      <InfluenceService />
      <WhyInfluenceMar />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={InfluencerFaqs}
      />
      <Footer />
    </>
  );
}
