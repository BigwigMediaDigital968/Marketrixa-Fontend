import Footer from "../component/Footer";
import AboutHero from "../component/website/About/Abouthero";
import AboutStats from "../component/website/About/AboutStats";
import Navbar from "../component/website/Navbar";

export default function aboutPage() {
  return (
    <>
      <main className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 min-h-screen selection:bg-[#F26522] selection:text-white">
        <Navbar />
        <AboutHero />
        <AboutStats />
        <Footer />
      </main>
    </>
  );
}
