import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  hoverScale,
} from "../animations";
import headerImg from '../assets/img/header-img.svg';

const TO_ROTATE = ["Web Developer", "Software Engineer", "UI/UX Designer"];

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(150);

    const period = 2000;

    useEffect(() => {
        const tick = () => {
            const i = loopNum % TO_ROTATE.length;
            const fullText = TO_ROTATE[i];

            const updatedText = isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting) {
                setDelta(150);

                if (updatedText === fullText) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, period);
                }
            } else {
                setDelta(75);

                if (updatedText === "") {
                    setIsDeleting(false);
                    setLoopNum((prev) => prev + 1);
                    setDelta(150);
                }
            }
        };

        const ticker = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum, delta]);

    return (
        <motion.section
            className="banner-section"
            id="home"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="banner-inner">
                    <motion.div
                        className="banner-content"
                        variants={staggerContainer(0.15)}
                    >
                        <motion.span className="banner-tag" variants={fadeInLeft}>
                            Welcome to my Portfolio
                        </motion.span>
                        <motion.h1 variants={fadeInLeft}>
                            Hi, I'm <span className="fw-bold">Rodny Ace M. Apostol</span>
                        </motion.h1>
                        <motion.h2 variants={fadeInLeft}>
                            {text}
                            <motion.span
                                className="animate-blink"
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                |
                            </motion.span>
                        </motion.h2>
                        <motion.p className="banner-text" variants={fadeInLeft}>
                            I build fast, accessible, and responsive web applications with a focus on seamless user experiences.
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                        >
                            <motion.button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="banner-cta"
                                variants={hoverScale}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                View Projects
                                <svg width="25" height="25" viewBox="0 0 16 16" fill="currentColor">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </motion.button>
                            <motion.button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="banner-cta banner-cta-secondary"
                                variants={hoverScale}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Let's Connect
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" style={{ marginLeft: "0.5rem" }}>
                                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm-1 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM4.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-1 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM0 13.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-1 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="banner-image-col"
                        variants={fadeInRight}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.img
                            src={headerImg}
                            alt="Header"
                            className="banner-image"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};