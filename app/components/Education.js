import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300 hover:border-gray-400 transition-colors duration-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {edu.degree}
              </h3>
              <p className="text-xl text-gray-700 mb-2">{edu.institution}</p>
              <p className="text-gray-500 mb-2">{edu.year}</p>
              {edu.location && (
                <p className="text-gray-500 mb-2">📍 {edu.location}</p>
              )}
              {edu.grade && (
                <p className="text-gray-600 font-medium mb-3">
                  Grade: {edu.grade}
                </p>
              )}
              {edu.thesis && (
                <div className="mb-3">
                  <p className="text-gray-700 font-medium mb-1">Thesis:</p>
                  <p className="text-gray-600 italic">{edu.thesis}</p>
                </div>
              )}
              {edu.description && (
                <p className="text-gray-600 mb-3">{edu.description}</p>
              )}
              {edu.website && (
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
                >
                  Visit Website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

