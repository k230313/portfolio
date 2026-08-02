import { Link, useLocation } from 'react-router';
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  FolderKanban,
  Layers,
  Award,
  FileText,
  Newspaper,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../content/siteContent';
import { siteNavLinks } from '../content/nav';
import ViewingNow from './ViewingNow';

const navIcons: Record<(typeof siteNavLinks)[number]['path'], LucideIcon> = {
  '/': Home,
  '/about': User,
  '/projects': FolderKanban,
  '/stack': Layers,
  '/certifications': Award,
  '/writeups': FileText,
  '/blog': Newspaper,
};

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const navContent = (
    <>
      <Link
        to="/"
        className="flex items-center gap-2 px-1 mb-8"
        onClick={() => {
          setMobileOpen(false);
          scrollToTop();
        }}
      >
        <span className="font-mono text-primary">{'>'}_</span>
        <span style={{ fontFamily: 'var(--font-heading)' }} className="text-xl tracking-tight">
          {profile.firstName}
        </span>
      </Link>

      <nav className="flex-1 space-y-1">
        {siteNavLinks.map(link => {
          const Icon = navIcons[link.path];
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setMobileOpen(false);
                scrollToTop();
              }}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm transition-colors ${
                isActiveLink(link.path)
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-4 border-t border-border">
        <ViewingNow compact />
        <button
          type="button"
          onClick={toggleTheme}
          className="flex items-center justify-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-60 flex-col border-r border-border bg-background px-4 py-6">
        {navContent}
      </aside>

      {/* Mobile top bar — fixed so it stays visible while scrolling */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <span className="font-mono text-primary">{'>'}_</span>
            <span style={{ fontFamily: 'var(--font-heading)' }} className="text-lg tracking-tight">
              {profile.firstName}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md border border-border hover:bg-muted"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
      {/* Spacer so content isn't under the fixed bar */}
      <div className="lg:hidden h-14" aria-hidden />

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-[min(100%,18rem)] bg-background border-r border-border px-4 py-6 flex flex-col shadow-xl">
            <div className="flex justify-end mb-2">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
