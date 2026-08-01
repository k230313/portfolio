import { motion } from 'motion/react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ExternalLink, Github, X, Linkedin, Link2, Clock, Calendar } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import TechBadge from '../components/TechBadge';
import Card from '../components/Card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { allWriteups, projects } from '../content/siteContent';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const project = projects.find(item => item.slug === slug) || projects[0];
  const relatedProjects = projects.filter(item => item.slug !== project.slug).slice(0, 3);
  const relatedWriteups = allWriteups.filter(post => project.relatedBlogSlugs?.includes(post.slug));

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { label: 'Completed', color: 'text-accent bg-accent/10 border-accent/20' };
      case 'in-progress':
        return { label: 'In Progress', color: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' };
      case 'ongoing':
        return { label: 'Ongoing', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' };
      default:
        return { label: 'Completed', color: 'text-accent bg-accent/10 border-accent/20' };
    }
  };

  const statusConfig = getStatusConfig(project.status);

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center border-b border-border overflow-hidden">
        {project.coverImage ? (
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="text-6xl text-muted-foreground font-mono px-6 text-center">
            {project.coverLabel || project.title}
          </div>
        )}
        <div className="absolute top-6 right-6 flex gap-2">
          {project.capstone && (
            <span className="inline-flex items-center px-3 py-1.5 rounded-md border font-mono text-xs bg-primary/10 text-primary border-primary/20">
              Capstone Project
            </span>
          )}
          <span className={`inline-flex items-center px-3 py-1.5 rounded-md border font-mono text-xs ${statusConfig.color}`}>
            {statusConfig.label}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <div className="w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/projects" className="hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 inline mr-1" />
              Projects
            </Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          <div className="mb-8">
            <h1
              className="text-4xl md:text-5xl mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-accent font-mono mb-4">{project.subtitle}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">{project.duration}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{project.readingTime}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">Problem</h3>
              <p className="text-muted-foreground">{project.summary.problem}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">Solution</h3>
              <p className="text-muted-foreground">{project.summary.solution}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">Outcome</h3>
              <p className="text-muted-foreground">{project.summary.outcome}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {project.detailBody.map(paragraph => (
              <p key={paragraph} className="leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

            {project.screenshots.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Screenshots
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={screenshot.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border cursor-pointer overflow-hidden"
                      onClick={() => setSelectedImage(screenshot.id)}
                    >
                      {screenshot.src ? (
                        <ImageWithFallback
                          src={screenshot.src}
                          alt={screenshot.alt || screenshot.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-lg text-muted-foreground font-mono px-4 text-center">
                          {screenshot.placeholder || screenshot.title}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <p className="text-white text-sm mb-1">{screenshot.title}</p>
                        <p className="text-white/70 text-xs px-4 text-center">{screenshot.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          <div className="mb-12">
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-8 border-b border-border">
            <div className="flex flex-wrap gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View GitHub Repo
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <button
                onClick={handleShareLinkedIn}
                className="p-2 rounded-md border border-border hover:bg-muted transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-md border border-border hover:bg-muted transition-colors"
                aria-label="Copy link"
              >
                <Link2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              {relatedWriteups.length > 0 ? 'Related Writeups' : 'Related Projects'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedWriteups.length > 0
                ? relatedWriteups.map(post => (
                    <Link key={post.slug} to={`/writeups/${post.slug}`}>
                      <Card className="h-full group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 border border-border overflow-hidden">
                          <ImageWithFallback
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3
                          className="text-lg mb-1 group-hover:text-primary transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{post.displayDate}</p>
                      </Card>
                    </Link>
                  ))
                : relatedProjects.map(related => (
                    <Link key={related.slug} to={`/projects/${related.slug}`}>
                      <Card className="h-full group">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 border border-border overflow-hidden">
                          {related.coverImage ? (
                            <ImageWithFallback
                              src={related.coverImage}
                              alt={related.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-lg text-muted-foreground font-mono px-4 text-center">
                              {related.coverLabel || related.title}
                            </div>
                          )}
                        </div>
                        <h3
                          className="text-lg mb-1 group-hover:text-primary transition-colors"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{related.subtitle}</p>
                      </Card>
                    </Link>
                  ))}
            </div>
          </div>
        </motion.div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full bg-card rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {project.screenshots.find(item => item.id === selectedImage) && (
              <>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {project.screenshots.find(item => item.id === selectedImage)?.src ? (
                    <ImageWithFallback
                      src={project.screenshots.find(item => item.id === selectedImage)?.src}
                      alt={project.screenshots.find(item => item.id === selectedImage)?.alt || ''}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-4xl text-muted-foreground font-mono px-6 text-center">
                      {project.screenshots.find(item => item.id === selectedImage)?.placeholder}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.screenshots.find(item => item.id === selectedImage)?.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.screenshots.find(item => item.id === selectedImage)?.description}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
