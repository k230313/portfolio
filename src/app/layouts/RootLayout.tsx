import { Outlet, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import IntroSplash from '../components/IntroSplash';

export default function RootLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    // Re-run after paint in case layout/intro shifts scroll position
    const id = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname, location.key]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <IntroSplash />
      <Toaster position="bottom-right" theme={theme} />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <div className="flex-1 flex flex-col lg:pl-60 min-w-0 overflow-x-hidden">
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 min-w-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
