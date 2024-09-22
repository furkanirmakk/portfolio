import React from 'react';
const About: React.FC = () => {
  return (
    <section id="about" className=" py-20 bg-gradient-to-r  from-slate-950 to-slate-400 text-gray-950">
      <div className="container px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="col-span-1 flex justify-center pl-12">
            <img 
              src="/assets/foto.jpg"  
              alt="Profil" 
              className="rounded-full w-60 h-72 object-cover" 
            />
          </div>
          <div className="col-span-3 px-32  " >
          <h2 className="text-4xl font-bold text-left mb-8 ">Furkan Irmak</h2>
            <p className="text-lg">
              Ben Furkan, web geliştirme alanında uzmanlaşmış bir frontend geliştiriciyim. Modern web teknolojilerini
              kullanarak kullanıcı dostu ve etkileyici web siteleri geliştirmekteyim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
