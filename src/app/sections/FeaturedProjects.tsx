import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { featuredProjects } from '../content/siteContent';

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-mono text-accent mr-2">{'>'}</span>
                Featured Projects
              </h2>
              <p className="text-muted-foreground">Selected work showcasing technical expertise</p>
            </div>
            <Link
              to="/projects"
              className="text-primary hover:underline flex items-center gap-1 text-sm"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
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
