import { type Transition, type Variants } from "framer-motion";

/**
 * Standardized easing curve per DESIGN_SYSTEM.md
 */
export const TRANSITION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const standardTransition: Transition = {
  duration: 0.6,
  ease: TRANSITION_EASE,
};

export const quickTransition: Transition = {
  duration: 0.25,
  ease: TRANSITION_EASE,
};

/**
 * Motion variants for section headers & child items
 */
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: standardTransition,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: standardTransition,
  },
};

export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.3, ease: TRANSITION_EASE },
  },
};
