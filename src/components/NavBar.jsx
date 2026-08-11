import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeInUp,
} from '../animations';
import { ThemeToggle } from './ThemeToggle';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);

        const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollY = window.scrollY;
        let currentSection = sectionIds[0];

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
                const offsetTop = el.offsetTop;
                if (scrollY + 100 >= offsetTop) {
                    currentSection = id;
                }
            }
        }

        setActiveLink(currentSection);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const links = [
        { id: 'home' },
        { id: 'about' },
        { id: 'skills' },
        { id: 'projects' },
        { id: 'contact' },
    ];

    return (
        <motion.nav
            className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
            initial="hidden"
            animate="show"
        >
            <div className="container navbar-inner">
                <motion.a
                    href="#home"
                    className="navbar-logo"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    rudni.
                </motion.a>

                <div className={`navbar-collapse ${menuOpen ? 'mobile-open' : ''}`}>
                    <motion.ul
                        className="navbar-nav"
                        variants={staggerContainer(0.08)}
                        initial="hidden"
                        animate="show"
                    >
                        {links.map(({ id }) => (
                            <motion.li key={id} variants={fadeInUp}>
                                <motion.button
                                    className={`nav-link-custom ${activeLink === id ? 'active' : ''}`}
                                    onClick={(e) => scrollToSection(e, id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                    {activeLink === id && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="nav-active-indicator"
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <div className="navbar-actions">
                    <ThemeToggle />
                    <motion.button
                        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        variants={fadeInUp}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span />
                        <span />
                        <span />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};
