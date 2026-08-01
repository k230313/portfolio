import { motion } from "motion/react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import Card from "../components/Card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  aboutSkillCards,
  certifications,
  education,
  experience,
  profile,
} from "../content/siteContent";

export default function AboutPage() {
  const skills = [
    {
      category: "Hands-On Labs",
      items: [
        "Cisco Packet Tracer",
        "Routing & Switching",
        "Subnetting & IP Addressing",
        "VLANs & Trunking",
      ],
    },
    {
      category: "Systems & Hosting",
      items: [
        "Active Directory",
        "Windows Server",
        "Apache",
        "Ubuntu",
        "Self-hosting",
      ],
    },
    {
      category: "Workflow",
      items: ["CLI", "Documentation", "Troubleshooting", "Lab Writeups"],
    },
    {
      category: "Current Focus",
      items: aboutSkillCards.map((skill) => skill.title),
    },
  ];

  const timeline = [
    ...experience.map((item) => ({
      type: "work" as const,
      title: item.role,
      organization: item.company,
      period: item.period,
      description: item.description[0],
    })),
    ...education.map((item) => ({
      type: "education" as const,
      title: item.degree,
      organization: item.institution,
      period: item.period,
      description: item.highlights ? item.highlights.join(" • ") : "",
    })),
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Me
            </h1>
          </div>

          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
                <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-border bg-muted">
                  <ImageWithFallback
                    src={profile.aboutImage}
                    alt={profile.name}
                    className="w-full h-full object-cover"
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
                <a
                  href={profile.resumePath}
                  download
                  className="flex items-center justify-center gap-2 p-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-sm">Download Resume</span>
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
                <h2
                  className="text-2xl mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Bio
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  {profile.aboutBio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2
                  className="text-2xl mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Core Certifications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {certifications.slice(0, 4).map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg"
                    >
                      <span className="text-2xl">{cert.issuerIcon}</span>
                      <div>
                        <div className="text-sm font-medium">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {cert.issuer}
                        </div>
                      </div>
                      {cert.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-accent ml-1" />
                      ) : (
                        <span className="text-xs text-yellow-500 font-mono ml-1">
                          In Progress
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card>
                    <h3
                      className="mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs bg-muted rounded font-mono text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className="text-2xl mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience & Education Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.type}-${item.title}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 top-1 w-16 h-16 rounded-full bg-card border-4 border-background flex items-center justify-center">
                      {item.type === "work" ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-accent" />
                      )}
                    </div>

                    <Card className="hover:border-border" hover={false}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 style={{ fontFamily: "var(--font-heading)" }}>
                          {item.title}
                        </h3>
                        <span
                          className={`px-2 py-0.5 text-xs rounded font-mono ${
                            item.type === "work"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {item.type === "work" ? "Work" : "Education"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.organization}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{item.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
