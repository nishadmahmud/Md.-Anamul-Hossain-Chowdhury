import { honoursAndAwardsData } from "../data/portfolioData";

export default function HonoursAndAwards() {
    if (!honoursAndAwardsData || honoursAndAwardsData.length === 0) {
        return null;
    }

    return (
        <section id="honours-awards" className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                    Honours and Awards
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {honoursAndAwardsData.map((award, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-semibold text-gray-900 flex-1">
                                    {award.title}
                                </h3>
                            </div>

                            <p className="text-gray-700 font-medium mb-1">{award.organization}</p>

                            {award.event && (
                                <p className="text-gray-600 text-sm mb-2">{award.event}</p>
                            )}

                            {award.date && (
                                <p className="text-sm text-gray-500 mb-4">
                                    {award.date}
                                </p>
                            )}

                            {award.achievements && award.achievements.length > 0 && (
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-2">Achievements:</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        {award.achievements.map((achievement, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {award.link && (
                                <a
                                    href={award.link}
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
