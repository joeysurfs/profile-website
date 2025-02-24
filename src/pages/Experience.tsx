import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Company Name",
      period: "2021 - Present",
      description: "Led development of multiple web applications using React and Node.js. Managed team of 5 developers.",
      technologies: ["React", "Node.js", "AWS", "TypeScript"]
    },
    // Add more experiences...
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-blue-500"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.period}</p>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
