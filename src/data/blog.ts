export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export const categories = [
  "Tümü",
  "Teknoloji",
  "Veri Analizi",
  "İş Süreçleri",
  "IoT",
  "Yapay Zeka",
  "Dijital Dönüşüm",
];

export const blogPosts: BlogPost[] = [
  {
    id: "yapay-zeka-is-dunyasi",
    title: "Yapay Zeka İş Dünyasını Nasıl Dönüştürüyor?",
    excerpt: "Yapay zeka teknolojilerinin iş süreçlerine entegrasyonu ve dijital dönüşüm üzerine düşünceler.",
    content: `Yapay zeka, günümüzün en çok konuşulan teknolojilerinden biri haline geldi. Ancak asıl önemli olan, bu teknolojinin iş dünyasında nasıl bir dönüşüm yarattığı.

# İş Süreçlerinde AI

İşletmeler, yapay zeka ile operasyonel verimliliği artırırken, aynı zamanda müşteri deneyimini de iyileştiriyorlar. Özellikle:

- Otomasyonla tekrarlayan işlerin elimine edilmesi
- Veri analiziyle daha iyi kararlar alınması
- Tahmine dayalı bakımla maliyetlerin düşürülmesi

# Gelecek Nereye Gidiyor?

YBS öğrencileri olarak, bu teknolojileri sadece teknik açıdan değil, iş stratejileri açısından da anlamamız gerekiyor. Teknoloji ile iş dünyası arasındaki köprüyü kurmak bizim en büyük avantajımız.`,
    category: "Yapay Zeka",
    date: "2025-01-15",
    readTime: "5 dk",
  },
  {
    id: "iot-gelecegi",
    title: "IoT ve Gömülü Sistemlerin Geleceği",
    excerpt: "Nesnelerin interneti teknolojisinin endüstriyel uygulamaları ve gelecek trendleri.",
    content: `IoT (Internet of Things), fiziksel dünya ile dijital dünyayı birleştiren en önemli teknolojilerden biri. Raspberry Pi ile yaptığım otonom hedef takip projesinde, IoT'nin gücünü ilk elden deneyimledim.

# Endüstri 4.0 ve IoT

Üretim tesislerinde sensörler sayesinde:
- Gerçek zamanlı üretim takibi
- Tahmine dayalı bakım
- Kalite kontrol otomasyonu
- Enerji verimliliği

# Gömülü Sistemlerin Önemi

Gömülü sistemler, IoT'nin beyni gibi çalışıyor. Küçük, verimli ve güçlü bu sistemler sayesinde akıllı şehirler, akıllı evler ve endüstriyel otomasyon mümkün hale geliyor.

# Kariyer Fırsatları

Bu alanda uzmanlaşmak, hem donanım hem yazılım bilgisi gerektiriyor. YBS öğrencileri için bu, çok yönlülüğümüzü gösterebileceğimiz harika bir alan.`,
    category: "IoT",
    date: "2025-01-10",
    readTime: "6 dk",
  },
  {
    id: "veri-analizi-karar-destek",
    title: "Veri Analizi ile Stratejik Karar Alma",
    excerpt: "Karar destek sistemlerinin önemi ve işletmelere sağladığı değer üzerine.",
    content: `Veri, günümüzün en değerli varlıklarından biri. Ancak ham veri tek başına bir anlam ifade etmiyor. İşte tam bu noktada karar destek sistemleri (KDS) devreye giriyor.

# KDS Nedir?

Karar Destek Sistemleri, veriyi analiz ederek yöneticilere stratejik kararlar alabilmeleri için içgörüler sunan sistemlerdir.

# Fiyatlandırma Projesi Deneyimim

Fiyatlandırma KDS projemde şunları öğrendim:
- Tarihsel veri analizi
- Pazar trendlerinin modellenmesi
- Senaryo analizi teknikleri
- Görselleştirmenin karar alma sürecindeki rolü

# İş Dünyasında Uygulamalar

- Perakende: Dinamik fiyatlandırma
- Üretim: Talep tahmini
- Finans: Risk analizi
- Pazarlama: Müşteri segmentasyonu

Veri analizini iş stratejileriyle birleştirmek, YBS mezunlarının en güçlü yanlarından biri olmalı.`,
    category: "Veri Analizi",
    date: "2025-01-05",
    readTime: "7 dk",
  },
  {
    id: "dijital-donusum-lojistik",
    title: "Lojistikte Dijital Dönüşüm: Boş Dönüş Sorunu",
    excerpt: "Türkiye lojistik sektörünün en büyük verimsizliği ve dijital çözüm önerileri.",
    content: `Türkiye'de lojistik araçlarının neredeyse %40'ı boş dönüş yapıyor. Bu, hem ekonomik hem çevresel açıdan büyük bir kayıp. Peki dijital platformlar bu sorunu nasıl çözebilir?

# Sorunun Boyutu

- Yıllık milyarlarca TL'lik kayıp
- Gereksiz karbon emisyonu
- Sektörel verimsizlik
- Rekabet gücünde azalma

# Platform Ekonomisi Çözümü

Uber'in taksi sektörüne yaptığı gibi, lojistikte de platform ekonomisi devrim yaratabilir:
- Boş araçlarla yük sahiplerini eşleştirme
- Gerçek zamanlı fiyatlandırma
- Güvenilirlik mekanizmaları
- Blockchain ile şeffaflık

# B2B Dijitalleşmenin Önemi

B2C dijitalleşme çok ilerledi ama B2B hala geride. Lojistik platformu projemde, bu açığı kapatmanın yollarını araştırdım.

# Gelecek Vizyonu

Dijital lojistik platformları, sadece boş dönüş sorununu çözmekle kalmaz, tüm tedarik zincirini optimize eder.`,
    category: "Dijital Dönüşüm",
    date: "2024-12-28",
    readTime: "8 dk",
  },
  {
    id: "ybs-ogrencisi-olmak",
    title: "YBS Öğrencisi Olmak: Generalist Avantajı",
    excerpt: "Neden tek bir alana odaklanmak yerine çok yönlü olmayı seçtim?",
    content: `Birçok kişi bana "Hangi programlama dilini öğreniyorsun?" veya "Frontend mi backend mi yapıyorsun?" diye soruyor. Cevabım basit: Hepsi.

# Generalist Olmak

YBS öğrencisi olarak bizim en büyük avantajımız, teknolojiyi iş dünyasıyla birleştirebilmemiz. Bu da şu anlama geliyor:
- Sadece kod yazmak değil, iş problemlerini anlamak
- Sadece veri analizi değil, stratejik düşünmek
- Sadece donanım değil, sistem tasarımı

# Çok Yönlülüğün Gücü

Üç farklı projeme bakın:
- IoT donanım projesi
- İş süreci dijitalleşmesi
- Veri tabanlı karar destek sistemi

Bu üç proje birbirinden tamamen farklı, ama hepsini yapabilmek bana geniş bir perspektif kazandırdı.

# Kariyer Stratejisi

Henüz kendimi bir alana kısıtlamıyorum. Farklı teknolojileri ve iş alanlarını keşfediyorum. İleride hangi alanda uzmanlaşacağıma o zaman karar vereceğim.

# Tavsiyem

Öğrencilik yılları, deneme yapma zamanı. Tek bir stack'e odaklanmak yerine, farklı alanlara açık olmak, uzun vadede daha büyük fırsatlar yaratacaktır.`,
    category: "Teknoloji",
    date: "2024-12-20",
    readTime: "6 dk",
  },
];
