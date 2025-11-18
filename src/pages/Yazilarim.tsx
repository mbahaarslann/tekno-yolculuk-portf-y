import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";
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

      <main className="pt-24 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-accent">
              Yazılarım
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknoloji, iş süreçleri ve dijital dönüşüm üzerine düşüncelerimi paylaşıyorum.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.id} to={`/yazilarim/${post.id}`}>
                <Card className="h-full group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default">{post.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:gradient-text-primary transition-all duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base pt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="text-primary">
                      Devamını Oku →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Bu kategoride henüz yazı bulunmuyor.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Yazilarim;
