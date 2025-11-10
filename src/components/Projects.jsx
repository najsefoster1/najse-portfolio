import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    const fetchData = async (retries = 5) => {
      try {
        const res = await fetch('/projects.json');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        const list = data.projects || data;
        setProjects(list);
      } catch (error) {
        if (retries > 0) {
          setTimeout(() => fetchData(retries - 1), 1000);
        } else {
          setProjects([
            {
              title: "Operations KPI Warehouse",
              summary: "Explore core KPIs with simple filters and chart views.",
              github: "https://github.com/najsefoster1/operations-kpi-sql-warehouse",
              demo: "https://huggingface.co/spaces/najsefoster/ops-kpi"
            }
          ]);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-yellow-400">My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mt-4 border-b border-gray-700 pb-2">
          <button
            onClick={() => setOpenProject(openProject === index ? null : index)}
            className="text-xl font-semibold text-yellow-300 hover:text-yellow-400 transition-all duration-200 flex justify-between items-center w-full"
          >
            {project.title}
            <span>{openProject === index ? "\u25B2" : "\u25BC"}</span>
          </button>
          {openProject === index && (
            <div className="text-gray-300 mt-2">
              <p>{project.summary || project.description}</p>
              <div className="mt-2 space-x-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-yellow-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="text-yellow-400 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
