// ─── Reusable Framer Motion Variants ────────────────────────────────────────

// Stagger container for children animations
export const staggerContainer = (staggerDelay = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

// Fade in from below
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// Scale in (for cards, icons)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
};

// Slide up with slight rotation (for skill cards)
export const slideUpRotate = {
  hidden: { opacity: 0, y: 30, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
};

// Hover lift effect
export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -6,
    transition: { type: 'spring', stiffness: 300, damping: 18 },
  },
};

// Hover scale effect
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: { type: 'spring', stiffness: 300, damping: 12 },
  },
};

