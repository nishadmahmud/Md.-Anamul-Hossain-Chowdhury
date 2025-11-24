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
        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                  {cert.title}
                </h3>
              </div>

              <p className="text-gray-700 font-medium mb-1">{cert.issuer}</p>

              {cert.date && (
                <p className="text-sm text-gray-500 mb-3">
                  Issued: {cert.date}
                  {cert.mode && <span className="ml-2">• {cert.mode}</span>}
                </p>
              )}

              {cert.description && (
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {cert.description}
                </p>
              )}

              {cert.learningOutcomes && cert.learningOutcomes.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">What I learned:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {cert.learningOutcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
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
                  className="inline-block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium mt-2"
                >
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

