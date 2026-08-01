import { Link, useLocation } from 'react-router';
import { Moon, Sun, Search, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { profile } from '../content/siteContent';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/gallery', label: 'Gallery' },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-mono text-primary">{'>'}_</span>
            <span style={{ fontFamily: 'var(--font-heading)' }} className="text-xl tracking-tight">
              {profile.firstName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors ${
                  isActiveLink(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {isActiveLink(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumePath}
              download
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-md hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <button
              onClick={() => setShowSearch(prev => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline text-sm text-muted-foreground font-mono">
                Ctrl+K
              </span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="mt-4 p-3 rounded-md border border-border bg-card">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none"
              autoFocus
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
            />
          </div>
        )}
      </div>
    </nav>
  );
}
