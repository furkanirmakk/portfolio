import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Logolar: React.FC = () => {
  return (
    <div className="fixed right-5 top-1/4 flex flex-col space-y-4 bg-gradient-to-r from-slate-900 to-slate-600 p-4 rounded-lg">
      <a
        href="http://linkedin.com/in/furkan-irmak-1599081ba"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:text-orange-600"
      >
        <FaLinkedin size={40} color="#0077B5" /> {/* LinkedIn rengi */}
        <span className="text-sm text-white mt-1">LinkedIn</span>
      </a>
      <a
        href="https://github.com/furkanirmakk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:text-orange-600"
      >
        <FaGithub size={40} color="#211F1F" /> {/* GitHub rengi */}
        <span className="text-sm text-white mt-1">GitHub</span>
      </a>
      <a
        href="https://twitter.com/profiliniz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:text-orange-600"
      >
        <FaFileAlt size={40} color="#1DA1F2" /> {/* Twitter rengi */}
        <span className="text-sm text-white mt-1">Twitter</span>
      </a>
      <a
        href="http://gmail.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:text-orange-600"
      >
        <IoIosMail size={40} color="#EA4335" /> {/* Email rengi */}
        <span className="text-sm text-white mt-1">Email</span>
      </a>
    </div>
  );
};

export default Logolar;
