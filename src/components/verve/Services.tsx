"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        id: "01",
        category: "Growth",
        title: "High-Conversion Landing Pages",
        description: "Award-winning designs engineered to turn visitors into customers. Optimized for speed and sales.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
    {
        id: "02",
        category: "Enterprise",
        title: "Custom Web Applications",
        description: "Tailored business solutions and SaaS platforms built for scale, performance, and complex workflows.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "03",
        category: "Mobile",
        title: "Native App Development",
        description: "Seamless iOS and Android experiences that keep users engaged and connected to your brand.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "04",
        category: "Essential",
        title: "Small Business Websites",
        description: "Fast, beautiful, and effective static sites to get your business online with a professional edge.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "05",
        category: "Commerce",
        title: "End-to-End Shopify Stores",
        description: "Complete e-commerce solutions. From store setup and design to custom features and scaling.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "06",
        category: "Marketing",
        title: "Performance Marketing & Social",
        description: "Google & FB Ads that convert. Strategic social media management to build your brand community.",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2606&auto=format&fit=crop",
    },
];

export function VerveServices() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex flex-col justify-center h-[45vh] md:h-[70vh] overflow-hidden border-b border-dashed border-border">
                <div className="container mx-auto px-4">
                    <div className="mb-4 md:mb-6 text-center">
                        <h2 className="text-xl md:text-3xl font-heading font-medium uppercase text-foreground leading-none tracking-tight mb-1">
                            Our <span className="text-primary">Expertise</span>
                        </h2>
                        <p className="text-xs text-muted-foreground max-w-md mx-auto">
                            Scroll to explore our services.
                        </p>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div style={{ x }} className="flex gap-4 w-max">
                            {services.map((service, index) => (
                                <ServiceCard key={index} service={service} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
    return (
        <motion.div
            className="group relative h-[260px] w-[200px] md:h-[360px] md:w-[280px] shrink-0 overflow-hidden rounded-xl border border-dashed border-border bg-card flex flex-col cursor-pointer"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
            {/* Image Section */}
            <div className="h-1/2 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <motion.div
                    className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-dashed border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                >
                    <ArrowUpRight className="w-4 h-4" />
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="h-1/2 w-full p-4 md:p-6 flex flex-col justify-between bg-card relative group-hover:bg-muted/5 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded border border-primary/20">
                            {service.category}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground/40">{service.id}</span>
                    </div>
                    <h3 className="text-sm md:text-lg font-heading font-medium uppercase text-foreground mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                    </h3>
                </div>

                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
}
