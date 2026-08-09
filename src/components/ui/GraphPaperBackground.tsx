"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const GraphPaperBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Radial spotlight glow behind the graph paper grid
    const backgroundSpotlight = useMotionTemplate`radial-gradient(
        600px circle at ${mouseX}px ${mouseY}px,
        hsl(var(--primary) / 0.12),
        transparent 80%
    )`;

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
            {/* Interactive Mouse Glow Spotlight */}
            <motion.div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: backgroundSpotlight }}
            />

            {/* SVG Engineering Graph Paper Pattern */}
            <div className="absolute inset-0 opacity-80 dark:opacity-60">
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Sub-grid pattern (Small 10px squares) */}
                        <pattern id="graph-subgrid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                className="stroke-foreground/[0.04] dark:stroke-white/[0.04]"
                                strokeWidth="0.5"
                            />
                        </pattern>

                        {/* Main grid pattern (Large 40px squares with subgrid nested inside) */}
                        <pattern id="graph-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <rect width="40" height="40" fill="url(#graph-subgrid)" />
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                className="stroke-foreground/[0.12] dark:stroke-white/[0.10]"
                                strokeWidth="1"
                            />
                        </pattern>

                        {/* Subtle radial fade mask */}
                        <radialGradient id="graph-mask" cx="50%" cy="50%" r="75%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#000" stopOpacity="1" />
                            <stop offset="60%" stopColor="#000" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
                        </radialGradient>
                        <mask id="vignette-mask">
                            <rect width="100%" height="100%" fill="url(#graph-mask)" />
                        </mask>
                    </defs>

                    {/* Render Graph Paper with Mask */}
                    <rect width="100%" height="100%" fill="url(#graph-grid)" mask="url(#vignette-mask)" />
                </svg>
            </div>

            {/* Subtle Gradient Overlays for Ambient Depth */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        </div>
    );
};
