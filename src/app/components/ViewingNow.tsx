import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Smile, Laugh, Annoyed } from 'lucide-react';

const STORAGE_KEY = 'portfolio-viewers-count-v2';
const VISIBLE_AVATARS = 3;
const MIN_VIEWERS = 3;
const MAX_VIEWERS = 9;

const FACES = [
  { Icon: Smile, bg: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300' },
  { Icon: Laugh, bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
  { Icon: Annoyed, bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
] as const;

function randomViewers() {
  return Math.floor(Math.random() * (MAX_VIEWERS - MIN_VIEWERS + 1)) + MIN_VIEWERS;
}

/**
 * Fake “viewing now” social-proof chip.
 * Picks one random count per browser session so it doesn’t jump on every re-render.
 */
export default function ViewingNow({ compact = false }: { compact?: boolean }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = Number(stored);
      if (!Number.isNaN(parsed) && parsed >= VISIBLE_AVATARS) {
        setCount(parsed);
        return;
      }
    }
    const next = randomViewers();
    sessionStorage.setItem(STORAGE_KEY, String(next));
    setCount(next);
  }, []);

  if (count === null) return null;

  const extra = Math.max(0, count - VISIBLE_AVATARS);

  return (
    <div className={compact ? '' : 'mt-5 sm:mt-6'} aria-live="polite">
      <div className="flex items-center">
        {FACES.map(({ Icon, bg }, i) => (
          <motion.span
            key={i}
            className={`relative inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-background ${bg}`}
            style={{ marginLeft: i === 0 ? 0 : -8, zIndex: FACES.length - i }}
            aria-hidden
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.6 + i * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
          </motion.span>
        ))}
        {extra > 0 ? (
          <motion.span
            className="relative inline-flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-background bg-muted px-1.5 text-[10px] font-medium text-foreground"
            style={{ marginLeft: -8, zIndex: 0 }}
            aria-hidden
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.55,
            }}
          >
            +{extra}
          </motion.span>
        ) : null}
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{count}</span>{' '}
        {count === 1 ? 'person viewing now' : 'people viewing now'}
      </p>
    </div>
  );
}
