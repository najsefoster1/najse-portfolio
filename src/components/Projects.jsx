import React, { useState } from "react";

const projects = [
  {
    title: "NajsePulse 🚀",
    description: "AI-driven prediction model for insurance policy acceptance.",
    details: "This project leverages Python and Machine Learning to predict" + 
"customer insurance acceptance rates based on historical data.",
  },
  {
    title: "Digital Transformation in Healthcare",
    description: "AI & big data analytics improving patient outcomes.",
    details: "Implemented a data visualization dashboard in Power BI, aggregating" + 
"healthcare trends and patient data for decision-making.",
  },
  {
    title: "SharePoint Workflow Automation",
    description: "Automating business processes with SharePoint & Power Automate.",
    details: "Designed and deployed a SharePoint-based document approval system," + 
"reducing manual processes by 80%.",
  },
];

const Projects = () => {
  const [openProject, setOpenProject] = useState(null);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-400">My Projects</h2>
      
      {projects.map((project, index) => (
        <div key={index} className="mt-4 border-b border-gray-700 pb-2">
          <button 
            onClick={() => setOpenProject(openProject === index ? null : index)}
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 
transition-all duration-200 w-full text-left flex justify-between items-center"
          >
            {project.title}
            <span>{openProject === index ? "🔼" : "🔽"}</span>
          </button>
          
          {openProject === index && (
            <p className="text-gray-300 mt-2">{project.details}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;

