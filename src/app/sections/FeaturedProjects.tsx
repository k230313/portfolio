import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { featuredProjects } from '../content/siteContent';

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-mono text-accent mr-2">{'>'}</span>
                Featured Projects
              </h2>
              <p className="text-sm text-muted-foreground">Selected work</p>
            </div>
            <Link
              to="/projects"
              className="text-primary hover:underline flex items-center gap-1 text-sm shrink-0"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Link to={`/projects/${project.slug}`}>
                  <Card className="h-full group !p-4">
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 rounded-md mb-3 border border-border overflow-hidden">
                      {project.coverImage ? (
                        <ImageWithFallback
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-lg text-muted-foreground font-mono px-3 text-center">
                          {project.coverLabel || project.title}
                        </div>
                      )}
                    </div>

                    <h3
                      className="text-base md:text-lg mb-0.5 group-hover:text-primary transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent mb-2 font-mono line-clamp-1">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-3 text-sm line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map(tech => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
