import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
} from '../animations';
import { FaPaperPlane, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { SectionHeader } from './SectionHeader';
import { ContactInfoCard } from './ContactInfoCard';
import { SocialButton } from './SocialButton';
import { contactInfo, socialLinks } from '../data/contact';

const initialFormState = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container">
        {/* Header */}
        <SectionHeader
          className="contact-header"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        {/* Two-Column Layout */}
        <div className="contact-grid">
          {/* Left Column — Info & Status */}
          <motion.div
            className="contact-info-col"
            variants={fadeInLeft}
          >
            {/* Availability Badge */}
            <motion.div
              className="availability-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 15 }}
            >
              <span className="availability-dot" />
              Available for Freelance &amp; Full-time Roles
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="contact-info-list"
              variants={staggerContainer(0.08)}
            >
              {contactInfo.map((item, idx) => (
                <ContactInfoCard key={idx} item={item} />
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="contact-socials"
              variants={staggerContainer(0.08)}
            >
              <motion.span className="contact-socials-label" variants={fadeInUp}>
                Connect with me
              </motion.span>
              <motion.div className="contact-socials-row" variants={fadeInUp}>
                {socialLinks.map((social, idx) => (
                  <SocialButton
                    key={idx}
                    href={social.href}
                    label={social.label}
                    icon={social.icon}
                    iconSize={social.iconSize}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
{/* Right Column — Contact Form */}
          <motion.div
            className="contact-form-col"
            variants={fadeInRight}
          >
            {isSubmitted ? (
              <motion.div
                className="contact-success contact-form-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              >
                <motion.div
                  className="contact-success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 12 }}
                >
                  <FaCheckCircle />
                </motion.div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-text">
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
                <motion.button
                  className="contact-success-btn"
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form contact-form-card"
                onSubmit={handleSubmit}
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div className="contact-form-row" variants={fadeInUp}>
                  <div className="contact-form-group">
                    <label htmlFor="fullName" className="contact-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="contact-form-input"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact-form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </motion.div>

                <motion.div className="contact-form-group" variants={fadeInUp}>
                  <label htmlFor="subject" className="contact-form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact-form-input"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div className="contact-form-group" variants={fadeInUp}>
                  <label htmlFor="message" className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form-input contact-form-textarea"
                    rows="5"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div
                  className="contact-form-submit-wrapper"
                  variants={fadeInUp}
                >
                  <motion.button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.04 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.96 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="contact-spinner" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};