import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Build products with narrative',
    body: 'I care about more than shipping code. I want the product, positioning, and user story to feel coherent.',
  },
  {
    title: 'Work across AI and product',
    body: 'My projects usually sit between engineering, experimentation, and figuring out what should exist in the first place.',
  },
  {
    title: 'Learn in public through experience',
    body: 'Hackathons, conversations, training, and events all feed into how I build. The site should reflect that, not hide it.',
  },
];

const interests = [
  'AI product development',
  'Education and growth',
  'Founder-style execution',
  'Basketball, training, and chess',
  'Nature, events, and reflective writing',
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="premium-panel">
            <span className="eyebrow">What I do</span>
            <h2 className="heading mt-4">A site that feels more like a founder portfolio than a student template.</h2>
            <p className="section-copy mt-5">
              I&apos;m a fourth-year software engineering student building around AI, product strategy, and education. The
              stronger version of this portfolio is not a long list of random work. It&apos;s a clear story: what I&apos;m
              building now, what I&apos;ve learned from previous projects, and what kind of problems I want to own.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span key={interest} className="tag tag-muted">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-panel premium-panel-dark"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-amber-200/80">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
