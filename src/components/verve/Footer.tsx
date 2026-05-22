"use client";

import Link from "next/link";
import { 
    IconBrandInstagram, 
    IconBrandLinkedin, 
    IconBrandWhatsapp, 
    IconPhone, 
    IconMail,
    IconMapPin,
    IconArrowUp,
    IconChevronRight
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function VerveFooter() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-background relative pt-16 pb-8 border-t border-border overflow-hidden">
            {/* Optional subtle background pattern or gradient can be added here if needed */}
            <div className="absolute inset-0 bg-muted/20 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                {/* Top Section: Logo & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-border/50 pb-8 mb-12 gap-6">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="DAV Labs" className="h-10 w-auto object-contain" />
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-semibold text-lg text-foreground/90">Follow on social media:</span>
                        <div className="flex gap-2">
                            <a href="https://www.instagram.com/davlabs.solutions/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110">
                                <IconBrandInstagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/davlabs-solution-83b3a53a5/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110">
                                <IconBrandLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
                    {/* About */}
                    <div className="flex flex-col">
                        <h3 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">About DAV Labs</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            <strong className="text-foreground font-semibold">DAV Labs</strong> is a results-driven digital solutions company. We specialize in creating <strong className="text-foreground font-semibold">powerful online experiences</strong> that help businesses grow, attract customers, and build a strong digital presence tailored to your specific needs.
                        </p>
                    </div>

                    {/* Services / Industries */}
                    <div className="flex flex-col">
                        <h3 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">Our Services</h3>
                        <ul className="space-y-3.5">
                            {['Website Development', 'Mobile App Development', 'UI/UX Design', 'Search Engine Optimization', 'E-Commerce'].map((service, idx) => (
                                <li key={idx}>
                                    <Link href={`/services#${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 group transition-colors">
                                        <IconChevronRight size={14} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">Quick Links</h3>
                        <ul className="space-y-3.5">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Privacy Policy', href: '/privacy' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 group transition-colors">
                                        <IconChevronRight size={14} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex flex-col">
                        <h3 className="text-primary font-bold uppercase tracking-wider mb-6 text-sm">Get In Touch</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-muted rounded-md text-primary mt-0.5 shrink-0">
                                    <IconMapPin size={18} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                        Gujarat, Valsad, Vapi - 396195
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-muted rounded-md text-primary mt-0.5">
                                    <IconPhone size={18} />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <a href="tel:+918469159877" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide">+91 84691 59877</a>
                                    <a href="tel:+918849561649" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide">+91 88495 61649</a>
                                    <a href="tel:+917383149649" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide">+91 73831 49649</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-muted rounded-md text-primary mt-0.5">
                                    <IconMail size={18} />
                                </div>
                                <div className="flex flex-col gap-1.5 pt-0.5">
                                    <a href="mailto:contact@davlabs.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">contact@davlabs.in</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} <span className="text-foreground font-semibold">DAV Labs</span>. All Rights Reserved.
                    </p>
                    {/* Optional additional links at the bottom */}
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
                <a 
                    href="tel:+918469159877" 
                    className="p-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                    aria-label="Call Us"
                >
                    <IconPhone size={24} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                    href="https://wa.me/918469159877" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                    aria-label="WhatsApp Us"
                >
                    <IconBrandWhatsapp size={26} className="group-hover:scale-110 transition-transform" />
                </a>
                
                {/* Scroll to Top */}
                <div className={`transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <button 
                        onClick={scrollToTop}
                        className="p-3.5 bg-muted hover:bg-muted/80 border border-border text-foreground rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group w-full h-full"
                        aria-label="Scroll to Top"
                    >
                        <IconArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
