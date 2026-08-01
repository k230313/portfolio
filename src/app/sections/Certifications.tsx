import { motion } from "motion/react";
import { CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import { certifications } from "../content/siteContent";

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="font-mono text-accent mr-2">04.</span>
              Certifications
            </h2>
            <div className="h-0.5 w-24 bg-primary" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {cert.status === "completed" && cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                    onMouseEnter={() => setHoveredCert(index)}
                    onMouseLeave={() => setHoveredCert(null)}
                  >
                    <motion.div
                      className="bg-card border border-border rounded-lg p-6 h-full cursor-pointer relative overflow-hidden transition-all hover:border-accent/50"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
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

                      <div className="mb-4">
                        <p className="text-sm mb-1">
                          <span className="text-muted-foreground">Issued:</span>{" "}
                          <span className="font-mono text-accent">
                            {cert.date}
                          </span>
                        </p>
                        <p className="text-sm mb-1">
                          <span className="text-muted-foreground">
                            Expires:
                          </span>{" "}
                          <span className="font-mono text-xs">
                            {cert.expiryDate || (
                              <span className="text-muted-foreground">
                                No Expiration
                              </span>
                            )}
                          </span>
                        </p>
                        {cert.credentialId && (
                          <p className="text-sm">
                            <span className="text-muted-foreground">
                              Credential ID:
                            </span>{" "}
                            <span className="font-mono text-xs">
                              {cert.credentialId}
                            </span>
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {cert.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-xs bg-muted rounded font-mono text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {hoveredCert === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 text-sm text-primary font-medium"
                        >
                          View Credential →
                        </motion.div>
                      )}
                    </motion.div>
                  </a>
                ) : cert.status === "completed" ? (
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 h-full relative overflow-hidden"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
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

                    <div className="mb-4">
                      <p className="text-sm mb-1">
                        <span className="text-muted-foreground">Issued:</span>{" "}
                        <span className="font-mono text-accent">
                          {cert.date}
                        </span>
                      </p>
                      <p className="text-sm mb-1">
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

                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs bg-muted rounded font-mono text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    className="bg-card border border-yellow-500/30 rounded-lg p-6 h-full relative overflow-hidden"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute top-4 right-4">
                      <div className="px-2 py-0.5 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                        <Clock className="w-4 h-4 text-yellow-500 inline mr-1" />
                        <span className="text-xs font-mono text-yellow-500">
                          In Progress
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-4 pr-24">
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

                    <div className="mb-4">
                      <p className="text-sm mb-1">
                        <span className="text-muted-foreground">
                          {cert.date}
                        </span>
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs bg-muted rounded font-mono text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground font-mono">
                          Progress
                        </span>
                        <span className="text-xs text-yellow-500 font-mono">
                          {cert.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-yellow-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cert.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
