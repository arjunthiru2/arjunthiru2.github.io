import { motion } from 'framer-motion';

const Resume = () => {
  // Replace these URLs with your actual resume URLs
  const resumeUrl = 'https://athiru.tiiny.site/';

  return (
    <section id="resume" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="heading">
              My <span className="text-primary-600">Resume</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              View my professional experience and qualifications
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Embedded Resume Viewer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-[4/5] bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={resumeUrl}
                title="Resume"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 