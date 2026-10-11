import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { homeCertifications, inProgressCertifications } from '../content/siteContent';

function CertLogo({ src, alt, size = 'lg' }: { src?: string; alt: string; size?: 'sm' | 'lg' }) {
  const box = size === 'sm' ? 'h-10 w-10 p-1.5' : 'h-16 w-16 p-2.5';

  if (!src) {
    return (
      <div className={`${size === 'sm' ? 'h-10 w-10' : 'h-16 w-16'} rounded-full bg-muted flex items-center justify-center meta shrink-0`}>
        {alt.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className={`${box} rounded-full overflow-hidden bg-white border border-border shadow-sm flex items-center justify-center shrink-0`}>
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
        <SectionHeading
          title="Certifications"
          action={
            <Link
              to="/certifications"
              className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              See all certifications
            </Link>
          }
        />

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
              <h3 className="page-title text-base leading-snug mb-4">
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

        {inProgressCertifications.length > 0 ? (
          <div className="mt-8">
            <p className="meta mb-3">Currently studying</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inProgressCertifications.map(cert => (
                <li
                  key={cert.name}
                  className="flex items-center gap-3 rounded-md border border-dashed border-border bg-card/60 px-4 py-3"
                >
                  <CertLogo src={cert.issuerLogo} alt={`${cert.issuer} logo`} size="sm" />
                  <div className="min-w-0">
                    <p className="page-title text-sm leading-snug">{cert.name}</p>
                    <p className="meta mt-0.5">{cert.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </motion.div>
    </section>
  );
}
