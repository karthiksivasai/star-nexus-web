import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elegant"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Star Certifications</h1>
              <p className="text-xs text-muted-foreground">Powered by Infinex</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="glass-card p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-primary mb-3">Compliance</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">BIS Certification</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">ISI Certification</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">EPR Services</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">TEC Approval</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Digital Services</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">App Development</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</a></li>
                        <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Digital Marketing</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="btn-outline-hero">
              Get Quote
            </Button>
            <Button className="btn-hero">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-6 shadow-xl">
            <nav className="space-y-4">
              <a href="#services" className="block text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
              <a href="#blog" className="block text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full btn-outline-hero">
                  Get Quote
                </Button>
                <Button className="w-full btn-hero">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;