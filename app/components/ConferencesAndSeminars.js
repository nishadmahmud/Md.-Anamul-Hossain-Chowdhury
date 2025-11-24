import { conferencesAndSeminarsData } from "../data/portfolioData";

export default function ConferencesAndSeminars() {
    if (!conferencesAndSeminarsData || conferencesAndSeminarsData.length === 0) {
        return null;
    }

    return (
        <section id="conferences-seminars" className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Conferences and Seminars
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {conferencesAndSeminarsData.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                                    {event.title}
                                </h3>
                            </div>

                            <p className="text-gray-700 font-medium mb-1">{event.organization}</p>

                            {event.location && (
                                <p className="text-gray-600 text-sm mb-1">📍 {event.location}</p>
                            )}

                            {event.date && (
                                <p className="text-sm text-gray-500 mb-4">
                                    📅 {event.date}
                                </p>
                            )}

                            {event.learningOutcomes && event.learningOutcomes.length > 0 && (
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Takeaways:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {event.learningOutcomes.map((outcome, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                                                {outcome}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {event.link && (
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium mt-2"
                                >
                                    Learn More →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
