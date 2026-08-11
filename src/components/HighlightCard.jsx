import { motion } from 'framer-motion';
import { scaleIn, hoverLift } from '../animations';

export const HighlightCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="about-highlight-col"
      variants={scaleIn}
    >
      <motion.div
        className="highlight-card"
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <div className="about-highlight-inner">
          <motion.div
            className="icon-wrapper"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Icon size={item.iconSize || 28} />
          </motion.div>
          <div>
            <div className="highlight-value">{item.value}</div>
            <div className="highlight-label">{item.label}</div>
            <div className="highlight-sublabel">{item.sublabel}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};