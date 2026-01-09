import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import CategorySection from "@/components/CategorySection";
import ProductsSection from "@/components/ProductsSection";
import FeaturedBanner from "@/components/FeaturedBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesBar />
      <CategorySection />
      <ProductsSection />
      <FeaturedBanner />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
