import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { homeProjects } from '../content/siteContent';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="font-mono text-accent mr-2">05.</span>
              Featured Projects
            </h2>
            <div className="h-0.5 w-24 bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {homeProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/projects/${project.slug}`}>
                  <Card className="h-full group">
                    <div className="mb-4">
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
                        className="mb-2 group-hover:text-primary transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map(tech => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary text-sm">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
