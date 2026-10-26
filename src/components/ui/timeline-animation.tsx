"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TimelineContentProps<T extends React.ElementType = "div"> {
  as?: T;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  [key: string]: any;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export function TimelineContent<T extends React.ElementType = "div">({
  as,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps<T>) {
  const Component = (as && (motion as any)[as]) ? (motion as any)[as] : motion.div;
  const isInView = timelineRef ? useInView(timelineRef, { once: true }) : true;

  return (
    <Component
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants || defaultVariants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

export default TimelineContent;
