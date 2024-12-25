import BlogSection from "./_components/Sections/BlogSection";
import BrandsSection from "./_components/Sections/BrandsSection";
import WhyChooseUsIndex from "./_components/Sections/ChooseUs/WhyChooseUsIndex";
import CommentsSection from "./_components/Sections/CommentsSection";
import FeaturedSection from "./_components/Sections/FeaturedSection";
import Footer from "./_components/Sections/Footer";
import HeroSection from "./_components/Sections/HeroSection";
import MarketingAgencySection from "./_components/Sections/MarketingAgencySection";
import Navbar from "./_components/Sections/Navbar";
import PricingSection from "./_components/Sections/PricingSection";
import Services from "./_components/Sections/Services";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <MarketingAgencySection />
      <Services />
      <FeaturedSection />
      <CommentsSection />
      <WhyChooseUsIndex />
      <PricingSection />
      <BlogSection />
      <Footer/>
    </div>
  );
}
