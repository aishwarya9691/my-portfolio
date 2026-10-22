
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch(
        "https://my-portfolio-backend-4ptg.onrender.com/api/contact/", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || data.error || "Message could not be sent."
        );
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

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
            onSubmit={handleSubmit}
            className="bg-gray-950 border border-gray-800 rounded-2xl p-7"
          >
            <div className="mb-5">
              <label
                htmlFor="contact-name"
                className="block text-sm text-gray-300 mb-2"
              >
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                maxLength={100}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="contact-email"
                className="block text-sm text-gray-300 mb-2"
              >
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contact-message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                maxLength={5000}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition resize-none"
              />
            </div>

            {status === "success" && (
              <p
                role="status"
                className="text-green-400 text-sm mb-4"
              >
                Message sent successfully! Thank you for contacting me.
              </p>
            )}

            {status === "error" && (
              <p
                role="alert"
                className="text-red-400 text-sm mb-4"
              >
                Message could not be sent. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed py-3 rounded-lg font-medium transition"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
