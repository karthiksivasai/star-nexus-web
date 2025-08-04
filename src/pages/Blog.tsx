import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Filter,
  TrendingUp,
  FileText,
  Shield
} from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: "understanding-bis-certification-2024",
      title: "Understanding BIS Certification: A Complete Guide for 2024",
      excerpt: "Learn everything you need to know about BIS certification requirements, processes, and benefits for your business in 2024.",
      content: "BIS certification has become increasingly important for businesses...",
      category: "Compliance",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg",
      tags: ["BIS", "Certification", "Compliance", "Electronics"]
    },
    {
      id: "digital-transformation-small-businesses",
      title: "Digital Transformation for Small Businesses: Where to Start",
      excerpt: "A practical guide to implementing digital solutions that can help small businesses compete in today's market.",
      content: "Digital transformation doesn't have to be overwhelming...",
      category: "Technology",
      author: "Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      featured: false,
      image: "/placeholder.svg",
      tags: ["Digital Transformation", "Small Business", "Technology"]
    },
    {
      id: "fssai-license-food-business",
      title: "FSSAI License: Essential Requirements for Food Businesses",
      excerpt: "Navigate the FSSAI licensing process with our comprehensive guide covering all types of food business operations.",
      content: "Food Safety and Standards Authority of India (FSSAI) license...",
      category: "Compliance",
      author: "Amit Patel",
      date: "2024-01-10",
      readTime: "7 min read",
      featured: false,
      image: "/placeholder.svg",
      tags: ["FSSAI", "Food Business", "License", "Compliance"]
    },
    {
      id: "seo-trends-2024",
      title: "SEO Trends 2024: What Every Business Owner Should Know",
      excerpt: "Stay ahead of the curve with the latest SEO trends and strategies that will impact your online visibility in 2024.",
      content: "Search engine optimization continues to evolve...",
      category: "Digital Marketing",
      author: "Neha Singh",
      date: "2024-01-08",
      readTime: "5 min read",
      featured: false,
      image: "/placeholder.svg",
      tags: ["SEO", "Digital Marketing", "2024 Trends", "Online Visibility"]
    },
    {
      id: "iso-certification-benefits",
      title: "ISO Certification: Benefits and Implementation Process",
      excerpt: "Discover how ISO certification can enhance your business credibility and operational efficiency.",
      content: "ISO certification is more than just a badge...",
      category: "Compliance",
      author: "Rajesh Kumar",
      date: "2024-01-05",
      readTime: "9 min read",
      featured: false,
      image: "/placeholder.svg",
      tags: ["ISO", "Quality Management", "Certification", "Business"]
    },
    {
      id: "web-development-best-practices",
      title: "Modern Web Development: Best Practices for 2024",
      excerpt: "Essential web development practices that ensure performance, security, and user experience excellence.",
      content: "Modern web development has evolved significantly...",
      category: "Technology",
      author: "Priya Sharma",
      date: "2024-01-03",
      readTime: "10 min read",
      featured: false,
      image: "/placeholder.svg",
      tags: ["Web Development", "Best Practices", "Performance", "Security"]
    }
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    { id: "compliance", name: "Compliance", count: blogPosts.filter(post => post.category === "Compliance").length },
    { id: "technology", name: "Technology", count: blogPosts.filter(post => post.category === "Technology").length },
    { id: "digital-marketing", name: "Digital Marketing", count: blogPosts.filter(post => post.category === "Digital Marketing").length }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().replace(" ", "-") === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafc] to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Industry <span className="text-gradient-primary">Insights</span> & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay informed with the latest trends, best practices, and expert insights in compliance, technology, and digital transformation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Filter Categories */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-[#f9fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category.name);
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4 bg-[#f6f8fd]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="outline">Featured Article</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Editor's Pick</h2>
            </div>
            
            <Card 
              className="card-clickable overflow-hidden group max-w-4xl mx-auto"
              onClick={() => handlePostClick(featuredPost.id)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Section Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Latest Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = getCategoryIcon(post.category);
                return (
                  <Card 
                    key={post.id}
                    className="card-clickable group overflow-hidden"
                    onClick={() => handlePostClick(post.id)}
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(post.category)}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-tr from-cyan-100 via-white to-violet-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights, tips, and industry updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              type="email"
              className="flex-1"
            />
            <Button className="btn-primary">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;