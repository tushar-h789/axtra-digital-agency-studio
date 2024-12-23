import BrandsSection from "./_components/Sections/BrandsSection";
import FeaturedSection from "./_components/Sections/FeaturedSection";
import HeroSection from "./_components/Sections/HeroSection";
import MarketingAgencySection from "./_components/Sections/MarketingAgencySection";
import Navbar from "./_components/Sections/Navbar";
import Services from "./_components/Sections/Services";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <HeroSection/>
      <BrandsSection/>
      <MarketingAgencySection/>
      <Services/>
      <FeaturedSection/>
    </div>
  );
}
