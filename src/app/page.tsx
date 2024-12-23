import BrandsSection from "./_components/Sections/BrandsSection";
import HeroSection from "./_components/Sections/HeroSection";
import MarketingAgencySection from "./_components/Sections/MarketingAgencySection";
import Navbar from "./_components/Sections/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <BrandsSection/>
      <MarketingAgencySection/>
    </div>
  );
}
