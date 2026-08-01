import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TargetFish from "./components/sections/TargetFish";
import GuidePlan from "./components/sections/GuidePlan";
import Boat from "./components/sections/Boat";
import Price from "./components/sections/Price";
import CalendarSection from "./components/sections/Calendar";
import Access from "./components/sections/Access";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import MobileCTA from "./components/sections/MobileCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <TargetFish />
        <GuidePlan />
        <Boat />
        <Price />
        <CalendarSection />
        <Access />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
