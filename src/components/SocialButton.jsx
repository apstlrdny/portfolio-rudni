import { motion } from 'framer-motion';

export const SocialButton = ({ href, label, icon, iconSize = 20, className = 'contact-social-btn' }) => {
  const Icon = icon;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <Icon size={iconSize} />
    </motion.a>
  );
};