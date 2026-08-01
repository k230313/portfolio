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
      <div className="inline-flex items-center divide-x divide-border border border-border rounded-lg bg-card">
        {stats.map((stat, index) => (
          <div key={index} className="px-8 py-4 text-center">
            <div className="text-3xl font-mono text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
