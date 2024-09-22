import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Logolar: React.FC = () => {
  return (
    <div className="flex justify-center space-x-24  bg-gradient-to-r  from-slate-950 to-slate-400">
      <a
        href="http://linkedin.com/in/furkan-irmak-1599081ba"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-600 hover:text-orange-600"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://github.com/furkanirmakk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-600 hover:text-orange-600"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="https://twitter.com/profiliniz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-600 hover:text-orange-600"
      >
        <FaFileAlt size={40} />
      </a>
      <a
        href="http://gmail.com/ "
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-600 hover:text-orange-600"
      >
        <IoIosMail size={40} />
      </a>
    </div>
  );
};

export default Logolar;
