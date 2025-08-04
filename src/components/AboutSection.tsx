import { useState } from "react";
import { CheckCircle2, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2015",
      title: "Founded",
      description: "Star Certifications was established to provide expert compliance and certification services."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Extended services to cover all major Indian certification standards including BIS, ISI, and EPR."
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Partnered with Infinex to offer comprehensive digital services alongside compliance solutions."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched integrated platform combining regulatory expertise with cutting-edge technology solutions."
    }
  ];

  const achievements = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-primary" },
    { icon: Award, value: "99.8%", label: "Success Rate", color: "text-secondary" },
    { icon: CheckCircle2, value: "1000+", label: "Certifications", color: "text-success" },
    { icon: Clock, value: "24/7", label: "Support", color: "text-accent" }
  ];

  const values = [
    {
      title: "Expert Guidance",
      description: "Our certified professionals provide expert guidance throughout the entire certification process."
    },
    {
      title: "Fast Processing",
      description: "Streamlined processes and strong industry relationships ensure quick turnaround times."
    },
    {
      title: "End-to-End Service",
      description: "From initial consultation to final certification, we handle every aspect of your compliance needs."
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge digital solutions that modernize your business operations and online presence."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-card/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{" "}
            <span className="text-gradient-primary">Star Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between regulatory compliance and digital innovation 
            to accelerate your business growth in the modern marketplace.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient-secondary">Compliance & Innovation</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Since 2015, Star Certifications has been the go-to partner for businesses seeking 
                reliable compliance solutions. Our partnership with Infinex brings together 
                regulatory expertise and digital innovation to provide comprehensive business solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that modern businesses need more than just certifications – 
                they need digital transformation, compelling online presence, and innovative 
                technology solutions to stay competitive.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card-service p-6">
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            <Button className="btn-hero group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="About Star Certifications"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full animate-float" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our <span className="text-gradient-primary">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border rounded-full" />
              
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } mb-12`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card 
                      className={`card-service cursor-pointer transition-all duration-300 ${
                        activeTimeline === index ? 'border-primary/50 shadow-glow' : ''
                      }`}
                      onClick={() => setActiveTimeline(index)}
                    >
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 ${
                      activeTimeline === index ? 'bg-primary' : 'bg-border'
                    }`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="text-center card-service p-6 group"
              >
                <div className={`w-16 h-16 ${achievement.color} bg-current/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.value}
                </div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;