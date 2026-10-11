import Hero from '../sections/Hero';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import CertificationsOverview from '../sections/CertificationsOverview';
import BlogPreview from '../sections/BlogPreview';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Experience />
      <Education />
      <CertificationsOverview />
      <BlogPreview />
      <Contact />
    </div>
  );
}
