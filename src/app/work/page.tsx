import { Briefcase } from "lucide-react";

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden pt-20">
            {/* Background Decoration */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-dashed border-primary/30 flex items-center justify-center -rotate-3">
                            <Briefcase className="w-10 h-10 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase mb-4 tracking-tight">
                        Our <span className="text-primary">Work</span>
                    </h1>

                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />

                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-4">
                        We are currently updating our portfolio with our latest enterprise projects.
                    </p>

                    <p className="text-sm font-mono text-primary/60 uppercase tracking-[0.2em] animate-pulse">
                        Coming Soon
                    </p>
                </div>
            </div>
        </div>
    );
}
