import LocationSection from "../component/website/contact/CompanyLocation";
import ContactHero from "../component/website/contact/ContactHero";
import ContactTestimonial from "../component/website/contact/ContactTestimonial";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";

export default function contactPage() {
  return (
    <>
      <main>
        <Navbar />
        <ContactHero />
        <LocationSection />
        <ContactTestimonial />
        <Footer />
      </main>
    </>
  );
}
