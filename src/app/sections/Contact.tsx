import { motion } from 'motion/react';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';
import { profile } from '../content/siteContent';

const connectLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: () => profile.socialLinks.find(l => l.label === 'LinkedIn')?.href },
  { label: 'Facebook', icon: Facebook, href: () => profile.socialLinks.find(l => l.label === 'Facebook')?.href },
  { label: 'Instagram', icon: Instagram, href: () => profile.socialLinks.find(l => l.label === 'Instagram')?.href },
  { label: 'GitHub', icon: Github, href: () => profile.socialLinks.find(l => l.label === 'GitHub')?.href },
] as const;

const bubbleTransition = { type: 'spring' as const, stiffness: 400, damping: 18 };

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-14">
      <div className="w-full max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="font-mono text-accent mr-2">06.</span>
            Wanna connect?
          </h2>
          <div className="h-0.5 w-16 sm:w-24 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-8 max-w-md mx-auto">
            Pick a channel — happy to chat about IT support, networking, or projects.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {connectLinks.map(({ label, icon: Icon, href }) => {
              const url = href();
              if (!url) return null;
              return (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, y: -4, transition: bubbleTransition }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md bg-card shadow-sm hover:shadow-md hover:border-primary/40 transition-shadow"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
