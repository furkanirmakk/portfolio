import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails: React.FC = () => {
  interface Product {
    id: number;
    name: string;
    description: string;
    images: string[];
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Hoop Reis",
      description: `
🚛 Hoop Lojistik için Modern ve Kullanıcı Dostu Web Sitesi Tasarımı  
Gerçek dünya ihtiyaçlarına odaklanarak, Hoop Lojistik firmasına özel modern, güvenilir ve kullanıcı dostu bir web sitesi tasarladım.

💡 Proje Hedefi  
Hoop Lojistik’in geniş hizmet yelpazesini müşterilere kolayca ulaştırabileceği, mobil uyumlu, hızlı ve sade bir platform oluşturmak temel amacımızdı.  
Firma hakkında bilgi alınabilen, hizmetler incelenebilen ve kolayca iletişime geçilebilen bir yapı kuruldu.

🛠️ Kullandığım Teknolojiler  
• React & TypeScript → Hızlı, modüler ve güvenilir arayüz  
• Tailwind CSS → Temiz, modern ve responsive tasarım  
• Responsive Tasarım → Tüm cihazlarda sorunsuz kullanım  
• React Router → Sayfalar arası geçişlerde akıcılık  

📌 Proje detaylarına GitHub profilimden bakabilirsiniz.

🌐 Canlı Site: Siteyi Ziyaret Et
`,
      images: ["/assets/hoopreis.png"],
    },
    {
      id: 2,
      name: "Altun İş",
      description: `
🌾 Tarım Ürünleri Fabrikası için Web Sitesi Tasarladım! 
Kendimi geliştirmek ve gerçek dünya projelerinde tecrübe kazanmak amacıyla, bir tarım ürünleri satan fabrikaya özel modern ve kullanıcı dostu bir web sitesi tasarladım. 
Bu proje sayesinde hem kullanıcı deneyimi hem de sektörel ihtiyaçları daha iyi analiz etme fırsatı buldum. 
Aynı zamanda üretici-tüketici arasındaki dijital köprüyü oluşturacak yapıyı kurmak benim için oldukça öğretici bir süreçti.

💻 Kullandığım teknolojiler:
• React & TypeScript ile hızlı ve dinamik kullanıcı arayüzü 
• Tailwind CSS ile temiz ve sade bir tasarım 
• Responsive yapı ile tüm cihazlarda sorunsuz görüntüleme

📌 Web sitesinde neler var?
• Firmanın ürünlerini sergileyebileceği ürün vitrin sayfası 
• Hakkımızda ve iletişim bölümleri 
• Kolayca güncellenebilir ürün detay kartları 

Bu proje, hem yazılım becerilerimi geliştirmemde hem de farklı sektörlerin ihtiyaçlarını anlama konusunda bana çok şey kattı.

Proje detaylarına GitHub profilimden bakabilirsiniz.
`,
      images: ["/assets/altunis.png"],
    },
    {
      id: 3,
      name: "UPG",
      description: `
🎓 Bitirme projem kapsamında İstanbul Medeniyet Üniversitesi'nin özel talebi üzerine ekip arkadaşlarımla geliştirdiğimiz Dünya Üniversite Sıralamaları (SPA) projemiz.

Bu proje, dünya üniversitelerinin sıralamaya girmeleri için gerekli verilerin kolayca toplanmasını amaçlamaktadır. 
Projemizle, veri toplama sürecini çok hızlandırdık ve sisteme entegre ettiğimiz kullanıcı rolleri sayesinde kullanıcıların sadece kendi girdikleri bilgilere erişimini sağlayarak veri güvenliğini artırdık. 
Okulumuz tarafından aktif olarak kullanılmaktadır.

🛠️ Kullandığımız başlıca teknolojiler:
• Spring Boot (Maven) 
• React.js 
• Tailwind 
• CSS 
• PostgreSQL 
• AJAX
`,
      images: ["/assets/Wur.png"],
    },
    

    // Diğer ürünler...
  ];

  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Ürün bulunamadı!</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <div className="flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-800 ml-4 rounded"></div>
          <h1 className="text-4xl p-8 text-center font-bold text-gray-800 ">
            {product.name}
          </h1>
          <div className="w-32 h-1 bg-gray-800 mr-4 rounded"></div>
        </div>

        {/* Slayt gösterisi kısmı */}
        <div className="relative w-[100%] sm:w-[85%] md:w-[70%] xl:w-[60%] mx-auto">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-600">
            <img src={product.images[selectedImageIndex]} alt={product.name} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 p-6 mt-8 bg-gradient-to-r from-[#191A17] via-[#443007] to-[#191A17]   rounded-xl shadow-lg">
          {/* Ürün açıklaması */}
          <div className="flex flex-col items-center justify-center text-center">
            {product.description.split("\n").map((paragraph, index) => (
              <p key={index} className="text-lg text-white mt-4 max-w-2xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
