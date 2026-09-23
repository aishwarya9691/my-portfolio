function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-medium mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, internship or job opportunity?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-5">

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold">
                📧 Email
              </h3>
              <a
                 href="mailto:aishwaryadalve35@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition mt-2 inline-block"
            >
                aishwaryadalve35@gmail.com
</a>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold">
                💻 GitHub
              </h3>
              <a
                href="https://github.com/aishwarya9691"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition mt-2 inline-block"
              >
                GitHub Profile
              </a>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-400 transition">
              <h3 className="text-lg font-semibold">
                🔗 LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/aishwarya-powar-288195302/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-gray-950 border border-gray-800 rounded-2xl p-7"
          >

            <div className="mb-5">
              <label className="block text-sm text-gray-300 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;