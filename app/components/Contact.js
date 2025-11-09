import { contactData } from "../data/portfolioData";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiResearchgate, SiGooglescholar, SiOrcid } from "react-icons/si";
import { HiGlobeAlt } from "react-icons/hi";

const iconMap = {
  LinkedIn: FaLinkedin,
  ResearchGate: SiResearchgate,
  "Google Scholar": SiGooglescholar,
  ORCID: SiOrcid,
  Website: HiGlobeAlt,
  Email: FaEnvelope,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Contact
        </h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-gray-600" />
              <a
                href={`mailto:${contactData.email}`}
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {contactData.email}
              </a>
            </div>
            {contactData.phone && (
              <div className="flex items-center gap-3">
                <FaPhone className="text-2xl text-gray-600" />
                <a
                  href={`tel:${contactData.phone}`}
                  className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {contactData.phone}
                </a>
              </div>
            )}
            {contactData.location && (
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl text-gray-600" />
                <span className="text-lg text-gray-700">
                  {contactData.location}
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {contactData.socialLinks.map((link, index) => {
              const IconComponent = iconMap[link.name];
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 border border-gray-200"
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
      </div>
    </section>
  );
}

