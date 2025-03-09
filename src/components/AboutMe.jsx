import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md flex flex-col 
md:flex-row items-center">
      {/* Profile Picture */}
      <img 
        src={`${import.meta.env.BASE_URL}profile.jpg`} 
        alt="Najse Foster" 
        className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg mb-4 
md:mb-0 md:mr-6"
      />

      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
        <p className="text-gray-300 mt-4 leading-relaxed">
          I’m **Najse Foster**, a former **United States Air Force Knowledge 
Management Specialist** with expertise in **compliance, auditing, and process 
automation**. My experience encompasses:
        </p>
        
        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li><span className="font-semibold">Records Management Program 
Manager</span> – Ensured proper data retention and compliance.</li>
          <li><span className="font-semibold">Privacy Act & FOIA Program 
Manager</span> – Managed data requests and compliance under strict 
regulations.</li>
          <li><span className="font-semibold">SharePoint Instructor & 
Developer</span> – Trained over **500 personnel** and developed workflows that 
improved operational efficiency.</li>
          <li><span className="font-semibold">8570 Compliance & Cybersecurity 
Auditor</span> – Conducted internal audits to **ensure security standards** were 
met.</li>
          <li><span className="font-semibold">Process Improvement & 
Automation</span> – Leveraged **Power Automate, PowerShell, and SharePoint** to 
**save time and reduce errors**.</li>
        </ul>

        <p className="text-gray-300 mt-4">
          I thrive in **fast-paced environments**, collaborating with 
**stakeholders and leadership** to implement **technology-driven solutions** that 
**streamline processes, improve compliance, and optimize decision-making**. My 
**Lean Six Sigma Green Belt Certification** reinforces my ability to **identify 
inefficiencies and create sustainable solutions**.
        </p>

        <p className="text-gray-300 mt-4">
          I hold an **Associate’s degree in Business Administration**, a 
**Bachelor’s in Information Systems**, and will be graduating in **May 2025** with 
a **Master’s in Management Information Systems & Business Analytics**.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

