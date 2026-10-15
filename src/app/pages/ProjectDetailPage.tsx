import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { allWriteups, projects } from '../content/siteContent';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const project = projects.find(item => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedWriteups = allWriteups.filter(post => project.relatedBlogSlugs?.includes(post.slug));
  const selected = project.screenshots.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <article className="w-full max-w-2xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Projects
        </Link>

        <p className="meta mb-3">
          {project.duration}
          {project.capstone ? ' · Capstone' : ''}
          {project.status === 'ongoing' || project.status === 'in-progress' ? ' · In progress' : ''}
        </p>

        <h1 className="page-title text-3xl sm:text-4xl mb-3">{project.title}</h1>
        <p className="page-lede mb-8">{project.subtitle}</p>

        {project.coverImage ? (
          <div className="rounded-lg overflow-hidden border border-border bg-muted mb-10">
            <ImageWithFallback
              src={project.coverImage}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        ) : null}

        <div className="space-y-5 text-[1.05rem] leading-relaxed text-foreground/90 mb-10">
          <p>{project.description}</p>
          <p>{project.summary.problem}</p>
          <p>{project.summary.solution}</p>
          <p>{project.summary.outcome}</p>
          {project.detailBody.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {project.tech.length > 0 ? (
          <p className="text-sm text-muted-foreground mb-10">{project.tech.join(' · ')}</p>
        ) : null}

        {(project.links.demo || project.links.github) && (
          <p className="text-sm mb-10">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Live site
              </a>
            ) : null}
            {project.links.demo && project.links.github ? ' · ' : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            ) : null}
          </p>
        )}

        {project.screenshots.length > 0 ? (
          <div className="mb-12">
            <h2 className="page-title text-xl mb-4">Photos</h2>
            <ul className="grid grid-cols-2 gap-3">
              {project.screenshots.map(screenshot => (
                <li key={screenshot.id}>
                  <button
                    type="button"
                    onClick={() => screenshot.src && setSelectedImage(screenshot.id)}
                    className="block w-full rounded-md overflow-hidden border border-border bg-muted text-left"
                  >
                    {screenshot.src ? (
                      <ImageWithFallback
                        src={screenshot.src}
                        alt={screenshot.alt || screenshot.title}
                        className="w-full aspect-video object-cover"
                      />
                    ) : null}
                    <span className="block px-2 py-1.5 text-sm text-foreground">{screenshot.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {relatedWriteups.length > 0 ? (
          <nav className="pt-8 border-t border-border" aria-label="Related labs">
            <h2 className="page-title text-xl mb-4">Writeups</h2>
            <ul className="space-y-2">
              {relatedWriteups.map(post => (
                <li key={post.slug}>
                  <Link to={`/labs/${post.slug}`} className="text-primary hover:underline">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </article>

      {selected ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-sm"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <div className="max-w-4xl w-full" onClick={event => event.stopPropagation()}>
            {selected.src ? (
              <ImageWithFallback
                src={selected.src}
                alt={selected.alt || selected.title}
                className="w-full h-auto"
              />
            ) : null}
            <p className="text-white text-sm mt-3">{selected.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
