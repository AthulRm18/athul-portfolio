export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutSmooth: [0.65, 0, 0.35, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
  /** Apple-like ease-out for typography */
  reveal: [0.22, 1, 0.36, 1] as const,
};

export const transition = {
  fast: { duration: 0.25, ease: ease.outExpo },
  medium: { duration: 0.4, ease: ease.outExpo },
  slow: { duration: 0.6, ease: ease.outExpo },
  spring: { type: "spring" as const, stiffness: 200, damping: 24 },
  reveal: { duration: 0.5, ease: ease.reveal },
  revealLabel: { duration: 0.4, ease: ease.reveal },
};

export const stagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: ease.outExpo },
    },
  },
};

/** Subtle fade + lift — used on case study headings */
export const revealHeading = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const revealBody = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
