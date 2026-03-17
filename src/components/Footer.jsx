import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-[#f8f4eb] py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"
        >
          <p>© {new Date().getFullYear()} Arjun Thiruchchelvarajah. Built to make TGP the headline.</p>
          <a href="mailto:arjunthiru22@gmail.com" className="font-medium text-slate-900 transition hover:text-amber-700">
            arjunthiru22@gmail.com
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
