import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VerveAbout() {
    return (
        <section className="py-12 px-4 bg-background flex justify-center">
            <div className="container max-w-3xl">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-sm relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

                    <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-3 leading-tight">
                        Shaping The <span className="text-primary">Future</span>
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed font-light max-w-lg mx-auto">
                        DAVLabs is a collective of elite engineers and designers building high-performance digital infrastructure.
                    </p>

                    <Link
                        href="/agency"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 group"
                    >
                        Discover Our Agency
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
