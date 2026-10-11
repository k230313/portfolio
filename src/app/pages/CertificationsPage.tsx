import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {
  certifications,
  inProgressCertifications,
  type CertificationItem,
} from '../content/siteContent';

const vendorOrder = ['Microsoft', 'CompTIA', 'Cisco', 'Google', 'Zendesk'] as const;

function CertLogo({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center meta shrink-0">
        {alt.slice(0, 2)}
      </div>
    );
  }

  return (
    <div className="h-9 w-9 rounded-full overflow-hidden bg-white border border-border flex items-center justify-center p-1.5 shrink-0">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

function groupByVendor(items: CertificationItem[]) {
  const groups = new Map<string, CertificationItem[]>();

  for (const cert of items) {
    const list = groups.get(cert.issuer) ?? [];
    list.push(cert);
    groups.set(cert.issuer, list);
  }

  const ordered: { vendor: string; certs: CertificationItem[] }[] = [];

  for (const vendor of vendorOrder) {
    const certs = groups.get(vendor);
    if (certs?.length) {
      ordered.push({ vendor, certs });
      groups.delete(vendor);
    }
  }

  for (const [vendor, certs] of groups) {
    ordered.push({ vendor, certs });
  }

  return ordered;
}

function CertRow({ cert, index }: { cert: CertificationItem; index: number }) {
  return (
    <motion.li
      key={cert.name}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { type: 'spring', stiffness: 400, damping: 20 },
      }}
      className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2.5 shadow-sm hover:shadow-md hover:border-primary/30 transition-shadow"
    >
      <CertLogo src={cert.issuerLogo} alt={`${cert.issuer} logo`} />
      <div className="min-w-0 flex-1">
        <p className="page-title text-sm leading-snug truncate" title={cert.name}>
          {cert.name}
        </p>
        <p className="meta mt-0.5">{cert.status === 'in-progress' ? cert.date : cert.date}</p>
      </div>
      {cert.status === 'in-progress' ? (
        <span className="meta shrink-0">
          In progress
        </span>
      ) : cert.verificationUrl ? (
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-primary hover:underline shrink-0"
          aria-label={`Verify ${cert.name}`}
        >
          Verify
          <ExternalLink className="w-3 h-3" />
        </a>
      ) : null}
    </motion.li>
  );
}

export default function CertificationsPage() {
  const completed = certifications.filter(cert => cert.status === 'completed');
  const groups = groupByVendor(completed);

  return (
    <div className="py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          title="Certifications"
          lede="Completed credentials first, then what I’m studying now — grouped by issuer."
        />

        {inProgressCertifications.length > 0 ? (
          <section className="mb-10">
            <h2 className="page-title text-lg mb-4 pb-2 border-b border-border">In progress</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {inProgressCertifications.map((cert, index) => (
                <CertRow key={cert.name} cert={cert} index={index} />
              ))}
            </ul>
          </section>
        ) : null}

        <div className="space-y-10">
          {groups.map(group => (
            <section key={group.vendor}>
              <h2 className="page-title text-lg mb-4 pb-2 border-b border-border">{group.vendor}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.certs.map((cert, index) => (
                  <CertRow key={cert.name} cert={cert} index={index} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
