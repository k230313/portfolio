import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import TechBadge from '../components/TechBadge';
import { experience } from '../content/siteContent';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section id="experience" className="py-10 sm:py-14">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="font-mono text-accent mr-2">03.</span>
              Experience
            </h2>
            <div className="h-0.5 w-16 sm:w-24 bg-primary" />
          </div>

          <div className="max-w-3xl divide-y divide-border border-y border-border">
            {experience.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={`${item.company}-${item.role}`}>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 py-4 text-left hover:bg-muted/40 transition-colors px-1 -mx-1 rounded-md"
                  >
                    <div className="min-w-0">
                      <h3
                        className="text-lg md:text-xl"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.role}{' '}
                        <span className="text-primary">@ {item.company}</span>
                      </h3>
                      <p className="text-sm font-mono text-muted-foreground mt-1">
                        {item.period}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-1 text-muted-foreground transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1 px-1">
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline mb-3 inline-block"
                            >
                              {item.company}
                            </a>
                          )}
                          <ul className="space-y-3 mb-4">
                            {item.description.map(bullet => (
                              <li key={bullet} className="flex gap-3">
                                <span className="text-accent font-mono mt-1">-</span>
                                <span className="text-muted-foreground">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                          {item.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {item.tech.map(tech => (
                                <TechBadge key={tech} name={tech} />
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
