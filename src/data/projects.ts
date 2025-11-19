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
    description: "Kırmızı rengi algılayıp takip eden ve engelleri mesafe sensörüyle tespit ederek çarpışmaları önleyen otonom araç prototipi.",
    fullDescription: "Bu proje, Raspberry Pi 3B+ kullanılarak kırmızı rengi algılayıp takip edebilen ve önündeki engelleri mesafe sensörüyle tespit ederek çarpışmaları önleyen otonom bir araç geliştirmeyi amaçlamaktadır. Araç, USB kamera ile çevresini algılar, OpenCV ile görüntü işleme yapar ve motor sürücü kartı ile yönlendirilir. Lojistik konvoylarında kullanılabilecek şekilde tasarlanmıştır.",
    tags: ["IoT", "Görüntü İşleme", "Donanım", "Raspberry Pi"],
    challenges: "Lojistik konvoylarında araçlar arası güvenli mesafenin korunması ve belirli bir hedefin (renkli nesne) takip edilmesiyle yönlendirme yapılması gerekmektedir. Projede karşılaşılan temel zorluklar: Görüntü işleme algoritmalarında kırmızı rengin doğru ve tutarlı şekilde tespit edilmesi, renk tespiti ile motor kontrolünün senkronize edilmesi, farklı yüzeylerde ve ışık koşullarında aracın stabil çalışması, mesafe sensörünün hızlı ve güvenilir tepki vermesi.",
    solutions: "Görüntü işleme için OpenCV ile HSV renk uzayında kırmızı renk iki farklı aralıkta tanımlanarak maskeleme yapılmıştır. Motor kontrolü için L298N kartı ile PWM sinyalleri kullanılarak hız ve yön kontrolü sağlanmıştır. Mesafe ölçümü için HC-SR04 sensörü ile sürekli mesafe ölçülmüş, 7 cm altına düşüldüğünde buzzer ile uyarı verilmiş ve motorlar durdurulmuştur. Yazılım entegrasyonu Python diliyle yazılmış kodda, kamera görüntüsü işlenmiş, kırmızı nesne merkezi belirlenmiş ve bu konuma göre yön tayini yapılmıştır. Enerji yönetimi için powerbank ile taşınabilirlik sağlanmış, sistem mobil hale getirilmiştir.",
    technologies: [
      "Raspberry Pi 3B+",
      "L298N Motor Sürücü Kartı",
      "2 Adet DC Motor",
      "HC-SR04 Mesafe Sensörü",
      "Buzzer",
      "USB Webcam",
      "OpenCV (Python kütüphanesi)",
      "Python",
    ],
    outcomes: "Proje başarıyla tamamlandı ve testlerde beklenen performansı gösterdi. Kırmızı renk tespitiyle hedef takibi sağlandı, mesafe sensörü ile çarpışmalar önlendi. Lojistik sektöründe konvoy güvenliği için uygulanabilir bir çözüm sunuldu. Sistem, araçlar arası koordinasyonu artırma potansiyeline sahip olduğunu gösterdi. Donanım ve yazılım entegrasyonu sayesinde düşük maliyetli ve taşınabilir bir prototip elde edildi.",
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
    description: "Orta düzey yöneticilerin fiyatlandırma stratejileri ve pazar analizleri gibi karmaşık kararları veriye dayalı olarak alabilmesini sağlayan karar destek sistemi.",
    fullDescription: "Teknoloji sektöründe faaliyet gösteren işletme için geliştirilen, tarihsel satış verilerini, pazar koşullarını ve rekabet analizini birleştiren bir karar destek sistemi modeli. Sistem, orta düzey yöneticilerin fiyatlandırma stratejileri ve pazar analizleri gibi karmaşık kararları sezgiye dayalı değil, veriye dayalı olarak alabilmesini sağlamaktadır.",
    tags: ["Veri Analizi", "KDS", "Stratejik Planlama", "Dashboard"],
    challenges: "Bu projenin odaklandığı temel problem, orta düzey yöneticilerin fiyatlandırma stratejileri ve pazar analizleri gibi karmaşık kararları sezgiye dayalı değil, veriye dayalı olarak alabilmesini sağlamaktır. Bu bağlamda karşılaşılan başlıca zorluklar: Fiyat değişikliklerinin etkisini öngörememe (fiyat artışı ya da indirimi sonrası gelir ve pazar payı üzerindeki etkilerin tahmin edilememesi), senaryo karşılaştırması eksikliği (alternatif fiyatlandırma stratejilerinin etkilerini karşılaştırmak için sistematik bir altyapının olmaması), bölgesel analiz yetersizliği (şehir bazlı performansın görselleştirilmemesi, bölgesel strateji geliştirmeyi zorlaştırması), gerçek zamanlı analiz eksikliği (kullanıcının yaptığı değişikliklerin anında sonuçlarını görememesi), kullanıcı dostu olmayan sistemler (karar vericilerin teknik bilgiye ihtiyaç duymadan sistemi kullanabilmesi için sade ve etkileşimli bir arayüz gerekliliği).",
    solutions: "Fiyat Simülasyonu Modülü: Kullanıcı, kategori bazlı fiyat değişikliklerini test edebilir. Sistem, talep esnekliği ve geçmiş verilerle bu değişikliğin gelir ve pazar payı üzerindeki etkisini hesaplar. Senaryo Yönetimi: Kullanıcılar farklı fiyatlandırma senaryoları oluşturabilir, kaydedebilir ve karşılaştırabilir. Böylece stratejik kararlar öncesi alternatifler test edilebilir. Dashboard ve Grafiksel Analiz: Kritik metrikler (gelir, müşteri sayısı, pazar payı) görselleştirilerek karar vericilere hızlı içgörü sağlanır. Şehir Bazlı Harita Analizi: Türkiye haritası üzerinde şehir bazlı performans verileri (gelir, müşteri, pazar payı) renk kodlamasıyla sunulur. Ofis bulunan şehirler özel olarak işaretlenir. Gerçek Zamanlı Hesaplama: Kullanıcı değişiklik yaptığında sistem anında hesaplama yaparak sonuçları günceller. Kullanıcı Deneyimi Odaklı Tasarım: Responsive, karanlık mod destekli, sade ve sezgisel bir arayüz ile kullanıcı dostu deneyim sağlanır.",
    technologies: [
      "Veri Analizi",
      "İstatistiksel Modelleme",
      "Tahmin Algoritmaları",
      "Dashboard & Görselleştirme",
      "Harita API'leri",
      "Gerçek Zamanlı Hesaplama",
      "Responsive UI/UX Tasarımı",
      "Karanlık Mod Desteği",
    ],
    outcomes: "Sistem, yöneticilerin fiyatlandırma kararlarını veriye dayalı olarak almasını sağladı. Alternatif senaryoların etkileri karşılaştırılabilir hale geldi, bu da stratejik esneklik kazandırdı. Şehir bazlı analizler sayesinde bölgesel stratejiler geliştirilebildi. Kullanıcı dostu arayüz ve gerçek zamanlı hesaplamalar, sistemin kullanılabilirliğini ve hızını artırdı. Proje, orta düzey yöneticiler için karar alma süreçlerini dijitalleştiren ve stratejik içgörü sağlayan bir araç olarak konumlandı.",
  },
];
