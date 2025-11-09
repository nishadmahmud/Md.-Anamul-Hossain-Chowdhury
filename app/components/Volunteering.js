import { volunteeringData } from "../data/portfolioData";

export default function Volunteering() {
  if (!volunteeringData || volunteeringData.length === 0) {
    return null;
  }

  return (
    <section id="volunteering" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Volunteering
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteeringData.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow duration-200 border border-gray-200 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 mb-2 font-medium">
                {activity.organization}
              </p>
              {activity.period && (
                <p className="text-sm text-gray-500 mb-2">{activity.period}</p>
              )}
              {activity.category && (
                <p className="text-xs text-gray-400 mb-3">{activity.category}</p>
              )}
              {activity.description && (
                <p className="text-sm text-gray-600 mb-3 grow">{activity.description}</p>
              )}
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium mt-auto"
                >
                  View Details →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

