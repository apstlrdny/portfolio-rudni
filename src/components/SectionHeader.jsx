import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';

export const SectionHeader = ({
  label,
  title,
  subtitle,
  titleClassName = 'section-title',
  className = '',
  staggerDelay = 0.15,
}) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer(staggerDelay)}
    >
      {label && (
        <motion.span className="section-label" variants={fadeInUp}>
          {label}
        </motion.span>
      )}
      <motion.h2 className={titleClassName} variants={fadeInUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="section-subtitle" variants={fadeInUp}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};