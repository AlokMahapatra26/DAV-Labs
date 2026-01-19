"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ToolsPage() {
    const tools = [
        {
            title: "Invoice & Billing",
            description: "A powerful tool to generate professional invoices and quotations instantly. Streamline your billing process with ease.",
            icon: <Calculator className="w-8 h-8" />,
            link: "https://iaqg.vercel.app",
            status: "Live",
            tag: "Finance"
        },
        // Future tools can be added here
    ];

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
                            Internal <span className="text-primary">Tools</span>
                        </h1>
                        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                            Utilities to Supercharge Your Workflow
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-base md:text-lg text-muted-foreground max-w-lg text-right mt-8 md:mt-0 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We build tools to solve our own problems. And then we share them with you. Explore our collection of utilities designed for efficiency.
                    </motion.p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, index) => (
                        <ToolCard key={index} tool={tool} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ToolCard({ tool, index }: { tool: any, index: number }) {
    return (
        <motion.div
            className="group relative p-8 border border-dashed border-border rounded-2xl bg-card hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                </div>
                <div className="flex gap-2">
                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-muted text-muted-foreground border border-border">
                        {tool.tag}
                    </span>
                    <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-green-500/10 text-green-500 border border-green-500/20">
                        {tool.status}
                    </span>
                </div>
            </div>

            <h3 className="text-2xl font-heading font-bold uppercase mb-3 group-hover:text-primary transition-colors">
                {tool.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {tool.description}
            </p>

            <Link href={tool.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="w-full rounded-lg bg-foreground text-background hover:bg-primary hover:text-white font-bold uppercase tracking-widest group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                    Launch Tool
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
        </motion.div>
    );
}
