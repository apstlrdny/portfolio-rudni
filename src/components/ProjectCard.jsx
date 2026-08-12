import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hoverLift } from '../animations';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

export const ProjectCard = ({ project, delay = 0 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = project.images.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % total);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  return (
    <motion.div
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -30 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay,
      }}
      viewport={{ once: true, margin: '-30px' }}
    >
      <motion.div
        className="project-card-inner"
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        {/* Image Slider */}
        <div className="project-image-wrapper">
          <AnimatePresence mode="wait" custom={currentSlide}>
            <motion.div
              key={currentSlide}
              className="slider-track"
              custom={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <img
                src={project.images[currentSlide]}
                alt={`${project.title} ${currentSlide + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          <div className="project-overlay" />

          {project.featured && (
            <motion.span
              className="project-badge"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            >
              Featured
            </motion.span>
          )}

          {total > 1 && (
            <motion.button
              className="slider-arrow slider-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous image"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
          )}

          {total > 1 && (
            <motion.button
              className="slider-arrow slider-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next image"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          )}

          {total > 1 && (
            <div className="slider-dots">
              {project.images.map((_, i) => (
                <motion.button
                  key={i}
                  className={`slider-dot ${i === currentSlide ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(i);
                  }}
                  aria-label={`Go to image ${i + 1}`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  animate={i === currentSlide ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Body */}
        <motion.div
          className="project-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div className="project-tags">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="project-tag"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <span className="project-meta">
            {project.year} | {project.type}
          </span>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-actions">
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project btn-project-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project btn-project-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};