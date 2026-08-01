import { Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="bottom-right" theme={theme} />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
