import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AI Appreciation Jar',
      description: 'Hackathon Project: A sentiment analysis platform that helps teams recognize and celebrate achievements using natural language processing.',
      tech: ['React', 'Python', 'TensorFlow', 'NLP'],
      image: '/pics/Screenshot 2025-03-02 112004.png', // You'll need to add these images
      link: 'https://youtu.be/Og1Lzpo1Xzg',
      building: true,
    },
    // {
    //   title: 'EdTech Platform',
    //   description: 'An interactive learning platform that adapts to student progress using machine learning algorithms.',
    //   tech: ['Next.js', 'TypeScript', 'MongoDB', 'TensorFlow'],
    //   image: '/project2.jpg',
    //   link: '#',
    // },
    {
      title: 'CRM Voice Agent',
      description: 'An AI-powered voice assistant that helps sales teams manage customer interactions and automate routine tasks.',
      tech: ['Python', 'LiveKit', 'API', 'Silero'],
      image: '/pics/Screenshot 2025-04-19 162843.png',
      link: '#',
      building: true,
    },
    {
      title: 'ProForum',
      description: 'A web application built with microservices architecture.',
      tech: ['Apache Netbeans', 'Docker', 'Kubernetes', 'MySQL'],
      image: '/pics/proforum_landingpage.png',
      link: 'https://www.youtube.com/playlist?list=PLhzsWf3BPFS2ZOg7Oq47hobz1j8VlsHHy',
    },

    {
      title: 'TGP',
      description: '05/11/2025.',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'TensorFlow'],
      image: '/pics/tgpwhite.png',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading text-center mb-12">
            Featured <span className="text-primary-600">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                    
                    <div className="flex items-center space-x-2 mb-3">
                    {/* Display the Building tag if the project is still being worked on */}
                    {project.building && (
                    <span className="px-3 py-1 bg-yellow-300 text-black rounded-full text-sm font-semibold">
                        🚧 Building
                    </span>
                    )}
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                    </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    target="_blank"  // This makes the link open in a new tab
                    rel="noopener noreferrer"  // This is recommended for security reasons
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 