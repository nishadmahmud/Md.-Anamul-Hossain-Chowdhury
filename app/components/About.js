import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="space-y-4">
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="text-md text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

