import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { showcaseProjects, type ProjectItem } from '../content/siteContent';

export default function Projects() {
  const initial = useMemo(() => showcaseProjects.slice(0, 3), []);
  const [order, setOrder] = useState<ProjectItem[]>(initial);

  const handleCardClick = (index: number) => {
    if (index === 1) return;
    setOrder(prev => {
      const next = [...prev];
      [next[1], next[index]] = [next[index], next[1]];
      return next;
    });
  };

  return (
    <section
      id="projects"
      className="py-10 sm:py-14 overflow-x-clip"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-end justify-between gap-4 mb-2 sm:mb-3">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="font-mono text-accent mr-2">02.</span>
            Projects
          </h2>
          <Link
            to="/projects"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors shrink-0 pb-1"
          >
            See all projects
          </Link>
        </div>
        <div className="h-0.5 w-16 sm:w-24 bg-primary mb-5 sm:mb-8" />

        <div className="flex items-end justify-center py-2 sm:py-6 max-w-full">
          {order.map((project, index) => {
            const positionClass =
              index === 0
                ? 'z-10 -mr-4 sm:-mr-8 -rotate-6 scale-[0.9] origin-bottom'
                : index === 1
                  ? 'z-30 scale-105 -translate-y-3 sm:-translate-y-5 shadow-lg'
                  : 'z-10 -ml-4 sm:-ml-8 rotate-6 scale-[0.9] origin-bottom';

            return (
              <motion.button
                key={project.slug}
                type="button"
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                whileHover={{
                  scale: index === 1 ? 1.08 : 1.06,
                  y: index === 1 ? -6 : -4,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(index)}
                className={`w-[30%] max-w-[200px] sm:max-w-[220px] md:max-w-[240px] shrink-0 text-left ${positionClass}`}
                aria-label={
                  index === 1
                    ? `${project.title} (center)`
                    : `Bring ${project.title} to center`
                }
              >
                <div className="bg-card border border-border rounded-lg p-2 sm:p-3 hover:border-primary/40 transition-colors shadow-sm hover:shadow-md">
                  <div className="aspect-[16/10] rounded-md overflow-hidden border border-border bg-muted mb-2">
                    {project.coverImage ? (
                      <ImageWithFallback
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] sm:text-xs font-mono text-muted-foreground px-2 text-center">
                        {project.coverLabel || project.title}
                      </div>
                    )}
                  </div>
                  <h3
                    className="text-[11px] sm:text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3 sm:hidden">
          Tap a side card to bring it forward
        </p>
      </motion.div>
    </section>
  );
}
