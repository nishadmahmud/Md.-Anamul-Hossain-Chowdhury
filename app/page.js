import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Research from "./components/Research";
import Volunteering from "./components/Volunteering";
import Certifications from "./components/Certifications";
import HonoursAndAwards from "./components/HonoursAndAwards";
import ConferencesAndSeminars from "./components/ConferencesAndSeminars";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Research />
      <Certifications />
      <HonoursAndAwards />
      <ConferencesAndSeminars />
      <Volunteering />
      <Contact />
    </main>
  );
}
