import { motion } from 'framer-motion';
import { useState } from 'react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/arjunthiru2' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/arjunthiru' },
  { name: 'X / Twitter', url: 'https://twitter.com/arjuntgp' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Website inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:arjunthiru22@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-tinted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="premium-panel premium-panel-dark">
            <span className="eyebrow">Contact</span>
            <h2 className="heading mt-4 text-white">Let&apos;s talk about products, ideas, or opportunities.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              The previous Google Apps Script form is access-restricted, so I switched this to a direct email flow that
              targets <strong className="font-semibold text-white">arjunthiru22@gmail.com</strong> using the visitor&apos;s mail app.
            </p>

            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
              <p>Location: Toronto, Canada</p>
              <p>Email: arjunthiru22@gmail.com</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:arjunthiru22@gmail.com" className="button-primary">
                Email directly
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary button-secondary-on-dark"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="premium-panel"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input min-h-40 resize-y"
                  placeholder="What are you building, or what do you want to talk about?"
                  required
                />
              </div>

              <button type="submit" className="button-primary w-full justify-center">
                Open email draft
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
