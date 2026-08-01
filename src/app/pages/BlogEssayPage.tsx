import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { getBlogEssay } from '../content/blogEssays';

export default function BlogEssayPage() {
  const { slug } = useParams();
  const post = slug ? getBlogEssay(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <article className="w-full max-w-2xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          blog
        </Link>

        <time
          dateTime={post.date}
          className="block text-xs text-muted-foreground mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.displayDate}
        </time>

        <h1
          className="text-3xl sm:text-4xl font-semibold leading-tight mb-4 text-foreground"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {post.title}
        </h1>

        <p className="text-xs text-muted-foreground mb-10 pb-8 border-b border-border">
          {post.readLabel}
        </p>

        <div
          className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/90 [&_em]:italic"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </div>
  );
}
