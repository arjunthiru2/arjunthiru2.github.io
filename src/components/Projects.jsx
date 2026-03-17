import { motion } from 'framer-motion';

const supportingProjects = [
  {
    title: 'GreenGuide',
    description:
      'Recycling object detection using MobileNetV2, OpenCV, and TensorFlow for real-time category classification.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    image: '/pics/greenguide.png',
    link: 'https://github.com/tetrosushi/GreenGuide',
  },
  {
    title: 'AI Appreciation Jar',
    description:
      'A hackathon project that uses NLP to help teams recognize wins, reinforce culture, and celebrate progress.',
    tech: ['React', 'Python', 'TensorFlow', 'NLP'],
    image: '/pics/Screenshot 2025-03-02 112004.png',
    link: 'https://youtu.be/Og1Lzpo1Xzg',
    status: 'Building',
  },
  {
    title: 'ProForum',
    description:
      'A microservices-based web application with a more systems-oriented architecture and team delivery focus.',
    tech: ['Apache NetBeans', 'Docker', 'Kubernetes', 'MySQL'],
    image: '/pics/proforum_landingpage.png',
    link: 'https://www.youtube.com/playlist?list=PLhzsWf3BPFS2ZOg7Oq47hobz1j8VlsHHy',
  },
];

const tgpHighlights = [
  'Positioned as the main company-building story on the homepage',
  'Presented with more context than a standard portfolio card',
  'Designed to carry future product updates, screenshots, and milestones',
];

const Projects = () => {
  return (
    <section id="projects" className="section section-tinted">
      <div className="container space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="project-flagship"
        >
          <div className="space-y-5">
            <span className="eyebrow">Flagship Project</span>
            <h2 className="heading text-white">TGP leads the site now.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Instead of burying TGP in a project grid, the page now frames it as the main thing I&apos;m building. This
              section is intentionally larger so it can grow into the place for product milestones, launch notes,
              screenshots, traction updates, and the story behind the company.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="tag tag-gold">Main focus</span>
              <span className="tag tag-gold">AI product</span>
              <span className="tag tag-gold">Founder journey</span>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {tgpHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#journal" className="button-primary">
                Build the TGP story
              </a>
              <a
                href="https://www.linkedin.com/in/arjunthiru/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary button-secondary-on-dark"
              >
                Follow the journey
              </a>
            </div>
          </div>

          <div className="flagship-visual">
            <img src="/pics/tgpwhite.png" alt="TGP" className="mx-auto max-h-44 object-contain sm:max-h-52" />
            <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Why this matters</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                If someone only remembers one thing after visiting the site, it should be that I&apos;m building TGP and
                I&apos;m serious about it.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Supporting work</span>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900">Secondary projects still matter.</h3>
            </div>
            <p className="hidden max-w-xl text-sm leading-7 text-slate-600 lg:block">
              GreenGuide is implemented in the portfolio and stays visible here, while the rest of the work supports the
              broader picture without competing with TGP.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="project-card"
              >
                <div className="relative h-56 overflow-hidden rounded-[1.4rem]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-semibold text-slate-900">{project.title}</h4>
                    {project.status ? <span className="tag tag-muted">{project.status}</span> : null}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag tag-light">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-amber-700"
                  >
                    View project
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
