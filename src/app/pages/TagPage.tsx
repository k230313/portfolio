import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { allBlogPosts } from '../content/siteContent';

export default function TagPage() {
  const { tag } = useParams();

  const filteredPosts = allBlogPosts.filter(post =>
    post.tags.some(item => item.toLowerCase() === tag?.toLowerCase())
  );

  const allTags = Array.from(new Set(allBlogPosts.flatMap(post => post.tags))).sort();

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-8 h-8 text-accent" />
                <h1 className="text-4xl md:text-5xl capitalize" style={{ fontFamily: 'var(--font-heading)' }}>
                  {tag}
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} tagged with "{tag}"
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No posts found with this tag.</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View all posts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <Card className="h-full group">
                        <div className="aspect-video rounded-lg mb-4 border border-border overflow-hidden bg-muted">
                          <ImageWithFallback
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-xs">{post.displayDate}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="font-mono text-xs">{post.readTime}</span>
                          </div>
                        </div>

                        <h3
                          className="text-xl mb-2 group-hover:text-primary transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map(item => (
                            <TechBadge key={item} name={item} />
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary text-sm">
                          <span>Read more</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                All Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(item => (
                  <Link key={item} to={`/tags/${item.toLowerCase()}`}>
                    <TechBadge name={item} />
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
