const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "SQL", "RESTful APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Docker", "AWS"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-gray-100 px-4 py-2 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
