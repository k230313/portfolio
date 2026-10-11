import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import CareerTimeline from "../components/CareerTimeline";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  certifications,
  profile,
} from "../content/siteContent";

export default function AboutPage() {

  return (
    <div className="py-12 sm:py-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageHeader title="About Me" />

          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border border-border bg-muted">
                  <ImageWithFallback
                    src={profile.aboutImage}
                    alt={profile.name}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={
                    profile.socialLinks.find((link) => link.label === "GitHub")
                      ?.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href={
                    profile.socialLinks.find(
                      (link) => link.label === "LinkedIn",
                    )?.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="page-title text-xl sm:text-2xl mb-4">
                  Bio
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  {profile.aboutBio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="page-title text-xl sm:text-2xl mb-4">
                  Core Certifications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {certifications.slice(0, 4).map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg"
                    >
                      {cert.issuerLogo ? (
                        <img
                          src={cert.issuerLogo}
                          alt=""
                          className="h-8 w-8 rounded-full object-contain bg-white p-1 border border-border"
                        />
                      ) : (
                        <span className="meta">{cert.issuer}</span>
                      )}
                      <div>
                        <div className="page-title text-sm">{cert.name}</div>
                        <div className="meta">
                          {cert.issuer}
                        </div>
                      </div>
                      {cert.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent ml-1" />
                      ) : (
                        <span className="meta ml-1">
                          In progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <h2 className="page-title text-xl sm:text-2xl mb-6">
              Experience & Education Timeline
            </h2>
            <CareerTimeline />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
