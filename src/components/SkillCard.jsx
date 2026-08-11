import { motion } from 'framer-motion';
import { slideUpRotate, hoverScale } from '../animations';

const getLevelClass = (level) => {
  switch (level) {
    case 'Advanced':
      return 'skill-level-advanced';
    case 'Intermediate':
      return 'skill-level-intermediate';
    case 'Beginner':
      return 'skill-level-beginner';
    default:
      return 'skill-level-advanced';
  }
};

export const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;
  const levelClass = getLevelClass(skill.level);

  return (
    <motion.div
      className="skills-item"
      variants={slideUpRotate}
    >
      <motion.div
        className="skill-card"
        variants={hoverScale}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          className="skill-icon-wrapper"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <IconComponent className="skill-icon" />
        </motion.div>
        <span className="skill-name">{skill.name}</span>
        <motion.span
          className={`skill-level ${levelClass}`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 12 }}
        >
          {skill.level}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};