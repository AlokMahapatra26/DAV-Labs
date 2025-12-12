"use client";
import React from "react";
import { useTheme } from "@/components/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {/* Rotating icon container */}
            <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                {theme === "light" ? (
                    <Sun className="w-5 h-5 text-amber-500" />
                ) : (
                    <Moon className="w-5 h-5 text-indigo-400" />
                )}
            </motion.div>
        </motion.button>
    );
}
