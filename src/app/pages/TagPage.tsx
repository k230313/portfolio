import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { ArrowRight, Tag } from 'lucide-react';
import { allWriteups } from '../content/siteContent';

export default function TagPage() {
  const { tag } = useParams();

  const filteredPosts = allWriteups.filter(post =>
    post.tags.some(item => item.toLowerCase() === tag?.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Tag className="w-6 h-6 text-accent" />
            <h1 className="text-3xl md:text-4xl capitalize" style={{ fontFamily: 'var(--font-heading)' }}>
              {tag}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'writeup' : 'writeups'}
          </p>
        </div>

        {filteredPosts.length === 0 ? (
          <div>
            <p className="text-muted-foreground mb-4">No writeups with this tag.</p>
            <Link
              to="/writeups"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              All writeups
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {filteredPosts.map(post => (
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
        )}
      </motion.div>
    </div>
  );
}
