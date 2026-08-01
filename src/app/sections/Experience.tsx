import { useState } from 'react';
import { motion } from 'motion/react';
import TechBadge from '../components/TechBadge';
import { experience } from '../content/siteContent';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24">
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
              <span className="font-mono text-accent mr-2">02.</span>
              Experience
            </h2>
            <div className="h-0.5 w-24 bg-primary" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex lg:flex-col gap-2 overflow-x-auto">
              {experience.map((item, index) => (
                <button
                  key={`${item.company}-${item.role}`}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left border-l-2 transition-colors whitespace-nowrap lg:whitespace-normal ${
                    activeTab === index
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-border text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>

            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                  {experience[activeTab].role}{' '}
                  <span className="text-primary">
                    @{' '}
                    {experience[activeTab].link ? (
                      <a
                        href={experience[activeTab].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {experience[activeTab].company}
                      </a>
                    ) : (
                      experience[activeTab].company
                    )}
                  </span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground mb-6">
                  {experience[activeTab].period}
                </p>

                <ul className="space-y-3 mb-6">
                  {experience[activeTab].description.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent font-mono mt-1">-</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {experience[activeTab].tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience[activeTab].tech.map(tech => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
