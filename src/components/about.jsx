function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-400 font-medium mb-2">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* About Text */}
          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Passionate About Web Development
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              I am Aishwarya Powar, a Computer Engineering Diploma Holder
              and a B.Tech Computer Science & Engineering student
              currently pursuing my degree.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              I am passionate about web development and enjoy
              building responsive, user-friendly and interactive
              web applications using modern technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently, I am pursuing Python Full Stack Development
              and continuously improving my skills through practical
              projects and hands-on development.
            </p>

          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h4 className="text-blue-400 text-3xl font-bold">
                78.34%
              </h4>

              <p className="text-gray-400 mt-2">
                Diploma Score
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h4 className="text-blue-400 text-3xl font-bold">
                B.Tech
              </h4>

              <p className="text-gray-400 mt-2">
                CSE Pursuing
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h4 className="text-blue-400 text-3xl font-bold">
                React
              </h4>

              <p className="text-gray-400 mt-2">
                Frontend
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h4 className="text-blue-400 text-3xl font-bold">
                Python
              </h4>

              <p className="text-gray-400 mt-2">
                Full Stack
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;