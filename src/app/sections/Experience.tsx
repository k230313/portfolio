import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { experience, type ExperienceItem } from '../content/siteContent';

const PREVIEW_COUNT = 3;

function periodYears(period: string) {
  const years = period.match(/\d{4}/g)?.map(Number) ?? [0];
  return {
    start: years[0] ?? 0,
    end: years[years.length - 1] ?? 0,
  };
}

const orderedExperience = [...experience].sort((a, b) => {
  const aYears = periodYears(a.period);
  const bYears = periodYears(b.period);
  if (bYears.end !== aYears.end) return bYears.end - aYears.end;
  return bYears.start - aYears.start;
});

function ExperienceRow({
  item,
  isOpen,
  onToggle,
}: {
  item: ExperienceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 py-3.5 text-left"
      >
        <div className="min-w-0">
          <h3 className="page-title text-lg md:text-xl">
            {item.role} <span className="text-primary">@ {item.company}</span>
          </h3>
          <p className="meta mt-1">{item.period}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-5 pt-1">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mb-3 inline-block"
                >
                  {item.company}
                </a>
              ) : null}
              <ul className="space-y-3">
                {item.description.map(bullet => (
                  <li key={bullet} className="text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const preview = orderedExperience.slice(0, PREVIEW_COUNT);
  const rest = orderedExperience.slice(PREVIEW_COUNT);
  const visible = showAll ? orderedExperience : preview;

  return (
    <HomeSection id="experience">
      <div className="w-full">
        <SectionHeading title="Experience" />

        <div className="w-full divide-y divide-border">
          {visible.map(item => {
            const key = `${item.company}-${item.role}`;
            return (
              <ExperienceRow
                key={key}
                item={item}
                isOpen={openKey === key}
                onToggle={() => setOpenKey(prev => (prev === key ? null : key))}
              />
            );
          })}
        </div>

        {rest.length > 0 ? (
          <button
            type="button"
            onClick={() => setShowAll(prev => !prev)}
            className="mt-4 text-sm text-primary hover:underline"
          >
            {showAll ? 'Show less' : 'Full history'}
          </button>
        ) : null}
      </div>
    </HomeSection>
  );
}
