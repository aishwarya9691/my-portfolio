function Hero() {
  const skills = ["React.js", "JavaScript", "Python", "Django", "MySQL"];

  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white overflow-hidden pt-16 pb-16 sm:pt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-center lg:text-left lg:min-w-[650px]">

            {/* Greeting */}
            <p className="text-blue-400 text-base sm:text-lg md:text-xl font-medium mb-4">
              Hi, I'm Aishwarya Powar 👋
            </p>

            {/* Heading */}
            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            <span className="whitespace-nowrap">
              Python Full Stack
            </span>

            <span className="block text-blue-400">
              Developer
            </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                sm:mt-6
                text-gray-400
                text-base
                sm:text-lg
                md:text-xl
                leading-relaxed
                max-w-2xl
                mx-auto
                lg:mx-0
              "
            >
              Computer Engineering Diploma Holder and B.Tech Computer
              Science & Engineering student passionate about building
              responsive and user-friendly web applications using modern
              technologies.
            </p>

            {/* Skills */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-2
                sm:gap-3
                mt-6
              "
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    bg-gray-900
                    border
                    border-gray-800
                    px-3
                    sm:px-4
                    py-2
                    rounded-full
                    text-xs
                    sm:text-sm
                    text-gray-200
                    hover:border-blue-400
                    hover:text-blue-400
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-center
                lg:justify-start
                gap-3
                sm:gap-4
                mt-7
              "
            >
              <a
                href="#projects"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  bg-blue-500
                  hover:bg-blue-600
                  px-6
                  py-3
                  rounded-lg
                  font-medium
                  transition
                "
              >
                View Projects
              </a>

              <a
                href="/resume/Aishwarya-Powar-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  border
                  border-blue-400
                  text-blue-400
                  hover:bg-blue-400
                  hover:text-gray-950
                  px-6
                  py-3
                  rounded-lg
                  font-medium
                  transition
                "
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                flex
                justify-center
                lg:justify-start
                gap-6
                mt-7
              "
            >
              <a
                href="https://github.com/aishwarya9691"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/aishwarya-powar-288195302/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex justify-center items-center min-h-[380px] sm:min-h-[480px] lg:min-h-[600px]">

            {/* Blue Glow */}
            <div
              className="
                absolute
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-96
                lg:h-96
                bg-blue-500/20
                rounded-full
                blur-3xl
              "
            ></div>

            {/* Outer Circle */}
            <div
              className="
                absolute
                w-64
                h-64
                sm:w-80
                sm:h-80
                lg:w-[440px]
                lg:h-[440px]
                rounded-full
                border
                border-blue-500/40
              "
            ></div>

            {/* Inner Circle */}
            <div
              className="
                absolute
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-[370px]
                lg:h-[370px]
                rounded-full
                border
                border-blue-400/20
              "
            ></div>

            {/* Profile Image */}
            <div
              className="
                relative
                z-10
                w-56
                h-56
                sm:w-72
                sm:h-72
                lg:w-[370px]
                lg:h-[370px]
                rounded-full
                overflow-hidden 
                flex
                items-end
                justify-center
              "
            >
            <img
              src="/images/profile.png"
              alt="Aishwarya Powar"
              className="
                w-full
                h-full
                object-contain
                object-bottom
                drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]
              "
              />
              </div>
            {/* Decorative Dots */}
            <div
              className="
                absolute
                top-4
                right-2
                sm:top-8
                sm:right-6
                lg:top-12
                lg:right-10
                grid
                grid-cols-4
                gap-2
                sm:gap-3
              "
            >
              {[...Array(16)].map((_, index) => (
                <span
                  key={index}
                  className="
                    w-1
                    h-1
                    sm:w-1.5
                    sm:h-1.5
                    bg-blue-400
                    rounded-full
                  "
                ></span>
              ))}
            </div>

            {/* Top Decorative Line 
            <div
              className="
                absolute
                top-14
                left-2
                sm:top-20
                sm:left-5
                lg:top-24
                lg:left-8
                w-14
                sm:w-20
                h-3
                sm:h-4
                bg-blue-500/50
                rounded-full
                rotate-[-45deg]
              "
            ></div> */}

            {/* Bottom Decorative Line 
            <div
              className="
                absolute
                bottom-10
                right-2
                sm:bottom-16
                sm:right-5
                lg:bottom-20
                lg:right-8
                w-16
                sm:w-24
                h-3
                sm:h-4
                bg-blue-500
                rounded-full
                rotate-[-45deg]
              "
            ></div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;