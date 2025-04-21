import React, { useState } from "react";
import ProjectList from "./ProjectList";

const Project: React.FC = () => {
  

  const project = [
    { id: 1, name: "Hoop Reis", imageUrl: "/assets/hoopreis.png" },
    { id: 2, name: "Altun İş", imageUrl: "/assets/altunis.png" },
    { id: 3, name: "UPG", imageUrl: "/assets/wur.png" },
    
  ];

  return (
    <div className="bg-gradient-to-r from-[#191A17] via-[#443007] to-[#191A17] pt-5">
      
      <ProjectList products={project} />
    </div>

   
  );
};

export default Project;
