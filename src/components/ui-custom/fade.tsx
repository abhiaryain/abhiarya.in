"use client";

import { motion } from "motion/react";
import type { ComponentProps } from "react";

export function Fade({
  children,
  ...props
}: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.07,
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate="show"
      data-slot="fade"
      // Allows the parent component to pass custom props that override the default motion animation settings.
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeItem({
  children,
  ...props
}: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      initial="hidden"
      animate="show"
      data-slot="fade-item"
      // Allows the parent component to pass custom props that override the default motion animation settings.
      {...props}
    >
      {children}
    </motion.div>
  );
}
