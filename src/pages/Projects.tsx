const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/username/project1",
      live: "https://project1.example.com"
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/username/project2",
      live: "https://project2.example.com"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-800">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
