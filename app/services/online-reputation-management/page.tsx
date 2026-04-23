import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import OrmHero from "./component/OrmHero";
import AboutORM from "./component/AboutORM";
import WhyMarketORM from "./component/WhyMarketORM";
import WhyIndusMarket from "./component/WhyIndusMarket";
import OrmProcess from "./component/OrmProcess";
import FAQ from "@/app/component/website/FAQ";
import { ORMFaqs } from "@/app/data/faqData";

export default function OrmPageContant() {
  return (
    <>
      <Navbar />
      <OrmHero />
      <AboutORM />
      <WhyMarketORM />
      <WhyIndusMarket />
      <OrmProcess />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={ORMFaqs}
      />
      <Footer />
    </>
  );
}
