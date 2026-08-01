import Hero from '../sections/Hero';
import About from '../sections/About';
import FeaturedProjects from '../sections/FeaturedProjects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}
