import { useParams, useNavigate } from "react-router-dom";
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
  ArrowLeft,
  Clock,
  DollarSign,
  Users,
  Star,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Service data - in a real app, this would come from an API or CMS
  const serviceData: Record<string, any> = {
    "bis-certification": {
      title: "BIS Certification",
      description: "Bureau of Indian Standards certification for electronics and consumer products",
      longDescription: "BIS certification is mandatory for a wide range of electronic and consumer products sold in India. Our comprehensive BIS certification service ensures your products meet all Indian standards and regulatory requirements, enabling smooth market entry and compliance.",
      category: "Electronics & Consumer Goods",
      icon: Shield,
      timeline: "4-8 weeks",
      price: "Starting from ₹25,000",
      difficulty: "Medium",
      features: [
        "Product Testing & Analysis",
        "Documentation Support",
        "Compliance Audit",
        "Certificate Management",
        "Renewal Assistance",
        "Technical Support"
      ],
      benefits: [
        "Legal market entry in India",
        "Enhanced product credibility",
        "Consumer trust and safety",
        "Regulatory compliance",
        "Competitive advantage",
        "Risk mitigation"
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "Understanding your product requirements and applicable standards"
        },
        {
          step: 2,
          title: "Documentation Preparation",
          description: "Preparing all necessary documents and technical specifications"
        },
        {
          step: 3,
          title: "Product Testing",
          description: "Conducting required tests at BIS approved laboratories"
        },
        {
          step: 4,
          title: "Application Submission",
          description: "Submitting application with all supporting documents to BIS"
        },
        {
          step: 5,
          title: "Factory Inspection",
          description: "BIS factory inspection and quality system verification"
        },
        {
          step: 6,
          title: "Certificate Issuance",
          description: "Final review and BIS certificate issuance"
        }
      ],
      useCases: [
        "Electronics and electrical products",
        "Consumer appliances",
        "Automotive components",
        "Textiles and garments",
        "Food products",
        "Toys and safety equipment"
      ]
    },
    "fssai-license": {
      title: "FSSAI License",
      description: "Food Safety and Standards Authority of India licensing for food businesses",
      longDescription: "FSSAI license is mandatory for all food business operators in India. We provide comprehensive FSSAI licensing services covering registration, licensing, and compliance support for all types of food businesses from small operators to large manufacturers.",
      category: "Food & Beverages",
      icon: FileText,
      timeline: "2-4 weeks",
      price: "Starting from ₹15,000",
      difficulty: "Easy",
      features: [
        "License Application",
        "Documentation Support",
        "Renewal Services",
        "Compliance Training",
        "Label Review",
        "Regulatory Updates"
      ],
      benefits: [
        "Legal food business operation",
        "Consumer confidence",
        "Market access",
        "Brand credibility",
        "Quality assurance",
        "Regulatory protection"
      ],
      process: [
        {
          step: 1,
          title: "Business Assessment",
          description: "Evaluating your food business type and applicable license category"
        },
        {
          step: 2,
          title: "Document Preparation",
          description: "Preparing all required documents and application forms"
        },
        {
          step: 3,
          title: "Online Application",
          description: "Submitting application through FSSAI online portal"
        },
        {
          step: 4,
          title: "Fee Payment",
          description: "Processing license fee payment and verification"
        },
        {
          step: 5,
          title: "Inspection (if required)",
          description: "FSSAI inspection for higher category licenses"
        },
        {
          step: 6,
          title: "License Grant",
          description: "FSSAI license approval and certificate download"
        }
      ],
      useCases: [
        "Food manufacturers",
        "Restaurants and cafes",
        "Food distributors",
        "Online food businesses",
        "Catering services",
        "Food importers/exporters"
      ]
    },
    "web-development": {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      longDescription: "Our web development services combine cutting-edge technologies with user-centered design to create websites and applications that drive business growth. From simple business websites to complex enterprise applications, we deliver solutions that perform.",
      category: "Web Solutions",
      icon: Code,
      timeline: "4-12 weeks",
      price: "Starting from ₹50,000",
      difficulty: "Medium",
      features: [
        "Responsive Design",
        "Custom Development",
        "SEO Optimization",
        "Performance Tuning",
        "Security Implementation",
        "Maintenance Support"
      ],
      benefits: [
        "Professional online presence",
        "Improved user experience",
        "Better search rankings",
        "Increased conversions",
        "Scalable architecture",
        "Mobile-first approach"
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description: "Understanding requirements and creating project roadmap"
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Creating wireframes, mockups, and interactive prototypes"
        },
        {
          step: 3,
          title: "Development",
          description: "Building the website with modern technologies and best practices"
        },
        {
          step: 4,
          title: "Testing & QA",
          description: "Comprehensive testing across devices and browsers"
        },
        {
          step: 5,
          title: "Deployment",
          description: "Launching the website on production servers"
        },
        {
          step: 6,
          title: "Support & Maintenance",
          description: "Ongoing support, updates, and performance monitoring"
        }
      ],
      useCases: [
        "Business websites",
        "E-commerce platforms",
        "Web applications",
        "Portfolio websites",
        "Corporate websites",
        "Custom dashboards"
      ]
    }
    // Add more services as needed
  };

  const service = serviceData[slug as string];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/services")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-warning/10 text-warning border-warning/20";
      case "Complex": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Service Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/services")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <IconComponent className="w-12 h-12" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {service.title}
                </h1>
                <Badge className={getDifficultyColor(service.difficulty)}>
                  {service.difficulty}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                {service.description}
              </p>
              <Badge variant="outline">{service.category}</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center p-4 bg-card rounded-xl border border-border">
              <Clock className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-medium">{service.timeline}</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-card rounded-xl border border-border">
              <DollarSign className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-muted-foreground">Pricing</div>
                <div className="font-medium">{service.price}</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-card rounded-xl border border-border">
              <Star className="w-5 h-5 text-primary mr-3" />
              <div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
                <div className="font-medium">98%</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero" onClick={() => navigate("/contact")}>
              Get Started Now
            </Button>
            <Button variant="outline" className="btn-outline-hero">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Process</CardTitle>
                  <CardDescription>
                    Step-by-step approach to ensure successful delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.process.map((step: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle>Common Use Cases</CardTitle>
                  <CardDescription>
                    Industries and scenarios where this service is most beneficial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.useCases.map((useCase: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Contact our experts for a free consultation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full btn-primary" onClick={() => navigate("/contact")}>
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-muted-foreground">
              Explore other services that might interest you
            </p>
          </div>
          
          <div className="text-center">
            <Button onClick={() => navigate("/services")} className="btn-outline-hero">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;