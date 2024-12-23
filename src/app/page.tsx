import BrandsSection from "./_components/Sections/BrandsSection";
import HeroSection from "./_components/Sections/HeroSection";
import Navbar from "./_components/Sections/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <BrandsSection/>
    </div>
  );
}
