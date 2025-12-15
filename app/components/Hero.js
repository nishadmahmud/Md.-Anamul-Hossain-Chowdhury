import Image from "next/image";
import { heroData } from "../data/portfolioData";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiResearchgate, SiGooglescholar, SiOrcid } from "react-icons/si";

const iconMap = {
  LinkedIn: FaLinkedin,
  ResearchGate: SiResearchgate,
  "Google Scholar": SiGooglescholar,
  ORCID: SiOrcid,
  Email: FaEnvelope,
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-1">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {heroData.name}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6">
              {heroData.title}
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto md:mx-0">
              {heroData.description}
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {heroData.socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.name];
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                    aria-label={link.name}
                  >
                    {IconComponent ? (
                      <IconComponent className="w-5 h-5" />
                    ) : (
                      <span>{link.icon}</span>
                    )}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            {heroData.profileImage && (
              <div className="relative">
                <div className="rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <Image
                    src={heroData.profileImage}
                    alt={heroData.name}
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
