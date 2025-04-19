import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              I build AI-driven products for learning and growth. A 4th-year Software Engineering student
              passionate about creating impactful solutions at the intersection of technology and education.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 dark:bg-primary-800/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300 dark:bg-primary-700/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero; 