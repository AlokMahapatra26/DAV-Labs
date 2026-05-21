"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, BarChart3, Palette, ArrowRight, Server, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const serviceCategories = [
    {
        title: "Web & App Solutions",
        description: "End-to-end development and engineering to power your digital presence and operational capabilities.",
        icon: <Code2 className="w-8 h-8" />,
        services: [
            "Website Designing",
            "Website Development",
            "Page Speed Optimization",
            "E-Commerce",
            "UI/UX Design",
            "Website Maintenance",
            "Mobile App Development",
            "Optical-ERP Solution",
            "Custom Software",
        ]
    },
    {
        title: "Digital Marketing",
        description: "Data-driven marketing strategies designed to cut through the noise, target high-intent users, and drive ROI.",
        icon: <BarChart3 className="w-8 h-8" />,
        services: [
            "Search Engine Optimization",
            "Search Engine Marketing",
            "Social Media Optimization",
            "Social Media Handling",
            "Corporate Branding (CRM)",
            "Social Media Marketing",
            "Instagram Marketing",
            "Facebook Ads",
            "LinkedIn Ads",
        ]
    },
    {
        title: "Graphics Solutions",
        description: "Creative design services that communicate your brand's unique identity and build instant trust.",
        icon: <Palette className="w-8 h-8" />,
        services: [
            "Brochure/Catalog Design",
            "Logo Designing",
            "Product Catalog Design",
            "Banner Designing",
            "Visiting/Business Card",
            "Corporate Video Shooting",
            "Content Writing",
            "Google Ads/ PPC",
        ]
    },
    {
        title: "Servers & Others",
        description: "Reliable infrastructure, secure hosting, and essential registration services for your business.",
        icon: <Server className="w-8 h-8" />,
        services: [
            "Web Hosting",
            "Domain Registration & Renewal",
            "SSL Certificate",
            "Professional Email Solution",
            "E-Mail Secure Service",
            "Trademark",
        ]
    }
];

export default function ServicesPage() {
    // Smooth scrolling for anchor links if someone lands on the page with a hash
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    // Add a brief highlight effect
                    element.classList.add("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
                    setTimeout(() => {
                        element.classList.remove("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
                    }, 2000);
                }, 100);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border/50 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase text-foreground mb-4 tracking-tight">
                            Our <span className="text-primary">Solutions</span>
                        </h1>
                        <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest leading-relaxed">
                            Comprehensive Digital Services To Elevate Your Business
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-sm md:text-base text-muted-foreground max-w-lg text-left md:text-right mt-6 md:mt-0 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We solve complex problems with elegant code, data-backed design, and proven marketing strategies. Explore our comprehensive suite of solutions below.
                    </motion.p>
                </div>

                {/* Categories & Cards */}
                <div className="space-y-24 mb-24">
                    {serviceCategories.map((category, catIdx) => (
                        <motion.section 
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-6 mb-10">
                                <div className="p-4 bg-primary/10 text-primary rounded-2xl border border-primary/20">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase text-foreground mb-2">
                                        {category.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Service Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.services.map((service, idx) => {
                                    const serviceId = service.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                    return (
                                        <div 
                                            key={idx} 
                                            id={serviceId}
                                            className="group bg-card border border-border/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full scroll-mt-32"
                                        >
                                            <div>
                                                <div className="mb-4">
                                                    <ChevronRight className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                                                </div>
                                                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                                                    {service}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                                                    Expert {service.toLowerCase()} services tailored to drive measurable results and operational excellence for your brand.
                                                </p>
                                            </div>
                                            
                                            <Link 
                                                href="/contact" 
                                                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors gap-2 mt-auto"
                                            >
                                                Know More 
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center shadow-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-6 tracking-tight">
                            Ready to <span className="text-primary">Transform</span> Your Business?
                        </h2>
                        <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
                            The market is crowded. To win, you need a partner who cares as much about your success as you do. Let's build something extraordinary together.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest px-10 py-6 text-sm transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/20">
                                Get a Free Consultation
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
