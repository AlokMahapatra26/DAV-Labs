"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HyperText } from "@/components/ui/HyperText";
import Magnetic from "@/components/ui/Magnetic";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Track which index is currently being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <div className="relative rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-lg dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-zinc-900 dark:text-white font-heading font-bold text-xl tracking-wider cursor-pointer z-50">
          <HyperText text="DAV Labs" />
        </Link>

        {/* Desktop Menu with Sliding Pill + Magnetic */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Nav Items */}
          <div
            className="flex space-x-2"
            onMouseLeave={() => setHoveredIndex(null)} // Reset when mouse leaves the navbar area
          >
            {navItems.map((item, index) => (
              <Magnetic key={item.name}>
                <Link
                  href={item.link}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* THE SLIDING PILL */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800/80 -z-10"
                        layoutId="hoverBackground" // This is the magic key for sliding
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.15 } }}
                        exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* The Text */}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 inset-x-4 p-4 rounded-2xl bg-white/95 dark:bg-black/90 border border-zinc-200/50 dark:border-white/10 backdrop-blur-xl md:hidden flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-cyan-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}