import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VerveAbout() {
    return (
        <section className="py-16 bg-background border-b border-dashed border-border relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-4 leading-tight">
                        Shaping The <span className="text-primary">Future</span> <br />
                        Of Digital Experiences
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                        DAVLabs is a collective of elite engineers, designers, and strategists. We build high-performance digital infrastructure that drives growth and defines industries.
                    </p>

                    <Link href="/agency" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-primary transition-colors group">
                        Discover Our Agency
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </section>
    );
}
