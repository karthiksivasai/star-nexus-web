import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Globe, 
  Shield, 
  FileText, 
  Smartphone, 
  Code, 
  Search,
  BarChart,
  ArrowRight,
  Clock,
  Users,
  Star
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"compliance" | "technology">("compliance");

  const complianceServices = [
    {
      id: "bis-certification",
      title: "BIS Certification",
      description: "Bureau of Indian Standards certification for electronics and consumer products",
      features: ["Product Testing", "Documentation Support", "Compliance Audit", "Certificate Management"],
      timeline: "4-8 weeks",
      price: "Starting from ₹25,000",
      category: "Electronics & Consumer Goods",
      icon: Shield,
      difficulty: "Medium"
    },
    {
      id: "fssai-license",
      title: "FSSAI License",
      description: "Food Safety and Standards Authority of India licensing for food businesses",
      features: ["License Application", "Documentation", "Renewal Support", "Compliance Training"],
      timeline: "2-4 weeks",
      price: "Starting from ₹15,000",
      category: "Food & Beverages",
      icon: FileText,
      difficulty: "Easy"
    },
    {
      id: "iso-certification",
      title: "ISO Certification",
      description: "International Organization for Standardization certifications (ISO 9001, 14001, 45001)",
      features: ["Gap Analysis", "Documentation", "Internal Audit", "Certification Support"],
      timeline: "8-12 weeks",
      price: "Starting from ₹75,000",
      category: "Quality Management",
      icon: CheckCircle,
      difficulty: "Complex"
    },
    {
      id: "export-import-license",
      title: "Export-Import License",
      description: "IEC code and export-import compliance for international trade",
      features: ["IEC Registration", "Export Documentation", "Import Compliance", "Trade Guidance"],
      timeline: "1-2 weeks",
      price: "Starting from ₹5,000",
      category: "International Trade",
      icon: Globe,
      difficulty: "Easy"
    }
  ];

  const technologyServices = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "Custom Development", "SEO Optimization", "Performance Tuning"],
      timeline: "4-12 weeks",
      price: "Starting from ₹50,000",
      category: "Web Solutions",
      icon: Code,
      difficulty: "Medium"
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native Development", "Cross-platform", "App Store Deployment", "Maintenance Support"],
      timeline: "8-16 weeks",
      price: "Starting from ₹1,50,000",
      category: "Mobile Solutions",
      icon: Smartphone,
      difficulty: "Complex"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to grow your online presence",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      timeline: "Ongoing",
      price: "Starting from ₹25,000/month",
      category: "Marketing",
      icon: BarChart,
      difficulty: "Medium"
    },
    {
      id: "seo-optimization",
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and ranking",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Performance Monitoring"],
      timeline: "3-6 months",
      price: "Starting from ₹15,000/month",
      category: "SEO",
      icon: Search,
      difficulty: "Medium"
    }
  ];

  const activeServices = activeTab === "compliance" ? complianceServices : technologyServices;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-warning/10 text-warning border-warning/20";
      case "Complex": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-border";
    }
  };

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-gradient-primary">Professional</span> Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive compliance and technology solutions to accelerate your business growth and ensure regulatory excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" onClick={() => navigate("/contact")}>
              Get Free Consultation
            </Button>
            <Button variant="outline" className="btn-outline-hero">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted rounded-xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab("compliance")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "compliance"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Shield className="w-5 h-5 inline-block mr-2" />
                Compliance Services
              </button>
              <button
                onClick={() => setActiveTab("technology")}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "technology"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code className="w-5 h-5 inline-block mr-2" />
                Technology Services
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="card-clickable group"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <Badge className={getDifficultyColor(service.difficulty)}>
                        {service.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-2">KEY FEATURES</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-2" />
                          {service.timeline}
                        </div>
                        <div className="flex items-center text-sm font-medium text-primary">
                          <span>{service.price}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Star Certifications?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 rounded-xl bg-primary/10 text-primary inline-block mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Certified professionals with 10+ years of industry experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-xl bg-primary/10 text-primary inline-block mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick turnaround times without compromising on quality
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 rounded-xl bg-primary/10 text-primary inline-block mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">98% Success Rate</h3>
              <p className="text-muted-foreground">
                Proven track record of successful certifications and implementations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and personalized service recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" onClick={() => navigate("/contact")}>
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="btn-outline-hero">
              Get Instant Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;