import { Link } from 'react-router';
import HomeSection from '../components/HomeSection';
import SectionHeading from '../components/SectionHeading';
import { blogEssays } from '../content/blogEssays';

export default function BlogPreview() {
  const posts = blogEssays.slice(0, 3);
  // Newest essay is always first in blogEssays — NEW follows that post only.
  const newestSlug = blogEssays[0]?.slug;

  return (
    <HomeSection id="blog">
      <SectionHeading
        title="Blog"
        action={
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
            See all
          </Link>
        }
      />
      <ul className="space-y-3">
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 group">
              <span className="page-title text-base group-hover:text-primary">{post.title}</span>
              {post.slug === newestSlug ? (
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
                  New
                </span>
              ) : null}
              <time dateTime={post.date} className="meta">
                {post.displayDate}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
