import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-300 hover:border-gray-400 transition-colors duration-200"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <p className="text-xl text-gray-700 mb-1">{exp.company}</p>
                <p className="text-gray-500 mb-1">{exp.period}</p>
                {exp.location && (
                  <p className="text-gray-500">📍 {exp.location}</p>
                )}
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm mt-4 inline-block"
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

