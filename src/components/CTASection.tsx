import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const benefits = [
    "Expert consultation & guidance",
    "Fast-track processing",
    "End-to-end service delivery",
    "24/7 dedicated support"
  ];

  return (
    <div className="relative overflow-hidden">      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-secondary/5 rounded-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-accent/5 rounded-full animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-primary/5 rounded-3xl animate-float" style={{ animationDelay: "6s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Ready to Get Started?</span>
              <Star className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Transform Your Business</span>
              <br />
              <span className="text-gradient-primary">Today</span>
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have accelerated their growth 
              with our compliance expertise and digital innovation solutions.
            </p>
          </div>

          {/* Split CTA Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Compliance CTA */}
            <div className="glass-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Certification?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get BIS, ISI, EPR, or TEC certification with our expert guidance 
                and fast-track processing.
              </p>
              <Button className="btn-hero group w-full">
                Get BIS Certified
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Digital Services CTA */}
            <div className="glass-card p-8 rounded-2xl group hover:border-secondary/30 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Digital Services?
              </h3>
              <p className="text-muted-foreground mb-6">
                Transform your business with our premium web development, 
                mobile apps, and digital marketing services.
              </p>
              <Button className="btn-secondary w-full group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 glass-card p-4 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Have questions? Our experts are here to help you choose the right solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" className="btn-outline-hero">
                  Schedule Free Consultation
                </Button>
                <Button className="btn-hero group">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-card p-6 rounded-xl max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">📞</div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-semibold text-foreground">+91 99999 99999</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">✉️</div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-semibold text-foreground">hello@starcertifications.com</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">💬</div>
                  <div className="text-sm text-muted-foreground">Live Chat</div>
                  <div className="font-semibold text-foreground">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;