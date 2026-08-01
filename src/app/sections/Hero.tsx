import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { profile } from '../content/siteContent';

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h1
                className="text-5xl md:text-6xl mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hi, I'm <span className="text-primary">{profile.firstName}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                <span className="font-mono text-accent">{'>'}</span> {profile.tagline}
                <span
                  className={`inline-block w-0.5 h-6 ml-1 bg-accent transition-opacity ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </p>
            </div>

            <div className="text-lg text-muted-foreground mb-8 max-w-xl">
              <p>{profile.heroBio}</p>
              {profile.heroBioSecondary && (
                <p className="mt-4">{profile.heroBioSecondary}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={profile.resumePath}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href={profile.socialLinks.find(link => link.label === 'GitHub')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-border hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.socialLinks.find(link => link.label === 'LinkedIn')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-border hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-md border border-border hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border bg-muted">
                <ImageWithFallback
                  src={profile.heroImage}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
