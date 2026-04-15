import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import SeoFeatures from "./component/SeoFeature";
import SeoTypes from "./component/SeoTypes";
import SeoHero from "./component/SeoHero";

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <SeoHero />
      <SeoFeatures />
      <SeoTypes />
      <Footer />
    </>
  );
}
