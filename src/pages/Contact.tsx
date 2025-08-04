import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  Send,
  User,
  Building,
  FileText,
  Calendar,
  Video,
  Star
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "BIS Certification",
    "FSSAI License",
    "ISO Certification",
    "Export-Import License",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Optimization",
    "Custom Solution"
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      description: "Mon-Fri from 9am to 6pm",
      action: "Call Now",
      href: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@starcertifications.com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      href: "mailto:info@starcertifications.com"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Get instant support",
      action: "Start Chat",
      href: "#chat"
    }
  ];

  const officeInfo = {
    address: "123 Business District, Tech Park, Bangalore - 560001, Karnataka, India",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4" variant="outline">Contact Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let's <span className="text-gradient-primary">Connect</span> and Grow Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to take your business to the next level? Our team of experts is here to help you navigate compliance requirements and accelerate digital transformation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="card-clickable text-center group">
                  <CardHeader>
                    <div className="p-4 rounded-xl bg-primary/10 text-primary inline-block w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg mb-4">{method.value}</p>
                    <Button 
                      className="w-full btn-primary" 
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="p-4 rounded-full bg-success/10 text-success inline-block mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            <Building className="w-4 h-4 inline mr-2" />
                            Company Name
                          </label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <FileText className="w-4 h-4 inline mr-2" />
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-input rounded-md bg-background"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          <MessageCircle className="w-4 h-4 inline mr-2" />
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your requirements..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-hero"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Visit Our Office</h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to meet you in person. Our office is located in the heart of Bangalore's business district.
                </p>
              </div>

              {/* Office Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {officeInfo.address}
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-muted-foreground whitespace-pre-line">
                    {officeInfo.hours}
                  </pre>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                  <CardDescription>
                    Schedule a consultation or get a quick quote
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full btn-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Free Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Video Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Star className="w-4 h-4 mr-2" />
                    Get Instant Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            Find quick answers to common questions about our services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-left">How long does certification take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left">
                  Certification timelines vary by service type. BIS certification typically takes 4-8 weeks, while FSSAI can be completed in 2-4 weeks.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-left">Do you provide post-certification support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left">
                  Yes, we provide comprehensive post-certification support including renewal assistance, compliance monitoring, and ongoing consultation.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-left">What's included in web development packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left">
                  Our packages include responsive design, SEO optimization, security implementation, content management system, and 3 months of free support.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-left">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-left">
                  Yes, we serve international clients looking to enter the Indian market or establish compliance for their Indian operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;