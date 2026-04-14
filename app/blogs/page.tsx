import BlogHero from "../component/website/blog/BlogHero";
import BlogLayout from "../component/website/blog/BlogLayout";
import Footer from "../component/website/Footer";
import Navbar from "../component/website/Navbar";

export default function blogPage() {
  return (
    <>
      <main>
        <Navbar />
        <BlogHero />
        <BlogLayout />
        <Footer />
      </main>
    </>
  );
}
