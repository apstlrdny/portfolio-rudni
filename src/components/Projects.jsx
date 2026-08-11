import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
} from '../animations';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projectsData, categories } from '../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        {/* Header */}
        <SectionHeader
          className="projects-header"
          title="Featured Projects"
          subtitle="A collection of projects I've built and contributed to"
        />

        {/* Filter Bar */}
        <motion.div
          className="projects-filter-bar"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`project-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                delay={idx * 0.08}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};