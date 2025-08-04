import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Eye, 
  Award, 
  Clock, 
  Globe, 
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart
} from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started as a compliance consulting firm with a vision to simplify regulatory processes for businesses."
    },
    {
      year: "2019",
      title: "Technology Integration",
      description: "Launched our digital platform powered by Infinex to streamline certification processes."
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Expanded services nationwide and achieved 500+ successful certifications during challenging times."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Added comprehensive web development and digital marketing services to our portfolio."
    },
    {
      year: "2022",
      title: "Market Leadership",
      description: "Became a recognized leader in compliance and technology services with 1000+ satisfied clients."
    },
    {
      year: "2023",
      title: "Innovation Focus",
      description: "Launched AI-powered compliance tools and expanded internationally."
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing to innovate with cutting-edge solutions and expanding our global presence."
    }
  ];

  const achievements = [
    { icon: Users, value: "1500+", label: "Happy Clients", color: "text-primary" },
    { icon: Award, value: "2000+", label: "Certifications", color: "text-success" },
    { icon: Clock, value: "6", label: "Years Experience", color: "text-warning" },
    { icon: Globe, value: "15+", label: "States Covered", color: "text-accent" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships through transparency, integrity, and consistent delivery of exceptional results."
    },
    {
      icon: TrendingUp,
      title: "Excellence & Innovation",
      description: "We continuously improve our services and adopt cutting-edge technologies to provide the best solutions."
    },
    {
      icon: Lightbulb,
      title: "Client-Centric Approach",
      description: "Every solution is tailored to meet our clients' unique needs and business objectives."
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description: "Our team is passionate about helping businesses succeed and grow through compliance and technology."
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Certified professionals with deep industry knowledge and 10+ years of combined experience.",
      icon: Users
    },
    {
      title: "Proven Track Record",
      description: "98% success rate with over 2000 successful certifications and satisfied clients.",
      icon: Star
    },
    {
      title: "Technology-Driven",
      description: "Advanced digital platform powered by Infinex for faster, more efficient service delivery.",
      icon: TrendingUp
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive support from initial consultation to post-certification maintenance.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">About Star Certifications</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Empowering Business <span className="text-gradient-primary">Growth</span> Through Excellence
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a leading compliance and technology solutions provider, dedicated to helping businesses navigate regulatory requirements and achieve digital transformation with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero" onClick={() => navigate("/contact")}>
                  Partner With Us
                </Button>
                <Button variant="outline" className="btn-outline-hero" onClick={() => navigate("/services")}>
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={aboutImage}
                  alt="Star Certifications Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-4 bg-primary text-primary-foreground rounded-xl shadow-lg animate-float">
                <Award className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-success text-success-foreground rounded-xl shadow-lg animate-float" style={{animationDelay: '2s'}}>
                <Users className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-premium">
              <CardHeader>
                <div className="p-3 rounded-xl bg-primary/10 text-primary inline-block w-fit mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To simplify regulatory compliance and accelerate digital transformation for businesses of all sizes. 
                  We believe that compliance should not be a barrier to growth, but rather a foundation for sustainable success.
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader>
                <div className="p-3 rounded-xl bg-accent/10 text-accent inline-block w-fit mb-4">
                  <Eye className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted partner for businesses seeking compliance excellence and digital innovation. 
                  We envision a future where regulatory processes are seamless and technology empowers every business to thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From a small consulting firm to a leading compliance and technology solutions provider
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  {/* Timeline card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`card-premium cursor-pointer transition-all duration-300 ${
                      activeTimeline === index ? 'border-primary shadow-lg scale-105' : ''
                    }`}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-primary text-primary-foreground">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`p-4 rounded-xl bg-primary/10 ${achievement.color} inline-block mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                    {achievement.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-premium text-center">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-primary/10 text-primary inline-block w-fit mx-auto mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Star Certifications?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve compliance excellence and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero" onClick={() => navigate("/contact")}>
              Schedule Consultation
            </Button>
            <Button variant="outline" className="btn-outline-hero" onClick={() => navigate("/services")}>
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;