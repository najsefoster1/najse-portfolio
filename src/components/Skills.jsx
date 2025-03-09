import React from "react";

const skills = [
  { category: "Programming & Scripting", list: ["Python", "JavaScript", 
"PowerShell", "SQL"] },
  { category: "Cloud & DevOps", list: ["Azure", "AWS", "Docker", "Kubernetes"] },
  { category: "Collaboration & Automation", list: ["SharePoint", "Power Automate", 
"Microsoft Teams"] },
  { category: "Data & Visualization", list: ["Power BI", "Excel", "Tableau"] },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-400">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {skills.map((skill, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold 
text-blue-300">{skill.category}</h3>
            <ul className="mt-2">
              {skill.list.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

