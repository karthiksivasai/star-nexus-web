import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Code, 
  CheckCircle, 
  Globe, 
  FileText, 
  Smartphone, 
  Search,
  BarChart,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";

const ServicesPreview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"compliance" | "technology">("compliance");

  const complianceServices = [
    {
      id: "bis-certification",
      title: "BIS Certification",
      description: "Bureau of Indian Standards certification for electronics and consumer products",
      features: ["Product Testing", "Documentation", "Factory Inspection", "Certificate Management"],
      timeline: "4-8 weeks",
      icon: Shield,
      popular: true
    },
    {
      id: "fssai-license",
      title: "FSSAI License",
      description: "Food Safety licensing for food businesses and manufacturers",
      features: ["License Application", "Documentation", "Renewal Support", "Compliance Audit"],
      timeline: "2-4 weeks",
      icon: FileText,
      popular: false
    },
    {
      id: "iso-certification",
      title: "ISO Certification",
      description: "Quality management system certification (ISO 9001, 14001, 45001)",
      features: ["Gap Analysis", "Documentation", "Internal Audit", "Certification"],
      timeline: "8-12 weeks",
      icon: CheckCircle,
      popular: false
    }
  ];

  const technologyServices = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications with modern technologies",
      features: ["Responsive Design", "SEO Optimization", "Custom Development", "Maintenance"],
      timeline: "4-12 weeks",
      icon: Code,
      popular: true
    },
    {
      id: "mobile-app-development",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "Cross-platform", "App Store Deployment", "Support"],
      timeline: "8-16 weeks",
      icon: Smartphone,
      popular: false
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to grow your business",
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
      timeline: "Ongoing",
      icon: BarChart,
      popular: false
    }
  ];

  const activeServices = activeTab === "compliance" ? complianceServices : technologyServices;

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive <span className="text-gradient-primary">Solutions</span> for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From regulatory compliance to digital transformation, we provide end-to-end solutions that drive growth and ensure excellence.
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-xl p-2 inline-flex">
            <button
              onClick={() => setActiveTab("compliance")}
              className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "compliance"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield className="w-5 h-5" />
              Compliance Services
            </button>
            <button
              onClick={() => setActiveTab("technology")}
              className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "technology"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="w-5 h-5" />
              Technology Services
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activeServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="card-clickable group relative"
                onClick={() => handleServiceClick(service.id)}
              >
                {service.popular && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="p-4 rounded-xl bg-primary/10 text-primary inline-block w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">INCLUDED</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {service.timeline}
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero mr-4" 
            onClick={() => navigate("/services")}
          >
            View All Services
          </Button>
          <Button 
            variant="outline" 
            className="btn-outline-hero"
            onClick={() => navigate("/contact")}
          >
            Get Consultation
          </Button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2000+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
    </div>
  );
};

export default ServicesPreview;