"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AgencyPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-dashed border-border pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase text-foreground mb-2 tracking-tight">
                            We Are <span className="text-primary">DAVLabs</span>
                        </h1>
                        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                            The Gold Standard in Digital Engineering
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-base md:text-lg text-muted-foreground max-w-lg text-right mt-8 md:mt-0 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        In a market flooded with mediocrity, <strong className="text-foreground">DAVLabs</strong> stands as a beacon of excellence. We don't just build software; we craft digital legacies that outperform, outlast, and outshine the competition.
                    </motion.p>
                </div>

                {/* Why DAVLabs Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-border border-t border-dashed border-border" />
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Why We Are Better</span>
                        <div className="h-px flex-1 bg-border border-t border-dashed border-border" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Unmatched Performance"
                            description="While others rely on bloated templates, we architect high-performance, custom solutions. Our landing pages and apps are optimized for speed, ensuring you never lose a customer to loading times."
                        />
                        <FeatureCard
                            title="Enterprise-Grade Security"
                            description="Security isn't an afterthought; it's our foundation. We build robust, scalable web applications that protect your data and your reputation, giving you peace of mind."
                        />
                        <FeatureCard
                            title="Conversion-Driven Design"
                            description="We don't just design for aesthetics; we design for ROI. Our e-commerce stores and marketing campaigns are psychologically engineered to turn visitors into loyal paying customers."
                        />
                    </div>
                </div>

                {/* Expertise Breakdown */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-center mb-16">
                        Our Mastery Over The Market
                    </h2>
                    <div className="space-y-12">
                        <ExpertiseRow
                            title="Web & Mobile Development"
                            description="Most agencies give you a website. We give you a digital asset. Whether it's a complex SaaS platform or a native mobile app, our code is cleaner, faster, and more scalable than industry standards."
                            tags={["Next.js", "React Native", "Cloud Architecture"]}
                        />
                        <ExpertiseRow
                            title="E-Commerce Dominance"
                            description="We understand the psychology of selling. Our Shopify solutions aren't just stores; they are conversion machines. We optimize every pixel to maximize your Average Order Value."
                            tags={["Shopify Plus", "Conversion Rate Optimization", "UI/UX"]}
                        />
                        <ExpertiseRow
                            title="Strategic Growth"
                            description="Traffic is vanity; revenue is sanity. Our performance marketing strategies are built on deep data analysis, ensuring that we outperform generic agencies by targeting the right users at the right time."
                            tags={["SEO", "Performance Marketing", "Analytics"]}
                        />
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-border border-t border-dashed border-border" />
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Visionaries</span>
                        <div className="h-px flex-1 bg-border border-t border-dashed border-border" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                        {[
                            { name: "Vikas", image: "/assets/vikas.jpg" },
                            { name: "Alok", image: "/assets/alok.jpg" },
                            { name: "Deep", image: "/assets/deep.jpeg" },
                        ].map((member, index) => (
                            <TeamCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="group relative p-8 border border-dashed border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/10">
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold uppercase mb-4 group-hover:translate-x-1 transition-transform duration-500 text-primary">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors duration-500">
                    {description}
                </p>
            </div>
        </div>
    );
}

function ExpertiseRow({ title, description, tags }: { title: string, description: string, tags: string[] }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b border-border/50 pb-12 last:border-0">
            <div className="md:w-1/3">
                <h3 className="text-2xl font-heading font-bold uppercase text-primary">{title}</h3>
            </div>
            <div className="md:w-2/3">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-border bg-muted/50">
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TeamCard({ member, index }: { member: { name: string; image: string }; index: number }) {
    return (
        <motion.div
            className="group relative w-[200px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted relative mb-4 border border-dashed border-border group-hover:border-solid group-hover:border-primary/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                />

                {/* Floating Badge */}
                <div className="absolute bottom-2 left-2 z-20">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[8px] font-bold uppercase tracking-widest text-primary shadow-sm">
                        Founder
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-end border-b border-dashed border-border pb-2 group-hover:border-primary/30 transition-colors">
                <h3 className="text-lg font-heading font-bold uppercase text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h3>
                <span className="text-[10px] font-mono text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                    0{index + 1}
                </span>
            </div>
        </motion.div>
    );
}
