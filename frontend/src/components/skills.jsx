function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "C", "C++"],
    },
    {
      title: "Frontend Technologies",
      skills: ["Bootstrap", "Tailwind CSS", "React.js"],
    },
    {
      title: "Data Science Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib"],
    },
    {
      title: "Development Tools",
      skills: [
        "Visual Studio Code",
        "PyCharm",
        "Jupyter Notebook",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Professional Skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Time Management",
        "Excellent Communication",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-400 font-medium mb-2">
            My Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies, tools and professional skills I use
            while building web applications.
          </p>

        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-400 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-950 border border-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm hover:border-blue-400 hover:text-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;