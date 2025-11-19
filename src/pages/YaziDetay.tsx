import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";

const YaziDetay = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/yazilarim" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link to="/yazilarim">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Yazılarıma Dön
            </Button>
          </Link>

          <article className="space-y-8">
            {/* Header */}
            <div className="space-y-6 text-center">
              <Badge variant="default" className="text-sm shadow-glow-blue">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-accent leading-[1.3] pb-6">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevated border-primary/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="prose prose-lg prose-invert max-w-none relative z-10">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 gradient-text-primary">
                        {paragraph.replace("# ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li key={index} className="text-foreground/80 ml-6 mb-2 leading-relaxed">
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  }
                  if (paragraph.trim() === "") {
                    return <div key={index} className="h-4" />;
                  }
                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link to="/yazilarim" className="flex-1">
                <Button variant="outline" size="lg" className="w-full group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Diğer Yazılara Göz At
                </Button>
              </Link>
              <Button variant="default" size="lg" className="group">
                <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Paylaş
              </Button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default YaziDetay;
