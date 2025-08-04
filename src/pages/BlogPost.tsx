import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2,
  BookOpen,
  CheckCircle,
  FileText,
  Shield,
  TrendingUp
} from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Blog post data - in a real app, this would come from an API or CMS
  const blogPostData: Record<string, any> = {
    "understanding-bis-certification-2024": {
      title: "Understanding BIS Certification: A Complete Guide for 2024",
      excerpt: "Learn everything you need to know about BIS certification requirements, processes, and benefits for your business in 2024.",
      category: "Compliance",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/placeholder.svg",
      tags: ["BIS", "Certification", "Compliance", "Electronics"],
      content: `
        <h2>Introduction to BIS Certification</h2>
        <p>Bureau of Indian Standards (BIS) certification has become increasingly important for businesses operating in India, especially those dealing with electronics and consumer products. This comprehensive guide will walk you through everything you need to know about BIS certification in 2024.</p>

        <h2>What is BIS Certification?</h2>
        <p>BIS certification is a mandatory conformity assessment scheme administered by the Bureau of Indian Standards. It ensures that products sold in the Indian market meet the specified quality and safety standards. The certification covers a wide range of products including electronics, textiles, food products, and more.</p>

        <h2>Why is BIS Certification Important?</h2>
        <ul>
          <li><strong>Legal Compliance:</strong> Many products require BIS certification to be legally sold in India</li>
          <li><strong>Consumer Trust:</strong> BIS mark enhances consumer confidence in product quality and safety</li>
          <li><strong>Market Access:</strong> Essential for entering the Indian market with regulated products</li>
          <li><strong>Quality Assurance:</strong> Ensures products meet Indian standards and specifications</li>
        </ul>

        <h2>BIS Certification Process</h2>
        <p>The BIS certification process involves several key steps:</p>
        
        <ol>
          <li><strong>Application Submission:</strong> Submit application with required documents</li>
          <li><strong>Document Review:</strong> BIS reviews technical specifications and compliance documents</li>
          <li><strong>Product Testing:</strong> Samples tested at BIS-approved laboratories</li>
          <li><strong>Factory Inspection:</strong> On-site verification of manufacturing processes</li>
          <li><strong>Certificate Issuance:</strong> BIS certificate granted upon successful completion</li>
        </ol>

        <h2>Required Documents</h2>
        <p>To apply for BIS certification, you'll need:</p>
        <ul>
          <li>Product specifications and technical drawings</li>
          <li>Manufacturing process details</li>
          <li>Quality control procedures</li>
          <li>Test reports from accredited laboratories</li>
          <li>Company registration documents</li>
          <li>Authorization letter (for overseas manufacturers)</li>
        </ul>

        <h2>Common Challenges and Solutions</h2>
        <p>Many businesses face challenges during the BIS certification process. Here are common issues and how to address them:</p>
        
        <h3>Challenge 1: Complex Documentation</h3>
        <p>Solution: Work with experienced consultants who understand BIS requirements and can help prepare accurate documentation.</p>

        <h3>Challenge 2: Testing Delays</h3>
        <p>Solution: Choose BIS-approved laboratories with good track records and plan for adequate testing time.</p>

        <h3>Challenge 3: Factory Inspection Preparation</h3>
        <p>Solution: Ensure manufacturing processes are well-documented and quality systems are in place before inspection.</p>

        <h2>Timeline and Costs</h2>
        <p>The BIS certification process typically takes 4-8 weeks, depending on product complexity and factory readiness. Costs vary based on product type, testing requirements, and certification scope. It's important to budget for:</p>
        <ul>
          <li>Application fees</li>
          <li>Testing charges</li>
          <li>Inspection fees</li>
          <li>Annual surveillance costs</li>
        </ul>

        <h2>Conclusion</h2>
        <p>BIS certification is essential for businesses looking to establish credibility and ensure compliance in the Indian market. While the process may seem complex, working with experienced professionals can significantly streamline the journey and ensure successful certification.</p>

        <p>For assistance with your BIS certification requirements, contact our team of experts who can guide you through every step of the process.</p>
      `
    },
    "digital-transformation-small-businesses": {
      title: "Digital Transformation for Small Businesses: Where to Start",
      excerpt: "A practical guide to implementing digital solutions that can help small businesses compete in today's market.",
      category: "Technology",
      author: "Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      image: "/placeholder.svg",
      tags: ["Digital Transformation", "Small Business", "Technology"],
      content: `
        <h2>Understanding Digital Transformation</h2>
        <p>Digital transformation is no longer a luxury for small businesses—it's a necessity for survival and growth in today's competitive landscape. This guide will help you understand where to start and how to implement digital solutions effectively.</p>

        <h2>Why Digital Transformation Matters</h2>
        <p>Small businesses that embrace digital transformation see significant benefits:</p>
        <ul>
          <li>Improved operational efficiency</li>
          <li>Better customer experience</li>
          <li>Increased competitive advantage</li>
          <li>Enhanced data-driven decision making</li>
          <li>Greater scalability and flexibility</li>
        </ul>

        <h2>Step 1: Assess Your Current State</h2>
        <p>Before implementing any digital solutions, conduct a thorough assessment of your current processes, systems, and capabilities. Identify pain points and areas where technology can make the biggest impact.</p>

        <h2>Step 2: Start with Essential Tools</h2>
        <p>Begin with fundamental digital tools that address immediate needs:</p>
        <ul>
          <li><strong>Website and Online Presence:</strong> Professional website with mobile optimization</li>
          <li><strong>Customer Relationship Management (CRM):</strong> Track and manage customer interactions</li>
          <li><strong>Accounting Software:</strong> Automate financial processes and reporting</li>
          <li><strong>Cloud Storage:</strong> Secure, accessible data storage and collaboration</li>
        </ul>

        <h2>Implementation Best Practices</h2>
        <p>Follow these best practices for successful digital transformation:</p>
        <ol>
          <li>Start small and scale gradually</li>
          <li>Focus on employee training and adoption</li>
          <li>Prioritize security and data protection</li>
          <li>Measure results and iterate</li>
          <li>Seek expert guidance when needed</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <p>Learn from these common pitfalls:</p>
        <ul>
          <li>Trying to do everything at once</li>
          <li>Ignoring employee training needs</li>
          <li>Choosing technology before understanding requirements</li>
          <li>Underestimating security implications</li>
          <li>Failing to measure ROI</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Digital transformation is a journey, not a destination. Start with the basics, focus on your customers' needs, and gradually expand your digital capabilities. With the right approach, small businesses can compete effectively in the digital age.</p>
      `
    }
  };

  const post = blogPostData[slug as string];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Compliance": return "bg-primary/10 text-primary border-primary/20";
      case "Technology": return "bg-accent/10 text-accent border-accent/20";
      case "Digital Marketing": return "bg-success/10 text-success border-success/20";
      default: return "bg-muted/10 text-muted-foreground border-border";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Compliance": return Shield;
      case "Technology": return TrendingUp;
      case "Digital Marketing": return FileText;
      default: return FileText;
    }
  };

  const IconComponent = getCategoryIcon(post.category);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/blog")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
          
          <div className="flex items-center gap-3 mb-6">
            <Badge className={getCategoryColor(post.category)}>
              <IconComponent className="w-3 h-3 mr-1" />
              {post.category}
            </Badge>
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Article</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button className="btn-primary">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
            <Button variant="outline">
              Save for Later
            </Button>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:mb-2 prose-strong:text-foreground
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Article Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="font-medium mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Author Info */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{post.author}</h4>
                      <p className="text-muted-foreground">
                        Expert in {post.category.toLowerCase()} solutions with over 10 years of industry experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      In This Article
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Key Requirements
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Process Overview
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Common Challenges
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Conclusion
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Related Services */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Need Help?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our experts can help you implement the strategies discussed in this article.
                    </p>
                    <Button className="w-full btn-primary" onClick={() => navigate("/contact")}>
                      Get Expert Help
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Newsletter */}
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to receive the latest articles and insights.
                    </p>
                    <Button variant="outline" className="w-full">
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          
          <div className="text-center">
            <Button onClick={() => navigate("/blog")} className="btn-outline-hero">
              View More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;