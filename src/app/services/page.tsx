"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, ShoppingBag, BarChart3, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    const services = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Custom Engineering",
            description: "We don't use templates. We build bespoke, high-performance software tailored to your exact operational needs. From complex SaaS platforms to reactive mobile apps, our code is architected for scale and speed.",
            features: ["Next.js & React Applications", "Native Mobile Apps (iOS/Android)", "Cloud Infrastructure (AWS/Vercel)", "API Development & Integration"],
        },
        {
            icon: <ShoppingBag className="w-8 h-8" />,
            title: "E-Commerce Acceleration",
            description: "Your store shouldn't just look good; it should sell. We combine psychological design principles with technical excellence to build Shopify and headless commerce experiences that maximize Average Order Value.",
            features: ["Custom Shopify Plus Development", "Headless Commerce Solutions", "Conversion Rate Optimization", "Payment Gateway Integration"],
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Growth & Performance",
            description: "Traffic is meaningless without conversion. Our data-driven marketing strategies are designed to cut through the noise, targeting high-intent users and turning them into loyal customers.",
            features: ["Technical SEO & Content Strategy", "Performance Marketing (Ads)", "User Behavior Analytics", "Marketing Automation"],
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Strategic Design",
            description: "We design for trust and retention. Every pixel serves a purpose. Our UI/UX process ensures that your digital product is not only beautiful but intuitive, accessible, and addictive.",
            features: ["User Interface (UI) Design", "User Experience (UX) Research", "Brand Identity & Systems", "Interactive Prototyping"],
        },
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-dashed border-border pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase text-foreground mb-2 tracking-tight">
                            Our <span className="text-primary">Mastery</span>
                        </h1>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            Precision Engineering • Strategic Growth • Digital Excellence
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-sm md:text-base text-muted-foreground max-w-lg text-right mt-6 md:mt-0 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We solve complex problems with elegant code and data-backed design. Our services are not commodities; they are competitive advantages for your business.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ServiceBlock key={index} service={service} index={index} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative overflow-hidden rounded-xl border border-dashed border-border bg-card p-8 md:p-12 text-center">
                    <div className="absolute inset-0 bg-primary/5 z-0" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-heading font-medium uppercase mb-4">
                            Stop Settling For <span className="text-primary">Average</span>
                        </h2>
                        <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                            The market is crowded. To win, you need a partner who cares as much about your success as you do. Let's build something extraordinary together.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full bg-foreground text-background hover:bg-primary hover:text-white font-bold uppercase tracking-widest px-8 py-4 text-sm transition-all duration-300 hover:scale-105">
                                Start A Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-dashed border-border/50 pb-8 last:border-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="md:w-1/3 flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/20">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-medium uppercase text-foreground mb-2">
                        {service.title}
                    </h3>
                </div>
                <div className="hidden md:block text-6xl font-heading font-bold text-muted/10 select-none">
                    0{index + 1}
                </div>
            </div>

            <div className="md:w-2/3">
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-6">
                    {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-transparent hover:border-primary/20 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs font-bold uppercase tracking-wide text-foreground/80">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
