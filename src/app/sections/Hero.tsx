import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { profile } from '../content/siteContent';

const TYPEWRITER_KEY = 'portfolio-tagline-typed';

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);
  const alreadyTyped =
    typeof window !== 'undefined' && Boolean(sessionStorage.getItem(TYPEWRITER_KEY));
  const [typedTagline, setTypedTagline] = useState(alreadyTyped ? profile.tagline : '');
  const [typingDone, setTypingDone] = useState(alreadyTyped);

  useEffect(() => {
    if (typingDone) return;

    let intervalId: number | undefined;
    let i = 0;
    const full = profile.tagline;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i += 1;
        setTypedTagline(full.slice(0, i));
        if (i >= full.length) {
          if (intervalId) window.clearInterval(intervalId);
          setTypingDone(true);
          sessionStorage.setItem(TYPEWRITER_KEY, '1');
        }
      }, 55);
    }, 2200);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [typingDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-0 md:min-h-[85vh] flex items-center py-8 sm:py-10 md:py-0">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border bg-muted">
                <ImageWithFallback
                  src={profile.heroImage}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="mb-3 sm:mb-5">
              <h1
                className="text-3xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hi, I'm <span className="text-primary">{profile.firstName}</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground min-h-[1.5rem] sm:min-h-[2rem]">
                <span className="font-mono text-accent">{'>'}</span> {typedTagline}
                <span
                  className={`inline-block w-0.5 h-5 sm:h-6 ml-1 bg-accent align-middle transition-opacity ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </p>
            </div>

            <div className="text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-8 max-w-xl leading-relaxed">
              <p>{profile.heroBio}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
