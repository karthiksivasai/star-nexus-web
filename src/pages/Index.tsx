import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafc] to-white">
      <Header />
      <main>
        <HeroSection />
        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <section className="bg-gradient-to-b from-white to-[#f9fafc] py-20">
          <ServicesPreview />
        </section>
        
        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <section className="bg-[#f6f8fd] py-20">
          <AboutPreview />
        </section>
        
        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <section className="bg-gradient-to-r from-indigo-50 via-white to-sky-50 py-20">
          <BlogPreview />
        </section>
        
        {/* Section Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        
        <section className="bg-gradient-to-tr from-cyan-100 via-white to-violet-100 py-20">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
