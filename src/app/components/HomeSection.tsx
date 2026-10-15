import type { ReactNode } from 'react';
import { motion } from 'motion/react';

type HomeSectionProps = {
  id?: string;
  children: ReactNode;
};

export default function HomeSection({ id, children }: HomeSectionProps) {
  return (
    <section id={id} className="py-12 sm:py-14 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
