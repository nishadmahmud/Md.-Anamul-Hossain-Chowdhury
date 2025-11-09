import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Research & Publications
        </h2>

        {/* Journals Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Journal Publications
          </h3>
          <div className="space-y-6">
            {researchData.journals.map((publication, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 flex-1">
                    {publication.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                      publication.status === "Published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {publication.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2 italic">{publication.authors}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <span>
                    <strong>Journal:</strong> {publication.journal}
                  </span>
                  <span>
                    <strong>Publisher:</strong> {publication.publisher}
                  </span>
                  <span>
                    <strong>Year:</strong> {publication.year}
                  </span>
                </div>
                {publication.description && (
                  <p className="text-gray-600 mt-3">{publication.description}</p>
                )}
                {(publication.doi || publication.link) && (
                  <div className="mt-4 flex gap-4">
                    {publication.doi && (
                      <a
                        href={publication.doi.startsWith("http") ? publication.doi : `https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        DOI →
                      </a>
                    )}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        View Publication →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conferences Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Conference Publications
          </h3>
          <div className="space-y-6">
            {researchData.conferences.map((publication, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-purple-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 flex-1">
                    {publication.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                      publication.status === "Published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {publication.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-2 italic">{publication.authors}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <span>
                    <strong>Conference:</strong> {publication.conference}
                  </span>
                  <span>
                    <strong>Publisher:</strong> {publication.publisher}
                  </span>
                  {publication.location && (
                    <span>
                      <strong>Location:</strong> {publication.location}
                    </span>
                  )}
                  {publication.date && (
                    <span>
                      <strong>Date:</strong> {publication.date}
                    </span>
                  )}
                  <span>
                    <strong>Year:</strong> {publication.year}
                  </span>
                </div>
                {publication.description && (
                  <p className="text-gray-600 mt-3">{publication.description}</p>
                )}
                {(publication.doi || publication.link) && (
                  <div className="mt-4 flex gap-4">
                    {publication.doi && (
                      <a
                        href={publication.doi.startsWith("http") ? publication.doi : `https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        DOI →
                      </a>
                    )}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
                      >
                        View Publication →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

