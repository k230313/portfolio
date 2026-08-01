import { motion } from 'motion/react';
import { stats } from '../content/siteContent';

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div className="w-full max-w-lg grid grid-cols-3 divide-x divide-border border border-border rounded-lg bg-card overflow-hidden">
        {stats.map((stat, index) => (
          <div key={index} className="px-2 sm:px-4 py-3 sm:py-4 text-center min-w-0">
            <div className="text-xl sm:text-3xl font-mono text-primary mb-1">{stat.value}</div>
            <div className="text-[10px] sm:text-sm text-muted-foreground leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
