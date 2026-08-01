import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { featuredProjects, projects } from '../content/siteContent';

export default function ProjectsPage() {
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of self-hosted builds, client work, and academic projects that document
              my current technical direction.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/projects/${project.slug}`}>
                    <Card className="h-full group">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 border border-border overflow-hidden">
                        {project.coverImage ? (
                          <ImageWithFallback
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl text-muted-foreground font-mono px-4 text-center">
                            {project.coverLabel || project.title}
                          </div>
                        )}
                      </div>

                      <h3
                        className="text-xl mb-1 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent mb-3 font-mono">{project.subtitle}</p>

                      <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map(tech => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs text-muted-foreground font-mono">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {project.links.github && (
                          <Github className="w-4 h-4 text-muted-foreground" />
                        )}
                        {project.links.demo && (
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                More Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={`/projects/${project.slug}`}>
                      <Card className="h-full group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 border border-border overflow-hidden">
                          {project.coverImage ? (
                            <ImageWithFallback
                              src={project.coverImage}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-3xl text-muted-foreground font-mono px-4 text-center">
                              {project.coverLabel || project.title}
                            </div>
                          )}
                        </div>

                        <h3
                          className="text-xl mb-1 group-hover:text-primary transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm text-accent mb-3 font-mono">{project.subtitle}</p>

                        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map(tech => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-xs text-muted-foreground font-mono">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-primary text-sm font-medium">
                            <span>View Project</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                          {project.links.github && (
                            <Github className="w-4 h-4 text-muted-foreground" />
                          )}
                          {project.links.demo && (
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
