"use client";

import { motion } from "framer-motion";
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
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium uppercase text-foreground leading-none tracking-tight mb-2">
                        Our <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Comprehensive digital solutions for modern businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
    return (
        <motion.div
            className="group relative h-[360px] w-full overflow-hidden rounded-xl border border-dashed border-border bg-card flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
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
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-dashed border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    whileHover={{ rotate: 45 }}
                >
                    <ArrowUpRight className="w-4 h-4" />
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="h-1/2 w-full p-6 flex flex-col justify-between bg-card relative group-hover:bg-muted/5 transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div>
                    <div className="flex justify-between items-center mb-3">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 rounded border border-primary/20">
                            {service.category}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground/40">{service.id}</span>
                    </div>
                    <h3 className="text-xl font-heading font-medium uppercase text-foreground mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {service.title}
                    </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
}
