import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow duration-200 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              {cert.date && (
                <p className="text-sm text-gray-500 mb-2">Issued: {cert.date}</p>
              )}
              {cert.credentialId && (
                <p className="text-xs text-gray-400 mb-2">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Verify Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

