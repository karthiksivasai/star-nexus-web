import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <AboutPreview />
        <BlogPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
