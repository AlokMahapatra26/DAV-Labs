"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { createPortal } from "react-dom";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MorphicNavbar } from "@/components/kokonutui/morphic-navbar";

const menuVariants: Variants = {
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    },
    open: {
        opacity: 1,
        x: "0%",
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    }
};

const linkVariants: Variants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
};

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);



    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/agency", label: "Agency" },
        { href: "/tools", label: "Tools" },
        { href: "/testimonials", label: "Stories" },
        { href: "/blog", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-dashed border-border">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link href="/" className="z-50 relative flex items-center gap-2">
                        <span className="text-2xl font-heading font-bold uppercase tracking-tighter text-foreground">
                            DAV<span className="text-primary">Labs</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MorphicNavbar />
                    </div>

                    {/* Desktop CTA & Theme Toggle */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/contact">
                            <Button className="rounded-none bg-foreground text-background hover:bg-primary hover:text-white font-bold uppercase tracking-widest">
                                Let&apos;s Talk
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex md:hidden items-center gap-4 z-[70] relative">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="text-foreground hover:text-primary transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Portal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 z-[60] flex flex-col justify-center items-center md:hidden"
                            style={{ backgroundColor: "#000000" }}
                        >
                            <div className="flex flex-col gap-8 text-center">
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={linkVariants}>
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            className="text-4xl font-heading font-bold uppercase tracking-tighter hover:text-primary transition-colors text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div variants={linkVariants} className="mt-8">
                                    <Link href="/contact" onClick={toggleMenu}>
                                        <Button className="rounded-none bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold text-lg px-10 py-6 uppercase tracking-widest">
                                            Start A Project
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
