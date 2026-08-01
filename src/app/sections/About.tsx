import { motion } from "motion/react";
import StatsBar from "./StatsBar";
import { aboutSkillCards, profile } from "../content/siteContent";

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
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
              <span className="font-mono text-accent mr-2">01.</span>
              About Me
            </h2>
            <div className="h-0.5 w-24 bg-primary" />
          </div>

          <StatsBar />

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div>
              <p className="text-lg mb-4">{profile.aboutBio[0]}</p>
              <p className="text-lg text-muted-foreground">
                {profile.aboutBio[1]}
              </p>
            </div>
            <div>
              <p className="text-lg mb-4 text-muted-foreground">
                {profile.aboutBio[2]}
              </p>
              <p className="text-lg text-muted-foreground">
                {profile.shortBio}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3
              className="text-2xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Latest tech I’ve been working on
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Practical tools and platforms I’m using today to build networks,
              infrastructure, and self-hosted systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutSkillCards.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3
                  className="mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
