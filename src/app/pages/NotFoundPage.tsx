import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="page-title text-3xl md:text-4xl mb-3">Page not found</h1>
        <p className="page-lede mx-auto mb-8">
          That URL doesn’t exist. Try the homepage, or one of the links below.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
        >
          Home
        </Link>
        <p className="mt-8 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          {' · '}
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
          {' · '}
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
        </p>
      </div>
    </div>
  );
}
