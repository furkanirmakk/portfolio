import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai"; 

const Logolar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false); 

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div className="fixed right-5 top-5">
      {isMobile ? (
        
        <>
          <div className="flex items-center">
            <span className="text-white mr-2">İletişim</span>{" "}
            {}
            <button
              onClick={() => setIsOpen(!isOpen)} 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-slate-800 to-slate-600 text-white hover:bg-orange-600 focus:outline-none transition-all duration-300 shadow-lg"
            >
              <AiOutlineMenu size={24} /> {}
            </button>
          </div>

          {isOpen && (
            <div className="flex flex-col space-y-4 bg-gradient-to-r from-slate-900 to-slate-600 p-4 rounded-lg mt-2 transition-all duration-300 ease-in-out shadow-lg">
              <a
                href="http://linkedin.com/in/furkan-irmak-1599081ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-orange-600"
              >
                <FaLinkedin size={40} color="#0077B5" />
                <span className="text-sm text-white mt-1">LinkedIn</span>
              </a>
              <a
                href="https://github.com/furkanirmakk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-orange-600"
              >
                <FaGithub size={40} color="#211F1F" />
                <span className="text-sm text-white mt-1">GitHub</span>
              </a>
              <a
                href="/assets/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-orange-600"
              >
                <FaFileAlt size={40} color="#1DA1F2" />
                <span className="text-sm text-white mt-1">CV</span>
              </a>

              <a
                href="mailto:furkanirmak81@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-orange-600"
              >
                <IoIosMail size={40} color="#EA4335" />
                <span className="text-sm text-white mt-1">Email</span>
              </a>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col space-y-4 bg-gradient-to-r from-slate-900 to-slate-600 p-4 rounded-lg">
          <a
            href="http://linkedin.com/in/furkan-irmak-1599081ba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-orange-600"
          >
            <FaLinkedin size={40} color="#0077B5" />
            <span className="text-sm text-white mt-1">LinkedIn</span>
          </a>
          <a
            href="https://github.com/furkanirmakk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-orange-600"
          >
            <FaGithub size={40} color="#211F1F" />
            <span className="text-sm text-white mt-1">GitHub</span>
          </a>
          <a
            href="/assets/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-orange-600"
          >
            <FaFileAlt size={40} color="#1DA1F2" />
            <span className="text-sm text-white mt-1">CV</span>
          </a>
          <a
                href="mailto:furkanirmak81@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:text-orange-600"
              >
                <IoIosMail size={40} color="#EA4335" />
                <span className="text-sm text-white mt-1">Email</span>
              </a>
        </div>
      )}
    </div>
  );
};

export default Logolar;
