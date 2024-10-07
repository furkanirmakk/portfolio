import React from "react";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className=" py-20 bg-gradient-to-r  from-slate-950 to-slate-400 text-gray-950"
    >
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <img
          src="/assets/foto2.jpg"
          alt="Emre Güler"
          className="w-48 lg:w-96 h-auto rounded-full shadow-lg hover:shadow-xl duration-300 mb-4"
        />
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center">
            <span className="text-yellow-400">Furkan Irmak</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-3xl text-center">
            &#x2022; Frontend Developer
          </h2>
          <p className="text-center max-w-xl text-xs md:text-sm lg:text-base mt-1 md:mt-4">
            Bilgisayar mühendisliği bölümünden yeni mezun oldum ve kariyerime
            frontend alanında odaklanarak devam ediyorum. Anlayışlı, sosyal ve
            takım çalışmasına yatkın bir yapıya sahibim. Teknolojiyi kullanarak
            hem bireysel hem de ekip olarak başarılı sonuçlar elde etmeyi
            hedefliyorum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
