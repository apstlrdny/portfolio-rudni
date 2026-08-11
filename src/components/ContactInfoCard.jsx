import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';

export const ContactInfoCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="contact-info-card"
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 200, damping: 15 } }}
    >
      <div className="contact-info-icon">
        <Icon size={item.iconSize || 20} />
      </div>
      <div className="contact-info-details">
        <span className="contact-info-label">{item.label}</span>
        {item.href ? (
          <a href={item.href} className="contact-info-value contact-info-link">
            {item.value}
          </a>
        ) : (
          <span className="contact-info-value">{item.value}</span>
        )}
      </div>
    </motion.div>
  );
};