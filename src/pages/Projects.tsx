import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Analytics Dashboard",
      description: "Real-time analytics platform built with React and D3.js, featuring dynamic data visualization and user authentication.",
      image: "/projects/analytics-dashboard.jpg",
      tech: ["React", "TypeScript", "Node.js", "D3.js", "AWS"],
      github: "https://github.com/joeserafin/analytics-dashboard",
      live: "https://demo.joeserafin.info/analytics"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product management, cart functionality, and secure payment processing.",
      image: "/projects/ecommerce.jpg",
      tech: ["Next.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
      github: "https://github.com/joeserafin/ecommerce-platform",
      live: "https://shop.joeserafin.info"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      image: "/projects/task-manager.jpg",
      tech: ["React", "Firebase", "Material-UI", "Node.js"],
      github: "https://github.com/joeserafin/task-manager",
      live: "https://tasks.joeserafin.info"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold mb-16 text-center"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Featured Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 p-6 text-white flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="flex-1 text-center py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex-1 text-center py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
