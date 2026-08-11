import { motion } from 'framer-motion';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="footer-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">rudni.</span>
            <motion.p
              className="footer-copyright"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              &copy; {currentYear} Rodny Ace Apostol. Built with
              <motion.span
                className="footer-heart"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaHeart />
              </motion.span>
              using React &amp; Framer Motion.
            </motion.p>
          </div>

          <motion.button
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};
