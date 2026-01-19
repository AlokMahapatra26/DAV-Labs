"use client";
import { motion } from "framer-motion";
import React from "react";

export const PencilHighlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <span className={`relative inline-block px-2 ${className}`}>
            {/* Primary Stroke */}
            <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "circOut", delay: 0.2 }}
                className="absolute bottom-2 left-0 w-full h-[35%] bg-primary/60 -skew-y-2 -z-10 origin-left rounded-sm"
            />
            {/* Secondary Stroke (Messy) */}
            <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "circOut", delay: 0.4 }}
                className="absolute bottom-1 left-1 w-[90%] h-[25%] bg-primary/40 skew-y-1 -z-10 origin-left rounded-sm"
            />
            <span className="relative z-10">{children}</span>
        </span>
    );
};
