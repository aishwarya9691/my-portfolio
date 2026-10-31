
function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          My Certifications
        </h2>

        <p className="text-gray-600 mb-12">
          Professional training and achievements
        </p>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">

          <div className="text-blue-600 text-5xl mb-4">
            📜
          </div>

          <h3 className="text-xl font-semibold mb-3">
            Python Full Stack Development
          </h3>

          <p className="text-gray-600 mb-6">
            Successfully completed Python Full Stack
            Development training with practical project experience.
          </p>

          <a
            href="/certificates/disha-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3
            rounded-lg hover:bg-blue-700 transition"
          >
            View Certificate
          </a>

        </div>
      </div>
    </section>
  );
}

export default Certifications;
