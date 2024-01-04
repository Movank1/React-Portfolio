import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Texeditor',
      description: 'PAW',
      link: "https://github.com",
      repo: "https://github.com/Movank1/Text-Editor-2"
    },
    {
      name: 'SQL',
      description: 'EmployeeTracker',
      link: "https://github.com",
      repo: "https://github.com/Movank1/Employee-Tracker-3"
    },
    {
      name: 'CSS',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com/Movank1/modeste-portfolio"
    },
    {
      name: 'ECommerce',
      description: 'ORM',
      link: "https://github.com",
      repo: "https://github.com/Movank1/E-Commerce"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
