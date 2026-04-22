import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import EmailHero from "./component/EmailHero";
import EmailTools from "./component/EmailTools";
import FAQ from "@/app/component/website/FAQ";
import { EmailMarketingFAQs } from "@/app/data/faqData";
import WhyEmail from "./component/WhyEmail";
import EmailProcess from "./component/EmailProcess";

export default function EmailPage() {
  return (
    <>
      <Navbar />
      <EmailHero />
      <EmailTools />
      <WhyEmail />
      <EmailProcess />
      <FAQ
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        items={EmailMarketingFAQs}
      />
      <Footer />
    </>
  );
}
