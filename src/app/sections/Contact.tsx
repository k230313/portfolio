import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../content/siteContent';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="font-mono text-accent mr-2">06.</span>
              Get In Touch
            </h2>
            <div className="h-0.5 w-24 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you want to talk about homelabs, self-hosting, support work, or a new project,
              send a message and I&apos;ll get back to you at {profile.email}.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Let's work together"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
