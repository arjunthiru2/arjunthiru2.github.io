import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      year: '2023',
      title: 'Software Engineering Co-op',
      company: 'Government Agency',
      description: 'Developed and optimized mission-critical systems, improving performance by 40%. Led database optimization efforts resulting in 60% faster query times.',
      skills: ['Java', 'Spring Boot', 'SQL', 'AWS'],
    },
    {
      year: '2022',
      title: 'Product Manager Intern',
      company: 'Tech Startup',
      description: 'Led cross-functional team in developing AI-powered features. Created PRDs and managed product roadmap. Conducted user research and implemented feedback.',
      skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis'],
    },
    {
      year: '2021',
      title: 'AI Research Fellow',
      company: 'University Lab',
      description: 'Researched and implemented machine learning models for educational applications. Published findings in academic journals.',
      skills: ['Python', 'TensorFlow', 'Research', 'Data Science'],
    },
  ];

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
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <h2 className="heading">
              My <span className="text-primary-600">Resume</span>
            </h2>
            <a
              href="/resume.pdf"
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              download
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                      <span className="text-primary-600 font-semibold">{exp.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 