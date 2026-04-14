import Image from "next/image";
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

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partnership />
      <ServiceCardCarousel />
      <Stats />
      <ServiceGrid />
      <CTASection />
      <Clientele />
      <Industry />
      <LeadForm />
      <Testimonials />
      <Blogs />
      <Footer />
    </main>
  );
}
