import { profile } from '../content/siteContent';

export default function Footer() {
  const github = profile.socialLinks.find(link => link.label === 'GitHub')?.href;
  const linkedIn = profile.socialLinks.find(link => link.label === 'LinkedIn')?.href;

  return (
    <footer className="mt-12 sm:mt-16">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <p className="meta">
          © 2025 {profile.name}
          {linkedIn ? (
            <>
              {' · '}
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            </>
          ) : null}
          {github ? (
            <>
              {' · '}
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                GitHub
              </a>
            </>
          ) : null}
          {' · '}
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
