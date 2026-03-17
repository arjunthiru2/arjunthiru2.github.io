import { motion } from 'framer-motion';
import profileImage from '../assets/linkedin profile.jpg';

const heroStats = [
  { label: 'Focus', value: 'AI products, product thinking, and education' },
  { label: 'Current build', value: 'TGP as the flagship company-building story' },
  { label: 'Based in', value: 'Toronto, building with a founder-operator mindset' },
];

const Hero = () => {
  return (
    <section className="hero-shell relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="eyebrow">Software Engineer • Builder • Product-minded operator</span>
              <h1 className="hero-title max-w-4xl">
                Building thoughtful AI products, with <span className="text-highlight">TGP</span> at the center.
              </h1>
              <p className="hero-copy max-w-3xl">
                I&apos;m Arjun Thiruchchelvarajah, a software engineering student and builder focused on creating
                ambitious products with real human value. This site now leads with TGP, then shows the rest of the work,
                writing, and field notes around how I think, ship, and learn.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="button-primary">
                See TGP First
              </a>
              <a href="#journal" className="button-secondary">
                Read the journal
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-3xl p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="hero-portrait-card">
              <div className="hero-portrait-copy">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Now building</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">TGP</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
                  The company and product I want people to remember first. The homepage now treats it as the core
                  narrative, not just another portfolio tile.
                </p>
              </div>

              <div className="hero-portrait-frame">
                <img
                  src={profileImage}
                  alt="Arjun Thiruchchelvarajah"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
