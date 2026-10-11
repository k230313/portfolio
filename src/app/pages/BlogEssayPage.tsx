import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { blogEssays, getBlogEssay } from '../content/blogEssays';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogEssayPage() {
  const { slug } = useParams();
  const post = slug ? getBlogEssay(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const morePosts = blogEssays.filter(item => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <article className="w-full max-w-2xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Blog
        </Link>

        <time dateTime={post.date} className="meta block mb-3">
          {post.displayDate}
        </time>

        <h1 className="page-title text-3xl sm:text-4xl mb-4 text-foreground">{post.title}</h1>

        <p className="meta mb-8">{post.readLabel}</p>

        {post.coverImage ? (
          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-muted mb-10">
            <ImageWithFallback
              src={post.coverImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        <div
          className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/90 [&_em]:italic pb-10 border-b border-border"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {morePosts.length > 0 ? (
          <nav className="pt-10" aria-label="More posts">
            <h2 className="page-title text-xl mb-4">More posts</h2>
            <ul className="space-y-3">
              {morePosts.map(item => (
                <li key={item.slug}>
                  <Link
                    to={`/blog/${item.slug}`}
                    className="group block rounded-md border border-border bg-card px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <time dateTime={item.date} className="meta block mb-1">
                      {item.displayDate}
                    </time>
                    <span className="page-title text-base group-hover:text-primary transition-colors">
                      {item.title}
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
