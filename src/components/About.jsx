import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from '../animations';
import { FaDownload } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { SectionHeader } from './SectionHeader';
import { HighlightCard } from './HighlightCard';
import { highlights } from '../data/about';
import portraitImg from '../assets/img/profile.jpg';
import resumePdf from '../assets/RESUME-RODNY.pdf';

export const About = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container">
        <div className="about-inner">
          {/* Left Column — Portrait Card */}
          <motion.div
            className="about-portrait-col"
            variants={fadeInLeft}
          >
            <motion.div
              className="about-portrait-wrapper"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="portrait-card">
                <motion.img
                  src={portraitImg}
                  alt="Portrait"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
              {/* Status badge */}
              <motion.div
                className="status-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 15 }}
              >
                <HiStatusOnline className="status-badge-icon" />
                Open to Work / Freelance
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column — Text & Highlights */}
          <motion.div
            className="about-text-col"
            variants={fadeInRight}
          >
            <SectionHeader
              label="Get To Know Me"
              title="About Me"
              titleClassName="about-title"
            />

            <motion.p
              className="about-text"
              variants={fadeInUp}
            >
              I am a Full-Stack Developer with a specialized focus on frontend 
              engineering and user experience. My passion lies in building 
              seamless digital products—combining a deep understanding of core 
              web technologies with robust backend logic to craft fast, responsive, 
              and intuitive applications.
            </motion.p>

            <motion.p
              className="about-text"
              variants={fadeInUp}
            >
              Every project I take on is an opportunity to solve real-world
              problems through elegant solutions. I thrive on breaking down
              complex challenges into manageable pieces, writing code that
              scales, and collaborating with teams that value quality as much
              as speed. Outside of coding, I'm constantly exploring new
              technologies, refining my craft, and finding inspiration in the
              intersection of creativity and logic.
            </motion.p>

            {/* Highlight Cards (2×2 Grid) */}
            <motion.div
              className="about-highlights-grid"
              variants={staggerContainer(0.1)}
            >
              {highlights.map((item, idx) => (
                <HighlightCard key={idx} item={item} />
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              className="about-resume-wrapper"
              variants={fadeInUp}
            >
              <motion.a
                href={resumePdf}
                download
                className="btn-resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FaDownload />
                  Download Resume
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};