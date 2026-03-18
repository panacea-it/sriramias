import Hero from "@/components/Hero";
import SecondSection from "@/components/SecondSection";
import ExploreCourses from "@/components/ExploreCourses";
import OurToppers from "@/components/OurToppers";
import DailyFeatures from "@/components/DailyFeatures";
import BuyOurBooks from "@/components/BuyOurBooks";
import OfflineCentresAndStory from "@/components/OfflineCentresAndStory";
import DownloadApp from "@/components/DownloadApp";
import YoutubeCarousel from "@/components/YoutubeCarousel";
import Footer from "@/components/Footer";
import FloatingEnquireButton from "@/components/FloatingEnquireButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <Hero />
      <SecondSection />
      <ExploreCourses />
      <OurToppers />
      <DailyFeatures />
      <BuyOurBooks />
      <OfflineCentresAndStory />
      <DownloadApp />
      <YoutubeCarousel />
      <Footer />
      <FloatingEnquireButton />
    </main>
  );
}