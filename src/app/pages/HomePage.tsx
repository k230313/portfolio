import Hero from '../sections/Hero';
import BlogPreview from '../sections/BlogPreview';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BlogPreview />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
