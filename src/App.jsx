import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Projects />
                <Resume />
                <Blog />
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
