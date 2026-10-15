import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
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
      <article className="w-full max-w-2xl mx-auto">
        <Link
          to="/writeups"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Labs
        </Link>

        <p className="meta mb-3">
          {writeup.displayDate}
          {category ? ` · ${category}` : ''}
          {writeup.readTime ? ` · ${writeup.readTime}` : ''}
        </p>

        <h1 className="page-title text-3xl sm:text-4xl mb-8">{writeup.title}</h1>

        <div
          className="writeup-content text-[1.05rem] leading-relaxed text-foreground/90 pb-10 border-b border-border"
          dangerouslySetInnerHTML={{ __html: writeup.contentHtml }}
        />

        {related.length > 0 ? (
          <nav className="pt-10" aria-label="More labs">
            <h2 className="page-title text-xl mb-4">More labs</h2>
            <ul className="space-y-3">
              {related.map(post => (
                <li key={post.slug}>
                  <Link
                    to={`/writeups/${post.slug}`}
                    className="group block rounded-md border border-border bg-card px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <span className="page-title text-base group-hover:text-primary transition-colors">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>
    </div>
  );
}
