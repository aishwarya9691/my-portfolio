function Projects() {
  const projects = [
    {
      title: "Powar Jewellers",
      description:
        "A responsive jewellery business website with product collections, modern UI and WhatsApp inquiry functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aishwarya9691/Powar-Jewellers",
      live: "https://powar-jewellers.vercel.app/",
    },

    {
      title: "Weather App",
      description:
        "A weather application that allows users to search for a city and view current weather information using an API.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/aishwarya9691/Weather-app",
      live: "#",
    },

    {
      title: "Currency Converter",
      description:
        "A currency conversion application with a simple and responsive interface for converting between different currencies.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/aishwarya9691/currency-converter",
      live: "#",
    },

    {
      title: "Simple Calculator",
      description:
        "A clean and responsive calculator application built to perform basic arithmetic operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/aishwarya9691/Simple-Calculator",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-medium mb-2">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I have built while learning
            frontend and full-stack development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-7 hover:border-blue-400 hover:-translate-y-1 transition duration-300"
            >

              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-800 text-blue-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gray-700 px-5 py-2 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
                >
                  GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;