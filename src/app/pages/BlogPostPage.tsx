import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { allBlogPosts } from '../content/siteContent';

export default function BlogPostPage() {
  const { slug } = useParams();
  const blogPost = allBlogPosts.find(post => post.slug === slug) || allBlogPosts[0];
  const relatedPosts = allBlogPosts.filter(post => post.slug !== blogPost.slug).slice(0, 3);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <p className="text-sm font-mono text-accent mb-3">{blogPost.series}</p>

            <h1
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">{blogPost.displayDate}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{blogPost.readTime}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">By {blogPost.author}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map(tag => (
                <Link key={tag} to={`/tags/${tag.toLowerCase()}`}>
                  <TechBadge name={tag} />
                </Link>
              ))}
            </div>

            <div className="aspect-video rounded-lg overflow-hidden border border-border bg-muted mb-8">
              <ImageWithFallback
                src={blogPost.featuredImage}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.contentHtml }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors">
                <Share2 className="w-4 h-4" />
                Share this post
              </button>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Related Posts
              </h3>
              <ul className="space-y-3">
                {relatedPosts.map(post => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Series
              </h3>
              <p className="text-sm text-muted-foreground">{blogPost.series}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map(tag => (
                  <Link key={tag} to={`/tags/${tag.toLowerCase()}`}>
                    <TechBadge name={tag} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
