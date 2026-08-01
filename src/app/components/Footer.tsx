import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { profile } from '../content/siteContent';
import { siteNavLinks } from '../content/nav';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: profile.socialLinks.find(link => link.label === 'GitHub')?.href,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: profile.socialLinks.find(link => link.label === 'LinkedIn')?.href,
      label: 'LinkedIn',
    },
    {
      icon: Facebook,
      href: profile.socialLinks.find(link => link.label === 'Facebook')?.href,
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: profile.socialLinks.find(link => link.label === 'Instagram')?.href,
      label: 'Instagram',
    },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card mt-8 sm:mt-12">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-primary">{'>'}_</span>
              <span style={{ fontFamily: 'var(--font-heading)' }} className="text-xl">
                {profile.firstName}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{profile.shortBio}</p>
          </div>

          <div>
            <h3 className="font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {siteNavLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect
            </h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-muted transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border space-y-2">
          <p className="text-sm text-center text-muted-foreground">
            <span className="font-mono">©</span> {currentYear} All rights reserved.
          </p>
          <p className="text-xs text-center text-muted-foreground/80">
            Design inspired by Bryl Lim.
          </p>
        </div>
      </div>
    </footer>
  );
}
