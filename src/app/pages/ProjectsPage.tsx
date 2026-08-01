import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { projects } from '../content/siteContent';

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Projects
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Home lab, self-hosted builds, client work, and academic projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <h2
                  className="text-sm sm:text-base leading-snug group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-primary shrink-0">
                  View
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
