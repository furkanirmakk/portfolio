import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
} from "react-icons/si";

const Logolar2: React.FC = () => {
  return (
    <div className="flex justify-center py-7 bg-gradient-to-r from-slate-950 to-slate-400">
      <div className="grid grid-cols-2 gap-12 sm:grid-cols-7">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiReact size={40} color="#61DAFB" />
          <span className="text-sm text-customColor mt-1">React</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiTypescript size={40} color="#007ACC" />
          <span className="text-sm text-customColor mt-1">TypeScript</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiTailwindcss size={40} color="#38B2AC" />
          <span className="text-sm text-customColor mt-1">Tailwind CSS</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiJavascript size={40} color="#F7DF1E" />
          <span className="text-sm text-customColor mt-1">JavaScript</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiHtml5 size={40} color="#E34F26" />
          <span className="text-sm text-customColor mt-1">HTML5</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiCss3 size={40} color="#1572B6" />
          <span className="text-sm text-customColor mt-1">CSS3</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-orange-600"
        >
          <SiPostgresql size={40} color="#336791" />
          <span className="text-sm text-customColor mt-1">PostgreSQL</span>
        </a>
      </div>
    </div>
  );
};

export default Logolar2;
