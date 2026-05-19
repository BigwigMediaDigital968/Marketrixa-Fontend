import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import OrmHero from "./component/OrmHero";
import AboutORM from "./component/AboutORM";
import WhyMarketORM from "./component/WhyMarketORM";
import WhyIndusMarket from "./component/WhyIndusMarket";
import OrmProcess from "./component/OrmProcess";
import FAQ from "@/app/component/website/FAQ";
import { ORMFaqs } from "@/app/data/faqData";
import OrmStats from "./component/OrmStats";
import OrmTestimonial from "./component/OrmTestimonial";

export default function OrmPageContant() {
  return (
    <>
      <Navbar />
      <OrmHero />
      <OrmStats />
      <AboutORM />
      <WhyMarketORM />
      <OrmProcess />
      <WhyIndusMarket />
      <OrmTestimonial />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={ORMFaqs}
      />
      <Footer />
    </>
  );
}
