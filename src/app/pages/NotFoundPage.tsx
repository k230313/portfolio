import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent/10 mb-6">
            <Terminal className="w-8 h-8 text-accent" />
          </div>

          <h1
            className="text-8xl md:text-9xl mb-6 font-mono text-primary tracking-tighter"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            404
          </h1>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p className="text-muted-foreground">
                <span className="text-accent">$</span> ping {window.location.pathname}
              </p>
              <p className="text-red-500">
                ping: cannot resolve {window.location.pathname}: Host not found
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent">$</span> Connection timed out
                <span
                  className={`inline-block w-2 h-4 ml-1 bg-accent transition-opacity ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Return Home
        </Link>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-mono mb-4">
            <span className="text-accent">{'>'}</span> Quick Navigation
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/writeups" className="text-muted-foreground hover:text-primary transition-colors">
              Technical Writeups
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About Me
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
