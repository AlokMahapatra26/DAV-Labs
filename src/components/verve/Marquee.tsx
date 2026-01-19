"use client";

import { motion } from "framer-motion";

export function VerveMarquee() {
    const text = "STRATEGY • BRANDING • WEB DESIGN • DEVELOPMENT • MARKETING • CONTENT • ";

    return (
        <div className="w-full py-2 border-y border-border/50 overflow-hidden bg-background">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex whitespace-nowrap"
                >
                    <span className="text-3xl md:text-5xl font-heading font-bold uppercase text-transparent stroke-text opacity-40 mr-8">
                        {text.repeat(4)}
                    </span>
                </motion.div>
            </div>
            <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}</style>
        </div>
    );
}
