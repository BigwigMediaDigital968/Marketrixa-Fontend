import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import ContentHero from "./component/ContentHero";
import ContentAbout from "./component/ContentAbout";
import ContentProcess from "./component/ContentProcess";
import FAQ from "@/app/component/website/FAQ";
import { ContentFAQs } from "@/app/data/faqData";
import ContentService from "./component/ContentService";

export default function ContantMarketingPage() {
  return (
    <>
      <Navbar />
      <ContentHero />
      <ContentAbout />
      <ContentProcess />
      <ContentService />

      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={ContentFAQs}
      />
      <Footer />
    </>
  );
}
