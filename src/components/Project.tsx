import React, { useState } from "react";
import Altunis from "../components/Altunis";

const Project: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex justify-center py-7 bg-gradient-to-r from-slate-600 to-slate-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-center font-semibold mb-4">UPG</h3>
          <img
            src="/assets/wur.png"
            alt="UPG Projesi"
            onClick={() => handleImageClick("/assets/wur.png")}
            className="cursor-pointer rounded-md"
          />
          <br />
          <p className="text-gray-700">
            Bitirme projem kapsamında İstanbul Medeniyet Üniversitesi'nin özel
            talebi üzerine ekip arkadaşlarımla geliştirdiğimiz Dünya Üniversite
            Sıralamaları (SPA) projemiz. <br />
            <br />
            Bu proje, dünya üniversitelerinin sıralamaya girmeleri için gerekli
            verilerin kolayca toplanmasını amaçlamaktadır. Projemizle, veri
            toplama sürecini çok hızlandırdık ve sisteme entegre ettiğimiz
            kullanıcı rolleri sayesinde kullanıcıların sadece kendi girdikleri
            bilgilere erişimini sağlayarak veri güvenliğini artırdık. Okulumuz
            tarafından aktif olarak kullanılmaktadır. <br />
            <br />
            <br />
            Kullandığımız başlıca teknolojiler: Spring Boot (Maven), React.js,
            Tailwind, CSS, PostgreSQL, AJAX
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-center font-semibold mb-4">Parçam</h3>
          <div className="flex space-x-4">
            <img
              src="/assets/parcam1.jpg"
              alt="Parça 1"
              onClick={() => handleImageClick("/assets/parcam1.jpg")}
              className="cursor-pointer rounded-md w-1/3"
            />
            <img
              src="/assets/parcam2.jpg"
              alt="Parça 2"
              onClick={() => handleImageClick("/assets/parcam2.jpg")}
              className="cursor-pointer rounded-md w-1/3"
            />
          </div>
          <p className="text-gray-700 mt-4">
            Bu projeyi, React Native yeteneklerimi geliştirmek için tasarladığım
            bir pazar yeri uygulaması olarak tasarladım. <br />
            <br /> Kullanıcıların kolayca ürün ekleyip silebildiği, sepet ve
            favori listelerine ürün ekleyebildiği bir yapıya sahip. Sepete
            eklenen ürünler için toplam tutar hesaplaması yapılıyor ve bu sayede
            kullanıcılar sepetlerini daha rahat yönetebiliyor. Bu uygulama, hem
            kullanıcı deneyimini iyileştirmeyi hem de alışveriş sürecini daha
            akıcı hale getirmeyi hedefliyor.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-center font-semibold mb-4">Altun İş</h3>
          <img
            src="/assets/altunis.png"
            alt="Altunİş"
            onClick={() => handleImageClick("/assets/altunis.png")}
            className="cursor-pointer rounded-md"
          />
          <br />
          <p className="text-gray-700">
            🌾 Tarım Ürünleri Fabrikası için Web Sitesi Tasarladım! Kendimi
            geliştirmek ve gerçek dünya projelerinde tecrübe kazanmak amacıyla,
            bir tarım ürünleri satan fabrikaya özel modern ve kullanıcı dostu
            bir web sitesi tasarladım. Bu proje sayesinde hem kullanıcı deneyimi
            hem de sektörel ihtiyaçları daha iyi analiz etme fırsatı buldum.
            Aynı zamanda üretici-tüketici arasındaki dijital köprüyü oluşturacak
            yapıyı kurmak benim için oldukça öğretici bir süreçti. <br />
            <br /> 💻 Kullandığım teknolojiler: React & TypeScript ile hızlı ve
            dinamik kullanıcı arayüzü Tailwind CSS ile temiz ve sade bir tasarım
            Responsive yapı ile tüm cihazlarda sorunsuz görüntüleme. <br />
            <br /> 📌 Web sitesinde neler var? Firmanın ürünlerini
            sergileyebileceği ürün vitrin sayfası Hakkımızda ve iletişim
            bölümleri Kolayca güncellenebilir ürün detay kartları Bu proje, hem
            yazılım becerilerimi geliştirmemde hem de farklı sektörlerin
            ihtiyaçlarını anlama konusunda bana çok şey kattı.
            <br />
            <br />
            Proje detaylarına{" "}
            <a
              href="https://github.com/furkanirmakk/altunistarim.git"
              className="underline font-bold text-blue-600"
              target="_blank"
            >
              GitHub
            </a>{" "}
            profilimden bakabilirsiniz.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            &times; {}
          </button>
          {selectedImage && ( // Seçilen görsel varsa göster
            <img
              src={selectedImage}
              alt="Büyük Proje"
              className="max-w-full max-h-full rounded-md"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
