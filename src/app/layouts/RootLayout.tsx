import { Outlet, useLocation } from 'react-router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Toaster } from 'sonner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { scrollToTop } from '../lib/scrollToTop';

export default function RootLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme-v2');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme-v2', theme);
  }, [theme]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const jump = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      };
      jump();
      const frame = window.requestAnimationFrame(jump);
      const timeout = window.setTimeout(jump, 80);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timeout);
      };
    }

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);
    const timeout = window.setTimeout(scrollToTop, 80);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [location.pathname, location.search, location.hash, location.key]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="bottom-right" theme={theme} />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <div className="flex-1 flex flex-col lg:pl-60 min-w-0 overflow-x-clip">
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
