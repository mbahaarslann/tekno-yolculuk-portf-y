import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
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

      <main className="pt-24 pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <Link to="/yazilarim">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Yazılarıma Dön
            </Button>
          </Link>

          <article className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="default" className="text-sm">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text-accent">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-card">
              <div className="prose prose-lg prose-invert max-w-none">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 gradient-text-primary">
                        {paragraph.replace("# ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li key={index} className="text-muted-foreground ml-6">
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  }
                  if (paragraph.trim() === "") {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-8">
              <Link to="/yazilarim">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Diğer Yazılara Göz At
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default YaziDetay;
