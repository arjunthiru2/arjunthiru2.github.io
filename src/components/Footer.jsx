import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4 md:mb-0"
          >
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Arjun Thiruchchelvarajah. All rights reserved.
            </p>
          </motion.div>

          {/*<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
             <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Terms of Service
            </a> 
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 