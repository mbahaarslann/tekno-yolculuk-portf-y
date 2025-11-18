import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const skills = [
    "Proje Yönetimi",
    "İş Analizi",
    "Veri Tabanı Yönetimi",
    "IoT & Gömülü Sistemler",
    "Karar Destek Sistemleri",
    "Teknoloji Adaptasyonu",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">Generalist & Tech Enthusiast</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              <span className="gradient-text-primary block mb-2">Yönetim Bilişim</span>
              <span className="gradient-text-accent block">Sistemleri Öğrencisi</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Teknoloji & İnovasyon Tutkunu
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              İş dünyasının problemlerine; <span className="text-primary font-semibold">yazılım</span>, <span className="text-primary font-semibold">veri</span> ve <span className="text-accent font-semibold">donanım</span> tabanlı yaratıcı çözümler geliştiriyorum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                variant="hero"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                Projelerimi İncele
                <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="accent"
                onClick={() => scrollToSection("contact")}
              >
                İletişime Geç
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs font-medium">Keşfet</span>
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 relative">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text-primary inline-block">
              Hakkımda
            </h2>
            <div className="h-1 w-24 mx-auto gradient-primary rounded-full" />
          </div>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-elevated border-primary/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                Yönetim Bilişim Sistemleri 3. sınıf öğrencisiyim. Henüz kendimi tek bir teknoloji veya alanla sınırlamıyorum.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Donanım projelerinden</span> iş süreçleri dijitalleşmesine, 
                <span className="text-primary font-semibold"> veri analizinden</span> karar destek sistemlerine kadar teknolojinin 
                farklı uçlarını deneyimliyor ve <span className="text-accent font-semibold">gerçek hayat problemlerine</span> çözüm üretmekten keyif alıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text-accent inline-block">
              Projelerim
            </h2>
            <div className="h-1 w-24 mx-auto gradient-accent rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg">Farklı alanlarda geliştirdiğim çözümler</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={project.id} to={`/projeler/${project.id}`}>
                <Card className="group cursor-pointer h-full hover-lift">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow-blue">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl group-hover:gradient-text-primary transition-all duration-300 leading-snug">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant={tagIndex % 2 === 0 ? "default" : "accent"}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text-primary inline-block">
              Yetenekler ve İlgi Alanları
            </h2>
            <div className="h-1 w-24 mx-auto gradient-primary rounded-full" />
          </div>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-elevated border-primary/10">
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm md:text-base py-3 px-6 hover:scale-110 transition-transform duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-32 px-4 bg-gradient-to-t from-card/30 to-transparent border-t border-border/50">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text-accent inline-block">
              İletişim
            </h2>
            <div className="h-1 w-24 mx-auto gradient-accent rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg">Birlikte harika projeler geliştirelim</p>
          </div>
          
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="p-6 rounded-2xl glass-effect border border-primary/20 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-400 hover:scale-110">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="p-6 rounded-2xl glass-effect border border-primary/20 hover:border-primary/50 hover:shadow-glow-blue transition-all duration-400 hover:scale-110">
                <Github className="w-7 h-7 text-primary" />
              </div>
            </a>
            <a
              href="mailto:example@email.com"
              className="group"
              aria-label="Email"
            >
              <div className="p-6 rounded-2xl glass-effect border border-accent/20 hover:border-accent/50 hover:shadow-glow-orange transition-all duration-400 hover:scale-110">
                <Mail className="w-7 h-7 text-accent" />
              </div>
            </a>
          </div>
          
          <div className="pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-sm">© 2025 • Tüm hakları saklıdır</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
