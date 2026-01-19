"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What makes DAVLabs different from other agencies?",
        answer: "We aren't just a service provider; we are a growth partner. While others rely on templates and generic strategies, we build custom, high-performance digital infrastructure engineered to outperform your competition. We combine elite engineering with psychological design to drive real revenue."
    },
    {
        question: "Do you work with early-stage startups or established enterprises?",
        answer: "We work with ambitious brands of all sizes. Whether you're a startup looking to disrupt the market or an enterprise needing to modernize legacy systems, our approach is scalable. We look for partners who value quality and are serious about growth."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Speed is a feature, but we never rush quality. A typical high-performance website takes 4-8 weeks, while complex web applications can take 3-6 months. We provide a detailed roadmap before we start so you always know what to expect."
    },
    {
        question: "How does your pricing model work?",
        answer: "We don't sell hours; we sell value. Our pricing is project-based, ensuring you know exactly what you're paying for. We focus on ROI, building assets that pay for themselves through increased conversion and efficiency."
    },
    {
        question: "Do you provide support after launch?",
        answer: "Absolutely. Digital products need to evolve. We offer ongoing partnership packages to ensure your platform remains secure, fast, and ahead of the curve as your business grows."
    }
];

export function VerveFAQ() {
    return (
        <section className="py-16 bg-background border-b border-dashed border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Header */}
                    <div className="lg:col-span-4">
                        <h2 className="text-2xl md:text-4xl font-heading font-medium uppercase mb-4 leading-tight">
                            Common <br /> <span className="text-primary">Questions</span>
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                            Everything you need to know about partnering with DAVLabs. Can't find the answer you're looking for? <a href="/contact" className="text-foreground underline decoration-dashed hover:text-primary transition-colors">Contact us directly.</a>
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="lg:col-span-8">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }: { faq: { question: string, answer: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-dashed border-border rounded-lg overflow-hidden bg-card/50 hover:bg-card transition-colors duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left"
            >
                <span className="text-base font-heading font-medium uppercase text-foreground pr-8">
                    {faq.question}
                </span>
                <span className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed font-light">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
