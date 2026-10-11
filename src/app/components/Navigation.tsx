import { Link, useLocation } from 'react-router';
import { Moon, Sun } from 'lucide-react';
import { profile } from '../content/siteContent';
import { mobileNavLinks, siteNavLinks } from '../content/nav';
import { scrollToTop } from '../lib/scrollToTop';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
  const location = useLocation();

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-60 flex-col bg-background px-4 py-6">
        <Link to="/" className="px-1 mb-8" onClick={scrollToTop}>
          <span className="page-title text-xl tracking-tight">{profile.firstName}</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {siteNavLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={scrollToTop}
              className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                isActiveLink(link.path)
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6">
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
      </aside>

      <header className="lg:hidden fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <Link to="/" onClick={scrollToTop} className="page-title text-lg tracking-tight">
            {profile.firstName}
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-2.5" aria-label="Site">
          {mobileNavLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={scrollToTop}
              className={`shrink-0 px-2.5 py-1 rounded-md text-sm ${
                isActiveLink(link.path)
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="lg:hidden h-[5.75rem]" aria-hidden />
    </>
  );
}
