import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/90 backdrop-blur-md text-white z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
          onClick={closeMenu}
        >
          Aishwarya<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">

          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="hover:text-blue-400 transition"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Desktop Resume */}
        <a
            href="/resume/Aishwarya-Powar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block border border-blue-400 text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-gray-950 transition"
        >    
  Resume
</a>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">

          <ul className="flex flex-col px-6 py-5 gap-5">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#education"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="/resume/Aishwarya-Powar-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-blue-400 text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-400 hover:text-gray-950 transition"
              >

  Resume
</a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;