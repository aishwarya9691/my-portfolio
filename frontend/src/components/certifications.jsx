
function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 h-[2px] bg-blue-500"></span>

            <p className="text-blue-400 font-semibold text-lg">
              My Achievements
            </p>

            <span className="w-16 h-[2px] bg-blue-500"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            My <span className="text-blue-400">Certifications</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Professional training and achievements
          </p>

        </div>

        {/* Certificate Card */}
        <div className="max-w-5xl mx-auto">

          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 md:p-10
          hover:border-blue-500/60 transition duration-300
          shadow-xl hover:shadow-blue-500/10">

            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">

              {/* Certificate Icon */}
              <div className="flex justify-center items-center
              border-b md:border-b-0 md:border-r border-gray-800
              pb-8 md:pb-0 md:pr-10">

                <div className="w-48 h-48 rounded-full
                bg-blue-950/70 flex items-center justify-center
                border border-blue-900 shadow-lg shadow-blue-500/10">

                  <span className="text-8xl">
                    🏅
                  </span>

                </div>

              </div>

              {/* Certificate Details */}
              <div>

                <p className="text-blue-400 font-medium mb-3">
                  Completed Certification
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-5">
                  Python Full Stack Development
                </h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  Successfully completed Python Full Stack Development
                  training with{" "}
                  <span className="text-blue-400 font-bold">98.18%</span>.
                  Gained practical experience and hands-on knowledge of
                  frontend and backend web development through real-world projects.
                </p>

                {/* View Certificate Button */}
                <a
                  href="/certificates/certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3
                  bg-blue-600 hover:bg-blue-700
                  text-white font-semibold
                  px-7 py-4 rounded-xl
                  transition duration-300
                  hover:shadow-lg hover:shadow-blue-500/30"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>

                  View Certificate

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;
