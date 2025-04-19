import { motion } from 'framer-motion';
import MediaCarousel from './MediaCarousel';

const About = () => {
    const mediaItems = [
        { type: 'image', src: '/pics/Screenshot 2024-12-14 090638.png', alt: 'Hackathon Solo' },
        { type: 'image', src: '/pics/ChessDay(2)97.jpg', alt: 'Chess' },
        {
            type: 'tweet',
            tweetId: '1913678850011131954',
            alt: 'Twitter Video',
          },
        { type: 'image', src: '/pics/muaythai.jpg', alt: 'Muay Thai' },
        
      ];
      
  return (
    <section id="about" className="section bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Left side: description and optional video */}
          <div className="flex flex-col justify-start space-y-6">
            <h2 className="heading">
              About <span className="text-primary-600">Me</span>
            </h2>

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                As a 4th-year Software Engineering student, I've developed a unique perspective
                that combines technical expertise with product thinking. 
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My journey REALLY began when I decided to pursue my passion for making a difference, which led me
                to explore the intersection of AI and education. I am currently building TGP. More information soon.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Outside of that, I'd have to say my BIG3 interests are basketball, training, and chess. I also love nature and the outdoors (mostly during the summer)
              </p>
            </div>
          </div>

          {/* Right side: Media Grid */}
          <div className="relative">
            <MediaCarousel mediaItems={mediaItems} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
