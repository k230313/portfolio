import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { stackCategories } from '../content/nav';

export default function StackPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="Stack"
          lede="Tools and platforms I use across support, networking, security, infrastructure, and building personal projects."
        />

        <div className="space-y-8">
          {stackCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="border-b border-border pb-8 last:border-b-0"
            >
              <h2 className="page-title text-lg md:text-xl mb-3">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.items.map(item => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-muted meta"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {category.note && (
                <p className="text-sm text-muted-foreground mt-3 max-w-2xl">{category.note}</p>
              )}
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
