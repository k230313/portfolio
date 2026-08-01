import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { profile } from '../content/siteContent';

const INTRO_KEY = 'portfolio-intro-seen';

export default function IntroSplash() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem(INTRO_KEY);
  });

  useEffect(() => {
    if (!visible) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const holdMs = reduceMotion ? 400 : 1600;
    const fadeMs = reduceMotion ? 200 : 700;

    const hide = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(INTRO_KEY, '1');
    }, holdMs + fadeMs);

    return () => window.clearTimeout(hide);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          aria-hidden={!visible}
        >
          <motion.h1
            className="px-6 text-center text-3xl sm:text-5xl md:text-6xl tracking-[0.12em] uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {profile.name}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
