import Navbar from "./component/website/Navbar";
import Hero from "./component/website/homepage/Hero";
import Stats from "./component/website/homepage/Stats";
import ServiceGrid from "./component/website/homepage/ServiceGrid";
import Footer from "./component/website/Footer";
import Clientele from "./component/website/homepage/Clientele";
import Testimonials from "./component/website/homepage/Testimonial";
import LeadForm from "./component/website/homepage/LeadForm";
import Industry from "./component/website/homepage/IndustryCover";
import Blogs from "./component/website/homepage/Blogs";
import ServiceCardCarousel from "./component/website/homepage/ServiceCardCrousel";
import Partnership from "./component/website/homepage/Partnership";
import CTASection from "./component/website/CTASection";
import About from "./component/website/homepage/About";
import HowWeWork from "./component/website/homepage/HowWeWork";
import FAQ from "./component/website/FAQ";
import { homeFAQs } from "./data/faqData";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Partnership />
      <ServiceCardCarousel />
      <Stats />
      <CTASection />
      <ServiceGrid />
      <HowWeWork />
      <Industry />
      <LeadForm />
      <Clientele />
      <Testimonials />
      <Blogs />
      <FAQ
        eyebrow="Frequently Asked Questions?"
        title="Everything You Need to Know Before You Grow!"
        items={homeFAQs}
      />
      <Footer />
    </main>
  );
}
