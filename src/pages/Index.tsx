import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Otonom Hedef Takibi (Raspberry Pi)",
      description: "Görüntü işleme teknikleri kullanılarak, belirlenen hedefi otonom olarak takip edebilen bir araç prototipi.",
      tags: ["IoT", "Görüntü İşleme", "Donanım"],
    },
    {
      title: "Lojistikte B2B Dijitalleşme",
      description: "Lojistik sektörünün en büyük verimsizliği olan 'boş araç/boş dönüş' sorununu çözmeye yönelik dijital platform ve iş modeli tasarımı.",
      tags: ["İş Analizi", "Süreç İyileştirme", "Platform Tasarımı"],
    },
    {
      title: "Fiyatlandırma Karar Destek Sistemi",
      description: "İşletmelerin uzun vadeli fiyat stratejilerini belirlemelerine yardımcı olan, veriye dayalı karar destek sistemi modeli.",
      tags: ["Veri Analizi", "KDS", "Stratejik Planlama"],
    },
  ];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text-primary">Yönetim Bilişim Sistemleri</span>
              <br />
              <span className="text-foreground">Öğrencisi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Teknoloji & İnovasyon Tutkunu
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              İş dünyasının problemlerine; yazılım, veri ve donanım tabanlı yaratıcı çözümler geliştiriyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="hero"
                onClick={() => scrollToSection("projects")}
              >
                Projelerimi İncele
              </Button>
              <Button
                size="lg"
                variant="accent"
                onClick={() => scrollToSection("contact")}
              >
                İletişim
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-primary">
            Hakkımda
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 shadow-card">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Yönetim Bilişim Sistemleri 3. sınıf öğrencisiyim. Henüz kendimi tek bir teknoloji veya alanla sınırlamıyorum. 
              Donanım projelerinden iş süreçleri dijitalleşmesine, veri analizinden karar destek sistemlerine kadar teknolojinin 
              farklı uçlarını deneyimliyor ve gerçek hayat problemlerine çözüm üretmekten keyif alıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-accent text-center">
            Projelerim
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:gradient-text-primary transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base pt-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text-primary text-center">
            Yetenekler ve İlgi Alanları
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-base py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text-accent">
            İletişim
          </h2>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:shadow-glow-blue transition-all duration-300">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:shadow-glow-blue transition-all duration-300">
                <Github className="w-6 h-6 text-primary" />
              </div>
            </a>
            <a
              href="mailto:example@email.com"
              className="group"
              aria-label="Email"
            >
              <div className="p-4 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 hover:shadow-glow-orange transition-all duration-300">
                <Mail className="w-6 h-6 text-accent" />
              </div>
            </a>
          </div>
          <p className="text-muted-foreground">© 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
