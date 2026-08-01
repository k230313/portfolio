import { motion } from 'motion/react';
import { Link } from 'react-router';
import { blogEssays } from '../content/blogEssays';

/** Short hooks written for the home preview — push recruiters to click through */
const homeTeasers: Record<string, string> = {
  'sc900-reflection':
    'Job ads kept asking for Entra ID and Conditional Access — so I stopped guessing and studied them properly. What SC-900 actually taught me wasn’t what I expected.',
  'career-pivot':
    'Nearly a decade on the support side of the ticket. Here’s why I’m building labs, stacking certs, and aiming at infrastructure instead.',
  'leading-ceda':
    'I thought leading a capstone would be about code. It turned out to be about decisions, deployment, and owning the parts nobody wants.',
  'dns-lesson':
    'A website and mailbox both went dark after a domain change. The quick fixes failed — and that’s when the real troubleshooting started.',
  'why-home-lab':
    'Flashcards got me answers. Building a real lab got me understanding — and a few locked-out VMs along the way.',
};

export default function BlogPreview() {
  const posts = blogEssays.slice(0, 3);

  return (
    <section id="blog" className="py-8 sm:py-12 -mx-4 sm:-mx-6 px-4 sm:px-6 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-end justify-between gap-3 mb-2">
          <h2
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="font-mono text-accent mr-2">01.</span>
            Blog
          </h2>
          <Link
            to="/blog"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors shrink-0 pb-0.5"
          >
            See all posts
          </Link>
        </div>
        <div className="h-0.5 w-16 sm:w-20 bg-primary mb-3" />

        <ul className="divide-y divide-border">
          {posts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block py-2.5 sm:py-3 hover:bg-muted/40 -mx-1 px-1 rounded-sm transition-colors"
              >
                <h3
                  className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {post.title}
                </h3>
                <time
                  dateTime={post.date}
                  className="block text-[11px] text-muted-foreground mt-0.5 mb-1"
                >
                  {post.displayDate}
                </time>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                  {homeTeasers[post.slug] ?? post.excerpt}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
