import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import Card from "../components/Card";
import { education } from "../content/siteContent";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-muted/30">
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
              <span className="font-mono text-accent mr-2">03.</span>
              Education
            </h2>
            <div className="h-0.5 w-24 bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item) => (
              <motion.div
                key={`${item.degree}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.institution}
                          className="h-12 w-12 object-contain"
                        />
                      ) : (
                        <div className="p-3 rounded-lg bg-primary/10">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className="mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.institution}
                          </a>
                        ) : (
                          item.institution
                        )}
                      </p>
                      <div className="text-sm">
                        <span className="font-mono text-accent">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights &&
                      item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
