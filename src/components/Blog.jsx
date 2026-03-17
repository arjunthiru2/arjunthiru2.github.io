import { motion } from 'framer-motion';

const writing = [
  {
    title: 'What building TGP is teaching me about clarity',
    type: 'Builder note',
    excerpt:
      'The best projects get easier to explain over time. I want this area to become a running log of product decisions, pivots, and lessons.',
  },
  {
    title: 'Events, conversations, and how they change my thinking',
    type: 'Field note',
    excerpt:
      'A good portfolio should show what I learn from rooms I enter, not just code I wrote in isolation.',
  },
  {
    title: 'Why I care about AI products that actually change behavior',
    type: 'Essay',
    excerpt:
      'This is where future posts can connect technical experiments to product strategy, education, and human outcomes.',
  },
];

const moments = [
  {
    title: 'Hackathon build sessions',
    caption: 'Use this for photo essays, launch recaps, or quick breakdowns of what worked under pressure.',
    image: '/pics/Screenshot 2024-12-14 090638.png',
  },
  {
    title: 'Events and community',
    caption: 'A place for event takeaways, people met, conversations worth remembering, and short clips or photos.',
    image: '/pics/ChessDay(2)97.jpg',
  },
  {
    title: 'Training and life outside code',
    caption: 'This keeps the site human. The premium version of a portfolio has taste and point of view, not just project cards.',
    image: '/pics/muaythai.jpg',
  },
];

const Blog = () => {
  return (
    <section id="journal" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="max-w-3xl">
            <span className="eyebrow">Writing, media, and event notes</span>
            <h2 className="heading mt-4">Use one journal section instead of splitting blog and media too early.</h2>
            <p className="section-copy mt-5">
              My recommendation is to treat this as a single editorial area for now. It can hold blog-style posts,
              pictures, video links, event reflections, and learnings. Later, if volume grows, it can split into a
              formal blog plus a media archive.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-panel premium-panel-dark">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Writing queue</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Thoughts worth publishing</h3>
                </div>
                <a href="#contact" className="button-secondary button-secondary-on-dark">
                  Pitch a topic
                </a>
              </div>

              <div className="mt-8 space-y-4">
                {writing.map((post) => (
                  <article key={post.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">{post.type}</p>
                    <h4 className="mt-3 text-xl font-semibold text-white">{post.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {moments.map((moment, index) => (
                <motion.article
                  key={moment.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="media-card"
                >
                  <div className="overflow-hidden rounded-[1.35rem]">
                    <img src={moment.image} alt={moment.title} className="h-56 w-full object-cover" />
                  </div>
                  <div className="mt-5">
                    <h4 className="text-xl font-semibold text-slate-900">{moment.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{moment.caption}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
