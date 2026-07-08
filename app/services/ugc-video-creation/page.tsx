import Footer from "@/app/component/website/Footer";
import Navbar from "@/app/component/website/Navbar";
import UgcServicePage from "./Components/PageContent";
import Hero from "./Components/Hero";
import FAQ from "@/app/component/website/FAQ";
import OtherServices from "../website-development-service/component/OtherService";

export const UgcFaqs = [
    {
        question: "How is UGC different from influencer marketing?",
        answer:
            "UGC focuses on authentic, creator-driven content — often from everyday users, micro-influencers, or customers — rather than big-name celebrities. The result feels more relatable, is more affordable to produce at scale, and consistently outperforms polished brand ads in engagement and conversion rates.",
    },
    {
        question: "Do I need to be in Ahmedabad to work with you?",
        answer:
            "Not at all. While Marketrixa is rooted in Ahmedabad and serves brands across Gujarat, we work with businesses throughout India. Our UGC video campaigns are designed for any location and any platform.",
    },
    {
        question: "How long before we see results from UGC video campaigns?",
        answer:
            "Most clients start seeing content go live within 2 to 4 weeks. Meaningful performance data — reach, engagement, click-throughs — typically comes in within the first 30 to 45 days. We set realistic benchmarks upfront and report against them monthly.",
    },
    {
        question: "Can UGC videos be used in paid ads?",
        answer:
            "Absolutely — and this is where UGC often becomes a brand's most effective paid asset. We help you leverage creator content as dark post ads on Meta and YouTube, significantly lowering cost-per-click and improving ad relevance scores.",
    },
    {
        question: "What industries does Marketrixa work with for UGC?",
        answer:
            "We have experience across e-commerce, fashion, food & beverage, real estate, healthcare, ed-tech, and local retail brands. If your customer can speak positively about your product or service on camera, UGC video will work for you.",
    },
    {
        question: "Ready to Let Real People Sell for You?",
        answer:
            "Book a free strategy call with Marketrixa's UGC team and walk away with a content plan built specifically for your brand and your audience in Ahmedabad. No fluff. No generic templates. Just a clear, data-backed UGC video strategy that delivers results.",
    },
];

export default function Page() {
    return (
        <>
            <Navbar />
            <Hero />
            <UgcServicePage />
            <OtherServices />

            <FAQ
                eyebrow="Got questions?"
                title="Frequently Asked Questions"
                items={UgcFaqs}
            />
            <Footer />
        </>
    );
}