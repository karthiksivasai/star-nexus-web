import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Clock, 
  Globe, 
  Shield,
  TrendingUp,
  Lightbulb,
  Heart,
  ArrowRight,
  Target,
  Eye
} from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutPreview = () => {
  const navigate = useNavigate();

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
      description: "Building lasting relationships through transparency and consistent delivery."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Continuously improving our services with cutting-edge technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Adopting innovative solutions to solve complex business challenges."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Every solution is tailored to meet our clients' unique needs."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">About Star Certifications</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Empowering Business <span className="text-gradient-primary">Growth</span> Since 2018
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a leading compliance and technology solutions provider, dedicated to helping businesses navigate regulatory requirements and achieve digital transformation with confidence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Your Trusted Partner for Compliance & Technology Excellence
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2018, Star Certifications has grown from a small consulting firm to a recognized leader in compliance and technology services. We combine deep industry expertise with innovative technology solutions to help businesses thrive in today's competitive landscape.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to make regulatory compliance accessible and digital transformation achievable for businesses of all sizes. We believe that compliance should not be a barrier to growth, but rather a foundation for sustainable success.
            </p>
            
            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To simplify regulatory compliance and accelerate digital transformation for businesses worldwide.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Eye className="w-5 h-5 text-accent" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To become the most trusted partner for businesses seeking compliance excellence and digital innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero" onClick={() => navigate("/about")}>
                Learn More About Us
              </Button>
              <Button variant="outline" className="btn-outline-hero" onClick={() => navigate("/contact")}>
                Schedule Meeting
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

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Our Achievements</h3>
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

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Partner with Us?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 1500 satisfied clients who trust Star Certifications for their compliance and technology needs.
          </p>
          <Button 
            className="btn-hero group" 
            onClick={() => navigate("/contact")}
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
    </div>
  );
};

export default AboutPreview;