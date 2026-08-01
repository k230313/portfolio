import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { profile } from '../content/siteContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/gallery', label: 'Gallery' },
  ];

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
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-primary">{'>'}_</span>
              <span style={{ fontFamily: 'var(--font-heading)' }} className="text-xl">
                {profile.firstName}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{profile.shortBio}</p>
          </div>

          <div>
            <h3 className="font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
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
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            <span className="font-mono">©</span> {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
