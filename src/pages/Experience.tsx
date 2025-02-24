import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise-scale web applications and mentoring junior developers.",
      achievements: [
        "Architected and implemented microservices infrastructure handling 1M+ daily requests",
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Led team of 5 developers in successful delivery of major client projects",
        "Implemented automated testing strategy improving code coverage by 40%"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "Docker", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations LLC",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client web applications with focus on performance and scalability.",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Improved application performance by 50% through code optimization",
        "Implemented secure payment processing system handling $500K+ monthly transactions",
        "Developed RESTful APIs serving 100K+ daily users"
      ],
      technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Redux"]
    },
    {
      title: "Software Developer",
      company: "Web Solutions Co.",
      period: "2018 - 2019",
      description: "Focused on frontend development and UI/UX improvements for client websites.",
      achievements: [
        "Developed mobile-responsive websites for 20+ clients",
        "Reduced page load times by 40% through optimization",
        "Implemented modern UI/UX practices improving user engagement",
        "Collaborated with design team to create pixel-perfect implementations"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Sass"]
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
          Professional Experience
        </h1>
        <p className="text-xl text-gray-600">
          My journey in software development and leadership
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className={index % 2 === 0 ? 'md:order-1' : ''}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 mb-4">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-8"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
