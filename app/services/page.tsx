import Footer from "../component/website/Footer";
import ServiceCards from "../component/website/homepage/ServiceCardFlip";
import Navbar from "../component/website/Navbar";
import CoreServices from "../component/website/services/CoreService";
import ServiceHero from "../component/website/services/ServiceHero";

export default function ServicePage() {
  return (
    <>
      <main>
        <Navbar />
        <ServiceHero />
        <CoreServices />
        <ServiceCards />
        <Footer />
      </main>
    </>
  );
}
