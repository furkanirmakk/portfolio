import React from "react";

const Project: React.FC = () => {
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget;

    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if ((img as any).webkitRequestFullscreen) {
      // Safari için
      (img as any).webkitRequestFullscreen();
    } else if ((img as any).msRequestFullscreen) {
      // IE/Edge için
      (img as any).msRequestFullscreen();
    }
  };

  return (
    <div className="flex justify-center py-7 bg-gradient-to-r from-slate-950 to-slate-400">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-center font-semibold mb-4">UPG</h3>
          <img
            src="/assets/wur.png"
            alt="UPG Projesi"
            onClick={handleImageClick}
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
            {" "}
            {/* Flex container for images */}
            <img
              src="/assets/parcam1.jpg"
              alt="Parça 1"
              onClick={handleImageClick}
              className="cursor-pointer rounded-md w-1/3" // Resmi genişlik olarak %50 yaparak yan yana dizilmesini sağlıyoruz
            />
            <img
              src="/assets/parcam2.jpg"
              alt="Parça 2"
              onClick={handleImageClick}
              className="cursor-pointer rounded-md w-1/3" // Aynı şekilde bu resmi de %50 genişlikte yapıyoruz
            />
          </div>
          <p className="text-gray-700 mt-4">
            {" "}
            {/* Resimlerin altına biraz boşluk ekledik */}
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
      </div>
    </div>
  );
};

export default Project;
