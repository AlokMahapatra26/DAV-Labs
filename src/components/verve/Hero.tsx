import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PencilHighlight } from "@/components/ui/PencilHighlight";
import { FloatingPaths } from "@/components/kokonutui/background-paths";

export function VerveHero() {
    return (
        <section className="w-full flex items-center bg-background pt-32 pb-12 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <FloatingPaths position={1} />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase tracking-tight mb-6 leading-tight">
                            The Only <br />
                            <PencilHighlight className="italic text-foreground">Thing</PencilHighlight> <br />
                            You Need
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 font-light leading-relaxed mx-auto lg:mx-0">
                            To grow your business. We are the singular force that combines elite engineering, design, and strategy to build the infrastructure of your success.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start">
                            <Link href="/contact">
                                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm px-8 py-6 uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25">
                                    Start A Project
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Video Card */}
                    <div className="relative h-64 lg:h-[50vh] w-full rounded-3xl overflow-hidden border border-border bg-card shadow-2xl z-10">
                        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay for depth */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover scale-105"
                        >
                            <source src="https://uw0yyl38c7.ufs.sh/f/n5orhcmiF8j9bgY6fofFyqRIEJsYSjUNXzHevViL3frMoBOk" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
