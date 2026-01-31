"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const registerVisit = async () => {
            try {
                // First try to post to register the visit
                const res = await fetch("/api/visitors", { method: "POST" });
                if (res.ok) {
                    const data = await res.json();
                    setCount(data.count);
                }
            } catch (error) {
                console.error("Failed to register visit:", error);
            }
        };

        registerVisit();
    }, []);

    if (count === null) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute left-1/2 -translate-x-1/2 top-24 z-40"
        >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 text-xs font-medium text-muted-foreground hover:bg-background/80 transition-colors shadow-sm">
                <span className="tabular-nums font-mono">You are the {getOrdinal(count)} visitor</span>
            </div>
        </motion.div>
    );
}

function getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
