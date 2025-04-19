import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      title: 'Government Co-op Developer',
      description: 'Worked on mission-critical systems, focusing on performance optimization and security.',
      skills: ['SQL', 'Java', 'Spring Boot', 'AWS'],
    },
    {
      title: 'Product Manager',
      description: 'Led cross-functional teams in developing and launching innovative solutions.',
      skills: ['Agile', 'PRD Writing', 'User Research', 'Data Analysis'],
    },
    {
      title: 'Fellowship Program',
      description: 'Selected for a competitive program focused on AI and machine learning applications.',
      skills: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
    },
  ];

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading text-center mb-12">
            About <span className="text-primary-600">Me</span>
          </h2>
          
          <div className="prose prose-lg dark:prose-invert mx-auto mb-16">
            <p className="text-gray-600 dark:text-gray-300">
              As a 4th-year Software Engineering student, I've developed a unique perspective
              that combines technical expertise with product thinking. My journey in tech
              began with a passion for building things that make a difference, which led me
              to explore the intersection of AI and education.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Through my experiences as a government co-op developer and product manager,
              I've learned to balance technical depth with user-centric design. I believe
              in creating solutions that not only work well but also solve real problems
              for real people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 