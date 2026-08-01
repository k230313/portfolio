import { motion } from 'motion/react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A space for lab screenshots, deployments, diagrams, and other technical work.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative px-8 py-20 md:px-12 md:py-24 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-accent text-xs font-mono mb-6">
                COMING SOON
              </div>

              <h2
                className="text-3xl md:text-4xl mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                This gallery is being prepared
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                I&apos;ll be adding real screenshots, homelab progress, project visuals, and technical
                documentation here soon.
              </p>

              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="rounded-lg border border-border bg-background/60 px-4 py-5">
                  <p className="text-sm font-mono text-accent mb-2">01</p>
                  <p className="text-sm text-muted-foreground">Home lab builds and VM setup screenshots</p>
                </div>
                <div className="rounded-lg border border-border bg-background/60 px-4 py-5">
                  <p className="text-sm font-mono text-accent mb-2">02</p>
                  <p className="text-sm text-muted-foreground">Deployment and hosting snapshots</p>
                </div>
                <div className="rounded-lg border border-border bg-background/60 px-4 py-5">
                  <p className="text-sm font-mono text-accent mb-2">03</p>
                  <p className="text-sm text-muted-foreground">Project visuals and technical diagrams</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
