import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { homeCertifications } from '../content/siteContent';

function CertLogo({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-xs font-mono text-muted-foreground">
        {alt.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className="h-16 w-16 rounded-full overflow-hidden bg-white border border-border shadow-sm flex items-center justify-center p-2.5">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-end justify-between gap-4 mb-2 sm:mb-3">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="font-mono text-accent mr-2">05.</span>
            Certifications
          </h2>
          <Link
            to="/certifications"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors shrink-0 pb-1"
          >
            See all certifications
          </Link>
        </div>
        <div className="h-0.5 w-16 sm:w-24 bg-primary mb-5 sm:mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {homeCertifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{
                scale: 1.04,
                y: -6,
                transition: { type: 'spring', stiffness: 400, damping: 18 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-card border border-border rounded-lg p-5 flex flex-col items-center text-center cursor-default shadow-sm hover:shadow-md hover:border-primary/35 transition-shadow"
            >
              <div className="mb-4">
                <CertLogo src={cert.issuerLogo} alt={`${cert.issuer} logo`} />
              </div>
              <h3
                className="text-base leading-snug mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {cert.name}
              </h3>
              {cert.verificationUrl ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-auto"
                >
                  Verify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground mt-auto">Completed</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
