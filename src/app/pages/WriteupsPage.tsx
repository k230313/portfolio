import { motion } from 'motion/react';
import { Link } from 'react-router';
import { getWriteupsByCategory } from '../content/siteContent';

export default function WriteupsPage() {
  const groups = getWriteupsByCategory();

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Technical Writeups
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Step-by-step guides from my home lab — virtualization, Windows Server, and Active
            Directory.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map(group => (
            <section key={group.title}>
              <h2
                className="text-xl mb-4 pb-2 border-b border-border"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {group.title}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.posts.map(post => (
                  <li key={post.slug}>
                    <Link
                      to={`/writeups/${post.slug}`}
                      className="block rounded-md border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
