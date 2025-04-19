import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'Building AI-Powered Learning Platforms',
      excerpt: "Exploring the intersection of artificial intelligence and education, and how it's transforming the way we learn.",
      date: 'March 15, 2024',
      readTime: '5 min read',
      link: '#',
      category: 'AI & Education',
    },
    {
      title: 'From Developer to Product Manager',
      excerpt: 'My journey transitioning from a technical role to product management, and the lessons learned along the way.',
      date: 'March 1, 2024',
      readTime: '4 min read',
      link: '#',
      category: 'Career Growth',
    },
    {
      title: 'The Future of EdTech',
      excerpt: "Analyzing current trends in educational technology and predicting what's next for the industry.",
      date: 'February 15, 2024',
      readTime: '6 min read',
      link: '#',
      category: 'Technology',
    },
  ];

  return (
    <section id="blog" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="heading">
              Latest <span className="text-primary-600">Insights</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Thoughts and experiences on AI, education, and building products that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 dark:text-primary-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <a
                      href={post.link}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
                    >
                      Read More
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
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Posts
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 