import FAQ from "@/app/component/website/FAQ";
import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import { AffiliateFAQs } from "@/app/data/faqData";
import AffiliateOtherServices from "./component/AffiliateOtherServices";
import AffiliateHero from "./component/Affiliatehero";
import AffiliateAbout from "./component/AffiliateAbout";
import AffiliateGrow from "./component/AffiliateGrow";
import AffiliatePartner from "./component/AffiliatePartner";
import AffiliateServices from "./component/AffiliateServices";
import AffProcessBenifit from "./component/AffProcessBenifit";
import WhyAffMarketrixs from "./component/WhyAffMarketrixs";

export default function ServicePage() {
  return (
    <>
      <main>
        <Navbar />
        <AffiliateHero />
        <AffiliateAbout />
        <AffiliateGrow />
        <AffiliatePartner />
        <AffiliateServices />
        <AffProcessBenifit />
        <WhyAffMarketrixs />

        <AffiliateOtherServices />

        <FAQ
          eyebrow="Got questions?"
          title="Frequently Asked Questions"
          items={AffiliateFAQs}
        />
        <Footer />
      </main>
    </>
  );
}
