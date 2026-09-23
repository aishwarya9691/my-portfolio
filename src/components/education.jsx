function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "VTC College, Sangli",
      year: "Currently Pursuing",
      description:
        "Direct Second Year admission in Computer Science & Engineering.",
    },
    {
      degree: "Diploma in Computer Engineering",
      institute: "NBS Institute of Polytechnic, Ausa",
      year: "Completed",
      description:
        "Completed Diploma in Computer Engineering with a strong foundation in programming and web development.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-medium mb-2">
            My Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">

          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-400 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.institute}
                  </p>
                </div>

                <span className="text-sm text-gray-400 border border-gray-700 px-4 py-2 rounded-full w-fit">
                  {item.year}
                </span>

              </div>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;