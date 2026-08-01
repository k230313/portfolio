import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/Card';
import TechBadge from '../components/TechBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { allBlogPosts } from '../content/siteContent';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allBlogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technical writeups from my Home Lab Series, covering virtualization, Windows Server,
              Active Directory, and supporting infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentPosts.map((post, index) => (
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

                    <p className="text-xs font-mono text-accent mb-2">{post.series}</p>

                    <h3
                      className="text-xl mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <TechBadge key={tag} name={tag} />
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

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
