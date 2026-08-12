import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';
import { staggerContainer, fadeInUp } from '../animations';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialIcons = [
  {
    icon: FaGithub,
    label: 'GitHub Profile',
    href: 'https://github.com/apstlrdny',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/rudni',
  },
  {
    icon: FaFacebookF,
    label: 'Facebook Profile',
    href: 'https://www.facebook.com/apstlrdny',
  },
  {
    icon: FaEnvelope,
    label: 'Email Rodny Apostol',
    href: 'mailto:apostolrodny0307@gmail.com',
  },
];

export const Footer = () => {
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
        <motion.div
          className="footer-inner"
          variants={staggerContainer(0.08)}
        >
          {/* Brand / Info */}
          <motion.div className="footer-brand" variants={fadeInUp}>
            <a className="footer-logo" href="#home">
              rudni.
            </a>
            <p className="footer-name">Rodny Apostol</p>
            <p className="footer-title">Full-Stack Web Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            className="footer-col footer-nav-col"
            aria-label="Quick Links"
            variants={fadeInUp}
          >
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            className="footer-col footer-social-col"
            variants={fadeInUp}
          >
            <h2 className="footer-heading">Connect</h2>
            <ul className="footer-socials">
              {socialIcons.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <motion.a
                    className="footer-social-icon"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
        >
          <p className="footer-copyright">
            &copy; 2026 Rodny Apostol. All rights reserved.
          </p>
          <motion.button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};
