import CTA2 from "../component/website/CTA2";
import FAQ from "../component/website/FAQ";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";
import IndustryHero from "../component/website/industry/IndustryHero";
import IndustryProject from "../component/website/industry/IndustryProject";
import IndustryShow from "../component/website/industry/IndustryShow";
import ResultsShowcase from "../component/website/homepage/ResultsShowcase";
import { industryFAQs } from "../data/faqData";

export default function IndustryPage() {
  return (
    <>
      <main>
        <Navbar />
        <IndustryHero />
        <IndustryShow />
        <ResultsShowcase/>
        <CTA2 />
        <IndustryProject />
        <FAQ
          eyebrow="Want to know more?"
          title="Frequently Asked Questions"
          items={industryFAQs}
        />
        <Footer />
      </main>
    </>
  );
}
