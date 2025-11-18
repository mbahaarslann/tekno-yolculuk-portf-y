export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  challenges: string;
  solutions: string;
  technologies: string[];
  outcomes: string;
}

export const projects: Project[] = [
  {
    id: "otonom-hedef-takibi",
    title: "Otonom Hedef Takibi (Raspberry Pi)",
    description: "Görüntü işleme teknikleri kullanılarak, belirlenen hedefi otonom olarak takip edebilen bir araç prototipi.",
    fullDescription: "Bu proje, Raspberry Pi ve görüntü işleme teknolojileri kullanarak otonom hareket edebilen bir araç geliştirme çalışmasıdır. Sistem, kameradan aldığı görüntüleri işleyerek belirlenen hedefi tanır ve takip eder.",
    tags: ["IoT", "Görüntü İşleme", "Donanım"],
    challenges: "Gerçek zamanlı görüntü işleme, düşük işlemci gücü ile yüksek performans sağlama, farklı ışık koşullarında hedef tespiti",
    solutions: "OpenCV kütüphanesi ile optimize edilmiş görüntü işleme algoritmaları, adaptif eşikleme teknikleri, PID kontrol sistemi ile hassas motor kontrolü",
    technologies: ["Raspberry Pi", "Python", "OpenCV", "GPIO", "Motor Sürücüler"],
    outcomes: "Başarılı hedef takibi, %85 üzeri doğruluk oranı, gerçek zamanlı performans",
  },
  {
    id: "lojistik-dijitallesme",
    title: "Lojistikte B2B Dijitalleşme",
    description: "Lojistik sektörünün en büyük verimsizliği olan 'boş araç/boş dönüş' sorununu çözmeye yönelik dijital platform ve iş modeli tasarımı.",
    fullDescription: "Türkiye lojistik sektöründe araçların %40'ının boş dönüş yaptığı gerçeğinden yola çıkarak, nakliye şirketleri ve kargo sahiplerini bir araya getiren dijital bir platform konsepti geliştirilmiştir.",
    tags: ["İş Analizi", "Süreç İyileştirme", "Platform Tasarımı"],
    challenges: "Karmaşık lojistik süreçlerin dijitalleştirilmesi, farklı paydaşların platformda buluşturulması, güven mekanizmasının oluşturulması",
    solutions: "Detaylı iş süreci analizi, kullanıcı deneyimi odaklı platform tasarımı, blockchain tabanlı güven sistemi önerisi, komisyon bazlı gelir modeli",
    technologies: ["İş Süreci Modelleme", "Platform Ekonomisi", "Dijital Dönüşüm"],
    outcomes: "Potansiyel %30 maliyet tasarrufu, sektör verimliliğinde artış, ölçeklenebilir iş modeli",
  },
  {
    id: "fiyatlandirma-kds",
    title: "Fiyatlandırma Karar Destek Sistemi",
    description: "İşletmelerin uzun vadeli fiyat stratejilerini belirlemelerine yardımcı olan, veriye dayalı karar destek sistemi modeli.",
    fullDescription: "Perakende ve e-ticaret sektörlerinde faaliyet gösteren işletmeler için geliştirilen, tarihsel satış verilerini, pazar koşullarını ve rekabet analizini birleştiren bir karar destek sistemi modeli.",
    tags: ["Veri Analizi", "KDS", "Stratejik Planlama"],
    challenges: "Çok değişkenli fiyatlandırma faktörlerinin analizi, dinamik pazar koşullarının modellenmesi, kullanıcı dostu arayüz tasarımı",
    solutions: "Makine öğrenmesi algoritmaları ile talep tahmini, senaryo analizi modülleri, görselleştirme araçları ile karar desteği",
    technologies: ["Veri Analizi", "İstatistiksel Modelleme", "Tahmin Algoritmaları", "BI Araçları"],
    outcomes: "Optimize fiyatlandırma stratejileri, satış tahminlerinde iyileşme, stratejik karar alma sürecinde hızlanma",
  },
];
