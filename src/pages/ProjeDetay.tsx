import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ArrowLeft, Target, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import { useParams, Link, Navigate } from "react-router-dom";

const ProjeDetay = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Ana Sayfaya Dön
            </Button>
          </Link>

          {/* Project Header */}
          <div className="mb-16 space-y-8 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant={index % 2 === 0 ? "default" : "accent"} className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-primary leading-[1.3] pb-6 max-w-4xl mx-auto">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Details */}
          <div className="grid gap-8">
            {/* Challenges */}
            <Card className="hover-lift">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-blue">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl leading-tight">Zorluklar ve Sorunlar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-lg">{project.challenges}</p>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="hover-lift">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl gradient-accent flex items-center justify-center shadow-glow-orange">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl leading-tight">Çözümler ve Yaklaşımlar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-lg">{project.solutions}</p>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="hover-lift">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-blue">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl leading-tight">Kullanılan Teknolojiler</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-base py-2 px-5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Outcomes */}
            <Card className="hover-lift">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl gradient-accent flex items-center justify-center shadow-glow-orange">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl leading-tight">Sonuçlar ve Etkiler</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed text-lg">{project.outcomes}</p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Projects */}
          <div className="mt-16 text-center">
            <Link to="/">
              <Button variant="outline" size="lg" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Diğer Projeleri Gör
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjeDetay;
