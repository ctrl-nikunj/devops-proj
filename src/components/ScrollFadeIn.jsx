'use client';

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ScrollFadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  threshold = 0.5,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
