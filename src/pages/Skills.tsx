import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Redux"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      description: "Creating robust and scalable server solutions",
      skills: ["Node.js", "Python", "SQL", "RESTful APIs", "GraphQL", "MongoDB", "AWS"]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠",
      description: "Utilizing modern development tools and practices",
      skills: ["Git", "Docker", "CI/CD", "Jest", "Webpack", "VS Code", "Linux"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 max-w-7xl mx-auto px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Technical Skills
        </h1>
        <p className="text-xl text-gray-600">
          A comprehensive overview of my technical expertise and tools I work with
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{category.title}</h2>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 
                             text-blue-600 rounded-full text-sm font-medium
                             hover:from-blue-100 hover:to-indigo-100 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 mb-8">
          Always learning and exploring new technologies to stay at the forefront of web development
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full
                   font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Let's Work Together
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
