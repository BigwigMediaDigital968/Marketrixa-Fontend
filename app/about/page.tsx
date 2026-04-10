import Footer from "../component/website/Footer";
import AboutHero from "../component/website/About/Abouthero";
import AboutStats from "../component/website/About/AboutStats";
import Strategy from "../component/website/About/Ourprocess";
import OurServices from "../component/website/About/OurServices";
import Navbar from "../component/website/Navbar";

export default function aboutPage() {
  return (
    <>
      <main>
        <Navbar />
        <AboutHero />
        <AboutStats />
        <OurServices />
        <Strategy />
        <Footer />
      </main>
    </>
  );
}
