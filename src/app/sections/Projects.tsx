import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { showcaseProjects } from '../content/siteContent';

export default function Projects() {
  const projects = showcaseProjects.slice(0, 3);

  return (
    <HomeSection id="projects">
      <SectionHeading
        title="Projects"
        action={
          <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
            See all
          </Link>
        }
      />
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {projects.map(project => (
          <li key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="group block">
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                {project.coverImage ? (
                  <ImageWithFallback
                    src={project.coverImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                    {project.coverLabel || project.title}
                  </div>
                )}
              </div>
              <h3 className="page-title text-sm mt-2 group-hover:text-primary">{project.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
