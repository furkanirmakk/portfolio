import React from "react";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className=" py-20 bg-gradient-to-r  from-slate-600 to-slate-300 text-gray-950"
    >
      <div className="flex flex-col md:flex-row items-center justify-center ">
        <img
          src="/assets/foto2.jpg"
          alt="Furkan Irmak"
          className="w-48 lg:w-64 h-auto rounded-full shadow-lg hover:shadow-xl duration-300 mb-4"
        />
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-yellow-400">Furkan Irmak</span>
          </h1>
          <h2 className="text-base md:text-lg lg:text-2xl font-semibold mt-2 md:mt-4">
            &#x2022; Frontend Developer
          </h2>
          <p className="max-w-xl text-sm md:text-base lg:text-lg font-light leading-relaxed mt-2 md:mt-5 mx-auto">
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
