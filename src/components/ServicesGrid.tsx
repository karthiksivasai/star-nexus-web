import { useState } from "react";
import { Shield, Code, Palette, TrendingUp, FileCheck, Smartphone, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services", icon: Globe },
    { id: "compliance", label: "Compliance", icon: Shield },
    { id: "digital", label: "Digital", icon: Code }
  ];

  const services = [
    {
      id: 1,
      category: "compliance",
      icon: Shield,
      title: "BIS Certification",
      description: "Complete Bureau of Indian Standards certification process with expert guidance and fast-track approval.",
      features: ["Fast Processing", "Expert Guidance", "100% Success Rate"],
      price: "Starting from ₹15,000",
      timeline: "15-30 days"
    },
    {
      id: 2,
      category: "compliance",
      icon: FileCheck,
      title: "ISI Certification",
      description: "Indian Standards Institute marking for quality assurance and market compliance.",
      features: ["Quality Assurance", "Market Access", "Compliance Support"],
      price: "Starting from ₹12,000",
      timeline: "10-20 days"
    },
    {
      id: 3,
      category: "compliance",
      icon: Zap,
      title: "EPR Services",
      description: "Extended Producer Responsibility compliance for sustainable business practices.",
      features: ["Eco-Friendly", "Legal Compliance", "Ongoing Support"],
      price: "Starting from ₹8,000",
      timeline: "7-15 days"
    },
    {
      id: 4,
      category: "digital",
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      price: "Starting from ₹25,000",
      timeline: "2-8 weeks"
    },
    {
      id: 5,
      category: "digital",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["Cross-Platform", "Native Performance", "App Store Optimization"],
      price: "Starting from ₹50,000",
      timeline: "4-12 weeks"
    },
    {
      id: 6,
      category: "digital",
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive conversions.",
      features: ["User Research", "Prototyping", "Design Systems"],
      price: "Starting from ₹15,000",
      timeline: "1-4 weeks"
    },
    {
      id: 7,
      category: "digital",
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and sales.",
      features: ["SEO/SEM", "Social Media", "Analytics"],
      price: "Starting from ₹20,000/month",
      timeline: "Ongoing"
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Premium Services</span>{" "}
            <span className="text-foreground">for Your Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compliance certifications to cutting-edge digital solutions, 
            we provide end-to-end services to accelerate your business growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-2xl">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="card-service group h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.category === 'compliance' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary/10 text-secondary'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        service.category === 'compliance'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        {service.category === 'compliance' ? 'Compliance' : 'Digital'}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Pricing and Timeline */}
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Price:</span>
                        <span className="font-semibold text-foreground">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Timeline:</span>
                        <span className="font-semibold text-foreground">{service.timeline}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${
                        service.category === 'compliance' ? 'btn-hero' : 'btn-secondary'
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts can create tailored solutions that perfectly match your business requirements.
            </p>
            <Button className="btn-hero">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;