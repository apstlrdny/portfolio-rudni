import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../animations';
import { SectionHeader } from './SectionHeader';
import { SkillCard } from './SkillCard';
import { skillsData } from '../data/skills';

export const Skills = () => {
  return (
    <motion.section
      className="skills-section"
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        <SectionHeader
          className="skills-header"
          title="Skills & Tech Stack"
          subtitle="Technologies I work with on a daily basis"
        />

        {skillsData.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            className="skills-category"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-30px' }}
            variants={fadeInUp}
            transition={{ delay: groupIdx * 0.1 }}
          >
            <motion.h3
              className="skills-category-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <motion.span
                className="accent-bar"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              {group.category}
            </motion.h3>

            <motion.div
              className="skills-grid"
              variants={staggerContainer(0.05)}
            >
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};