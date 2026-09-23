function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Name */}
          <div>
            <h3 className="text-xl font-bold">
              Aishwarya<span className="text-blue-400">.</span>
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Python Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">

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

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aishwarya Powar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;