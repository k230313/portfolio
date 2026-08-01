import { motion } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { allWriteups, getWriteupsByCategory } from '../content/siteContent';

export default function WriteupDetailPage() {
  const { slug } = useParams();
  const writeup = allWriteups.find(post => post.slug === slug);

  if (!writeup) {
    return <Navigate to="/writeups" replace />;
  }

  const category =
    getWriteupsByCategory().find(group => group.posts.some(p => p.slug === writeup.slug))?.title ??
    writeup.series;

  const related = allWriteups.filter(post => post.slug !== writeup.slug).slice(0, 4);

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="grid lg:grid-cols-[1fr_260px] gap-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl min-w-0"
        >
          <Link
            to="/writeups"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Technical Writeups
          </Link>

          <p className="text-sm font-mono text-accent mb-3">{category}</p>

          <h1
            className="text-3xl md:text-4xl mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {writeup.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-border text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-mono">{writeup.displayDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{writeup.readTime}</span>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: writeup.contentHtml }}
          />
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:sticky lg:top-24 h-fit space-y-6"
        >
          <div className="border border-border rounded-md p-5">
            <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              More writeups
            </h3>
            <ul className="space-y-2">
              {related.map(post => (
                <li key={post.slug}>
                  <Link
                    to={`/writeups/${post.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
