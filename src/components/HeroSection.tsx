import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Star, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [currentTab, setCurrentTab] = useState("compliance");

  const stats = [
    { value: "500+", label: "Certifications Completed" },
    { value: "99.8%", label: "Success Rate" },
    { value: "50+", label: "Digital Projects" },
    { value: "24/7", label: "Support Available" }
  ];

  const services = {
    compliance: {
      title: "Compliance & Certification Services",
      subtitle: "BIS, ISI, EPR & TEC Certifications Made Simple",
      features: [
        "Bureau of Indian Standards (BIS) Certification",
        "Indian Standards Institute (ISI) Marking",
        "Extended Producer Responsibility (EPR) Services",
        "Telecom Equipment Certification (TEC)"
      ]
    },
    digital: {
      title: "Premium Digital Services",
      subtitle: "Transform Your Business with Cutting-Edge Technology",
      features: [
        "Custom Web & Mobile App Development",
        "Professional UI/UX Design Services",
        "Digital Marketing & SEO Optimization",
        "CRM & Business Automation Solutions"
      ]
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-100 via-indigo-50 to-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-2xl animate-float" style={{ animationDelay: "6s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Service Toggle Tabs */}
          <div className="inline-flex glass-card p-2 rounded-2xl mb-8">
            <button
              onClick={() => setCurrentTab("compliance")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentTab === "compliance"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield className="w-4 h-4 inline mr-2" />
              Compliance
            </button>
            <button
              onClick={() => setCurrentTab("digital")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentTab === "digital"
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="w-4 h-4 inline mr-2" />
              Digital Services
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient-primary">
                  {services[currentTab].title.split(" ")[0]}
                </span>{" "}
                <span className="text-foreground">
                  {services[currentTab].title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                {services[currentTab].subtitle}
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {services[currentTab].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 glass-card p-4 rounded-xl hover:border-primary/30 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button className="btn-hero group">
                {currentTab === "compliance" ? "Get BIS Certified" : "Start Your Project"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline-hero">
                Schedule Consultation
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;