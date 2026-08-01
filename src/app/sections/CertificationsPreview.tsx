import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { recentCertifications } from "../content/siteContent";

export default function CertificationsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-3xl mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="font-mono text-accent mr-2">{">"}</span>
                Recent Certifications
              </h2>
              <p className="text-muted-foreground">
                Industry-recognized credentials and qualifications
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentCertifications.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-lg p-6 relative"
              >
                <div className="absolute top-4 right-4">
                  <div className="p-1 rounded-full bg-accent/10">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-4 pr-8">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-muted/10 overflow-hidden p-2">
                    {cert.issuerLogo ? (
                      <img
                        src={cert.issuerLogo}
                        alt={`${cert.issuer} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-semibold">
                        {cert.issuerIcon || cert.issuer}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3
                      className="mb-1 leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm mb-1">
                    <span className="text-muted-foreground">Issued:</span>{" "}
                    <span className="font-mono text-accent">{cert.date}</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Expires:</span>{" "}
                    <span className="font-mono text-xs">
                      {cert.expiryDate || (
                        <span className="text-muted-foreground">
                          No Expiration
                        </span>
                      )}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View All Certifications
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
