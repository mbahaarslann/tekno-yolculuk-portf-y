import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blog";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Yazilarim = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-accent/20 mb-6">
              <span className="text-sm font-semibold text-accent">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-accent">
              Yazılarım
            </h1>
            <div className="h-1 w-24 mx-auto gradient-accent rounded-full mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Teknoloji, iş süreçleri ve dijital dönüşüm üzerine düşüncelerimi paylaşıyorum.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "shadow-glow-blue" : ""}
                size="default"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/yazilarim/${post.id}`}>
                <Card className="h-full group cursor-pointer hover-lift">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Badge variant="default" className="shadow-glow-blue">{post.category}</Badge>
                      <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:gradient-text-primary transition-all duration-300 leading-snug">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                      Devamını Oku
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="glass-effect rounded-3xl p-12 max-w-md mx-auto">
                <p className="text-muted-foreground text-lg">
                  Bu kategoride henüz yazı bulunmuyor.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Yazilarim;
