import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Altunis = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <h3 className="text-xl text-center font-semibold mb-4">Altun İş</h3>

      {/* Galeri */}
      <div className="relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ArrowLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide px-8"
        >
          {[
            "/assets/parcam1.jpg",
            "/assets/parcam2.jpg",
            "/assets/parcam1.jpg",
            "/assets/parcam2.jpg",
            "/assets/parcam1.jpg",
            "/assets/wur.png",
            
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Parça ${index + 1}`}
              onClick={() => handleImageClick(src)}
              className="cursor-pointer rounded-md w-3/5 object-cover flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Açılan büyük görsel (opsiyonel) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Seçilen görsel"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Açıklama */}
      <p className="text-gray-700 mt-6 text-m">
        🌾 Tarım Ürünleri Fabrikası için Web Sitesi Tasarladım! Kendimi
        geliştirmek ve gerçek dünya projelerinde tecrübe kazanmak amacıyla, bir
        tarım ürünleri satan fabrikaya özel modern ve kullanıcı dostu bir web
        sitesi tasarladım. Bu proje sayesinde hem kullanıcı deneyimi hem de
        sektörel ihtiyaçları daha iyi analiz etme fırsatı buldum. Aynı zamanda
        üretici-tüketici arasındaki dijital köprüyü oluşturacak yapıyı kurmak
        benim için oldukça öğretici bir süreçti. <br /> 💻 Kullandığım teknolojiler:
        React & TypeScript ile hızlı ve dinamik kullanıcı arayüzü Tailwind CSS
        ile temiz ve sade bir tasarım Responsive yapı ile tüm cihazlarda
        sorunsuz görüntüleme. <br /> 📌 Web sitesinde neler var? Firmanın ürünlerini
        sergileyebileceği ürün vitrin sayfası Hakkımızda ve iletişim bölümleri
        Kolayca güncellenebilir ürün detay kartları Bu proje, hem yazılım
        becerilerimi geliştirmemde hem de farklı sektörlerin ihtiyaçlarını
        anlama konusunda bana çok şey kattı.
        {/* (açıklama burada devam ediyor) */}
      </p>
    </div>
  );
};
export default Altunis;
