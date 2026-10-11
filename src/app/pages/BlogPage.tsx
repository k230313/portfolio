import { useState } from 'react';
import { Link } from 'react-router';
import { LayoutGrid, List } from 'lucide-react';
import { blogEssays } from '../content/blogEssays';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type ViewMode = 'list' | 'grid';

export default function BlogPage() {
  const [view, setView] = useState<ViewMode>('list');

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="w-full">
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <h1 className="page-title text-3xl md:text-4xl">Blog</h1>
            <div className="flex items-center gap-1 shrink-0" role="group" aria-label="View mode">
              <button
                type="button"
                onClick={() => setView('list')}
                aria-pressed={view === 'list'}
                aria-label="List view"
                className={`p-2 rounded-md transition-colors ${
                  view === 'list'
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setView('grid')}
                aria-pressed={view === 'grid'}
                aria-label="Grid view"
                className={`p-2 rounded-md transition-colors ${
                  view === 'grid'
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="page-lede mt-3">
            Notes on learning infrastructure, support work, and the career path between them.
          </p>
          <div className="h-0.5 w-16 sm:w-24 bg-primary mt-4" />
        </header>

        {view === 'list' ? (
          <ul className="divide-y divide-border">
            {blogEssays.map(post => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row gap-5 sm:gap-6 py-8 sm:py-10"
                >
                  {post.coverImage ? (
                    <div className="w-full sm:w-[135px] shrink-0">
                      <div className="w-full sm:w-[135px] h-[180px] sm:h-[90px] rounded-lg overflow-hidden bg-muted">
                        <ImageWithFallback
                          src={post.coverImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="min-w-0 flex-1">
                    <time dateTime={post.date} className="meta block mb-2">
                      {post.displayDate}
                    </time>
                    <h2 className="page-title text-xl sm:text-2xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <p className="meta">{post.readLabel}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-8">
            {blogEssays.map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  {post.coverImage ? (
                    <div className="aspect-[3/2] rounded-lg overflow-hidden bg-muted mb-4">
                      <ImageWithFallback
                        src={post.coverImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}
                  <time dateTime={post.date} className="meta block mb-2">
                    {post.displayDate}
                  </time>
                  <h2 className="page-title text-lg text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <p className="meta">{post.readLabel}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
